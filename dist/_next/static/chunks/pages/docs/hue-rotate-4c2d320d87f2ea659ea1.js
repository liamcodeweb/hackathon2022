(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4670],{59136:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var n=t(159),s=t(10219),p=(t(67294),t(3905)),r=t(41664),o=t(49485),l=t(34304),m=t(43119),i=t(27606),c=t(83096),u=t(26612),k=t(45843),N=t(93204),d=t(38793);const g=["components"],h=i.L,v=(f="Heading",function(a){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",a)});var f;const w={Layout:h,classes:{utilities:{".hue-rotate-0":{"--tw-hue-rotate":"hue-rotate(0deg)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".hue-rotate-15":{"--tw-hue-rotate":"hue-rotate(15deg)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".hue-rotate-30":{"--tw-hue-rotate":"hue-rotate(30deg)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".hue-rotate-60":{"--tw-hue-rotate":"hue-rotate(60deg)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".hue-rotate-90":{"--tw-hue-rotate":"hue-rotate(90deg)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".hue-rotate-180":{"--tw-hue-rotate":"hue-rotate(180deg)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"}},transformProperties:({properties:a})=>({filter:a["--tw-hue-rotate"]})},meta:{title:"Hue Rotate",description:"Utilities for applying hue-rotate filters to an element."},slug:"hue-rotate",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Rotating an element's hue",slug:"rotating-an-element-s-hue",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]},{title:"Removing filters",slug:"removing-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},x=c.X_;function b(a){let{components:e}=a,t=(0,s.Z)(a,g);return(0,p.kt)(x,(0,n.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)(l.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,p.kt)(l.X,{level:3,id:"rotating-an-element-s-hue",nextElement:{type:"paragraph"}},"Rotating an element's hue"),(0,p.kt)("p",null,"Use the ",(0,p.kt)("inlineCode",{parentName:"p"},"hue-rotate-{amount}")," utilities to rotate the hue of an element."),(0,p.kt)(m.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">\n  <div class="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">hue-rotate-15</p>\n      <div class="relative hue-rotate-15">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">hue-rotate-90</p>\n      <div class="relative hue-rotate-90">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">hue-rotate-180</p>\n      <div class="relative hue-rotate-180">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">-hue-rotate-60</p>\n      <div class="relative -hue-rotate-60">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n  </div>\n  </div>\n'}),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"hue-rotate-15")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"hue-rotate-90")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"hue-rotate-180")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"-hue-rotate-60")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)(l.X,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,p.kt)("p",null,"To use a negative hue-rotate value, prefix the class name with a dash to convert it to a negative value."),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"-hue-rotate-60 ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)(l.X,{level:3,id:"removing-filters",nextElement:{type:"jsx"}},"Removing filters"),(0,p.kt)(d.R,{defaultClass:"blur-md invert hue-rotate-180",mdxType:"RemovingFilters"}),(0,p.kt)("hr",null),(0,p.kt)(v,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,p.kt)(v,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,p.kt)(N.k,{defaultClass:"hue-rotate-60",featuredClass:"hue-rotate-0",mdxType:"HoverFocusAndOtherStates"}),(0,p.kt)(v,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,p.kt)(k.p,{defaultClass:"hue-rotate-60",featuredClass:"hue-rotate-0",mdxType:"BreakpointsAndMediaQueries"}),(0,p.kt)("hr",null),(0,p.kt)(l.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,p.kt)(l.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,p.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,p.kt)("inlineCode",{parentName:"p"},"hue-rotate")," utilities. You can customize these values by editing ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.hueRotate")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.extend.hueRotate")," in your ",(0,p.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,p.kt)(o.M,{filename:"tailwind.config.js"},(0,p.kt)("pre",{className:"language-diff-js"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-js"},(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"module"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"."),(0,p.kt)("span",{parentName:"span",className:"token property-access"},"exports"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token operator"},"="),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token literal-property property"},"theme"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,p.kt)("span",{parentName:"span",className:"token literal-property property"},"extend"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"      "),(0,p.kt)("span",{parentName:"span",className:"token literal-property property"},"hueRotate"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"        "),(0,p.kt)("span",{parentName:"span",className:"token string-property property"},"'-270'"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token string"},"'-270deg'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"        "),(0,p.kt)("span",{parentName:"span",className:"token number"},"270"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token string"},"'270deg'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"      "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n")))),(0,p.kt)("p",null,"Learn more about customizing the default theme in the ",(0,p.kt)(r.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,p.kt)("a",null,"theme customization"))," documentation."),(0,p.kt)(l.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,p.kt)(u.k,{property:"hue-rotate",featuredClass:"hue-rotate-[270deg]",mdxType:"ArbitraryValues"}))}b.isMDXComponent=!0,b.layoutProps=w},6402:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/hue-rotate",function(){return t(59136)}])}},function(a){a.O(0,[9774,3430,184,5855,4327,489,946,4241,2888,179],(function(){return e=6402,a(a.s=e);var e}));var e=a.O();_N_E=e}]);