(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6728],{21370:function(e,a){"use strict";a.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},98503:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var n=t(159),s=t(10219),r=(t(67294),t(3905)),o=t(41664),i=t(49485),l=t(34304),p=t(43119),c=t(27606),d=t(83096),m=t(26612),u=t(45843),g=t(93204);const k=["components"],h=c.L,f=(N="Heading",function(e){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var N;const w={Layout:h,classes:{utilities:{".ring-0":{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},".ring-1":{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},".ring-2":{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},".ring-4":{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},".ring-8":{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},".ring":{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},".ring-inset":{"--tw-ring-inset":"inset"}},filterRules:([e])=>e.startsWith("."),transformProperties:({selector:e,properties:a})=>".ring-inset"===e?{"--tw-ring-inset":"inset"}:(delete a["--tw-ring-inset"],delete a["--tw-ring-offset-width"],delete a["--tw-ring-offset-color"],delete a["--tw-ring-color"],delete a["--tw-ring-offset-shadow"],delete a["box-shadow"],a["box-shadow"]=a["--tw-ring-shadow"],delete a["--tw-ring-shadow"],a),sort:e=>[...e].sort(((e,a)=>(e=".ring"===e?".ring-3":e)<(a=".ring"===a?".ring-3":a)?-1:a<e?1:0))},meta:{title:"Ring Width",description:"Utilities for creating outline rings with box-shadows."},slug:"ring-width",tableOfContents:[{title:"Basic Usage",slug:"basic-usage",children:[{title:"Adding a ring",slug:"adding-a-ring",children:[]},{title:"Focus rings",slug:"focus-rings",children:[]},{title:"Inset rings",slug:"inset-rings",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},v=d.X_;function x(e){let{components:a}=e,t=(0,s.Z)(e,k);return(0,r.kt)(v,(0,n.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic Usage"),(0,r.kt)(l.X,{level:3,id:"adding-a-ring",nextElement:{type:"paragraph"}},"Adding a ring"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ring-{width}")," utilities to apply solid box-shadow of a specific thickness to an element. Rings are a semi-transparent blue color by default, similar to the default focus ring style in many systems."),(0,r.kt)(p.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-center font-bold leading-6">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">ring-2</p>\n      <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent">Button A</button>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">ring</p>\n        <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent">Button B</button>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">ring-4</p>\n      <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-4 ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent">Button C</button>\n    </div>\n  </div>\n'}),(0,r.kt)("pre",{className:"language-html"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"... ring-offset-2 ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"ring-2"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Button A",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"... ring-offset-2 ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"ring"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Button B",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"... ring-offset-2 ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"ring-4"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Button C",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,r.kt)("p",null,"Ring utilities compose gracefully with regular ",(0,r.kt)("inlineCode",{parentName:"p"},"shadow-{size}")," utilities and can be combined on the same element."),(0,r.kt)("p",null,"You can also control the color, opacity, and offset of rings using the ",(0,r.kt)(o.default,{href:"/docs/ring-color",passHref:!0},(0,r.kt)("a",null,"ringColor")),", ",(0,r.kt)(o.default,{href:"/docs/ring-opacity",passHref:!0},(0,r.kt)("a",null,"ringOpacity")),", and ",(0,r.kt)(o.default,{href:"/docs/ring-offset-width",passHref:!0},(0,r.kt)("a",null,"ringOffsetWidth"))," utilities."),(0,r.kt)(l.X,{level:3,id:"focus-rings",nextElement:{type:"paragraph"}},"Focus rings"),(0,r.kt)("p",null,"The ring width utilities make it easy to use custom focus rings by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"focus:")," to the beginning of any ",(0,r.kt)("inlineCode",{parentName:"p"},"ring-{width}")," utility."),(0,r.kt)(p.e,{hint:"Focus this button to see the ring appear",containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-center max-w-md mx-auto gap-4 text-white text-sm text-center font-bold leading-6">\n    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-violet-300 ring-offset-2 ring-offset-slate-50 focus:outline-none focus:ring-2 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent">Save Changes</button>\n  </div>\n'}),(0,r.kt)("pre",{className:"language-html"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"... ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"focus:ring-2"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Save Changes",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"focus")," variant is enabled by default for the ",(0,r.kt)(o.default,{href:"/docs/ring-color",passHref:!0},(0,r.kt)("a",null,"ringColor")),", ",(0,r.kt)(o.default,{href:"/docs/ring-opacity",passHref:!0},(0,r.kt)("a",null,"ringOpacity")),", ",(0,r.kt)(o.default,{href:"/docs/ring-offset-width",passHref:!0},(0,r.kt)("a",null,"ringOffsetWidth")),", and ",(0,r.kt)(o.default,{href:"/docs/ring-offset-color",passHref:!0},(0,r.kt)("a",null,"ringOffsetColor"))," utilities as well."),(0,r.kt)(l.X,{level:3,id:"inset-rings",nextElement:{type:"paragraph"}},"Inset rings"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ring-inset")," utility to force a ring to render on the inside of an element instead of the outside. This can be useful for elements at the edge of the screen where part of the ring wouldn\u2019t be visible."),(0,r.kt)(p.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-center max-w-md mx-auto gap-4 text-white text-sm text-center font-bold leading-6">\n    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-pink-300 ring-2 ring-inset dark:bg-slate-700 dark:text-slate-200 dark:ring-pink-500">Save Changes</button>\n  </div>\n'}),(0,r.kt)("pre",{className:"language-html"},(0,r.kt)("code",{parentName:"pre",className:"dark:hidden language-html"},(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"... ring-2 ring-pink-300 ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"ring-inset"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  Save Changes\n",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">"))),(0,r.kt)("code",{parentName:"pre",className:"hidden dark:block language-html"},(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"... ring-2 ring-pink-500 ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"ring-inset"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  Save Changes\n",(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,r.kt)("hr",null),(0,r.kt)(f,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(f,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(g.k,{defaultClass:"ring-2",featuredClass:"ring-4",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(f,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(u.p,{defaultClass:"ring-2",featuredClass:"ring-4",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(l.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(l.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,r.kt)("inlineCode",{parentName:"p"},"ring-width")," utilities. You can customize these values by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.ringWidth")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.extend.ringWidth")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(i.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",{className:"language-diff-js"},(0,r.kt)("code",{parentName:"pre",className:"language-diff-js"},(0,r.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"module"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"."),(0,r.kt)("span",{parentName:"span",className:"token property-access"},"exports"),(0,r.kt)("span",{parentName:"span",className:"token plain"}," "),(0,r.kt)("span",{parentName:"span",className:"token operator"},"="),(0,r.kt)("span",{parentName:"span",className:"token plain"}," "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,r.kt)("span",{parentName:"span",className:"token literal-property property"},"theme"),(0,r.kt)("span",{parentName:"span",className:"token operator"},":"),(0,r.kt)("span",{parentName:"span",className:"token plain"}," "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,r.kt)("span",{parentName:"span",className:"token literal-property property"},"extend"),(0,r.kt)("span",{parentName:"span",className:"token operator"},":"),(0,r.kt)("span",{parentName:"span",className:"token plain"}," "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"      "),(0,r.kt)("span",{parentName:"span",className:"token literal-property property"},"ringWidth"),(0,r.kt)("span",{parentName:"span",className:"token operator"},":"),(0,r.kt)("span",{parentName:"span",className:"token plain"}," "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"        "),(0,r.kt)("span",{parentName:"span",className:"token string-property property"},"'10'"),(0,r.kt)("span",{parentName:"span",className:"token operator"},":"),(0,r.kt)("span",{parentName:"span",className:"token plain"}," "),(0,r.kt)("span",{parentName:"span",className:"token string"},"'10px'"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},","),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"      "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,r.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,r.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,r.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,r.kt)("span",{parentName:"span",className:"token plain"}),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(o.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(l.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(m.k,{property:"ring",featuredClass:"ring-[10px]",mdxType:"ArbitraryValues"}))}x.isMDXComponent=!0,x.layoutProps=w},26612:function(e,a,t){"use strict";t.d(a,{k:function(){return s}});var n=t(85893);function s({property:e,name:a,defaultClass:t,featuredClass:s,element:r="div",children:o}){const i=a||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:e})," value"]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["If you need to use a one-off ",i," that doesn\u2019t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."]}),o||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,r).replace("{defaultClass} ",t?`${t} `:"").replace("{featuredClass}",s)}})}),(0,n.jsxs)("p",{children:["Learn more about arbitrary value support in the"," ",(0,n.jsx)("a",{href:"/docs/adding-custom-styles#using-arbitrary-values",children:"arbitrary values"})," documentation."]})]})}},45843:function(e,a,t){"use strict";t.d(a,{p:function(){return s}});var n=t(85893);function s({defaultClass:e,featuredClass:a,element:t="div",children:s}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",a]})," to apply the ",(0,n.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),s||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,t).replace("{defaultClass} ",e?`${e} `:"").replace("{featuredClass}",a)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},49485:function(e,a,t){"use strict";t.d(a,{M:function(){return r}});var n=t(79836),s=t(85893);function r({filename:e,children:a}){return(0,s.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,s.jsx)(n.n,{primary:{name:e},showTabMarkers:!1}),(0,s.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:a})]})}},43119:function(e,a,t){"use strict";t.d(a,{e:function(){return m}});var n=t(92809),s=t(86010),r=t(54721),o=t(67294),i=t(85893);function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){(0,n.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}let c={none:"",md:"p-8"};function d({as:e="div",style:a,padding:t,p:n="md",className:r,containerClassName:o,html:l,children:d,hint:m,lightOnly:u=!1}){let g=null!==t&&void 0!==t?t:n,k=c[g];if(void 0===k)throw Error(`Invalid padding value: ${JSON.stringify(g)}`);return(0,i.jsxs)("div",{className:o,children:[void 0!==m&&(0,i.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,i.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,i.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,i.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]}),(0,i.jsxs)(e,{style:a,className:(0,s.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!u&&"dark:bg-slate-800/25"),children:[(0,i.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,s.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!u&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,i.jsx)("div",p({className:(0,s.Z)("relative rounded-xl overflow-auto",k,r)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:d})),(0,i.jsx)("div",{className:(0,s.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!u&&"dark:border-white/5")})]})]})}function m(e){return e.resizable?(0,i.jsx)(u,p({},e)):(0,i.jsx)(d,p({},e))}function u(e){let a=(0,o.useRef)(),t=(0,r.c$)(0),n=(0,o.useRef)(),s=(0,o.useRef)();return(0,o.useEffect)((()=>{const e=new window.ResizeObserver((()=>{t.set(0)}));return e.observe(a.current),()=>{e.disconnect()}}),[]),(0,o.useEffect)((()=>{s.current.onselectstart=()=>!1}),[]),(0,i.jsxs)("div",{ref:a,className:"relative",children:[(0,i.jsx)(d,p({as:r.ww.div,style:{marginRight:(0,r.Hm)(t,(e=>-e))}},e)),(0,i.jsx)("div",{ref:n,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,i.jsx)(r.ww.div,{ref:s,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:n,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:()=>{document.documentElement.classList.add("dragging-ew")},onDragEnd:()=>{document.documentElement.classList.remove("dragging-ew")},children:(0,i.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},93204:function(e,a,t){"use strict";t.d(a,{k:function(){return s}});var n=t(85893);function s({property:e,utility:a,variant:t="hover",defaultClass:s,featuredClass:r,element:o="div",children:i}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[t,":",r]})," ","to only apply the ",(0,n.jsx)("code",{children:r})," utility on ",t,"."]}),i||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,o).replace("{defaultClass} ",s?`${s} `:"").replace("{variant}",t).replace("{featuredClass}",r)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},79836:function(e,a,t){"use strict";t.d(a,{n:function(){return r}});var n=t(86010),s=t(85893);function r({primary:e,secondary:a=[],showTabMarkers:t=!0,side:r,translucent:o=!1,children:i}){return(0,s.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,s.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,t&&(e.saved?(0,s.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,s.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,s.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,s.jsxs)("div",{className:(0,n.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===r?"rounded-tl lg:rounded-tr":"rounded-tl",o&&"dark:bg-slate-800/50"),children:[a.map((({name:e,open:a=!0,className:t})=>(0,s.jsx)("div",{className:(0,n.Z)("px-4 py-1 border-r border-slate-200/5",t,{italic:!a}),children:e},e))),i&&(0,s.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},27606:function(e,a,t){"use strict";t.d(a,{L:function(){return u}});var n=t(92809),s=t(92417),r=t(9008),o=t(11163),i=t(21370),l=t(34878),p=t(50946),c=t(85893);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){(0,n.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e){let a=(0,o.useRouter)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.D,{suffix:"/"===a.pathname?void 0:"Tailwind CSS",children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,c.jsxs)(r.default,{children:[(0,c.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,c.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${i.Z}`},"twitter:image")]}),(0,c.jsx)(s.C,m({nav:p.u},e))]})}u.nav=p.u},22728:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-width",function(){return t(98503)}])}},function(e){e.O(0,[9774,3430,184,5855,4327,489,946,2888,179],(function(){return a=22728,e(e.s=a);var a}));var a=e.O();_N_E=a}]);