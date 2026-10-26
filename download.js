/* 三端下载卡片：删脚注、把条形码换成「格式 · 体积 / 版本号」、按钮换成
   「前往下载 + 国内加速下载」两条路，点开站内小窗当场列出最新版的安装包。
   逻辑照搬旧站（miniflix/js/app.js 的 fillRelease / initMirror），几个坑别踩：

   1) 数据源优先级：**同站清单 → gh-proxy 代理的 API → 直连 API**
      清单是跟着站点一起发的 data/releases.json，同源、无限流、秒开。
      为什么不 API 打头阵：未认证的 GitHub API 每 IP 每小时只有 60 次，
      访客共享出口 IP（公司/校园/运营商 NAT）一打就满；而且做加速本来
      就是为了绕开国内连不上 GitHub —— 弹窗自己再去直连 api.github.com 说不通。
   2) gh-proxy **只代理文件/JSON、不代理网页**：代理 Release 页面返回 403
      「Web page content is not allowed」。所以镜像链接只能是
      gh-proxy 前缀 + 原始**文件** URL，绝不能是页面。
   3) 每个 <a> 上始终留一个真实可用的 href（发布页 / 镜像解析页）：
      JS 没跑、API 挂了、Ctrl+点击想新开标签，都不会变成死按钮。
   4) 这段跑在水合之后，改的是卡片 DOM。本站已知有 React #418，
      水合失败时整树会重渲染一次、改动被还原，所以打完标记再复查几轮。 */
