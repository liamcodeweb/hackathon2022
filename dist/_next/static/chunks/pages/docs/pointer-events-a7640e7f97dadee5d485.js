(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5445],{21370:function(a,e){"use strict";e.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},2716:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var n=t(159),s=t(10219),p=(t(67294),t(3905)),o=(t(41664),t(34304)),r=t(43119),l=t(27606),c=t(83096),i=(t(26612),t(45843)),m=t(93204);const u=["components"],k=l.L,N=(d="Heading",function(a){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",a)});var d;const g={Layout:k,classes:{utilities:{".pointer-events-none":{"pointer-events":"none"},".pointer-events-auto":{"pointer-events":"auto"}}},meta:{title:"Pointer Events",description:"Utilities for controlling whether an element responds to pointer events."},slug:"pointer-events",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Controlling pointer event behavior",slug:"controlling-pointer-event-behavior",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},h=c.X_;function v(a){let{components:e}=a,t=(0,s.Z)(a,u);return(0,p.kt)(h,(0,n.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,p.kt)(o.X,{level:3,id:"controlling-pointer-event-behavior",nextElement:{type:"paragraph"}},"Controlling pointer event behavior"),(0,p.kt)("p",null,"Use ",(0,p.kt)("inlineCode",{parentName:"p"},"pointer-events-auto")," to revert to the default browser behavior for pointer events (like ",(0,p.kt)("inlineCode",{parentName:"p"},":hover")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"click"),")."),(0,p.kt)("p",null,"Use ",(0,p.kt)("inlineCode",{parentName:"p"},"pointer-events-none")," to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are \u201cbeneath\u201d the target."),(0,p.kt)(r.e,{hint:"Try clicking the search icons to see the expected behaviour",containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 px-0 sm:px-10 font-mono font-bold">\n    <div class="flex flex-col">\n      <p class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">pointer-events-auto</p>\n      <div class="relative rounded-lg shadow-sm w-full">\n        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">\n          <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">\n            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />\n          </svg>\n        </div>\n        <input type="text" placeholder="Search" class="font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400" />\n      </div>\n    </div>\n    <div class="flex flex-col">\n      <p class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">pointer-events-none</p>\n      <div class="relative rounded-lg shadow-sm w-full">\n        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">\n          <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">\n            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />\n          </svg>\n        </div>\n        <input type="text" placeholder="Search" class="font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400" />\n      </div>\n    </div>\n  </div>\n'}),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"relative ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"absolute ",(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"pointer-events-auto")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"svg")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"absolute text-slate-400 h-5 w-5",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"viewBox"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"0 0 20 20",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"fill"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"currentColor",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n      ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"path")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"fill-rule"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"evenodd",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"d"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"clip-rule"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"evenodd",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"/>")),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"svg"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"input")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"type"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"text",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"placeholder"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"Search",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"relative ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"absolute ",(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"pointer-events-none")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"svg")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"absolute text-slate-400 h-5 w-5",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"viewBox"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"0 0 20 20",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"fill"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"currentColor",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n      ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"path")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"fill-rule"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"evenodd",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"d"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"clip-rule"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"evenodd",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"/>")),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"svg"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"input")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"type"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"text",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"placeholder"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"Search",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)(N,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,p.kt)(N,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,p.kt)(m.k,{defaultClass:"pointer-events-none",featuredClass:"pointer-events-auto",variant:"focus",mdxType:"HoverFocusAndOtherStates"}),(0,p.kt)(N,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,p.kt)(i.p,{defaultClass:"pointer-events-none",featuredClass:"pointer-events-auto",mdxType:"BreakpointsAndMediaQueries"}))}v.isMDXComponent=!0,v.layoutProps=g},26612:function(a,e,t){"use strict";t.d(e,{k:function(){return s}});var n=t(85893);function s({property:a,name:e,defaultClass:t,featuredClass:s,element:p="div",children:o}){const r=e||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:a})," value"]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["If you need to use a one-off ",r," that doesn\u2019t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."]}),o||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,p).replace("{defaultClass} ",t?`${t} `:"").replace("{featuredClass}",s)}})}),(0,n.jsxs)("p",{children:["Learn more about arbitrary value support in the"," ",(0,n.jsx)("a",{href:"/docs/adding-custom-styles#using-arbitrary-values",children:"arbitrary values"})," documentation."]})]})}},45843:function(a,e,t){"use strict";t.d(e,{p:function(){return s}});var n=t(85893);function s({defaultClass:a,featuredClass:e,element:t="div",children:s}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",e]})," to apply the ",(0,n.jsx)("code",{children:e})," utility at only medium screen sizes and above."]}),s||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,t).replace("{defaultClass} ",a?`${a} `:"").replace("{featuredClass}",e)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},43119:function(a,e,t){"use strict";t.d(e,{e:function(){return u}});var n=t(92809),s=t(86010),p=t(54721),o=t(67294),r=t(85893);function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function c(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,n.Z)(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}let i={none:"",md:"p-8"};function m({as:a="div",style:e,padding:t,p:n="md",className:p,containerClassName:o,html:l,children:m,hint:u,lightOnly:k=!1}){let N=null!==t&&void 0!==t?t:n,d=i[N];if(void 0===d)throw Error(`Invalid padding value: ${JSON.stringify(N)}`);return(0,r.jsxs)("div",{className:o,children:[void 0!==u&&(0,r.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,r.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,r.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,r.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:u})]}),(0,r.jsxs)(a,{style:e,className:(0,s.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!k&&"dark:bg-slate-800/25"),children:[(0,r.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,s.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!k&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,r.jsx)("div",c({className:(0,s.Z)("relative rounded-xl overflow-auto",d,p)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,r.jsx)("div",{className:(0,s.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!k&&"dark:border-white/5")})]})]})}function u(a){return a.resizable?(0,r.jsx)(k,c({},a)):(0,r.jsx)(m,c({},a))}function k(a){let e=(0,o.useRef)(),t=(0,p.c$)(0),n=(0,o.useRef)(),s=(0,o.useRef)();return(0,o.useEffect)((()=>{const a=new window.ResizeObserver((()=>{t.set(0)}));return a.observe(e.current),()=>{a.disconnect()}}),[]),(0,o.useEffect)((()=>{s.current.onselectstart=()=>!1}),[]),(0,r.jsxs)("div",{ref:e,className:"relative",children:[(0,r.jsx)(m,c({as:p.ww.div,style:{marginRight:(0,p.Hm)(t,(a=>-a))}},a)),(0,r.jsx)("div",{ref:n,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,r.jsx)(p.ww.div,{ref:s,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:n,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:()=>{document.documentElement.classList.add("dragging-ew")},onDragEnd:()=>{document.documentElement.classList.remove("dragging-ew")},children:(0,r.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},93204:function(a,e,t){"use strict";t.d(e,{k:function(){return s}});var n=t(85893);function s({property:a,utility:e,variant:t="hover",defaultClass:s,featuredClass:p,element:o="div",children:r}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[t,":",p]})," ","to only apply the ",(0,n.jsx)("code",{children:p})," utility on ",t,"."]}),r||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,o).replace("{defaultClass} ",s?`${s} `:"").replace("{variant}",t).replace("{featuredClass}",p)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},27606:function(a,e,t){"use strict";t.d(e,{L:function(){return k}});var n=t(92809),s=t(92417),p=t(9008),o=t(11163),r=t(21370),l=t(34878),c=t(50946),i=t(85893);function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function u(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,n.Z)(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function k(a){let e=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.D,{suffix:"/"===e.pathname?void 0:"Tailwind CSS",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,i.jsxs)(p.default,{children:[(0,i.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,i.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${r.Z}`},"twitter:image")]}),(0,i.jsx)(s.C,u({nav:c.u},a))]})}k.nav=c.u},52302:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/pointer-events",function(){return t(2716)}])}},function(a){a.O(0,[9774,3430,184,5855,4327,489,946,2888,179],(function(){return e=52302,a(a.s=e);var e}));var e=a.O();_N_E=e}]);