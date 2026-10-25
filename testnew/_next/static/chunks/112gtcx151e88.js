(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,817355,e=>{"use strict";var t=e.i(499207);let r=(0,e.i(802101).tv)({slots:{base:"accordion",body:"accordion__body",bodyInner:"accordion__body-inner",heading:"accordion__heading",indicator:"accordion__indicator",item:"accordion__item",panel:"accordion__panel",trigger:"accordion__trigger"},variants:{variant:{default:{},surface:{base:"accordion--surface"}}}});var a=e.i(571451),i=e.i(715866),o=e.i(787013),n=e.i(117418),l=e.i(26006),s=e.i(854357),u=e.i(310273),c=e.i(850328),f=e.i(494316),d=e.i(886453),m=e.i(290829),h=e.i(236325),p=e.i(667787);let v=(0,a.createContext)(null),x=(0,a.forwardRef)(function(e,t){let r=function(e){let{allowsMultipleExpanded:t=!1,isDisabled:r=!1}=e,[i,o]=(0,f.useControlledState)((0,a.useMemo)(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),(0,a.useMemo)(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return(0,a.useEffect)(()=>{if(!t&&i.size>1){let e=i.values().next().value;null!=e&&o(new Set([e]))}}),{allowsMultipleExpanded:t,isDisabled:r,expandedKeys:i,setExpandedKeys:o,toggleKey(e){let r;t?(r=new Set(i)).has(e)?r.delete(e):r.add(e):r=new Set(i.has(e)?[]:[e]),o(r)}}}(e),i=(0,o.useRenderProps)({...e,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:r.isDisabled,state:r}}),n=(0,d.filterDOMProps)(e,{global:!0});return a.default.createElement(o.dom.div,{...n,...i,ref:t,"data-disabled":e.isDisabled||void 0},a.default.createElement(v.Provider,{value:r},i.children))}),g=(0,a.createContext)(null),b=(0,a.createContext)(null),A=(0,a.createContext)(null),E=(0,a.forwardRef)(function(e,t){[e,t]=(0,o.useContextProps)(e,t,g);let r=(0,a.useContext)(v),{id:h,...x}=e,E=(0,l.useId)();h||=E;let T=r?r.expandedKeys.has(h):e.isExpanded,y=function(e){let[t,r]=(0,f.useControlledState)(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange),i=(0,a.useCallback)(()=>{r(!0)},[r]),o=(0,a.useCallback)(()=>{r(!1)},[r]),n=(0,a.useCallback)(()=>{r(!t)},[r,t]);return{isExpanded:t,setExpanded:r,expand:i,collapse:o,toggle:n}}({...e,isExpanded:T,onExpandedChange(t){r&&r.toggleKey(h),e.onExpandedChange?.(t)}}),R=a.default.useRef(null),_=e.isDisabled||r?.isDisabled||!1,{buttonProps:S,panelProps:w}=function(e,t,r){let{isDisabled:i}=e,o=(0,l.useId)(),f=(0,l.useId)(),d=(0,s.useIsSSR)(),m=(0,a.useRef)(null),h=(0,a.useCallback)(()=>{m.current=requestAnimationFrame(()=>{r.current&&r.current.setAttribute("hidden","until-found")}),(0,c.flushSync)(()=>{t.toggle()})},[r,t]);(0,n.useEvent)(r,"beforematch",h);let p=(0,a.useRef)(null);return(0,u.useLayoutEffect)(()=>{if(m.current&&cancelAnimationFrame(m.current),r.current&&!d){let e=r.current;null==p.current||"function"!=typeof e.getAnimations?t.isExpanded?(e.removeAttribute("hidden"),e.style.setProperty("--disclosure-panel-width","auto"),e.style.setProperty("--disclosure-panel-height","auto")):(e.setAttribute("hidden","until-found"),e.style.setProperty("--disclosure-panel-width","0px"),e.style.setProperty("--disclosure-panel-height","0px")):t.isExpanded!==p.current&&(t.isExpanded?(e.removeAttribute("hidden"),e.style.setProperty("--disclosure-panel-width",e.scrollWidth+"px"),e.style.setProperty("--disclosure-panel-height",e.scrollHeight+"px"),Promise.all(e.getAnimations().map(e=>e.finished)).then(()=>{e.style.setProperty("--disclosure-panel-width","auto"),e.style.setProperty("--disclosure-panel-height","auto")}).catch(()=>{})):(e.style.setProperty("--disclosure-panel-width",e.scrollWidth+"px"),e.style.setProperty("--disclosure-panel-height",e.scrollHeight+"px"),window.getComputedStyle(e).height,e.style.setProperty("--disclosure-panel-width","0px"),e.style.setProperty("--disclosure-panel-height","0px"),Promise.all(e.getAnimations().map(e=>e.finished)).then(()=>e.setAttribute("hidden","until-found")).catch(()=>{}))),p.current=t.isExpanded}},[i,r,t.isExpanded,d]),(0,a.useEffect)(()=>()=>{m.current&&cancelAnimationFrame(m.current)},[]),{buttonProps:{id:o,"aria-expanded":t.isExpanded,"aria-controls":f,onPress:e=>{i||"keyboard"===e.pointerType||t.toggle()},isDisabled:i,onPressStart(e){"keyboard"!==e.pointerType||i||t.toggle()}},panelProps:{id:f,role:"group","aria-labelledby":o,"aria-hidden":!t.isExpanded,hidden:d?!t.isExpanded:void 0}}}({...e,isExpanded:T,isDisabled:_},y,R),{isFocusVisible:F,focusProps:P}=(0,p.useFocusRing)({within:!0}),M=(0,o.useRenderProps)({...e,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:y.isExpanded,isDisabled:_,isFocusVisibleWithin:F,state:y}}),L=(0,d.filterDOMProps)(x,{global:!0});return a.default.createElement(o.Provider,{values:[[i.ButtonContext,{slots:{[o.DEFAULT_SLOT]:{},trigger:S}}],[A,{panelProps:w,panelRef:R}],[b,y]]},a.default.createElement(o.dom.div,{...(0,m.mergeProps)(L,M,P),ref:t,"data-expanded":y.isExpanded||void 0,"data-disabled":_||void 0,"data-focus-visible-within":F||void 0},M.children))}),T=(0,a.forwardRef)(function(e,t){let{role:r="group"}=e,{panelProps:n,panelRef:l}=(0,a.useContext)(A),{isFocusVisible:s,focusProps:u}=(0,p.useFocusRing)({within:!0}),c=(0,o.useRenderProps)({...e,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:s}}),f=(0,d.filterDOMProps)(e,{global:!0,labelable:!0});return a.default.createElement(o.dom.div,{...(0,m.mergeProps)(f,c,n,u),ref:(0,h.mergeRefs)(t,l),role:r,"data-focus-visible-within":s||void 0},a.default.createElement(o.Provider,{values:[[i.ButtonContext,null]]},e.children))});var y=e.i(975146),R=e.i(643008),_=e.i(922453),S=e.i(427959),w=e.i(106571),F=e.i(721235);let P=(0,a.createContext)({}),M={variant:"default"},L=({children:e,className:i,hideSeparator:o=!1,variant:n,...l})=>{let s=a.default.useMemo(()=>r({variant:n}),[n]),u=(0,t.jsx)(x,{className:(0,_.composeTwRenderProps)(i,s.base()),"data-slot":"accordion",...l,children:r=>(0,t.jsx)(t.Fragment,{children:"function"==typeof e?e(r):e})}),c=a.default.useMemo(()=>({slots:s,hideSeparator:o}),[s,o]);return(0,t.jsx)(P,{value:c,children:"surface"===n?(0,t.jsx)(F.SurfaceContext,{value:M,children:u}):u})},N=Object.assign(L,{Root:L,Item:({className:e,...r})=>{let{hideSeparator:i,slots:o}=(0,a.use)(P);return(0,t.jsx)(E,{className:(0,_.composeTwRenderProps)(e,o?.item()),"data-hide-separator":i?"true":void 0,"data-slot":"accordion-item",...r,children:r.children})},Heading:({className:e,...r})=>{let{slots:i}=(0,a.use)(P);return(0,t.jsx)(y.Heading,{className:(0,_.composeSlotClassName)(i?.heading,e),"data-slot":"accordion-heading",...r})},Trigger:({className:e,...r})=>{let{slots:o}=(0,a.use)(P);return(0,t.jsx)(i.Button,{className:(0,_.composeTwRenderProps)(e,o?.trigger()),"data-slot":"accordion-trigger",slot:"trigger",...r,children:e=>(0,t.jsx)(t.Fragment,{children:"function"==typeof r.children?r.children(e):r.children})})},Panel:({children:e,className:r,...i})=>{let{slots:o}=(0,a.use)(P),{isExpanded:n}=(0,a.use)(b);return(0,t.jsx)(T,{className:(0,_.composeTwRenderProps)(r,o?.panel()),"data-expanded":(0,R.dataAttr)(n),"data-slot":"accordion-panel",...i,children:e})},Indicator:({children:e,className:r,...i})=>{let{slots:o}=(0,a.use)(P),{isExpanded:n}=(0,a.use)(b);return e&&a.default.isValidElement(e)?a.default.cloneElement(e,{...i,"data-expanded":(0,R.dataAttr)(n),className:(0,_.composeSlotClassName)(o?.indicator,r),"data-slot":"accordion-indicator"}):(0,t.jsx)(w.IconChevronDown,{className:(0,_.composeSlotClassName)(o?.indicator,r),"data-expanded":(0,R.dataAttr)(n),"data-slot":"accordion-indicator",...i})},Body:({children:e,className:r,...i})=>{let{slots:o}=(0,a.use)(P);return(0,t.jsx)(S.dom.div,{className:o?.body({}),"data-slot":"accordion-body",...i,children:(0,t.jsx)("div",{className:(0,_.composeSlotClassName)(o?.bodyInner,r),children:e})})}});var B=e.i(950843);e.s(["Faq",0,function({items:e}){return(0,t.jsx)(N,{className:"mx-auto mt-14 w-full max-w-3xl",children:e.map(e=>(0,t.jsxs)(N.Item,{className:"lumen-card",children:[(0,t.jsx)(N.Heading,{children:(0,t.jsxs)(N.Trigger,{className:"py-5 text-base",children:[e.q,(0,t.jsx)(N.Indicator,{children:(0,t.jsx)(B.ChevronDown,{})})]})}),(0,t.jsx)(N.Panel,{children:(0,t.jsx)(N.Body,{className:"pb-5 text-muted",children:e.a})})]},e.q))})}],817355)},305290,e=>{"use strict";var t=e.i(499207),r=e.i(571451);e.s(["HeroScroller",0,function({className:e,children:a}){let i=r.default.useRef(null);return r.default.useEffect(()=>{let e=i.current;if(!e||e.scrollWidth<=e.clientWidth)return;let t=e.querySelectorAll("[data-hero-win]")[0];if(!t)return;let r=t.getBoundingClientRect(),a=e.getBoundingClientRect();e.scrollLeft+=r.left+r.width/2-(a.left+a.width/2)},[]),(0,t.jsx)("div",{ref:i,className:e,children:a})}])},769947,e=>{"use strict";var t=e.i(499207),r=e.i(571451),a=e.i(817562),i=e.i(255006),o=e.i(409680),n=e.i(484903),l=e.i(13421);let s={榜单:[.62,.36,1],筛选条件:[.15,.82,1],媒体库:[.25,.48,1]},u=Array.from({length:3},(e,t)=>(t-1)*6.4),c=e=>e/.8200000000000001,f=Array.from({length:3},(e,t)=>[c(.12+.18*t),c(.12+(t+1)*.18)]);function d(e){return e.map((e,t)=>{let r=2===e.length,a=r?[[-1.25,0],[1.25,0]]:[[-1.15,-.62],[1.15,-.62],[0,1.25]];return e.map((e,i)=>({x:u[t]+a[i][0],y:.35+a[i][1],r:r?2.25:2.05,kind:e,from:[2.4*a[i][0],2.4*a[i][1]]}))})}let m=465;function h(e,t,r){let[a,i]=f[e],o=(r-a)/(i-a);return{u:o,on:Array.from({length:t},(e,t)=>(0,n.smooth)(.02+.11*t,.17+.11*t,o)),resolve:(0,n.smooth)(.42,.52,o),lift:(0,n.smooth)(.48,.58,o),fly:(0,n.smooth)(.56,.74,o),cover:(0,n.smooth)(.72,.84,o),off:(0,n.smooth)(.82,.95,o),sink:(0,n.smooth)(.9,1.1,o)}}function p(e){let t=0;for(let r=0;r<f.length;r++)e>=f[r][0]-c(.02)&&(t=r);return t}let v=e=>1-(0,n.smooth)(c(.005),c(.06),e),x=e=>(0,n.smooth)(c(.01),c(.075),e),g={x:(0,n.sceneAt)(1,0).tiltX,z:(0,n.sceneAt)(1,0).tiltZ},b={dark:{wall:.36*(0,n.sceneAt)(1,0).dim,hero:(0,n.sceneAt)(1,0).heroGain},light:{wall:1.08,hero:1.05}},A=e=>(0,n.smooth)(c(.735),c(.765),e),E=e=>(0,n.smooth)(c(.805),c(.8200000000000001),e),T=c(.7250000000000001);function y(e){let t=(0,n.cameraAt)(1,e),r=[t.eye[0],t.eye[1],20-t.eye[2]],a=[t.F[0],t.F[1],-t.F[2]],i=-(r[2]/a[2]);return{eye:r,look:[r[0]+a[0]*i,r[1]+a[1]*i,0],fov:(0,n.fovY)(e)}}let R={light:[.96,.96,.96],dark:[.02,.02,.024]},_=-.3,S=19,w=-.1,F=19.5;function P(e,t,r){let a=2*((t?F:S)-3.2)*Math.tan((t?1.1:.78)/2)*r*.84;if(t){let t=Math.min(4.6,a);return{x:0,y:w+1.4-(e-1)*(9*t/16+.55),z:3.2,w:t}}let i=Math.min(4.4,(a-1.1)/3);return{x:(e-1)*(i+.55),y:.75,z:3.2,w:i}}function M(e,t){let r=e=>{let t=Math.hypot(...e);return e.map(e=>e/t)},a=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],i=r([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),o=r(a(i,[0,1,0]));return{F:i,R:o,U:a(o,i)}}function L(e,t,r,a){let i=[0,1,2,3].map(r=>e[r]*t[0]+e[4+r]*t[1]+e[8+r]*t[2]+e[12+r]);return i[3]<=0?null:[(i[0]/i[3]*.5+.5)*r,(1-(i[1]/i[3]*.5+.5))*a]}let N=`#version 300 es
in vec2 aQ; in vec4 aPos; in vec4 aInfo; in vec4 aLite;
uniform mat4 uVP; uniform mat3 uM;
out vec2 vUV; out vec2 vWall; out float vCell; out float vSel; out float vAlpha; out float vDim;
void main(){
  float s = aPos.w;
  float rot = aInfo.y;
  vec2 c = vec2(aQ.x*1.00, aQ.y*1.50)*s;
  c = vec2(c.x*cos(rot) - c.y*sin(rot), c.x*sin(rot) + c.y*cos(rot));
  gl_Position = uVP*vec4(uM*(aPos.xyz + vec3(c, 0.)), 1.);
  vUV = aQ + .5; vWall = aLite.xy + c*aInfo.w; vCell = aInfo.x; vSel = aLite.z; vAlpha = aInfo.z; vDim = aLite.w;
}`,B=`#version 300 es
precision highp float;
in vec2 vUV; in vec2 vWall; in float vCell; in float vSel; in float vAlpha; in float vDim;
uniform sampler2D uAtlas; uniform vec2 uGrid;
uniform vec4 uPool[4]; uniform vec3 uPoolCol[4]; uniform float uAmb; uniform float uWallA; uniform float uBackA;
uniform vec2 uEdge; uniform float uHeroCell; uniform float uHeroBoost; uniform float uLodK;
out vec4 o;
void main(){
  float a = vAlpha*uWallA;
  vec3 tex;
  float gain = 1.;
  if (vCell < 0.) {
    
    tex = vec3(.035);
    a = uBackA;
  } else {
    vec2 d = abs(vUV - .5) - vec2(.5) + .045*vec2(1., .667);
    float box = length(max(d, 0.)) - .045;
    a *= smoothstep(.006, -.006, box);
    
    if (vCell != uHeroCell) a *= exp(-pow(abs(vWall.x)/uEdge.x, 4.))*exp(-pow(abs(vWall.y)/uEdge.y, 4.));
    else gain = uHeroBoost;
    if (a <= .001) discard;
    vec2 cell = vec2(mod(vCell, uGrid.x), floor(vCell/uGrid.x));
    vec2 tuv = (cell + vec2(vUV.x, 1. - vUV.y))/uGrid;
    
    tex = pow(textureGrad(uAtlas, tuv, dFdx(tuv)*uLodK, dFdy(tuv)*uLodK).rgb, vec3(2.2));
  }
  vec3 L = vec3(uAmb*gain);
  for (int k = 0; k < 4; k++) {
    float r = length(vWall - uPool[k].xy)/uPool[k].z;
    
    float f = smoothstep(1.02, .9, r)*(1. + .35*smoothstep(.72, .97, r));
    L += uPoolCol[k]*f*uPool[k].w*2.1;
  }
  
  L = mix(L*(1. - .7*vDim), vec3(1.35), vSel);
  o = vec4(tex*L*a, a);
}`,D=`#version 300 es
in vec2 aQ; uniform mat4 uVP; uniform mat3 uM; uniform vec3 uPos; uniform vec2 uSize; uniform float uPad; out vec2 vP;
void main(){ vec2 s = uSize + 2.*uPad; vP = aQ*s; gl_Position = uVP*vec4(uM*(uPos + vec3(aQ*s, 0.)), 1.); }`,C=`#version 300 es
precision highp float;
in vec2 vP; uniform sampler2D uTex; uniform vec2 uSize; uniform float uA; uniform float uGlow; uniform float uShadow;
uniform vec3 uPos; uniform float uSheenX; uniform float uSheenA; out vec4 o;
void main(){
  vec2 h = uSize*.5;
  float rad = uSize.x*.03;
  vec2 d = abs(vP) - h + rad;
  float box = length(max(d, 0.)) + min(max(d.x, d.y), 0.) - rad;
  float aa = fwidth(box);
  float a = smoothstep(aa, -aa, box)*uA;
  vec2 uv = vP/uSize + .5;
  vec3 c = pow(texture(uTex, vec2(uv.x, 1. - uv.y)).rgb, vec3(2.2))*(1. + uGlow);
  
  float band = exp(-pow((uPos.x + vP.x + vP.y*.55 - uSheenX)/.22, 2.));
  c += vec3(.9, .93, 1.)*band*.2*uSheenA;
  vec2 sd = max(abs(vP - vec2(0., -uSize.y*.07)) - h*.94, 0.);
  float sh = exp(-dot(sd, sd)/(uSize.x*uSize.x*.0035))*.3*uShadow*uA;
  o = vec4(c*a, a + sh*(1. - a));
}`,U=`#version 300 es
precision highp float; in vec2 uv; uniform sampler2D uScene; uniform sampler2D uBeam; uniform sampler2D uB1; uniform sampler2D uB2;
uniform float uT; uniform vec3 uBg; uniform float uLight; uniform float uWash; uniform float uLit; out vec4 o;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
void main(){
  vec4 sc = texture(uScene, uv);
  float a = clamp(sc.a, 0., 1.);
  vec3 c = sc.rgb + texture(uBeam, uv).rgb + (texture(uB1, uv).rgb*1.1 + texture(uB2, uv).rgb*.3)*.85*(1. - uLit);
  c = 1. - exp(-c*1.3);
  c = pow(c, vec3(1./2.2));
  c *= mix(1., .8, smoothstep(.55, 1.1, length(uv - .5)*1.3)*(1. - uLit));
  c += (h21(gl_FragCoord.xy + fract(uT*24.)*91.) - .5)*.035*c;
  vec3 dark = uBg + c*(1. - uBg);
  vec3 light = uBg*(1. - a) + mix(c, a*mix(c, uBg, .22), uWash);
  o = vec4(mix(dark, light, uLight), 1.);
}`;class k{canvas;gl;poster;cover;beam;blur;comp;quad;posterVAO;coverVAO;instBuf;atlasTex;atlasRows;coverTex;sceneT;depth;beamT;b1;b2;c1;c2;hdr;pools;slots;chosen;cells;drift;swapped;wallCount;recipeCounts;hasHero;inst;camera;scale;beamScale;constructor(e,t,r,a){this.canvas=e,this.atlasRows=1,this.slots=[],this.chosen=[],this.cells=new Int32Array(m),this.drift=NaN,this.swapped=!1,this.wallCount=1,this.recipeCounts=[],this.hasHero=!1,this.gl=t,this.scale=a.scale,this.beamScale=a.beamScale,this.hdr=!!t.getExtension("EXT_color_buffer_float"),this.pools=d(r),this.camera=function(e){let t=e=>{let t=[0,1,2].map(t=>(0,n.curve)(e.map(([e,r,a])=>a?[e,r[t],0]:[e,r[t]])));return e=>t.map(t=>t(e))},r=y(!1),a=y(!0),i=[[0,r.eye],[c(.08),[u[0]-3.5,1.5,14.5]]],o=[[0,r.look],[c(.08),[u[0]+1.8,.2,0]]],l=[[0,a.eye],[c(.08),[u[0],1.4,21]]],s=[[0,a.look],[c(.08),[u[0],.6,0]]];f.forEach(([t,r],a)=>{let n=1.9*(e[a]>=3),[f,d]=[t+c(.03),r-c(.04)];i.push([f,[u[a]-1.4,1,10.5+n]],[d,[u[a]+1,.2,9.2+n]]),o.push([f,[u[a]-.1,.2,0]],[d,[u[a]+.3,-.3,0]]);let m=3*(e[a]>=3);l.push([f,[u[a],.9,17.5+m]],[d,[u[a],.3,16.5+m]]),s.push([f,[u[a],.35,0]],[d,[u[a],-.2,0]])});let d=u[f.length-1],m=1.9*(e[f.length-1]>=3),h=3*(e[f.length-1]>=3),p=c(.68);i.push([p,[d+1.3,.1,9.6+m]],[T,[0,_,S+.8],!0],[1,[0,_,S]]),o.push([p,[d+.4,-.35,0]],[T,[0,_-.1,0],!0],[1,[0,_-.1,0]]),l.push([p,[d,.25,16.8+h]],[T,[0,w,F+.8],!0],[1,[0,w,F]]),s.push([p,[d,-.2,0]],[T,[0,w,0],!0],[1,[0,w,0]]);let v=t(i),g=t(o),b=t(l),A=t(s);return(e,t)=>{let i=x(e);return{eye:t?b(e):v(e),look:t?A(e):g(e),fov:t?a.fov+(1.1-a.fov)*i:r.fov+(.78-r.fov)*i}}}(r.map(e=>e.length)),this.recipeCounts=r.map(()=>0),this.inst=new Float32Array((m+1)*12),this.coverTex=r.map(()=>null),this.build(a.steps)}static context(e){return e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance"})}compile(e,t,r){let a=this.gl,i=(e,t)=>{let r=a.createShader(e);if(a.shaderSource(r,t),a.compileShader(r),!a.getShaderParameter(r,a.COMPILE_STATUS))throw Error(`光选片着色器编译失败：${a.getShaderInfoLog(r)}`);return r},o=a.createProgram();if(a.attachShader(o,i(a.VERTEX_SHADER,e)),a.attachShader(o,i(a.FRAGMENT_SHADER,t)),r.forEach((e,t)=>a.bindAttribLocation(o,t,e)),a.linkProgram(o),!a.getProgramParameter(o,a.LINK_STATUS))throw Error(`光选片着色器链接失败：${a.getProgramInfoLog(o)}`);let n=new Map;return o.u=e=>(n.has(e)||n.set(e,a.getUniformLocation(o,e)),n.get(e)),o}texture(e){let t=this.gl,r=t.createTexture();return t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e?t.LINEAR_MIPMAP_LINEAR:t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}target(e,t){let r=this.gl,a=this.texture(!1);this.hdr?r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,e,t,0,r.RGBA,r.HALF_FLOAT,null):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null);let i=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0),{t:a,f:i,w:e,h:t}}build(e){let t=this.gl;this.poster=this.compile(N,B,["aQ","aPos","aInfo","aLite"]),this.cover=this.compile(D,C,["aQ"]),this.beam=this.compile(l.QUAD_VS,`#version 300 es
precision highp float;
uniform vec2 uRes; uniform float uT; uniform vec3 uEye; uniform vec3 uF; uniform vec3 uR; uniform vec3 uU; uniform float uTan;
uniform vec4 uPool[4]; uniform vec3 uPoolCol[4]; uniform vec3 uSrc[4];
out vec4 o;
float h31(vec3 p){ p = fract(p*.3183099 + .1); p *= 17.; return fract(p.x*p.y*p.z*(p.x + p.y + p.z)); }
float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3. - 2.*f);
  return mix(mix(mix(h31(i), h31(i + vec3(1, 0, 0)), f.x), mix(h31(i + vec3(0, 1, 0)), h31(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h31(i + vec3(0, 0, 1)), h31(i + vec3(1, 0, 1)), f.x), mix(h31(i + vec3(0, 1, 1)), h31(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
float fbm3(vec3 p){ return .55*n3(p) + .3*n3(p*2.1 + 3.1) + .15*n3(p*4.3 + 7.7); }
void main(){
  vec2 q = (gl_FragCoord.xy - .5*uRes)/uRes.y;
  vec3 rd = normalize(uF + (q.x*uR + q.y*uU)*2.*uTan);
  vec3 ro = uEye;
  float tW = min(rd.z < -1e-4 ? -ro.z/rd.z : 60., 60.);
  const int N = ${e};
  float dt = tW/float(N);
  float jit = fract(52.9829189*fract(dot(gl_FragCoord.xy + fract(uT*7.)*vec2(47., 17.), vec2(.06711056, .00583715))));
  vec3 acc = vec3(0.);
  for (int i = 0; i < N; i++) {
    vec3 x = ro + rd*((float(i) + jit)*dt);
    if (x.z < 0.) break;
    float haze = .15 + .85*fbm3(x*vec3(.35, .5, .35) + vec3(uT*.03, uT*.02, 0.));
    for (int k = 0; k < 4; k++) {
      if (uPool[k].w <= .001) continue;
      vec3 S = uSrc[k];
      vec3 tgt = vec3(uPool[k].xy, 0.);
      vec3 D = normalize(tgt - S);
      float along = dot(x - S, D);
      if (along <= 0.) continue;
      float rad = uPool[k].z*along/length(tgt - S);
      float perp = length((x - S) - D*along);
      float cone = smoothstep(rad, rad*.82, perp);
      float core = 1. + .6*exp(-perp*perp/(rad*rad*.08));
      acc += uPoolCol[k]*cone*core*haze*uPool[k].w*dt*smoothstep(0., 1.2, x.z);
    }
  }
  o = vec4(acc*.032, 1.);
}`,["p"]),this.blur=this.compile(l.QUAD_VS,l.BLUR_FS,["p"]),this.comp=this.compile(l.QUAD_VS,U,["p"]),this.quad=t.createVertexArray(),t.bindVertexArray(this.quad),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0);let r=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5]);for(let[e,a]of(this.coverVAO=t.createVertexArray(),t.bindVertexArray(this.coverVAO),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,r,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.posterVAO=t.createVertexArray(),t.bindVertexArray(this.posterVAO),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,r,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.instBuf=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.instBuf),t.bufferData(t.ARRAY_BUFFER,this.inst.byteLength,t.DYNAMIC_DRAW),[[1,0],[2,16],[3,32]]))t.enableVertexAttribArray(e),t.vertexAttribPointer(e,4,t.FLOAT,!1,48,a),t.vertexAttribDivisor(e,1);t.bindVertexArray(this.quad),this.atlasTex=this.texture(!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))}upload(e,t){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.generateMipmap(r.TEXTURE_2D)}setPosters(e,t,r){let a=e.slice(0,48),i=t.map(e=>e.slice(0,5));this.atlasRows=Math.ceil(8.625);let o=document.createElement("canvas");o.width=2048,o.height=384*this.atlasRows;let n=o.getContext("2d"),l=(e,t)=>n.drawImage(e,t%8*256,384*Math.floor(t/8),256,384);a.forEach((e,t)=>l(e,t)),i.forEach((e,t)=>e.forEach((e,r)=>l(e,48+5*t+r))),r&&l(r,68),this.wallCount=Math.max(1,a.length),this.recipeCounts=i.map(e=>e.length),this.hasHero=!!r,this.layout(Number.isNaN(this.drift)?0:this.drift,this.swapped),this.upload(this.atlasTex,o)}layout(e,t){var r,a;this.drift=e,this.swapped=t,this.slots=function(e){let t=[];for(let r=-7;r<=7;r++){let a=function(e,t){let r=(e,t)=>e-t*Math.floor(e/t);return t*(1>r(e,2)?1:-1)*(.6+.2*r(e,3))}(r,e),i=Math.round(a/1.14);for(let e=i-15;e<=i+15;e++)t.push({x:1.14*e-a,y:1.64*r,i:e,j:r,hash:5*e+7*r+997})}return t}(e),this.chosen=(r=this.pools,a=this.slots,r.map(e=>{let t=a.flatMap((t,r)=>e.every(e=>(t.x-e.x)**2+(t.y-e.y)**2<(.92*e.r)**2)?[r]:[]),r=e.reduce((e,t)=>e+t.x,0)/e.length,i=e.reduce((e,t)=>e+t.y,0)/e.length,o=e=>Math.hypot(a[e].x-r,a[e].y-i);return t.sort((e,t)=>o(e)-o(t))})),this.slots.forEach((e,t)=>{let r;return this.cells[t]=this.hasHero&&0===e.i&&0===e.j?68:(e.hash%(r=this.wallCount)+r)%r}),t&&this.chosen.forEach((e,t)=>e.forEach((e,r)=>r<this.recipeCounts[t]&&(this.cells[e]=48+5*t+r)))}setCover(e,t){let r=this.coverTex[e]??this.texture(!0);this.upload(r,t),this.coverTex[e]=r}render(e){var t,r;let a,o,f,d,m=this.gl,y=Math.min(window.devicePixelRatio||1,2),_=this.scale*(0,i.budgetScale)(this.canvas.clientWidth,this.canvas.clientHeight,y),S=Math.max(2,Math.round(this.canvas.clientWidth*y*_)),w=Math.max(2,Math.round(this.canvas.clientHeight*y*_));this.canvas.width===S&&this.canvas.height===w&&this.sceneT||(this.canvas.width=S,this.canvas.height=w,this.sceneT=this.target(S,w),this.depth=m.createRenderbuffer(),m.bindRenderbuffer(m.RENDERBUFFER,this.depth),m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT24,S,w),m.bindFramebuffer(m.FRAMEBUFFER,this.sceneT.f),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,this.depth),this.beamT=void 0,this.b1=this.target(S>>2,w>>2),this.b2=this.target(S>>2,w>>2),this.c1=this.target(S>>3,w>>3),this.c2=this.target(S>>3,w>>3));let F=Math.max(2,Math.round(S*this.beamScale)),L=Math.max(2,Math.round(w*this.beamScale));this.beamT&&this.beamT.w===F&&this.beamT.h===L||(this.beamT=this.target(F,L));let N=e.p,B=0===v(N);(e.drift!==this.drift||B!==this.swapped)&&this.layout(e.drift,B);let D=S<w,C=this.camera(N,D),U=function(e,t,r,a){let{F:i,R:o,U:n}=M(e,t),l=1/Math.tan(r/2),s=[l/a,0,0,0,0,l,0,0,0,0,-120.1/119.9,-1,0,0,-24/119.9,0],u=t=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],c=[o[0],n[0],-i[0],0,o[1],n[1],-i[1],0,o[2],n[2],-i[2],0,-u(o),-u(n),u(i),1],f=Array(16).fill(0);for(let e=0;e<4;e++)for(let t=0;t<4;t++)for(let r=0;r<4;r++)f[4*t+e]+=s[4*r+e]*c[4*t+r];return f}(C.eye,C.look,C.fov,S/w),k=p(N),I=this.pools.map((e,t)=>h(t,e.length,N)),j=I[k],V=(0,n.smooth)(c(.66),c(.7000000000000001),N),O=A(N),H=E(N),z=v(N),G=v(N),X=1-x(N),q=(t=g.x*X,a=Math.cos(r=g.z*X),[a,(o=Math.sin(r))*(f=Math.cos(t)),-o*(d=Math.sin(t)),-o,a*f,-a*d,0,d,f]),W=b[e.light?"light":"dark"],Y=.012*(1-.5*V),$=Math.exp(Math.log(Y)+(Math.log(W.wall)-Math.log(Y))*G),K=new Float32Array(16),Q=new Float32Array(12),Z=new Float32Array(12);if(0===O){let e=this.pools[k];e.forEach((t,r)=>{let a=1-j.on[r];K.set([t.x+t.from[0]*a*a,t.y+t.from[1]*a*a,t.r,j.on[r]*(1-j.off)],4*r),Q.set(s[t.kind],3*r),Z.set([t.x+(r-(e.length-1)/2)*2.2,11.5,5.5],3*r)})}let J=this.inst,ee=Math.max(j.resolve*(1-j.off),V);J.set([0,0,-.04,60,-1,0,1,1,0,0,0,0],0);let et=new Map;this.chosen.forEach((e,t)=>e.forEach((e,r)=>et.set(e,{i:t,n:r}))),this.slots.forEach((e,t)=>{let r=e.x,a=e.y,i=0,o=1,l=0,s=1,c=0,f=1,d=ee,m=et.get(t);if(m){var h,p;let t=I[m.i],v=this.chosen[m.i].length;c=t.resolve*(1-t.cover),d=0;let x=1.2*t.lift,g=m.n/Math.max(1,v-1)*.35,b=(0,n.smooth)(g,g+.65,t.fly),[A,E,T]=(h=m.i,p=m.n,[u[h]+(p-(v-1)/2)*.1,.35+.03*p,2.4+.02*p]);r+=(A-r)*b,a+=(E-a)*b,i=x+(T-x)*b+.8*Math.sin(b*Math.PI),o=1+.15*t.lift-.1*b,l=(m.n%2?1:-1)*.06*b,s=1-t.cover,f=1-(0,n.smooth)(0,.15,t.fly),t.u>1.02&&(r=e.x,a=e.y,i=0,o=1,l=0,c=0,f=1,d=ee,s=(0,n.smooth)(1.05,1.35,t.u))}J.set([r,a,i+.001*!!m,o,this.cells[t],l,s,f,e.x,e.y,c,d],(t+1)*12)});let er=e=>{m.bindFramebuffer(m.FRAMEBUFFER,e.f),m.viewport(0,0,e.w,e.h)},{F:ea,R:ei,U:eo}=M(C.eye,C.look);er(this.beamT),m.useProgram(this.beam),m.bindVertexArray(this.quad);let en=this.beam;m.uniform2f(en.u("uRes"),F,L),m.uniform1f(en.u("uT"),e.t),m.uniform3fv(en.u("uEye"),C.eye),m.uniform3fv(en.u("uF"),ea),m.uniform3fv(en.u("uR"),ei),m.uniform3fv(en.u("uU"),eo),m.uniform1f(en.u("uTan"),Math.tan(C.fov/2)),m.uniform4fv(en.u("uPool"),K),m.uniform3fv(en.u("uPoolCol"),Q),m.uniform3fv(en.u("uSrc"),Z),m.drawArrays(m.TRIANGLES,0,3),er(this.sceneT),m.clearColor(0,0,0,0),m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT),m.enable(m.DEPTH_TEST),m.enable(m.BLEND),m.blendFunc(m.ONE,m.ONE_MINUS_SRC_ALPHA);let el=this.poster;m.useProgram(el),m.bindVertexArray(this.posterVAO),m.bindBuffer(m.ARRAY_BUFFER,this.instBuf),m.bufferSubData(m.ARRAY_BUFFER,0,J),m.uniformMatrix4fv(el.u("uVP"),!1,U),m.uniformMatrix3fv(el.u("uM"),!1,q),m.uniform4fv(el.u("uPool"),K),m.uniform3fv(el.u("uPoolCol"),Q),m.uniform1f(el.u("uAmb"),$),m.uniform1f(el.u("uWallA"),1-H),m.uniform1f(el.u("uBackA"),(1-G)*(1-H));let es=1+8*(1-z);m.uniform2f(el.u("uEdge"),9*es,4.6*es),m.uniform1f(el.u("uHeroCell"),this.hasHero?68:-2),m.uniform1f(el.u("uHeroBoost"),1+(W.hero/W.wall-1)*z),m.uniform1f(el.u("uLodK"),1-z),m.uniform2f(el.u("uGrid"),8,this.atlasRows),m.activeTexture(m.TEXTURE0),m.bindTexture(m.TEXTURE_2D,this.atlasTex),m.uniform1i(el.u("uAtlas"),0),m.drawArraysInstanced(m.TRIANGLES,0,6,this.slots.length+1);let eu=this.cover;m.useProgram(eu),m.bindVertexArray(this.coverVAO),m.depthMask(!1),m.uniformMatrix4fv(eu.u("uVP"),!1,U),m.uniformMatrix3fv(eu.u("uM"),!1,[1,0,0,0,1,0,0,0,1]),I.forEach((t,r)=>{var a;let i,o,l,s=this.coverTex[r];if(t.cover<=0||!s)return;let f=function(e,t,r,a,i,o=0){let l,s=(e,t,r)=>e+(t-e)*r,f=(0,n.smooth)(0,.5,t.cover),d=P(e,a,i),m=(0,n.smooth)(c(.68),T,r),h=(l=1>Math.abs(e-1)?0:c(.012),(0,n.smooth)(T+l,T+c(.03)+l,r)),p=s(u[e],d.x,m),v=s(.35,-16,t.sink),x=s(2.6,1.4,t.sink),g=s(4.2*(.92+.08*f),3.3,t.sink);return v=s(v,d.y+.04*Math.sin(.9*o)*h,h),x=s(x,d.z,h)+.001*e,g=s(g,d.w,h),{x:p=s(p,d.x,h),y:v,z:x,w:g,alpha:t.cover,glow:.6*(1-(0,n.smooth)(.5,1,t.cover))+.15*(1-h)+.1*A(r)}}(r,t,N,D,S/w,e.t);m.uniform3f(eu.u("uPos"),f.x,f.y,f.z),m.uniform2f(eu.u("uSize"),f.w,9*f.w/16),m.uniform1f(eu.u("uPad"),.12*f.w),m.uniform1f(eu.u("uA"),f.alpha),m.uniform1f(eu.u("uGlow"),f.glow),m.uniform1f(eu.u("uShadow"),e.light?H:0),m.uniform1f(eu.u("uSheenX"),(a=e.t,o=Math.abs((i=P(2,D,S/w)).x)+i.w/2+1,(l=(a%6.5+6.5)%6.5/1.5)<1?-o+2*o*l:1e3)),m.uniform1f(eu.u("uSheenA"),O*(1-H)),m.activeTexture(m.TEXTURE0),m.bindTexture(m.TEXTURE_2D,s),m.uniform1i(eu.u("uTex"),0),m.drawArrays(m.TRIANGLES,0,6)}),m.depthMask(!0),m.disable(m.DEPTH_TEST),m.disable(m.BLEND);let ec=this.blur;m.useProgram(ec),m.bindVertexArray(this.quad);let[ef,ed,em,eh]=[this.b1,this.b2,this.c1,this.c2];(0,l.bloomPasses)((e,t,r,a,i,o)=>{er(t),m.activeTexture(m.TEXTURE3),m.bindTexture(m.TEXTURE_2D,e.t),m.uniform1i(ec.u("uSrc"),3),m.uniform2f(ec.u("uDir"),r/t.w,a/t.h),m.uniform1f(ec.u("uThr"),i),m.uniform2f(ec.u("uPre"),o?1/e.w:0,o?1/e.h:0),m.drawArrays(m.TRIANGLES,0,3)},this.sceneT,ef,ed,em,eh),m.bindFramebuffer(m.FRAMEBUFFER,null),m.viewport(0,0,S,w);let ep=this.comp;m.useProgram(ep);let ev=(e,t,r)=>{m.activeTexture(m.TEXTURE0+e),m.bindTexture(m.TEXTURE_2D,t),m.uniform1i(ep.u(r),e)};return ev(3,this.sceneT.t,"uScene"),ev(4,this.beamT.t,"uBeam"),ev(5,ed.t,"uB1"),ev(6,eh.t,"uB2"),m.uniform1f(ep.u("uT"),e.t),m.uniform3fv(ep.u("uBg"),R[e.light?"light":"dark"]),m.uniform1f(ep.u("uLight"),+!!e.light),m.uniform1f(ep.u("uWash"),e.light?G:0),m.uniform1f(ep.u("uLit"),e.light?Math.max(G,H):0),m.drawArrays(m.TRIANGLES,0,3),U}dispose(){}}var I=e.i(34762),j=e.i(471723);let V={榜单:"bg-violet-500/20 text-violet-300",筛选条件:"bg-cyan-400/15 text-cyan-300",媒体库:"bg-blue-500/20 text-blue-300"};e.s(["LibrarySpotlights",0,function({heading:e,recipes:l,wallPosters:s,categories:f,children:m}){let x=r.default.useRef(null),g=r.default.useRef(null),b=r.default.useRef(null),A=r.default.useRef(null),T=r.default.useRef(null),y=r.default.useRef(null);return r.default.useEffect(()=>{let e,t=x.current,r=g.current,f=T.current;if(!t||!r||!f||3!==l.length||l.some(e=>e.sources.length<2||e.sources.length>3)||matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelector(".lumen-proj")?.dataset.mode!=="gl")return;let m=k.context(r);if(!m)return;let R=innerWidth<768,_=Math.min(devicePixelRatio||1,2),S=l.map(e=>e.sources.map(e=>e.kind));try{e=new k(r,m,S,{steps:R?36:56,scale:1,beamScale:_>=2?.5:.75})}catch(e){console.warn("光选片跑不起来，留在维恩图",e);return}t.dataset.mode="gl",b.current?.setAttribute("data-theme","dark");let w=document.documentElement,F=d(S),M=l.map((e,t)=>Array.from({length:S[t].length},(e,r)=>f.querySelector(`[data-spot-label="${t}-${r}"]`))),N=l.map((e,t)=>f.querySelector(`[data-spot-mode="${t}"]`)),B=new n.Spring(0),D=0,C=!1,U=!1,j=!1,V=!1,O=0,H=()=>(0,n.sceneAt)(1,Number.isFinite(o.projectionClock.t0)?(performance.now()-o.projectionClock.t0)/1e3:0).drift,z=H(),G=performance.now(),X=G,q=(0,i.makePacer)(),W=G,Y=0,$=0,K=e=>new Promise((t,r)=>{let a=new Image;a.decoding="async",a.onload=()=>{a.decode?a.decode().then(()=>t(a)).catch(()=>t(a)):t(a)},a.onerror=r,a.src=e}),Q=e=>Promise.all(e.map(e=>K(e).catch(()=>null))).then(e=>e.filter(e=>!!e)),Z=()=>{if(j)return;j=!0,Promise.all([Q(s),Promise.all(l.map(e=>Q(e.posters))),K(o.PROJECTION_POSTER).catch(()=>null)]).then(([t,r,a])=>{t.length&&e.setPosters(t,r,a),V=!0});let r=getComputedStyle(t).fontFamily;Promise.resolve(document.fonts?.ready).then(()=>l.forEach((t,i)=>K(t.cover).catch(()=>null).then(o=>{e.setCover(i,function(e,t,r){let i=I.COVER_LAYOUT,o=document.createElement("canvas");o.width=1200,o.height=675;let n=o.width/i.width,l=o.getContext("2d");if(l.fillStyle="#12141a",l.fillRect(0,0,o.width,o.height),t){let e=Math.max(o.width/t.naturalWidth,o.height/t.naturalHeight),r=t.naturalWidth*e,a=t.naturalHeight*e;l.drawImage(t,(o.width-r)/2,(o.height-a)/2,r,a)}l.fillStyle="rgba(0,0,0,0.22)",l.fillRect(0,0,o.width,o.height);let s=l.createLinearGradient(0,0,.55*o.width,0);s.addColorStop(0,"rgba(0,0,0,0.45)"),s.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=s,l.fillRect(0,0,o.width,o.height),(s=l.createLinearGradient(0,.6*o.height,0,o.height)).addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.35)"),l.fillStyle=s,l.fillRect(0,0,o.width,o.height);let u=i.logoWidth*n,c=u/2232,f=e=>e.match(/-?[\d.]+/g).map(Number);l.save(),l.beginPath(),l.rect(i.logoX*n,i.logoY*n,u,217*c),l.clip(),l.fillStyle="#fff",l.textBaseline="alphabetic",l.font=`700 ${210*c}px "PingFang SC","Microsoft YaHei","Noto Sans SC",sans-serif`,l.letterSpacing=`${60*c}px`,l.fillText("短剧之家",i.logoX*n+4*c,i.logoY*n+184*c),l.letterSpacing="0px";return l.restore(),l.fillStyle="#fff",l.font=`700 ${(0,I.coverTitleSize)(e.name)*n}px ${r}`,l.fillText(e.name,i.titleX*n,(e.subtitle?i.titleBaseline:i.titleBaselineSolo)*n),e.subtitle&&(l.fillStyle="rgb(235,237,242)",l.font=`400 ${i.subSize*n}px ${r}`,"letterSpacing"in l&&(l.letterSpacing=`${i.subTracking*n}px`),l.fillText(e.subtitle,i.titleX*n,i.subBaseline*n)),o}(t,o,r)),O++})))},J=(e,t,r)=>{e&&(e.style.opacity=t.toFixed(3),e.style.transform=`translate3d(0, ${((1-t)*r).toFixed(1)}px, 0)`,e.style.visibility=t<.01?"hidden":"")},ee=(e,t,r)=>{if(!e)return;let a=t&&r>.005;e.style.visibility=a?"":"hidden",a&&(e.style.opacity=r.toFixed(3),e.style.transform=`translate3d(${t[0].toFixed(1)}px, ${t[1].toFixed(1)}px, 0) translate(-50%, -50%)`)},et=(a,i,o)=>{let s;B.t=a,B.step(i);let f=Math.min(1,Math.max(0,B.x)),d="dark"!==w.dataset.theme;v(f)>0&&(z=H());let m=e.render({p:f,drift:z,t:(o-W)/1e3,light:d});J(y.current,1-(0,n.smooth)(0,c(.025),f),16),J(b.current,(0,n.smooth)(c(.052),c(.075),f)*(1-(0,n.smooth)(c(.115),c(.14),f)),-30);let x=r.clientWidth,g=r.clientHeight,T=x<g,R=E(f);ee(A.current,L(m,[0,(s=P(2,T,x/g)).y-9*s.w/32-(T?1.1:.95),3.2],x,g),(0,n.smooth)(c(.77),c(.788),f)),A.current&&(d&&R>.5?A.current.removeAttribute("data-theme"):A.current.setAttribute("data-theme","dark"));let _=p(f);l.forEach((e,t)=>{let r=h(t,S[t].length,f);F[t].forEach((e,a)=>ee(M[t][a],L(m,function(e,t,r,a){let i=t.x-u[e],o=t.y-.35,n=Math.hypot(i,o)||1;if(a)return[t.x+.25*i,t.y+((2===r?i<0:o>0)?1:-1)*(t.r+.7),.3];let l=t.r+.75;return[t.x+i/n*l,t.y+o/n*l*.8,.3]}(t,e,S[t].length,T),x,g),t===_?r.on[a]*(1-(0,n.smooth)(.62,.72,r.u)):0)),ee(N[t],L(m,function(e,t,r){if(r)return[u[e],.35,2.8];let[a,i]=t,o=Math.abs(i.x-a.x)/2,n=Math.sqrt(Math.max(0,a.r**2-o**2));return 2===t.length?[u[e],a.y+n+.45,.6]:[u[e],a.y-n-.45,.6]}(t,F[t],T),x,g),t===_?(0,n.smooth)(.42,.5,r.u)*(1-(0,n.smooth)(.6,.68,r.u)):0)});let D=t.getBoundingClientRect();d&&.5>v(f)&&.5>E(f)&&D.top<=.5&&D.bottom>64?w.setAttribute("data-spot-nav",""):w.removeAttribute("data-spot-nav")},er=r=>{if(D=0,!C)return;let a=Math.min(.05,(r-X)/1e3);X=r;let o=t.getBoundingClientRect(),n=o.top<=.5;t.toggleAttribute("data-pinned",n);let l=Math.min(1,Math.max(0,-o.top/Math.max(1,o.height-innerHeight)));if(n){if(q(r,Math.abs(l-B.x)>5e-4||Math.abs(B.v)>.001)){let e=Math.min(.05,(r-G)/1e3);G=r,et(l,e,r)}}else G=r,B.x=l,B.v=0,w.removeAttribute("data-spot-nav");++$>90&&e.scale>i.MIN_SCALE?(Y=.95*Y+.05*a,$%i.SLOW_CHECK_FRAMES==0&&Y>i.SLOW_FRAME_S&&(e.scale=Math.max(i.MIN_SCALE,.8*e.scale))):Y=a,D=requestAnimationFrame(er)};new URLSearchParams(location.search).has("spotlight-debug")&&(window.__spotlight={manual(){ei(),eo.disconnect(),en.disconnect(),Z()},step(e,r,a){t.toggleAttribute("data-pinned",!0),et(e,r,a)},ready:()=>V&&O===l.length});let ea=()=>{C||!U||document.hidden||(C=!0,X=G=performance.now(),D=requestAnimationFrame(er))},ei=()=>{C=!1,D&&cancelAnimationFrame(D),D=0},eo=new IntersectionObserver(([e])=>{(U=e.isIntersecting)?ea():(ei(),w.removeAttribute("data-spot-nav"))});eo.observe(t);let en=new IntersectionObserver(([e])=>{e.isIntersecting&&Z()},{rootMargin:"150% 0px"});en.observe(t);let el=()=>document.hidden?ei():ea();document.addEventListener("visibilitychange",el);let es=matchMedia("(prefers-reduced-motion: reduce)"),eu=()=>{es.matches&&(ei(),t.dataset.mode="static",b.current?.removeAttribute("data-theme"),w.removeAttribute("data-spot-nav"))};return es.addEventListener("change",eu),()=>{ei(),eo.disconnect(),en.disconnect(),document.removeEventListener("visibilitychange",el),es.removeEventListener("change",eu),w.removeAttribute("data-spot-nav"),e.dispose()}},[l,s]),(0,t.jsxs)("section",{ref:x,className:"lumen-spot relative scroll-mt-16","data-mode":"static",id:"custom-libraries",children:[(0,t.jsxs)("div",{className:"lumen-spot-stage relative mx-auto w-full max-w-[1172px] px-4 pt-16 sm:px-6 sm:pt-28",children:[(0,t.jsx)("canvas",{ref:g,"aria-hidden":!0,className:"lumen-spot-gl absolute inset-0 size-full"}),(0,t.jsxs)("div",{ref:y,"aria-hidden":!0,className:"lumen-spot-gl absolute inset-0",children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-background via-background/70 to-transparent"}),(0,t.jsx)(j.LibraryWallCopy,{categories:f})]}),(0,t.jsx)("div",{ref:b,className:"lumen-spot-head text-foreground",children:e}),(0,t.jsxs)("div",{ref:T,"aria-hidden":!0,className:"lumen-spot-gl pointer-events-none absolute inset-0","data-theme":"dark",children:[l.map((e,r)=>e.sources.map((a,i)=>(0,t.jsxs)("div",{className:"absolute top-0 left-0 flex flex-col items-center gap-2 text-center whitespace-nowrap","data-spot-label":`${r}-${i}`,style:{visibility:"hidden"},children:[(0,t.jsx)("span",{className:`rounded-md px-2 py-0.5 text-xs font-medium ${V[a.kind]}`,children:a.kind}),(0,t.jsx)("span",{className:"text-base font-medium text-ink [text-shadow:0_2px_16px_rgb(var(--lx-paper)/0.9)] sm:text-[19px]",children:a.label})]},`${e.name}-${a.label}`))),l.map((e,r)=>(0,t.jsx)("div",{className:"absolute top-0 left-0 rounded-full bg-paper/60 px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-ink shadow-[inset_0_0_0_1px_rgb(var(--lx-ink)/0.22),0_0_24px_rgb(var(--lx-ink)/0.18)] backdrop-blur-md","data-spot-mode":r,style:{visibility:"hidden"},children:e.mode},e.name))]}),(0,t.jsxs)("div",{ref:A,className:"lumen-spot-gl absolute top-0 left-0 w-max max-w-[92vw] text-center text-foreground transition-colors duration-500 [&_*]:transition-colors [&_*]:duration-500","data-theme":"dark",style:{visibility:"hidden"},children:[(0,t.jsx)("p",{className:"text-[26px] leading-[1.2] font-medium tracking-[-0.02em] sm:text-[36px]",children:"按类型分开，找剧不用翻"}),(0,t.jsx)("p",{className:"mt-3 text-sm text-balance text-muted sm:text-[15px]",children:"点一部就直接进详情页开播。"})]})]}),(0,t.jsx)("div",{className:"lumen-spot-venn mx-auto w-full max-w-[1172px] px-4 pb-16 sm:px-6 sm:pb-28",children:m})]})}],769947)},652119,e=>{"use strict";var t=e.i(571451);e.s(["PauseOffscreen",0,function(){return t.default.useEffect(()=>{let e,t,r=document.documentElement,a=()=>{e||r.setAttribute("data-scrolling",""),clearTimeout(e),e=setTimeout(()=>{r.removeAttribute("data-scrolling"),e=void 0},150)};return window.addEventListener("scroll",a,{passive:!0}),"u">typeof IntersectionObserver&&(t=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?t.target.removeAttribute("data-offscreen"):t.target.setAttribute("data-offscreen","")},{rootMargin:"25% 0px"}),document.querySelectorAll("main > section, main > div, footer").forEach(e=>t?.observe(e))),()=>{window.removeEventListener("scroll",a),clearTimeout(e),r.removeAttribute("data-scrolling"),t?.disconnect()}},[]),null}])},97920,e=>{"use strict";var t=e.i(499207),r=e.i(571451);e.s(["PlayOnView",0,function({threshold:e=.5}){let a=r.default.useRef(null);return r.default.useEffect(()=>{let t=a.current?.parentElement;if(!t||"u"<typeof IntersectionObserver)return;let r=new IntersectionObserver(([e])=>{e.isIntersecting?t.setAttribute("data-play",""):t.removeAttribute("data-play")},{threshold:e});return r.observe(t),()=>r.disconnect()},[e]),(0,t.jsx)("span",{ref:a,hidden:!0})}])},520485,e=>{"use strict";var t=e.i(499207),r=e.i(571451),a=e.i(850328),i=e.i(255006),o=e.i(409680),n=e.i(13421),l=e.i(484903);class s{canvas;gl;scene;beam;blur;comp;ema;fil;ray;quad;filVAO;rayVAO;vidTex;posterTex;atlasTex;emaT;rayT;sceneT;beamT;b1;b2;c1;c2;hdr;emaFresh;atlasCount;scale;beamScale;constructor(e,t,r){this.canvas=e,this.emaFresh=!0,this.atlasCount=1,this.gl=t,this.scale=r.scale,this.beamScale=r.beamScale,this.hdr=!!t.getExtension("EXT_color_buffer_float"),this.build(r.steps,r.frameRGB??[0,0,0])}static context(e){return e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance"})}compile(e,t,r){let a=this.gl,i=(e,t)=>{let r=a.createShader(e);if(a.shaderSource(r,t),a.compileShader(r),!a.getShaderParameter(r,a.COMPILE_STATUS))throw Error(`放映场景着色器编译失败：${a.getShaderInfoLog(r)}`);return r},o=a.createProgram();if(a.attachShader(o,i(a.VERTEX_SHADER,e)),a.attachShader(o,i(a.FRAGMENT_SHADER,t)),r.forEach((e,t)=>a.bindAttribLocation(o,t,e)),a.linkProgram(o),!a.getProgramParameter(o,a.LINK_STATUS))throw Error(`放映场景着色器链接失败：${a.getProgramInfoLog(o)}`);let n=new Map;return o.u=e=>(n.has(e)||n.set(e,a.getUniformLocation(o,e)),n.get(e)),o}texture(e){let t=this.gl,r=t.createTexture();return t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e?t.LINEAR_MIPMAP_LINEAR:t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}target(e,t,r,a=!1){let i=this.gl,o=this.texture(a);r?i.texImage2D(i.TEXTURE_2D,0,i.RGBA16F,e,t,0,i.RGBA,i.HALF_FLOAT,null):i.texImage2D(i.TEXTURE_2D,0,i.RGBA,e,t,0,i.RGBA,i.UNSIGNED_BYTE,null);let n=i.createFramebuffer();return i.bindFramebuffer(i.FRAMEBUFFER,n),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,o,0),{t:o,f:n,w:e,h:t}}build(e,t){let r=this.gl;this.scene=this.compile(n.QUAD_VS,(0,n.sceneFS)(e,!1),["p"]),this.beam=this.compile(n.QUAD_VS,(0,n.sceneFS)(e,!0),["p"]),this.blur=this.compile(n.QUAD_VS,n.BLUR_FS,["p"]),this.comp=this.compile(n.QUAD_VS,n.COMP_FS,["p"]),this.ema=this.compile(n.QUAD_VS,n.EMA_FS,["p"]),this.fil=this.compile(n.FIL_VS,n.FIL_FS,["aV"]),this.ray=this.compile(n.RAY_VS,n.RAY_FS,["aP"]),this.quad=r.createVertexArray(),r.bindVertexArray(this.quad),r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0);let a=[],i=[];for(let[e,t,r]of(0,l.filamentEnds)()){i.push(e,t,r);for(let i=0;i<24;i++)a.push(e,t,i/24,r,e,t,(i+1)/24,r)}for(let[e,[o,n,l]]of(this.filVAO=r.createVertexArray(),r.bindVertexArray(this.filVAO),r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array(a),r.STATIC_DRAW),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,4,r.FLOAT,!1,0,0),this.rayVAO=r.createVertexArray(),r.bindVertexArray(this.rayVAO),r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array(i),r.STATIC_DRAW),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,3,r.FLOAT,!1,0,0),r.bindVertexArray(this.quad),this.vidTex=this.texture(!0),this.posterTex=this.texture(!0),this.atlasTex=this.texture(!0),[[this.vidTex,t],[this.posterTex,[0,0,0]],[this.atlasTex,[0,0,0]]]))r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array([o,n,l,255]));this.emaT=this.target(128,54,!1,!0),this.rayT=this.target(l.RAY_W,l.RAY_H,this.hdr)}upload(e,t){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.generateMipmap(r.TEXTURE_2D)}setFrame(e){this.upload(this.vidTex,e)}resetBeamColor(){this.emaFresh=!0}setPoster(e){this.upload(this.posterTex,e)}setWall(e){let t=document.createElement("canvas");t.width=2048,t.height=2304;let r=t.getContext("2d"),a=e.slice(0,48);a.forEach((e,t)=>r.drawImage(e,t%8*256,384*Math.floor(t/8),256,384)),this.atlasCount=Math.max(1,a.length),this.upload(this.atlasTex,t)}render(e){let t=this.gl,r=Math.min(window.devicePixelRatio||1,2),a=this.scale*(0,i.budgetScale)(this.canvas.clientWidth,this.canvas.clientHeight,r),o=Math.max(2,Math.round(this.canvas.clientWidth*r*a)),s=Math.max(2,Math.round(this.canvas.clientHeight*r*a));this.canvas.width===o&&this.canvas.height===s&&this.sceneT||(this.canvas.width=o,this.canvas.height=s,this.sceneT=this.target(o,s,this.hdr),this.beamT=void 0,this.b1=this.target(o>>2,s>>2,this.hdr),this.b2=this.target(o>>2,s>>2,this.hdr),this.c1=this.target(o>>3,s>>3,this.hdr),this.c2=this.target(o>>3,s>>3,this.hdr));let u=(0,l.intro)(e.tI),c=(0,l.sceneAt)(e.p,e.t),f=o<s,d=(0,l.cameraAt)(e.p,f),m=(0,l.lensGlow)(e.p),h=Math.tan((0,l.fovY)(f)/2),p=e.light?c.wall*c.wall*(3-2*c.wall):0,v=e.light?[.02+.94*p,.02+.94*p,.02+.94*p]:[.02,.02,.024],x=e.light?c.dim+(3-c.dim)*p:c.dim,g=e.light?c.heroGain+(1.05-c.heroGain)*p:c.heroGain,b=Math.cos(c.tiltZ),A=Math.sin(c.tiltZ),E=Math.cos(c.tiltX),T=Math.sin(c.tiltX),y=e=>{let t=[e[0]*b-e[1]*A,e[0]*A+e[1]*b,e[2]];return[t[0],t[1]*E-t[2]*T,t[1]*T+t[2]*E]},R=y([1,0,0]),_=y([0,1,0]),S=y([0,0,1]);t.bindVertexArray(this.quad);{let r=this.emaFresh?1:1-Math.exp(-e.dt/l.BEAM_COLOR_TAU);this.emaFresh=!1,t.bindFramebuffer(t.FRAMEBUFFER,this.emaT.f),t.viewport(0,0,128,54),t.enable(t.BLEND),t.blendColor(0,0,0,r),t.blendFunc(t.CONSTANT_ALPHA,t.ONE_MINUS_CONSTANT_ALPHA),t.useProgram(this.ema),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.vidTex),t.uniform1i(this.ema.u("uVid"),0),t.uniform1f(this.ema.u("uA"),r),t.drawArrays(t.TRIANGLES,0,3),t.disable(t.BLEND),t.activeTexture(t.TEXTURE7),t.bindTexture(t.TEXTURE_2D,this.emaT.t),t.generateMipmap(t.TEXTURE_2D)}u.uni<1&&(t.bindFramebuffer(t.FRAMEBUFFER,this.rayT.f),t.viewport(0,0,l.RAY_W,l.RAY_H),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE),t.useProgram(this.ray),t.bindVertexArray(this.rayVAO),t.uniform1f(this.ray.u("uRad"),u.rad),t.uniform1f(this.ray.u("uGain"),u.gain),t.drawArrays(t.POINTS,0,l.FIL),t.disable(t.BLEND),t.bindVertexArray(this.quad));let w=Math.max(2,Math.round(o*this.beamScale)),F=Math.max(2,Math.round(s*this.beamScale));this.beamT&&this.beamT.w===w&&this.beamT.h===F||(this.beamT=this.target(w,F,this.hdr));let P=this.sceneT;for(let[r,a]of[[this.beam,this.beamT],[this.scene,P]]){t.bindFramebuffer(t.FRAMEBUFFER,a.f),t.viewport(0,0,a.w,a.h),t.useProgram(r),t.uniform2f(r.u("uRes"),a.w,a.h),t.uniform1f(r.u("uT"),e.t),t.uniform1f(r.u("uTA"),e.tA),t.uniform3fv(r.u("uEye"),d.eye),t.uniform3fv(r.u("uF"),d.F),t.uniform3fv(r.u("uR"),d.R),t.uniform3fv(r.u("uU"),d.U),t.uniform1f(r.u("uTan"),h),t.uniform3f(r.u("uC"),0,0,20),t.uniform3fv(r.u("uAu"),R),t.uniform3fv(r.u("uAv"),_),t.uniform3fv(r.u("uAn"),S),t.uniform2fv(r.u("uHS"),c.halfSize),t.uniform2fv(r.u("uHero"),c.hero),t.uniform1f(r.u("uRad"),c.radius),t.uniform1f(r.u("uFill"),u.fill),t.uniform1f(r.u("uUni"),u.uni),t.uniform1f(r.u("uVol"),u.vol),t.uniform1f(r.u("uLit"),u.lit),t.uniform1f(r.u("uSrc"),u.src*c.beam),t.uniform1f(r.u("uLens"),m),t.uniform1f(r.u("uLensK"),f?l.LENS_TALL_SCALE:1),t.uniform1f(r.u("uFloor"),c.floor),t.uniform1f(r.u("uHeroGain"),g),t.uniform1f(r.u("uBeam"),c.beam),t.uniform1f(r.u("uMorph"),c.morph),t.uniform1f(r.u("uWall"),c.wall),t.uniform1f(r.u("uDim"),x),t.uniform1f(r.u("uDrift"),c.drift),t.uniform2f(r.u("uAtlasGrid"),8,6),t.uniform1f(r.u("uAtlasCount"),this.atlasCount);let i=(e,a,i)=>{t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,a),t.uniform1i(r.u(i),e)};i(0,this.vidTex,"uVid"),i(1,this.posterTex,"uPoster"),i(2,this.atlasTex,"uAtlas"),i(6,this.rayT.t,"uRay"),i(7,this.emaT.t,"uEma"),i(8,this.beamT.t,"uBeamTex"),r===this.beam&&i(8,this.vidTex,"uBeamTex"),t.drawArrays(t.TRIANGLES,0,3)}let M=u.fil*c.filaments*c.beam;if(M>.001){let r=this.fil;t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE),t.useProgram(r),t.bindVertexArray(this.filVAO),t.uniform3fv(r.u("uEye"),d.eye),t.uniform3fv(r.u("uF"),d.F),t.uniform3fv(r.u("uR"),d.R),t.uniform3fv(r.u("uU"),d.U),t.uniform1f(r.u("uTan"),h),t.uniform1f(r.u("uAsp"),o/s),t.uniform3f(r.u("uC"),0,0,20),t.uniform3fv(r.u("uAu"),R),t.uniform3fv(r.u("uAv"),_),t.uniform2fv(r.u("uHS"),c.halfSize),t.uniform2fv(r.u("uHero"),c.hero),t.uniform1f(r.u("uTI"),e.tI),t.uniform1f(r.u("uFil"),M),t.uniform1f(r.u("uLens"),m),t.uniform1f(r.u("uLensK"),f?l.LENS_TALL_SCALE:1),t.uniform1f(r.u("uT"),e.t),t.activeTexture(t.TEXTURE7),t.bindTexture(t.TEXTURE_2D,this.emaT.t),t.uniform1i(r.u("uEma"),7),t.drawArrays(t.LINES,0,48*l.FIL),t.disable(t.BLEND),t.bindVertexArray(this.quad)}let L=this.blur;t.useProgram(L);let[N,B,D,C]=[this.b1,this.b2,this.c1,this.c2];(0,n.bloomPasses)((e,r,a,i,o,n)=>{t.bindFramebuffer(t.FRAMEBUFFER,r.f),t.viewport(0,0,r.w,r.h),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,e.t),t.uniform1i(L.u("uSrc"),3),t.uniform2f(L.u("uDir"),a/r.w,i/r.h),t.uniform1f(L.u("uThr"),o),t.uniform2f(L.u("uPre"),n?1/e.w:0,n?1/e.h:0),t.drawArrays(t.TRIANGLES,0,3)},P,N,B,D,C),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,o,s);let U=this.comp;t.useProgram(U),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,P.t),t.uniform1i(U.u("uScene"),3),t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,B.t),t.uniform1i(U.u("uB1"),4),t.activeTexture(t.TEXTURE5),t.bindTexture(t.TEXTURE_2D,C.t),t.uniform1i(U.u("uB2"),5),t.uniform1f(U.u("uT"),e.t),t.uniform3fv(U.u("uBg"),v),t.uniform1f(U.u("uHouse"),p),t.drawArrays(t.TRIANGLES,0,3)}dispose(){}}var u=e.i(471723);let c=o.PROJECTION_POSTER;function f(){document.querySelectorAll("#library img[data-src]").forEach(e=>{e.src=e.dataset.src??"",e.removeAttribute("data-src")})}function d({innerRef:e,kicker:r,title:a,lead:i,align:o="left",scrim:n=!1}){return(0,t.jsxs)("div",{ref:e,className:"lumen-proj-beat pointer-events-none absolute inset-0 opacity-0",style:{visibility:"hidden"},children:[n?(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"}):null,(0,t.jsx)("div",{className:"absolute inset-x-0 bottom-0 px-4 pb-[max(3rem,11vh)] sm:px-6",children:(0,t.jsxs)("div",{className:`mx-auto max-w-5xl ${"right"===o?"text-right":""}`,children:[(0,t.jsx)("p",{className:"text-xs tracking-[0.08em] text-white/60",children:r}),(0,t.jsx)("h2",{className:"mt-2.5 text-[32px] leading-[1.2] font-medium text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.5)] sm:text-[44px]",children:a}),(0,t.jsx)("p",{className:"mt-2.5 text-[15px] text-white/72 [text-shadow:0_1px_12px_rgb(0_0_0/0.6)]",children:i})]})})]})}e.s(["ProjectionScene",0,function({hero:e,categories:n,wallPosters:m}){let h=r.default.useRef(null),p=r.default.useRef(null),v=r.default.useRef(null),x=r.default.useRef(null),g=r.default.useRef(null),b=r.default.useRef(null),A=r.default.useRef(null),E=r.default.useRef(null);return(0,a.preload)(l.REST_FRAME,{as:"image"}),r.default.useEffect(()=>{let e,t=h.current,r=p.current;if(!t||!r)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return f();let a=s.context(r);if(!a)return f();let n=innerWidth<768,u=Math.min(devicePixelRatio||1,2);try{e=new s(r,a,{steps:n?48:72,scale:1,beamScale:u>=2?.5:.75,frameRGB:l.REST_FRAME_RGB})}catch(e){return console.warn("放映场景跑不起来，留在静态首屏",e),f()}let d=t.querySelector(".lumen-proj-still"),T=(e,t)=>e?.getAnimations?.().find(e=>e.animationName===t)??null,y=e=>e?((null==e.startTime?Number(e.currentTime??0):performance.now()-Number(e.startTime))-Number(e.effect?.getTiming().delay??0))/1e3:-1,R=T(x.current,"lumen-rise"),_=(0,l.introTakeover)(y(R),y(T(d,"lumen-proj-in"))),S=_.late?null:R;S&&(S.pause(),S.currentTime=1e3*_.tI),_.late&&(t.dataset.intro="late"),t.dataset.mode="gl",_.late&&getComputedStyle(r).opacity;let w=0,F=document.documentElement,P=document.querySelector(".lumen-spot"),M=new l.Spring(0),L=new l.Spring(0),N=_.tI,B=0,D=null,C=()=>!!D&&D.readyState>=2,U={playing:!1,time:l.VIDEO_REST},k=null,I=!0,j=!1,V=0,O=!1,H=!0,z=performance.now(),G=z,X=(0,i.makePacer)(),q=z;o.projectionClock.t0=q;let W=0,Y=null,$=0,K=0,Q=e=>new Promise((t,r)=>{let a=new Image;a.decoding="async",a.onload=()=>{a.decode?a.decode().then(()=>t(a)).catch(()=>t(a)):t(a)},a.onerror=r,a.src=e});Q(l.REST_FRAME).then(e=>{k=e}).catch(()=>{}),Q(c).then(t=>e.setPoster(t)).catch(()=>{});let Z=!1,J=!1,ee=!1,et=(e=!1)=>{if(!D||J)return;let t=D;J=!0,ee=e,t.play().then(()=>{Z=!1,e&&!U.playing&&t.pause()}).catch(e=>{Z=e?.name!=="AbortError"}).finally(()=>{J=!1,ee=!1})},er=()=>{Z&&(Z=!1,et(!U.playing))},ea=()=>{if(D)return;let e=document.createElement("video");e.muted=!0,e.defaultMuted=!0,e.setAttribute("muted",""),e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("aria-hidden","true"),e.disablePictureInPicture=!0,e.preload="auto",e.style.cssText="position:absolute;left:0;bottom:0;width:2px;height:2px;opacity:0.01;pointer-events:none",e.src="landing/projection/film-1920.mp4",r.parentElement?.appendChild(e),D=e,es||et(!0)},ei=()=>{j||(j=!0,Promise.all(m.map(e=>Q(e).catch(()=>null))).then(t=>{let r=t.filter(e=>!!e);r.length&&e.setWall(r)}))},eo=(e,t,r=16)=>{e&&(e.style.opacity=t.toFixed(3),e.style.transform=`translate3d(0, ${((1-t)*r).toFixed(1)}px, 0)`,e.style.visibility=t<.01?"hidden":"")},en=(r,a,i)=>{N<l.INTRO_END+1&&(N+=a*(r>.005?l.INTRO_SKIP_RATE:1)),M.t=r;let o=M.x;M.step(a);let n=Math.min(1,Math.max(0,M.x));L.t=Math.min(1,Math.abs(M.x-o)/a/.12),L.step(a),B+=a*(1+5*Math.max(0,L.x)),(r>.01||(i-q)/1e3>6)&&ea(),n>.4&&ei(),U=(0,l.planVideo)(U,n,a,D?.duration??0),D&&!es&&U.playing&&!Z&&D.paused&&et(),D&&C()?es?(Math.abs(D.currentTime-U.time)>.002&&!D.seeking&&(D.currentTime=U.time),e.setFrame(D)):U.playing?(Z&&!D.seeking&&Math.abs(D.currentTime-U.time)>.04&&(D.currentTime=U.time),e.setFrame(D)):!ee&&(D.paused||D.pause(),Math.abs(D.currentTime-l.VIDEO_REST)>.05&&!D.seeking&&(D.currentTime=l.VIDEO_REST),D.seeking||e.setFrame(D)):k&&I&&(e.setFrame(k),"late"===t.dataset.intro&&e.resetBeamColor(),I=!1);let s="dark"!==F.dataset.theme;Y={p:n,t:(i-q)/1e3,tA:B,tI:N,dt:a,light:s},e.render(Y),K++,N>=1.3&&!F.hasAttribute("data-wb-hero")&&F.setAttribute("data-wb-hero","1"),"late"===t.dataset.intro&&(!I||K>30)?(t.dataset.intro="fade",w=i):"fade"===t.dataset.intro&&i-w>700&&delete t.dataset.intro,S&&S.currentTime!==1e3*N&&(S.currentTime=1e3*N);let u=(0,l.copyAt)(n);v.current&&(v.current.style.opacity=u.hero.toFixed(3),v.current.style.transform=`translate3d(0, ${u.heroLift.toFixed(1)}px, 0)`,v.current.style.visibility=u.hero<.01?"hidden":""),eo(g.current,u.ads),eo(b.current,u.panel),eo(A.current,u.original),eo(E.current,u.library),t.getBoundingClientRect().bottom>80&&(!s||n<.9)?F.setAttribute("data-proj-nav",""):F.removeAttribute("data-proj-nav")},el=r=>{if(V=0,!O)return;let a=Math.min(.05,(r-G)/1e3);G=r;let o=t.getBoundingClientRect(),n=o.top+scrollY+o.height-innerHeight,s=Math.min(1,Math.max(0,scrollY/Math.max(1,n)));if(P?.dataset.mode==="gl"&&o.bottom<innerHeight-1){V=requestAnimationFrame(el);return}if(X(r,Math.abs(s-M.x)>5e-4||Math.abs(M.v)>.001||N<l.INTRO_END+1)){let e=Math.min(.05,(r-z)/1e3);z=r,en(s,e,r)}++$>90&&e.scale>i.MIN_SCALE?(W=.95*W+.05*a,$%i.SLOW_CHECK_FRAMES==0&&W>i.SLOW_FRAME_S&&(e.scale=Math.max(i.MIN_SCALE,.8*e.scale))):W=a,V=requestAnimationFrame(el)},es=!1;new URLSearchParams(location.search).has("projection-debug")&&(window.__projection={manual(){es=!0,ec()},step(e,t,r){en(e,t,r)},settled:()=>!D||!C()||!D.seeking,redraw(){Y&&(D&&C()&&e.setFrame(D),e.render({...Y,dt:0}))},ready:()=>!!k&&(!D||C()),hideCopy(){t.querySelectorAll("[data-theme='dark'], .lumen-proj-library").forEach(e=>e.style.display="none")},loadFilm:ea,loadWall:ei});let eu=()=>{O||!H||document.hidden||(O=!0,G=z=performance.now(),V=requestAnimationFrame(el))},ec=()=>{O=!1,V&&cancelAnimationFrame(V),V=0,D?.pause()},ef=new IntersectionObserver(([e])=>{(H=e.isIntersecting)?eu():(ec(),F.removeAttribute("data-proj-nav"))},{rootMargin:"0px"});ef.observe(t);let ed=()=>document.hidden?ec():eu();document.addEventListener("visibilitychange",ed),addEventListener("touchend",er,{passive:!0}),addEventListener("click",er);let em=matchMedia("(prefers-reduced-motion: reduce)"),eh=()=>{em.matches&&(ec(),t.dataset.mode="static",delete t.dataset.intro,f())};return em.addEventListener("change",eh),eu(),()=>{ec(),ef.disconnect(),document.removeEventListener("visibilitychange",ed),removeEventListener("touchend",er),removeEventListener("click",er),em.removeEventListener("change",eh),F.removeAttribute("data-proj-nav"),D&&(D.removeAttribute("src"),D.load(),D.remove()),e.dispose()}},[m]),(0,t.jsx)("section",{ref:h,className:"lumen-proj relative -mt-[120px]","data-mode":"static",id:"top",children:(0,t.jsxs)("div",{className:"sticky top-0 h-dvh overflow-hidden bg-[#050506]",children:[(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{media:"(max-aspect-ratio: 1/1)",srcSet:"landing/projection/still-tall-lens.webp"}),(0,t.jsx)("img",{alt:"","aria-hidden":!0,className:"lumen-proj-still absolute inset-0 size-full object-cover",decoding:"async",src:"landing/projection/still-lens.webp"})]}),(0,t.jsx)("canvas",{ref:p,"aria-hidden":!0,className:"lumen-proj-canvas absolute inset-0 size-full"}),(0,t.jsxs)("div",{className:"absolute inset-0","data-theme":"dark",children:[(0,t.jsx)("div",{className:"absolute inset-x-0 bottom-0 px-4 pb-[max(3rem,9vh)] sm:px-6",children:(0,t.jsx)("div",{ref:v,className:"mx-auto max-w-5xl text-white",children:(0,t.jsx)("div",{ref:x,className:"lumen-proj-hero",children:e})})}),(0,t.jsx)(d,{innerRef:g,kicker:"无广告",title:"只有正片",lead:"没有映前广告，也没有贴片。"}),(0,t.jsx)(d,{align:"right",innerRef:b,kicker:"热播榜单",title:"每天更新",lead:"总榜、真人剧、漫剧、AI 剧，四张榜每天更新。"}),(0,t.jsx)(d,{innerRef:A,kicker:"下一集",title:"下一集就绪",lead:"还在看这集，下一集已经备好了。",scrim:!0})]}),(0,t.jsxs)("div",{ref:E,className:"lumen-proj-library absolute inset-0 opacity-0",children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-background via-background/70 to-transparent"}),(0,t.jsx)(u.LibraryWallCopy,{categories:n})]})]})})}],520485)},255006,409680,484903,13421,471723,e=>{"use strict";function t(e){let t=e.length,r=r=>e[r][2]??(0===r||r===t-1?0:(e[r+1][1]-e[r-1][1])/(e[r+1][0]-e[r-1][0]));return a=>{if(a<=e[0][0])return e[0][1];if(a>=e[t-1][0])return e[t-1][1];let i=0;for(;i<t-2&&a>e[i+1][0];)i++;let[o,n]=e[i],[l,s]=e[i+1],u=l-o,c=(a-o)/u,f=c*c,d=f*c;return(2*d-3*f+1)*n+(d-2*f+c)*u*r(i)+(3*f-2*d)*s+(d-f)*u*r(i+1)}}e.s(["MIN_SCALE",0,.35,"SLOW_CHECK_FRAMES",0,30,"SLOW_FRAME_S",0,.022,"budgetScale",0,function(e,t,r){let a=e*t*r*r;return a>35e5?Math.sqrt(35e5/a):1},"makePacer",0,function(){let e=-1/0;return(t,r)=>!(t-e<1e3/(r?60:30)-2)&&(e=t,!0)}],255006),e.s(["PROJECTION_POSTER",0,"landing/projection/poster.jpg","projectionClock",0,{t0:NaN}],409680);let r=(e,t,r)=>{let a=Math.min(1,Math.max(0,(r-e)/(t-e)));return a*a*(3-2*a)},a=e=>{let t=Math.min(1,Math.max(0,e));return t<.5?2*t*t:1-(-2*t+2)**2/2},i={wide:{phi:t([[0,-1.02],[.24,-1.6],[.46,-2.9],[.72,-Math.PI,0],[1,-Math.PI]]),dist:t([[0,10],[.24,17],[.46,9],[.72,4,0],[1,4]]),theta:t([[0,0],[.24,.06],[.46,.08],[.72,0,0],[1,.05]]),px:t([[0,.5],[.24,0],[.46,0],[1,0]]),py:t([[0,-.6],[.24,-.3],[.46,0],[.72,0,0],[1,.2]]),pz:t([[0,5.8],[.24,10],[.46,6],[.72,12.4,1.2],[1,13.6]])},tall:{phi:t([[0,-1.31],[.24,-1.6],[.46,-2.9],[.72,-Math.PI,0],[1,-Math.PI]]),dist:t([[0,18.75],[.24,24],[.46,12],[.72,2.4,0],[1,1.2]]),theta:t([[0,-.354],[.24,-.05],[.46,.08],[.72,0,0],[1,.05]]),px:t([[0,-1.2],[.24,0],[.46,0],[1,0]]),py:t([[0,-3],[.24,-.3],[.46,0],[.72,0,0],[1,.2]]),pz:t([[0,6.5],[.24,10],[.46,6],[.72,12.4,1.2],[1,13.6]])}},o=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},n=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],l=(e,t)=>(Math.abs(e)**5+Math.abs(t)**5)**.2,s=[.0204,.0476,.0782,.1156],u=[.068,.0986,.1326,.17],c=.3*u[3];e.s(["BEAM_COLOR_TAU",0,1.2,"BEAM_EMERGE",0,.05,"BEAM_START",0,c,"FIL",0,280,"INTRO_END",0,2.4,"INTRO_SKIP_RATE",0,6,"LENS_R",0,u,"LENS_TALL_SCALE",0,2.6,"LENS_Z",0,s,"RAY_H",0,128,"RAY_W",0,256,"REST_FRAME",0,"landing/projection/rest.jpg","REST_FRAME_RGB",0,[186,99,6],"Spring",0,class{x;t;v=0;constructor(e){this.x=e,this.t=e}step(e){let t=(2*Math.PI/.5)**2,r=4*Math.PI*.8/.5,a=Math.max(1,Math.ceil(240*e)),i=e/a;for(let e=0;e<a;e++){let e=-t*(this.x-this.t)-r*this.v;this.v+=e*i,this.x+=this.v*i}return this.x}},"VIDEO_REST",0,1,"cameraAt",0,function(e,t){let r=t?i.tall:i.wide,a=r.phi(e),l=r.dist(e),s=r.theta(e),u=[r.px(e),r.py(e),r.pz(e)],c=[u[0]+l*Math.sin(a)*Math.cos(s),u[1]+l*Math.sin(s),u[2]+l*Math.cos(a)*Math.cos(s)],f=o([u[0]-c[0],u[1]-c[1],u[2]-c[2]]),d=o(n([0,1,0],f)),m=n(f,d);return{eye:c,F:f,R:d,U:m}},"copyAt",0,function(e){let t=(t,a)=>r(t,t+.04,e)*(1-r(a-.04,a,e));return{hero:1-r(0,.06,e),heroLift:-40*r(0,.12,e),ads:t(.12,.26),panel:t(.34,.48),original:r(.62,.67,e)*(1-r(.74,.78,e)),library:r(.93,.98,e)}},"curve",0,t,"filamentEnds",0,function(){let e=7,t=()=>(e=16807*e%0x7fffffff)/0x7fffffff,r=[];for(let e=0;e<280;e++){let e=0,a=0;do e=2*t()-1,a=2*t()-1;while(l(e,a)>.92)r.push([e,a,t()])}return r},"fovY",0,e=>e?1.15:.8,"intro",0,function(e){let t=a((e-1)/1.1);return{src:r(.1,.4,e),fil:r(.25,.4,e)*(1-.86*r(1.2,2.2,e)),fill:1.3*a((e-.85)/.5),vol:r(.95,1.35,e),rad:.7+13*t,gain:1+2.1*t,uni:r(1.7,2.4,e),lit:r(1.1,1.8,e)}},"introTakeover",0,function(e,t){let r=e>0||t>0;return{late:r,tI:2.4*!!r}},"lensGlow",0,e=>1-r(.06,.26,e),"planVideo",0,function(e,t,r,a){let i=e.playing,o=e.time;return!i&&t>.2&&t<.92?i=!0:i&&(t<.12||t>.96)&&(i=!1,o=1),i&&(o=(o+r)%(a||12.76)),{playing:i,time:o}},"sceneAt",0,function(e,t){let a=r(.73,.86,e),i=r(.84,1,e),o=r(.9,1,e)*(1.2+(e>.9?.05*t:0));return{halfSize:[8*(.5/8)**a,3.35*(.75/3.35)**a],radius:.02+.025*a,tiltX:26*i*Math.PI/180,tiltZ:10*i*Math.PI/180,drift:o,hero:[-(.6*o),0],beam:1-r(.8,.9,e),morph:r(.8,.88,e),wall:r(.8,.95,e),dim:1-.42*r(.9,1,e),heroGain:.62-.2*r(.86,1,e),floor:1-r(.78,.86,e),filaments:1-r(.5,.64,e)}},"smooth",0,r],484903);let f=e=>e.toFixed(4),d=`#version 300 es
in vec2 p; out vec2 uv; void main(){ uv = p*.5 + .5; gl_Position = vec4(p, 0., 1.); }`,m=`#version 300 es
precision highp float; in vec2 uv; uniform sampler2D uSrc; uniform vec2 uDir; uniform float uThr; uniform vec2 uPre; out vec4 o;

vec3 src(vec2 p){
  if (uPre.x == 0.) return texture(uSrc, p).rgb;
  return .25*(texture(uSrc, p + uPre*vec2(-1., -1.)).rgb + texture(uSrc, p + uPre*vec2(1., -1.)).rgb
            + texture(uSrc, p + uPre*vec2(-1., 1.)).rgb + texture(uSrc, p + uPre*vec2(1., 1.)).rgb);
}
vec3 tap(vec2 p){ vec3 c = src(p); float l = max(dot(c, vec3(.3, .59, .11)), 1e-4); return c*max(l - uThr, 0.)/l; }
void main(){ vec3 c = vec3(0.); float w[5] = float[5](.227, .194, .121, .054, .016);
  c += tap(uv)*w[0]; for (int i = 1; i < 5; i++) { c += tap(uv + uDir*float(i))*w[i]; c += tap(uv - uDir*float(i))*w[i]; } o = vec4(c, 1.); }`,h=`#version 300 es
precision highp float; in vec2 uv; uniform sampler2D uScene; uniform sampler2D uB1; uniform sampler2D uB2; uniform float uT;
uniform vec3 uBg; uniform float uHouse; out vec4 o;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
void main(){
  vec4 sc = texture(uScene, uv);
  vec3 c = sc.rgb + (texture(uB1, uv).rgb*1.1 + texture(uB2, uv).rgb*.3)*.85*(1. - uHouse);
  c = 1. - exp(-c*1.3);
  c = pow(c, vec3(1./2.2));
  c *= mix(1., .8, smoothstep(.55, 1.1, length(uv - .5)*1.3)*(1. - uHouse));
  c += (h21(gl_FragCoord.xy + fract(uT*24.)*91.) - .5)*.035*c;
  
  vec3 lit = mix(uBg, mix(c, uBg, .22), clamp(sc.a, 0., 1.));
  vec3 dark = uBg + c*(1. - uBg);
  o = vec4(mix(dark, lit, uHouse), 1.);
}`,p=`#version 300 es
precision highp float; in vec2 uv; uniform sampler2D uVid; uniform float uA; out vec4 o;
void main(){ o = vec4(textureLod(uVid, uv, 3.).rgb, uA); }`,v=`#version 300 es
in vec4 aV; uniform vec3 uEye; uniform vec3 uF; uniform vec3 uR; uniform vec3 uU; uniform float uTan; uniform float uAsp;
uniform vec3 uC; uniform vec3 uAu; uniform vec3 uAv; uniform vec2 uHS; uniform vec2 uHero;
out float vA; out float vSeed; out vec2 vUV;
uniform float uT; uniform float uLensK;
void main(){
  
  vec2 sway = vec2(sin(uT*.23 + aV.w*31.), cos(uT*.17 + aV.w*23.))*.03;
  vec3 sp = uC + uAu*((aV.x + sway.x)*uHS.x + uHero.x) + uAv*((aV.y + sway.y)*uHS.y + uHero.y);
  
  vec3 lp = (cross(uAu, uAv)*${f(s[3])} + (uAu*aV.x + uAv*aV.y)*${f(c)})*uLensK;
  vec3 d = mix(lp, sp, aV.z) - uEye; float z = dot(d, uF);
  gl_Position = vec4(dot(d, uR)/(uTan*uAsp), dot(d, uU)/uTan, .5*z, z);
  vA = aV.z; vSeed = aV.w; vUV = aV.xy;
}`,x=`#version 300 es
precision highp float; in float vA; in float vSeed; in vec2 vUV; uniform float uTI; uniform float uFil; uniform float uT; uniform sampler2D uEma;
uniform float uLens; out vec4 o;
float h(float x){ return fract(sin(x*127.1)*43758.5453); }
void main(){
  float launch = .25 + .6*vSeed;
  float g = clamp((uTI - launch)/.8, 0., 1.);
  if (vA > g) discard;
  float head = exp(-(g - vA)*14.)*(1. - step(.999, g));
  float base = .25 + .75*pow(h(vSeed*17.), 3.);
  
  float along = (exp(-vA*2.2)*.85 + .15)*mix(1., smoothstep(0., ${f(.05)}, vA), 1. - uLens);
  vec3 c = pow(textureLod(uEma, vec2(vUV.x*.46 + .5, .5 - vUV.y*.46), 4.).rgb, vec3(2.2))*2.2 + vec3(.25, .2, .14);
  float tw = .75 + .25*sin(uT*3. + vSeed*60.);
  
  float flow = pow(.5 + .5*sin((vA*2. - uT*(.18 + .22*h(vSeed*5.)))*6.2832 + vSeed*40.), 10.);
  o = vec4(c*(base*along*tw*(1. + 2.2*flow) + head*1.2)*uFil*.9, 1.);
}`,g=`#version 300 es
in vec3 aP; uniform float uRad; out float vS;
void main(){ gl_Position = vec4(aP.xy, 0., 1.); gl_PointSize = uRad*6.; vS = aP.z; }`,b=`#version 300 es
precision highp float; in float vS; uniform float uRad; uniform float uGain; out vec4 o;
float h(float x){ return fract(sin(x*127.1)*43758.5453); }
void main(){ vec2 d = (gl_PointCoord - .5)*6.; float g = exp(-dot(d, d)); float b = .25 + .75*pow(h(vS*17.), 3.); o = vec4(vec3(g*b*24.*uGain/(uRad*uRad)), 1.); }`;e.s(["BLUR_FS",0,m,"COMP_FS",0,h,"EMA_FS",0,p,"FIL_FS",0,x,"FIL_VS",0,v,"QUAD_VS",0,d,"RAY_FS",0,b,"RAY_VS",0,g,"bloomPasses",0,function(e,t,r,a,i,o){e(t,r,1.5,0,.3,!0),e(r,a,0,1.5,0,!1),e(a,r,2,0,0,!1),e(r,a,0,2,0,!1),e(a,r,2,0,0,!1),e(r,a,0,2,0,!1),e(a,i,1.5,0,0,!1),e(i,o,0,1.5,0,!1),e(o,i,2,0,0,!1),e(i,o,0,2,0,!1),e(o,i,2,0,0,!1),e(i,o,0,2,0,!1)},"sceneFS",0,(e,t)=>`#version 300 es
#define BEAM ${+!!t}
precision highp float;
uniform vec2 uRes; uniform float uT; uniform float uTA;
uniform vec3 uEye; uniform vec3 uF; uniform vec3 uR; uniform vec3 uU; uniform float uTan;
uniform vec3 uC; uniform vec3 uAu; uniform vec3 uAv; uniform vec3 uAn;
uniform vec2 uHS; uniform vec2 uHero; uniform float uRad;
uniform float uFill; uniform float uUni; uniform float uVol; uniform float uLit; uniform float uSrc; uniform float uLens; uniform float uLensK;
uniform float uFloor; uniform float uHeroGain; uniform float uBeam; uniform float uMorph; uniform float uWall; uniform float uDim; uniform float uDrift;
uniform sampler2D uVid; uniform sampler2D uPoster; uniform sampler2D uAtlas; uniform sampler2D uEma; uniform sampler2D uRay; uniform sampler2D uBeamTex;
uniform vec2 uAtlasGrid; uniform float uAtlasCount;
out vec4 o;
float h31(vec3 p){ p = fract(p*.3183099 + .1); p *= 17.; return fract(p.x*p.y*p.z*(p.x + p.y + p.z)); }
float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3. - 2.*f);
  return mix(mix(mix(h31(i), h31(i + vec3(1, 0, 0)), f.x), mix(h31(i + vec3(0, 1, 0)), h31(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h31(i + vec3(0, 0, 1)), h31(i + vec3(1, 0, 1)), f.x), mix(h31(i + vec3(0, 1, 1)), h31(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
float fbm3(vec3 p){ return .55*n3(p) + .3*n3(p*2.1 + 3.1) + .15*n3(p*4.3 + 7.7); }
float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)))*43758.5453); }

vec3 vid(vec2 r, float lod, float asp){
  float fx = min(1., asp/2.39), fy = min(1., 2.39/asp);
  return pow(textureLod(uVid, vec2(r.x*fx*.5 + .5, .5 - r.y*fy*.5), lod).rgb, vec3(2.2));
}

vec3 beamImg(vec2 r, float lod, float asp){
  float fx = min(1., asp/2.39), fy = min(1., 2.39/asp);
  return pow(textureLod(uEma, vec2(r.x*fx*.5 + .5, .5 - r.y*fy*.5), lod).rgb, vec3(2.2));
}
vec3 poster(vec2 r, float lod){ return pow(textureLod(uPoster, vec2(r.x*.5 + .5, .5 - r.y*.5), lod).rgb, vec3(2.2)); }

float mask(vec2 uv){ vec2 d = abs(uv); float s = pow(pow(d.x, 5.) + pow(d.y, 5.), .2); return smoothstep(1.08, .72, s); }
float rbox(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }

const float BZ0 = ${f(s[3])}, BL0 = ${f(c)};
const float LZ0[4] = float[4](${s.map(f).join(", ")});
const float LR0[4] = float[4](${u.map(f).join(", ")});

vec2 lensHit(vec2 q, float z){ vec3 d = normalize(uF + (q.x*uR + q.y*uU)*2.*uTan); return (uEye + d*((z - uEye.z)/d.z)).xy; }
void main(){
  
  float BZ = BZ0*uLensK, BL = BL0*uLensK;
  float LZ[4], LR[4];
  for (int k = 0; k < 4; k++) { LZ[k] = LZ0[k]*uLensK; LR[k] = LR0[k]*uLensK; }
  vec2 qq = (gl_FragCoord.xy - .5*uRes)/uRes.y;
  vec3 rd = normalize(uF + (qq.x*uR + qq.y*uU)*2.*uTan);
  vec3 ro = uEye;
  float cn = dot(uC, uAn);
  float den = dot(rd, uAn), s0 = dot(ro, uAn);
  float tHit = abs(den) > 1e-5 ? (cn - s0)/den : -1.;
  vec3 col = vec3(0.);
  float cover = 0.;
  float asp = uHS.x/uHS.y;
  
  const float FY = -4.3;
  float tF = rd.y < -1e-4 ? (FY - ro.y)/rd.y : -1.;
  float tOpaque = tHit > 0. ? tHit : 1e9;
  if (tF > 0. && tF < tOpaque && uFloor > .001) {
#if BEAM == 0
    vec3 P = ro + rd*tF;
    vec3 fl = vec3(0.);
    if (P.z < 20.) {
      vec3 rr = vec3(rd.x, -rd.y, rd.z);
      if (rr.z > 1e-4) {
        vec3 Q = P + rr*((20. - P.z)/rr.z);
        vec2 lq = Q.xy - uHero;
        float dz = 20. - P.z;
        float blurR = .15 + dz*.05;
        float inS = smoothstep(blurR, -blurR, rbox(lq, uHS, uRad));
        float fres = .03 + .5*pow(1. - abs(rd.y), 5.);
        fl += vid(lq/uHS, 2.5 + dz*.22, asp)*inS*fres*.9;
      }
      vec2 d = vec2(P.x/(uHS.x + 3.), (20. - P.z)/7.);
      fl += vid(vec2(0.), 9., 2.39)*exp(-dot(d, d))*.035;
    }
    col = fl*uFloor*uLit;
#endif
    tOpaque = tF;
  }
#if BEAM
  
  vec3 acc = vec3(0.);
  if (uBeam > .001) {
    float ta, tb;
    if (abs(den) < 1e-5) { ta = 0.; tb = 80.; }
    else { float t1 = (BZ - s0)/den, t2 = (cn - s0)/den; ta = min(t1, t2); tb = max(t1, t2); }
    ta = max(ta, 0.); tb = min(min(tb, 80.), tOpaque);
    const int N = ${e};
    float span = max(tb - ta, 0.), dt = span/float(N);
    float jit = fract(52.9829189*fract(dot(gl_FragCoord.xy + fract(uT*7.)*vec2(47., 17.), vec2(.06711056, .00583715))));
    for (int i = 0; i < N; i++) {
      vec3 x = ro + rd*(ta + (float(i) + jit)*dt);
      float dn = dot(x, uAn);
      if (dn <= BZ || dn >= cn) continue;
      
      float sN = (dn - BZ)/(cn - BZ);
      vec2 ab = vec2(dot(x, uAu), dot(x, uAv));
      vec2 uv = (ab - sN*(vec2(dot(uC, uAu), dot(uC, uAv)) + uHero))/mix(vec2(BL), uHS, sN);
      float m = mask(uv);
      if (m <= 0.) continue;
      float haze = .25 + .75*fbm3(x*vec3(.5, .5, .3) + vec3(0., uTA*.05, -uTA*.035));
      
      float shafts = .55 + .9*n3(vec3(uv*7. + vec2(uTA*.035, 0.), uTA*.16))*n3(vec3(uv*2.3 + 5. - vec2(uTA*.02, 0.), uTA*.08));
      vec3 L = mix(beamImg(uv*.92, 1.5, asp), poster(uv*.9, 5.), uMorph)*2.4 + .04;
      float fall = 1./(1. + dot(x, x)*.01);
      float ct = dot(normalize(x), -rd);
      float ph = (1. - .3025)/pow(1. + .3025 - 1.1*ct, 1.5)*.25 + .08;
      
      float along = 1. - .9*smoothstep(.6, .95, dot(rd, normalize(x)));
      
      float ray = texture(uRay, clamp(uv*.5 + .5, 0., 1.)).r;
      float dens = mix(ray, 1., uUni)*uVol*smoothstep(uFill, uFill - .25, dn/cn);
      
      dens *= mix(1., smoothstep(0., ${f(.05)}, sN), 1. - uLens);
      acc += L*m*haze*shafts*fall*ph*dt*along*dens;
    }
  }
  o = vec4(acc*.9*uBeam, 1.);
  return;
#else
  col += texture(uBeamTex, gl_FragCoord.xy/uRes).rgb;
#endif
  
  if (tHit > 0.) {
    vec3 hp = ro + rd*tHit;
    vec2 l = vec2(dot(hp - uC, uAu), dot(hp - uC, uAv));
    vec2 lh = l - uHero;
    float px = tHit*2.*uTan/uRes.y*1.5;
    float inH = smoothstep(px, -px, rbox(lh, uHS, uRad));
    if (inH > 0.) {
      vec2 r = lh/uHS;
      vec3 scr = vid(r, 0., asp)*.72*(1. - .16*dot(r*r, vec2(.5, .8)))*uLit;
      col = mix(col, mix(scr, poster(r, 0.)*uHeroGain, uMorph), inH);
      cover = inH*uMorph;
    }
    if (uWall > 0.) {
      vec2 P = vec2(1.14, 1.64);
      float j = floor(l.y/P.y + .5);
      float dir = mod(j, 2.) < 1. ? 1. : -1.;
      float dr = uDrift*dir*(.6 + .2*mod(j, 3.));
      float i = floor((l.x + dr)/P.x + .5);
      if (!(i == 0. && j == 0.)) {
        vec2 c = vec2(i*P.x - dr, j*P.y);
        float inT = smoothstep(px, -px, rbox(l - c, vec2(.5, .75), .045));
        
        float dist = length(vec2(c.x/P.x, j*1.45));
        float appear = clamp(uWall*16. - dist, 0., 1.); appear = appear*appear*(3. - 2.*appear);
        float sharp = clamp(uWall*16. - dist - 1.5, 0., 1.);
        
        float cell = mod(i*5. + j*7. + 997., uAtlasCount);
        vec2 cxy = vec2(mod(cell, uAtlasGrid.x), floor(cell/uAtlasGrid.x));
        vec2 r = (l - c)/vec2(.5, .75);
        vec2 tuv = (cxy + vec2(r.x*.5 + .5, .5 - r.y*.5))/uAtlasGrid;
        vec3 pc = pow(textureLod(uAtlas, tuv, mix(4.5, 0., sharp)).rgb, vec3(2.2));
        float edge = exp(-pow(abs(l.x)/9., 4.))*exp(-pow(abs(l.y)/4.6, 4.));
        col += pc*inT*appear*edge*.36*uDim;
        cover = max(cover, inT*appear*edge);
      }
    }
  }
  
  float front = smoothstep(-.1, .4, normalize(ro).z)*uSrc;
  vec3 dirP = -ro/length(ro);
  if (dot(dirP, uF) > 0. && uSrc > 0.) {
    vec2 sp = vec2(dot(dirP, uR), dot(dirP, uU))/(dot(dirP, uF)*2.*uTan);
    float r = length(qq - sp);
    vec3 tint = beamImg(vec2(0.), 6., 2.39)*2.4 + .04;
    vec3 warm = tint/max(max(tint.r, tint.g), 1e-3);
    
    float face = uLens;
    col += (mix(vec3(1., .96, .9), warm, .25)*exp(-r*r*20000.)*.6 + warm*(exp(-r*r*1800.)*.22 + .02/(1. + r*r*8000.))*.25)*front*face;
    
    float sc = 1./(dot(-ro, uF)*2.*uTan);
    if (face > 0. && ro.z > LZ[3] && r < LR[3]*sc*3.) {
      vec3 coat[4] = vec3[4](vec3(.55, .35, 1.), vec3(.3, 1., .75), vec3(1., .4, .65), vec3(1., .7, .35));
      vec2 hit[4]; float rr[4]; float fw[4];
      for (int k = 0; k < 4; k++) {
        hit[k] = lensHit(qq, LZ[k]);
        rr[k] = length(hit[k])/LR[k];
        fw[k] = max(abs(length(lensHit(qq + vec2(1./uRes.y, 0.), LZ[k]))/LR[k] - rr[k])
                  + abs(length(lensHit(qq + vec2(0., 1./uRes.y), LZ[k]))/LR[k] - rr[k]), 1e-4);
      }
      vec3 lens = vec3(0.);
      for (int k = 3; k >= 0; k--) {
        float vis = 1.;
        for (int j = 3; j > k; j--) vis *= smoothstep(1., .985, rr[j]);
        float ring = smoothstep(fw[k]*.9, 0., abs(rr[k] - 1.)) + .3*exp(-abs(rr[k] - 1.)/(fw[k]*2.5));
        float a = atan(hit[k].y, hit[k].x);
        float ga = 2.2 - uTA*.12 + float(k)*.7;
        float glint = .12 + .88*pow(max(0., cos(a - ga)), 8.);
        float inside = smoothstep(1., 1. - fw[k]*2., rr[k]);
        float cres = inside*smoothstep(.55, .88, rr[k])*smoothstep(1., .94, rr[k])*pow(max(0., cos(a - ga - 2.4 - float(k)*1.3)), 3.);
        float glass = inside*(.02 + .06*rr[k]*rr[k]);
        
        float lit = smoothstep(float(3 - k)*.08, float(3 - k)*.08 + .25, uSrc);
        lens += (mix(warm, vec3(1., .95, .88), .45)*ring*glint*1.1 + warm*glass*.1 + coat[k]*cres*1.1)*vis*lit;
      }
      
      float a3 = atan(hit[3].y, hit[3].x);
      lens += mix(warm, vec3(1., .95, .88), .3)*smoothstep(fw[3]*1.1, 0., abs(rr[3] - 1.09))
            *(.08 + .6*pow(max(0., cos(a3 - 2.2 + uTA*.12 - 3.)), 6.))*smoothstep(0., .25, uSrc);
      col += lens*uSrc*face;
    }
  }
  o = vec4(col, cover);
}`],13421);var A=e.i(499207);let E=e=>({"--reveal-delay":`${4*e}%`});var T=e.i(466513);e.s(["LibraryWallCopy",0,function({categories:e}){return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center px-4",children:[(0,A.jsx)("div",{className:"pointer-events-none absolute h-[400px] w-[460px] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--background)_82%,transparent)_42%,color-mix(in_srgb,var(--background)_45%,transparent)_72%,transparent)] sm:h-[600px] sm:w-[min(1180px,160%)] sm:bg-[radial-gradient(closest-side,var(--background)_45%,color-mix(in_srgb,var(--background)_80%,transparent)_68%,transparent)]"}),(0,A.jsxs)("div",{className:"relative flex flex-col items-center text-center",children:[(0,A.jsx)("p",{className:"lumen-line text-sm font-medium text-accent-soft-foreground sm:text-base",style:E(0),children:"片库"}),(0,A.jsxs)("h2",{className:"mt-3 text-4xl leading-[1.15] font-medium sm:text-[56px]",children:[(0,A.jsx)("span",{className:"lumen-line block",style:E(1),children:"海量短剧"}),(0,A.jsx)("span",{className:"lumen-line block text-[color:var(--lx-subhead)]",style:E(2),children:"每日更新"})]}),e.length?(0,A.jsx)("ul",{className:"lumen-line mt-8 flex max-w-[340px] flex-wrap justify-center gap-2.5 sm:max-w-none sm:flex-nowrap",style:E(3),children:e.map(e=>(0,A.jsxs)("li",{className:"flex h-10 items-center gap-2.5 rounded-full bg-sheet/[0.82] pr-4 pl-1.5 text-[15px] shadow-[inset_0_0_0_1px_rgb(var(--lx-ink)/0.08)] md:bg-sheet/60 md:backdrop-blur-md md:dark:bg-white/[0.07]",children:[(0,A.jsx)("img",{alt:"",className:"size-7 rounded-full object-cover",decoding:"async",loading:"lazy",src:(0,T.posterThumbUrl)(e.poster.imageUrl)}),e.label]},e.label))}):null]})]})})}],471723)}]);