(function () {
  var DOC = document;
  var PROXY = 'https://gh-proxy.com/';
  var TTL = 10 * 60 * 1000;
  var MANIFEST = 'data/releases.json';

  /* slug 后缀 → 展示用文案。kind 用来挑「主包」（PC 那个 release 里
     exe 和 zip 都有，卡片上给的是 zip 的体积）。 */
  var ENDS = {
    phone: { slug: 'duanjuzhijia-down-phone', name: '手机版', kind: 'APK', ext: '.apk' },
    pc: { slug: 'duanjuzhijia-down-pc', name: '电脑版', kind: 'ZIP', ext: '.zip' },
    tv: { slug: 'duanjuzhijia-down-tv', name: 'TV 盒子版', kind: 'APK', ext: '.apk' }
  };
  var BY_SLUG = {};
  for (var k in ENDS) BY_SLUG[ENDS[k].slug] = ENDS[k];

  var BTN = 'display:inline-flex;align-items:center;justify-content:center;height:32px;' +
    'padding:0 14px;border-radius:999px;background:#f2f2f5;color:#0b0b0e;' +
    'font-size:12.5px;font-weight:600;text-decoration:none;white-space:nowrap';
  var BTN2 = 'display:inline-flex;align-items:center;justify-content:center;height:32px;' +
    'padding:0 12px;border-radius:999px;background:rgba(255,255,255,.1);color:inherit;' +
    'font-size:12.5px;text-decoration:none;white-space:nowrap';

  // ------------------------------------------------------------ 小工具
  function sz(n) {
    if (!n) return '';
    return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB'
      : Math.max(1, Math.round(n / 1024)) + ' KB';
  }
  function esc(v) {
    return String(v).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function withTimeout(p, ms) {
    return new Promise(function (res) {
      var done = false;
      var t = setTimeout(function () { if (!done) { done = true; res(null); } }, ms);
      p.then(function (v) { if (!done) { done = true; clearTimeout(t); res(v); } })
        .catch(function () { if (!done) { done = true; clearTimeout(t); res(null); } });
    });
  }
  function jget(url) {
    return fetch(url, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }
  function cacheGet(key) {
    try {
      var o = JSON.parse(sessionStorage.getItem('wbdl_' + key) || 'null');
      return o && Date.now() - o.t < TTL ? o.v : null;
    } catch (e) { return null; }
  }
  function cacheSet(key, v) {
    try {
      sessionStorage.setItem('wbdl_' + key, JSON.stringify({ t: Date.now(), v: v }));
    } catch (e) { }
  }

  /* 三种来源统一成 {tag, assets:[{name,size,url}]}；拿不到资产就当没有 */
  function normList(list) {
    if (!list || !list.length) return null;
    for (var i = 0; i < list.length; i++) {
      var r = list[i];
      var raw = r.assets || [];
      var assets = [];
      for (var j = 0; j < raw.length; j++) {
        var a = raw[j];
        var url = a.browser_download_url || a.downloadUrl || a.url || '';
        if (!url) continue;
        assets.push({
          name: a.name || decodeURIComponent(url.split('/').pop() || ''),
          size: a.size || 0,
          url: url
        });
      }
      // TV 是按需发布，最新那个 release 可能一个包都没有 —— 往回找最近一个有资产的
      if (assets.length) return { tag: r.tag_name || r.tag || '', assets: assets };
    }
    return null;
  }

  function fromManifest(meta) {
    return jget(MANIFEST).then(function (d) {
      var e = d && d.ends && d.ends[meta.slug.slice('duanjuzhijia-down-'.length)];
      if (!e || !e.assets || !e.assets.length) return null;
      return {
        tag: e.tag || '',
        assets: e.assets.map(function (x) {
          return { name: x.name, size: x.size || 0, url: x.url };
        })
      };
    });
  }

  function latest(meta) {
    var hit = cacheGet(meta.slug);
    if (hit) return Promise.resolve(hit);
    return withTimeout(fromManifest(meta), 4000)
      .then(function (m) { return m || apiLatest(meta); })
      .then(function (r) { if (r) cacheSet(meta.slug, r); return r; });
  }

  /* 清单是跟着站点发出去的静态快照，发一个新版本它就过期了。
     所以清单只负责「先把卡片画出来」（同源、秒开），
     随后再静默跟 GitHub 核一次 tag：不一致就拿新的覆盖缓存 + 重画。
     每端每会话只核一次；核不到就算了，绝不打断下载。 */
  function apiLatest(meta) {
    var base = 'https://api.github.com/repos/jackherex/' + meta.slug + '/releases';
    /* ⚠️ 这两个地址都不能带查询串：实测 gh-proxy 转发 `?per_page=6` 会直接 403，
       去掉查询参数就正常 200。所以先打 /releases/latest（小，约 7 KB），
       它没有资产（TV 按需发布时常见）再退到 /releases 整份列表往回找。 */
    function tryBase(prefix) {
      return withTimeout(jget(prefix + base + '/latest'), 6000)
        .then(function (r) { return normList(r ? [r] : null); })
        .then(function (r) {
          return r || withTimeout(jget(prefix + base), 8000).then(normList);
        });
    }
    return tryBase(PROXY).then(function (r) { return r || tryBase(''); });
  }

  var verified = {};
  /* 静默跟 GitHub 核一次 tag。
     force=true 时忽略「本会话已核过」—— 点按钮走这条路，保证**每次点击都现查**；
     卡片上那行版本号用默认（每端每会话一次），避免每开一个页面就打三次 API。
     核不到（限流/不通）就什么都不做，继续用清单里的数据，绝不打断下载。 */
  function verify(meta, shownTag, cb, force, onDone) {
    if (!force) {
      if (verified[meta.slug]) return;
      verified[meta.slug] = 1;
    }
    apiLatest(meta).then(function (rel) {
      if (rel) {
        cacheSet(meta.slug, rel);
        if (!shownTag || rel.tag !== shownTag) cb(rel);
      }
      if (onDone) onDone();
    });
  }

  /* 卡片上那一行：主包体积。PC 那个 release 同时有 exe 和 zip，取 zip。 */
  function mainAsset(meta, rel) {
    if (!rel || !rel.assets.length) return null;
    for (var i = 0; i < rel.assets.length; i++) {
      var n = rel.assets[i].name.toLowerCase();
      if (n.slice(-meta.ext.length) === meta.ext) return rel.assets[i];
    }
    return rel.assets[0];
  }

  // ------------------------------------------------------------ 弹窗
  var dlg = null, bodyEl = null, tagEl = null, subEl = null;
  var curMeta = null, curRel = null;

  function ensureDlg() {
    if (dlg && !dlg.isConnected) dlg = null;   // 被整树重渲染带走就重造
    if (dlg) return dlg;
    dlg = DOC.createElement('dialog');
    dlg.setAttribute('aria-label', '下载');
    // Tailwind 的 preflight 里 `*{margin:0}` 会把 <dialog> 的 UA 居中样式
    // （inset:0 + margin:auto）一起抹掉，不显式写回来窗口就贴在左上角。
    dlg.style.cssText = 'position:fixed;inset:0;margin:auto;padding:0;border:0;' +
      'background:transparent;width:min(92vw,460px);height:fit-content;max-height:86vh;' +
      'overflow:visible;color:inherit;';
    dlg.innerHTML =
      '<style>dialog[aria-label="下载"]::backdrop{background:rgba(6,6,10,.62);' +
      'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}</style>' +
      '<div style="border-radius:22px;background:var(--surface,#141418);' +
      'color:var(--foreground,#f2f2f5);box-shadow:0 32px 90px rgba(0,0,0,.6),' +
      '0 0 0 1px rgba(255,255,255,.09);overflow:hidden;' +
      'font:400 14px/1.5 \'PingFang SC\',\'Microsoft YaHei\',\'Noto Sans SC\',system-ui,sans-serif">' +
      '<div style="display:flex;align-items:flex-start;gap:12px;padding:20px 20px 12px">' +
      '<div style="flex:1;min-width:0">' +
      '<div data-t style="font-size:16px;font-weight:600;letter-spacing:.02em"></div>' +
      '<div data-sub style="margin-top:5px;font-size:12px;opacity:.55"></div>' +
      '</div>' +
      '<button data-x type="button" aria-label="关闭" style="flex:0 0 auto;width:30px;' +
      'height:30px;border:0;border-radius:999px;background:rgba(255,255,255,.09);' +
      'color:inherit;cursor:pointer;font-size:15px;line-height:1;display:flex;' +
      'align-items:center;justify-content:center">&#10005;</button></div>' +
      '<div data-body style="padding:0 20px 4px;max-height:min(48vh,340px);overflow:auto;' +
      'overscroll-behavior:contain"></div>' +
      '<div style="padding:14px 20px 18px;font-size:11.5px;line-height:1.65;opacity:.45">' +
      '加速下载走第三方镜像 gh-proxy.com，只转发文件、不改包；两条路给的是同一个安装包。' +
      '</div></div>';
    DOC.body.appendChild(dlg);
    bodyEl = dlg.querySelector('[data-body]');
    tagEl = dlg.querySelector('[data-t]');
    subEl = dlg.querySelector('[data-sub]');
    dlg.querySelector('[data-x]').addEventListener('click', function () { dlg.close(); });
    // 点遮罩关窗：dialog 元素本身铺满视口，命中的 target 就是它
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    return dlg;
  }

  function row(a, prefer) {
    var origin = a.url, mirror = PROXY + origin;
    var b1, b2;
    if (prefer === 'mirror') {
      b1 = '<a href="' + esc(mirror) + '" target="_blank" rel="noopener" style="' + BTN + '">加速下载</a>';
      b2 = '<a href="' + esc(origin) + '" target="_blank" rel="noopener" style="' + BTN2 + '">原站</a>';
    } else {
      b1 = '<a href="' + esc(origin) + '" target="_blank" rel="noopener" style="' + BTN + '">原站下载</a>';
      b2 = '<a href="' + esc(mirror) + '" target="_blank" rel="noopener" style="' + BTN2 + '">加速</a>';
    }
    return '<div style="display:flex;align-items:center;gap:12px;padding:12px 0;' +
      'border-top:1px solid rgba(127,127,127,.18)">' +
      '<div style="flex:1;min-width:0">' +
      '<div style="font-size:12.5px;line-height:1.35;word-break:break-all">' + esc(a.name) + '</div>' +
      '<div style="margin-top:3px;font-size:11px;opacity:.42;font-variant-numeric:tabular-nums">' +
      sz(a.size) + '</div></div>' +
      '<div style="flex:0 0 auto;display:flex;gap:7px">' + b1 + b2 + '</div></div>';
  }

  function fallback(meta, prefer) {
    var repo = 'https://github.com/jackherex/' + meta.slug;
    var page = repo + '/releases/latest';
    var mirrorPage = PROXY + '#' + repo;
    var first = prefer === 'mirror' ? mirrorPage : page;
    var second = prefer === 'mirror' ? page : mirrorPage;
    bodyEl.innerHTML =
      '<div style="padding:6px 0 10px;font-size:12.5px;line-height:1.7;opacity:.7">' +
      '没取到安装包清单（清单没读到，GitHub 接口也没响应 —— 限流或网络不通）。' +
      '这两条路照样能下：</div>' +
      '<div style="display:flex;flex-direction:column;gap:9px;padding:2px 0 14px">' +
      '<a href="' + first + '" target="_blank" rel="noopener" style="' + BTN + '">' +
      (prefer === 'mirror' ? '打开镜像页（国内）' : '打开发布页') + '</a>' +
      '<a href="' + second + '" target="_blank" rel="noopener" style="' + BTN2 + '">' +
      (prefer === 'mirror' ? '打开发布页（原站）' : '打开镜像页（国内）') + '</a></div>';
  }

  function fill(meta, rel, prefer) {
    curMeta = meta;
    curRel = rel;
    tagEl.textContent = meta.name + (rel.tag ? ' · ' + rel.tag : '');
    subEl.textContent = '共 ' + rel.assets.length + ' 个安装包，挑一个下载：';
    bodyEl.innerHTML = rel.assets.map(function (a) { return row(a, prefer); }).join('');
  }

  function open(meta, prefer) {
    if (!ensureDlg().showModal) {          // 极老的浏览器：直接跳发布页
      location.href = 'https://github.com/jackherex/' + meta.slug + '/releases/latest';
      return;
    }
    dlg.setAttribute('data-slug', meta.slug);
    curMeta = null;
    curRel = null;
    tagEl.textContent = meta.name;
    subEl.textContent = '正在获取最新版…';
    bodyEl.innerHTML = '<div style="padding:26px 0;text-align:center;font-size:12.5px;' +
      'opacity:.45">读取中…</div>';
    if (!dlg.open) dlg.showModal();
    latest(meta).then(function (rel) {
      if (!dlg.open) return;               // 用户已经关掉了
      if (!rel) { tagEl.textContent = meta.name; subEl.textContent = '取不到最新版'; fallback(meta, prefer); return; }
      fill(meta, rel, prefer);
      /* 先把清单里的画出来（秒开），**然后每次都去 GitHub 现查一遍**。
         这一步不受 sessionStorage 的 10 分钟缓存限制，也不受「本会话已核过」限制：
         用户在页面上挂了一整天、中途发了新版，再点一次也能拿到新的。 */
      subEl.textContent = '正在核对最新版…';
      verify(meta, rel.tag, function (fresh) {
        if (dlg.open && curMeta === meta) fill(meta, fresh, prefer);
      }, true, function () {
        if (dlg.open && curMeta === meta && curRel && subEl.textContent === '正在核对最新版…') {
          subEl.textContent = '共 ' + curRel.assets.length + ' 个安装包，挑一个下载：';
        }
      });
    });
  }

  // ------------------------------------------------------- 卡片改造
  /* 条形码那一块 → 「APK · 30.1 MB」+ 版本号，就是旧站 dev__meta 那行的内容。
     注意：三张卡的条形码宽度不一样（手机 95、电脑 99、电视 102 —— 条数不同），
     所以不能按 viewBox 去认，按「foot 的直接子元素里的 aria-hidden span」认。 */
  function paintInfo(el, meta, rel) {
    if (!el) return;
    var l1 = el.firstChild, l2 = el.lastChild;
    if (!rel) { l1.textContent = meta.kind; l2.textContent = ''; return; }
    var a = mainAsset(meta, rel);
    // 卡片上只给主包体积；有几个包留给弹窗里说，挤在这一行会撑爆卡片
    l1.textContent = meta.kind + (a && a.size ? ' · ' + sz(a.size) : '');
    l2.textContent = rel.tag || '';
  }

  /* 卡片顶部那块「体积 / 版本」是模板原来的价目表（¥12.90 / ¥29.90 / ¥49.90），
     content.py 只换了字面量，数值一直停在 30.1 MB / 90.7 MB / 按需 + v2.0.0，
     和真实安装包对不上（34.2 / 117.3 / 30.5，tag 也各不相同）。
     这里按真实数据重写，写法沿用模板的两段式（大号主数字 + 小号单位）。 */
  function shortVer(tag) {
    var m = String(tag || '').match(/(\d+\.\d+\.\d+)/);
    return m ? m[1] : '';
  }
  function setBig(p, head, tail) {
    var a = p.children[0], b = p.children[1];
    if (a && b) { a.textContent = head; b.textContent = tail || ''; }
    else p.textContent = head + (tail || '');
  }
  function paintStats(card, meta, rel) {
    if (!card || !rel) return;
    var a = mainAsset(meta, rel);
    var ps = card.querySelectorAll('p');
    for (var i = 0; i < ps.length; i++) {
      var label = (ps[i].textContent || '').trim();
      if (label !== '体积' && label !== '版本') continue;
      var val = ps[i].nextElementSibling;
      if (!val) continue;
      if (label === '体积') {
        // 体积那格是「大号整数 + 小号单位」两个 span，保持排版
        if (!a || !a.size || val.children.length < 2) continue;
        var s = sz(a.size);                       // "34.2 MB"
        var dot = s.indexOf('.');
        setBig(val, dot < 0 ? s.replace(/\s.*$/, '') : s.slice(0, dot),
          dot < 0 ? s.replace(/^\S+/, '') : s.slice(dot));
      } else {
        // 版本那格是纯文本（原模板是 "1024 GB" 被拆成 v2.0.0 + 空 GB）
        var v = shortVer(rel.tag);
        if (v) val.textContent = 'v' + v;
      }
    }
  }

  function upgrade() {
    var anchors = [].slice.call(DOC.querySelectorAll('a[href*="duanjuzhijia-down-"]'));
    var touched = 0;

    anchors.forEach(function (a) {
      // 弹窗里那些下载链接也带这个域名，别回头再包一层
      if (a.closest('dialog')) return;
      if (a.closest('[data-wb-dl]')) return;    // 这块已经改过了
      var href = a.getAttribute('href') || '';
      var m = href.match(/duanjuzhijia-down-(phone|pc|tv)/);
      if (!m) return;
      var meta = ENDS[m[1]];
      var foot = a.parentElement;
      if (!meta || !foot) return;

      // 1) 脚注整块删掉（「1 完全免费」这类说明，太长）
      var card = a.closest('li, article');
      if (card) {
        [].slice.call(card.querySelectorAll('ol[aria-label="说明"]')).forEach(function (o) {
          if (o.parentNode) o.parentNode.removeChild(o);
        });
      }

      // 2) 条形码 + LITE 标签 → 格式/体积 + 版本号
      var info = DOC.createElement('div');
      info.setAttribute('data-wb-info', meta.slug);
      info.style.cssText = 'min-width:0;flex:1 1 auto;overflow:hidden;' +
        'display:flex;flex-direction:column;gap:3px';
      var l1 = DOC.createElement('span');
      l1.style.cssText = 'font-size:11.5px;line-height:1.15;opacity:.6;white-space:nowrap;' +
        'overflow:hidden;text-overflow:ellipsis';
      var l2 = DOC.createElement('span');
      l2.style.cssText = 'font-size:10.5px;line-height:1.15;opacity:.34;white-space:nowrap;' +
        'font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;max-width:130px';
      info.appendChild(l1);
      info.appendChild(l2);
      l1.textContent = meta.kind;
      l2.textContent = '检测最新版…';
      // 条形码是 foot 的第一个直接子元素（span[aria-hidden] 里裹着 svg + LITE）
      var barBox = foot.querySelector(':scope > span[aria-hidden="true"]');
      if (!barBox) {
        var anySvg = foot.querySelector('svg');
        if (anySvg && anySvg.parentElement !== foot) barBox = anySvg.parentElement;
      }
      if (barBox && barBox.parentNode) barBox.parentNode.replaceChild(info, barBox);
      else foot.insertBefore(info, foot.firstChild);

      // 3) 前往下载 → 前往下载 + 国内加速下载
      var wrap = DOC.createElement('div');
      wrap.style.cssText = 'flex:0 0 auto;display:flex;align-items:center;gap:8px';
      var main = DOC.createElement('a');
      main.href = href;                      // 保留真实 href：Ctrl+点击照样能开
      main.target = '_blank';
      main.rel = 'noopener';
      main.className = 'button button--md button--primary rounded-full bg-ink px-4 text-paper hover:bg-ink/90';
      main.textContent = '前往下载';
      main.setAttribute('data-wb-main', meta.slug);
      var mir = DOC.createElement('a');
      mir.href = PROXY + '#https://github.com/jackherex/' + meta.slug;
      mir.target = '_blank';
      mir.rel = 'noopener';
      mir.style.cssText = 'font-size:11px;line-height:1.25;opacity:.6;text-decoration:none;' +
        'white-space:nowrap;border-bottom:1px dashed rgba(127,127,127,.45);padding-bottom:1px';
      mir.textContent = '国内加速下载';
      mir.setAttribute('data-wb-mirror', meta.slug);
      wrap.appendChild(main);
      wrap.appendChild(mir);
      a.parentNode.replaceChild(wrap, a);

      // 4) 两个入口弹同一个窗，只是默认先给哪条链接不同
      main.addEventListener('click', function (e) { e.preventDefault(); open(meta, 'origin'); });
      mir.addEventListener('click', function (e) { e.preventDefault(); open(meta, 'mirror'); });

      foot.setAttribute('data-wb-dl', meta.slug);
      touched++;

      // 5) 后台补真实版本号；失败就停在「检测最新版…」，点按钮时还有一次机会
      latest(meta).then(function (rel) {
        paintInfo(info, meta, rel);
        paintStats(card, meta, rel);
        verify(meta, rel && rel.tag, function (fresh) {
          paintInfo(info, meta, fresh);
          paintStats(card, meta, fresh);
        });
      });
    });

    return touched;
  }

  // 水合会整树重渲染一次（本站已知 #418），改完的 DOM 可能被还原 → 复查几轮
  var STYLE_ID = 'wb-dl-style';
  function ensureStyle() {
    if (DOC.getElementById(STYLE_ID)) return;
    var st = DOC.createElement('style');
    st.id = STYLE_ID;
    /* 窄屏（手机 390px 时卡片内宽只有 253px）两个入口加信息行会挤，
       所以把版本号收起来、入口字号和内边距各收一档 —— 只留「格式 · 体积」，
       和旧站那张卡一致。 */
    st.textContent =
      '[data-wb-dl]{gap:10px}' +
      '@media (max-width:430px){' +
      '[data-wb-info]>span:last-child{display:none}' +
      '[data-wb-mirror]{font-size:10px}' +
      '[data-wb-dl] [data-wb-main]{padding-left:12px;padding-right:12px}' +
      '}';
    DOC.body.appendChild(st);
  }

  /* 主屏图标。head 里 icon-192 / apple-touch-icon 这两行是构建时注入的，
     不是 React 渲染出来的，所以水合时会被 React 的 head 管理清掉
     （实测：解析 head 时有 3 个 link，12 秒后只剩 React 自己那个 icon.svg）。
     favicon 不受影响 —— 浏览器在解析 head 的那一刻就已经把图标取走了；
     受影响的是「添加到主屏幕」，iOS/Android 是在页面稳定之后才去读 head 的。
     所以水合完补一次，再挂个 observer 兜底（补完就不再 append，不会打转）。 */
  var HEAD_LINKS = [
    { rel: 'icon', href: 'icon-192.png', sizes: '192x192', type: 'image/png' },
    { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }
  ];
  function ensureIcons() {
    var head = DOC.head;
    if (!head) return;
    for (var i = 0; i < HEAD_LINKS.length; i++) {
      var d = HEAD_LINKS[i];
      if (head.querySelector('link[rel="' + d.rel + '"][href="' + d.href + '"]')) continue;
      var l = DOC.createElement('link');
      for (var k in d) l.setAttribute(k, d[k]);
      head.appendChild(l);
    }
  }

  function run() {
    ensureStyle();
    ensureIcons();
    if (window.MutationObserver) {
      new MutationObserver(ensureIcons).observe(DOC.head, { childList: true });
    }
    upgrade();
    var n = 0;
    var iv = setInterval(function () {
      upgrade();
      if (++n >= 8) clearInterval(iv);
    }, 700);
  }

  if (DOC.readyState === 'complete') setTimeout(run, 300);
  else window.addEventListener('load', function () { setTimeout(run, 300); }, { once: true });
})();
