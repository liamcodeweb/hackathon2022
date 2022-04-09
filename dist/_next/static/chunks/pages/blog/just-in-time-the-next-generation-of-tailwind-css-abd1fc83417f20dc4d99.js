(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5657],{21370:function(e,t){"use strict";t.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},7163:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return k},default:function(){return f}});var n=a(159),r=a(10219),s=(a(67294),a(3905)),o=(a(41664),a(34304),a(29852)),i=a(6953),l=a(99158);const c=["components"],d={title:"Just-In-Time: The Next Generation of Tailwind CSS",description:"One of the hardest constraints we've had to deal with as we've improved Tailwind CSS over the years is the generated file size in development. Today I'm super excited to share a new project that makes this constraint a thing of the past: a just-in-time compiler for Tailwind CSS.",date:"2021-03-15T16:30:00.000Z",authors:[i.Oq],image:l.Z},p=(m="Footer",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var m;const u={meta:d,slug:"just-in-time-the-next-generation-of-tailwind-css",tableOfContents:[]},h=o.B;var k=!0;function f(e){let{components:t}=e,a=(0,r.Z)(e,c);return(0,s.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Update"),": As of Tailwind CSS v2.1, the new Just-in-Time engine is included right in Tailwind CSS itself, so you don\u2019t need the ",(0,s.kt)("inlineCode",{parentName:"em"},"@tailwindcss/jit")," package anymore. ",(0,s.kt)("a",{parentName:"em",href:"https://tailwindcss.com/docs/just-in-time-mode"},"Learn more in the documentation"),".")),(0,s.kt)("p",null,"One of the hardest constraints we\u2019ve had to deal with as we\u2019ve improved Tailwind CSS over the years is the generated file size in development. With enough customizations to your config file, the generated CSS can reach 10mb or more, and there\u2019s only so much CSS that build tools and even the browser itself will comfortably tolerate."),(0,s.kt)("p",null,"For that reason, you\u2019ve always had to be careful about expensive changes to your config file like adding too many extra breakpoints or enabling extra variants like ",(0,s.kt)("inlineCode",{parentName:"p"},"disabled")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"focus-visible"),"."),(0,s.kt)("p",null,"Today I\u2019m super excited to share a new project we\u2019ve been working on that makes these considerations a thing of the past: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss-jit"},(0,s.kt)("strong",{parentName:"a"},"a just-in-time compiler for Tailwind CSS")),"."),(0,s.kt)("div",{className:"aspect-w-16 aspect-h-9 my-12"},(0,s.kt)("iframe",{src:"https://www.youtube.com/embed/3O_3X7InOw8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss-jit"},(0,s.kt)("strong",{parentName:"a"},"@tailwindcss/jit"))," is a new experimental library that compiles all of your CSS ",(0,s.kt)("em",{parentName:"p"},"on-demand")," as you author your template files, instead of generating your entire stylesheet up front."),(0,s.kt)("p",null,"This comes with a lot of advantages:"),(0,s.kt)("ul",{role:"list"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Lightning fast build times"),". Tailwind can take 3\u20138s to initially compile using our CLI, and upwards of 30\u201345s in webpack projects because webpack struggles with large CSS files. This library can compile even the biggest projects in about 800ms ",(0,s.kt)("em",{parentName:"li"},"(with incremental rebuilds as fast as 3ms)"),", no matter what build tool you\u2019re using."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Every variant is enabled out of the box"),". Variants like ",(0,s.kt)("inlineCode",{parentName:"li"},"focus-visible"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"active"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"disabled"),", and others are not normally enabled by default due to file-size considerations. Since this library generates styles on demand, you can use any variant you want, whenever you want. You can even stack them like ",(0,s.kt)("inlineCode",{parentName:"li"},"sm:hover:active:disabled:opacity-75"),". Never configure your variants again."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Generate arbitrary styles without writing custom CSS.")," Ever needed some ultra-specific value that wasn\u2019t part of your design system, like ",(0,s.kt)("inlineCode",{parentName:"li"},"top: -113px")," for a quirky background image? Since styles are generated on demand, you can just generate a utility for this as needed using square bracket notation like ",(0,s.kt)("inlineCode",{parentName:"li"},"top-[-113px]"),". Works with variants too, like ",(0,s.kt)("inlineCode",{parentName:"li"},"md:top-[-113px]"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Your CSS is identical in development and production"),". Since styles are generated as they are needed, you don\u2019t need to purge unused styles for production, which means you see the exact same CSS in all environments. Never worry about accidentally purging an important style in production again."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Better browser performance in development"),". Since development builds are as small as production builds, the browser doesn\u2019t have to parse and manage multiple megabytes of pre-generated CSS. In projects with heavily extended configurations this makes dev tools a lot more responsive.")),(0,s.kt)("p",null,"Try it today by installing ",(0,s.kt)("inlineCode",{parentName:"p"},"@tailwindcss/jit")," and swapping it into your PostCSS configuration:"),(0,s.kt)("pre",{className:"language-shell"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},(0,s.kt)("span",{parentName:"code",className:"token function"},"npm")," ",(0,s.kt)("span",{parentName:"code",className:"token function"},"install")," -D @tailwindcss/jit tailwindcss postcss autoprefixer")),(0,s.kt)("pre",{className:"language-js"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},(0,s.kt)("span",{parentName:"code",className:"token comment"},"// postcss.config.js"),"\nmodule",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.kt)("span",{parentName:"code",className:"token property-access"},"exports")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token literal-property property"},"plugins"),(0,s.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token string-property property"},"'@tailwindcss/jit'"),(0,s.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token literal-property property"},"autoprefixer"),(0,s.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,s.kt)("p",null,"We\u2019re shipping it as a separate library for now, but once we\u2019ve worked out all the kinks we\u2019re going to roll it right back into ",(0,s.kt)("inlineCode",{parentName:"p"},"tailwindcss")," behind a configuration option, and we\u2019re aiming to make it the default in Tailwind CSS v3.0 later this year."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss-jit"},"Learn more about the project on GitHub"),", then install it, play with it, bend it, break it, and let us know what you think!"),(0,s.kt)(p,{mdxType:"Footer"},"Ready to try it out? ",(0,s.kt)("a",{href:"https://github.com/tailwindlabs/tailwindcss-jit"},"Get started \u2192")))}f.isMDXComponent=!0,f.layoutProps=u},73538:function(e,t,a){"use strict";a.d(t,{qk:function(){return g},YS:function(){return x},y8:function(){return b},nv:function(){return j},rU:function(){return w},ZM:function(){return N},Xo:function(){return l.X},at:function(){return y}});var n=a(92809),r=a(10219),s=a(86010),o=a(79980),i=a(85893),l=a(8657);const c=["as","className","light","dark"],d=["className"],p=["className"],m=["as","className"],u=["className"],h=["className"];function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e){let{as:t="div",className:a="",light:n,dark:s}=e,o=(0,r.Z)(e,c);return(0,i.jsxs)(t,f(f({className:`w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden ${a}`},o),{},{children:[n&&(0,i.jsx)("div",{className:"aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden",style:{backgroundImage:`url(${n})`}}),s&&(0,i.jsx)("div",{className:"hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block",style:{backgroundImage:`url(${s})`}})]}))}function x(e){let{className:t=""}=e,a=(0,r.Z)(e,d);return(0,i.jsx)("h2",f({className:`mt-8 font-semibold ${t}`},a))}function b(e){let{className:t=""}=e,a=(0,r.Z)(e,p);return(0,i.jsx)("p",f({className:`mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ${t}`},a))}function j(e){let{as:t="p",className:a=""}=e,n=(0,r.Z)(e,m);return(0,i.jsx)(t,f({className:`mt-4 max-w-3xl space-y-6 ${a}`},n))}function w(e){let{className:t}=e,a=(0,r.Z)(e,u);return(0,i.jsx)(o.z,f({className:(0,s.Z)("mt-8",t)},a))}function N(e){let{className:t=""}=e,a=(0,r.Z)(e,h);return(0,i.jsx)("code",f({className:`font-mono text-slate-900 font-medium dark:text-slate-200 ${t}`},a))}let y={Simple:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z",fill:"currentColor",fillOpacity:e?".1":"0",stroke:"currentColor",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M15 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Playful:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5 8h36v32H5V8Z",fill:"currentColor",fillOpacity:e?".1":"0"}),(0,i.jsx)("path",{d:"M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M14 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Elegant:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M6 8h32a4 4 0 0 1 4 4v28H6V8Z",fill:"currentColor",fillOpacity:e?".1":"0"}),(0,i.jsx)("path",{d:"M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Brutalist:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z",fill:"currentColor",fillOpacity:e?".1":"0",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M15 7v34M17 13h-2M43 13h-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}},29852:function(e,t,a){"use strict";a.d(t,{B:function(){return w}});var n=a(92809),r=a(73538),s=a(7987),o=a(41664),i=a(87099),l=a.n(i),c=a(9008),d=a(11163),p=a(3905),m=a(85893);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const k={img:e=>(0,m.jsxs)("div",{className:"relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-lg overflow-hidden",children:[(0,m.jsx)("img",h({},e)),(0,m.jsx)("div",{className:"absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10"})]}),Footer:({children:e})=>(0,m.jsx)("p",{className:"border-t border-slate-200 mt-8 pt-6 dark:border-slate-200/5",children:e})};a(95651);var f=a(86010);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let b=l()("{dddd}, {MMMM} {DD}, {YYYY}"),j="max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-[1fr_50rem] xl:gap-x-8";function w({children:e,meta:t,slug:a,latestPosts:n}){return(0,m.jsxs)("div",{className:"mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl",children:[(0,m.jsx)("main",{children:(0,m.jsxs)("article",{className:(0,f.Z)("relative pt-10",j),children:[(0,m.jsx)(N,{meta:t}),(0,m.jsx)("h1",{className:"col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight text-slate-900 dark:text-slate-200",children:(0,m.jsx)(r.Xo,{children:t.title})}),(0,m.jsxs)("div",{className:"text-sm leading-6 mb-16 xl:mb-0",children:[(0,m.jsx)("div",{className:"hidden mb-5 pb-5 border-b border-slate-200 xl:block dark:border-slate-200/5",children:(0,m.jsx)(o.default,{href:"/blog",children:(0,m.jsxs)("a",{className:"group flex font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white",children:[(0,m.jsx)("svg",{viewBox:"0 -9 3 24",className:"overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300",children:(0,m.jsx)("path",{d:"M3 0L0 3L3 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Go back to blog"]})})}),(0,m.jsxs)("dl",{children:[(0,m.jsx)("dt",{className:"sr-only",children:"Date"}),(0,m.jsx)("dd",{className:"absolute top-0 inset-x-0 text-slate-700 sm:text-center dark:text-slate-400",children:(0,m.jsx)("time",{dateTime:t.date,children:b.render(new Date(t.date))})}),(0,m.jsxs)("div",{className:"sm:flex sm:flex-wrap sm:justify-center xl:block",children:[(0,m.jsxs)("dt",{className:"sr-only",children:["Author",t.authors.length>1&&"s"]}),t.authors.map((e=>(0,m.jsxs)("dd",{className:"flex items-center font-medium mt-6 sm:mx-3 xl:mx-0",children:[(0,m.jsx)("img",{src:e.avatar,alt:"",className:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"text-slate-900 dark:text-slate-200",children:e.name}),(0,m.jsxs)("a",{href:`https://twitter.com/${e.twitter}`,className:"text-sky-500 hover:text-sky-600 dark:text-sky-400",children:["@",e.twitter]})]})]},e.twitter)))]})]})]}),(0,m.jsx)("div",{className:"prose prose-slate dark:prose-dark",children:(0,m.jsx)(p.Zo,{components:k,children:e})})]})}),(0,m.jsx)("footer",{className:(0,f.Z)("mt-14 sm:mt-16",j),children:(0,m.jsxs)("div",{className:"col-start-2 pt-14 sm:pt-16 border-t border-slate-200 dark:border-slate-200/5",children:[(0,m.jsx)("h2",{className:"mb-10 font-semibold text-slate-900 dark:text-slate-200",children:"Latest articles"}),(0,m.jsx)("div",{className:"grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2",children:n.filter((e=>e.slug!==a)).slice(0,2).map((e=>(0,m.jsx)(s.Z,x(x({},e),{},{children:(0,m.jsx)("p",{children:e.description})}),e.slug)))})]})})]})}function N({meta:e}){let t=(0,d.useRouter)();return(0,m.jsxs)(c.default,{children:[(0,m.jsxs)("title",{children:[e.title," \u2013 GAMMA"]}),(0,m.jsx)("meta",{name:"twitter:site",content:"@tailwindcss"}),(0,m.jsx)("meta",{name:"twitter:creator",content:"@tailwindcss"}),(0,m.jsx)("meta",{name:"twitter:title",content:`${e.title} \u2013 GAMMA`}),(0,m.jsx)("meta",{name:"twitter:description",content:e.description}),e.image?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,m.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${e.image}`})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,m.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${a(21370).Z}`})]}),(0,m.jsx)("meta",{property:"og:url",content:`https://tailwindcss.com${t.pathname}`}),(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"og:title",content:`${e.title} \u2013 GAMMA`}),(0,m.jsx)("meta",{property:"og:description",content:e.description}),(0,m.jsx)("meta",{property:"og:image",content:`https://tailwindcss.com${e.image}`}),(0,m.jsx)("meta",{name:"description",content:e.description})]})}},93201:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/just-in-time-the-next-generation-of-tailwind-css",function(){return a(7163)}])}},function(e){e.O(0,[9774,3430,184,5855,4327,489,4500,2888,179],(function(){return t=93201,e(e.s=t);var t}));var t=e.O();_N_E=t}]);