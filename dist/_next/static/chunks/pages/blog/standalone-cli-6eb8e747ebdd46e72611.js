(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4926],{21370:function(e,t){"use strict";t.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},21883:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return h},default:function(){return k}});var n=a(159),r=a(10219),s=(a(67294),a(3905)),o=(a(41664),a(49485)),l=a(34304),i=a(29852),c=a(6953),d=a(16018);const p=["components"],m={meta:{title:"Standalone CLI: Use Tailwind CSS without Node.js",description:"Today we're announcing a new standalone CLI build that gives you the full power of Tailwind CLI in a self-contained executable \u2014 no Node.js or npm required.",date:"2021-12-16T16:00:00.000Z",authors:[c.Oq],image:d.Z},slug:"standalone-cli",tableOfContents:[{title:"Get started",slug:"get-started",children:[]},{title:"How does it work?",slug:"how-does-it-work",children:[]},{title:"Which CLI should I use?",slug:"which-cli-should-i-use",children:[]}]},u=i.B;var h=!0;function k(e){let{components:t}=e,a=(0,r.Z)(e,p);return(0,s.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Tailwind CSS is written in JavaScript and distributed as an npm package, which means you\u2019ve always had to have Node.js and npm installed to use it."),(0,s.kt)("p",null,"This has made it harder to integrate into projects where using npm isn\u2019t always common, and with tools like ",(0,s.kt)("a",{parentName:"p",href:"https://world.hey.com/dhh/rails-7-will-have-three-great-answers-to-javascript-in-2021-8d68191b"},"Rails")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/phoenixframework/phoenix/pull/4377"},"Phoenix")," both moving away from npm by default, we needed to find a way for people to use Tailwind in these projects without forcing them to adopt an entirely separate ecosystem of tooling."),(0,s.kt)("p",null,"Today we\u2019re announcing a new ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss/releases/latest"},"standalone CLI build")," that gives you the full power of Tailwind CLI in a self-contained executable \u2014 no Node.js or npm required."),(0,s.kt)("hr",null),(0,s.kt)(l.X,{level:2,id:"get-started",nextElement:{type:"paragraph"}},"Get started"),(0,s.kt)("p",null,"To install it, grab the executable for your platform from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss/releases/latest"},"latest release")," on GitHub, making sure to give it executable permissions:"),(0,s.kt)(o.M,{filename:"Terminal"},(0,s.kt)("pre",{className:"language-shell"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},(0,s.kt)("span",{parentName:"code",className:"token comment"},"# Example for macOS arm64"),"\n",(0,s.kt)("span",{parentName:"code",className:"token function"},"curl")," -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64\n",(0,s.kt)("span",{parentName:"code",className:"token function"},"chmod")," +x tailwindcss-macos-arm64\n",(0,s.kt)("span",{parentName:"code",className:"token function"},"mv")," tailwindcss-macos-arm64 tailwindcss"))),(0,s.kt)("p",null,"Now you can use it just like our npm-distributed CLI tool:"),(0,s.kt)(o.M,{filename:"Terminal"},(0,s.kt)("pre",{className:"language-shell"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},(0,s.kt)("span",{parentName:"code",className:"token comment"},"# Create a tailwind.config.js file"),"\n./tailwindcss init\n\n",(0,s.kt)("span",{parentName:"code",className:"token comment"},"# Start a watcher"),"\n./tailwindcss -i input.css -o output.css --watch\n\n",(0,s.kt)("span",{parentName:"code",className:"token comment"},"# Compile and minify your CSS for production"),"\n./tailwindcss -i input.css -o output.css --minify"))),(0,s.kt)("p",null,"We\u2019ve even bundled the latest versions of all of our first-party plugins, so if you want to use them in your project, just ",(0,s.kt)("inlineCode",{parentName:"p"},"require")," them in your ",(0,s.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file like you would in a Node-based project:"),(0,s.kt)(o.M,{filename:"tailwind.config.js"},(0,s.kt)("pre",{className:"language-js"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.kt)("span",{parentName:"code",className:"token property-access"},"exports")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token comment"},"// ..."),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token literal-property property"},"plugins"),(0,s.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token function"},"require"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'@tailwindcss/forms'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token function"},"require"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'@tailwindcss/typography'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.kt)("p",null,"You get all the power of our standard npm-distributed CLI in a convenient, portable package \u2014 no dependencies required."),(0,s.kt)("hr",null),(0,s.kt)(l.X,{level:2,id:"how-does-it-work",nextElement:{type:"paragraph"}},"How does it work?"),(0,s.kt)("p",null,"We didn\u2019t rewrite Tailwind in Rust or anything (",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/malfaitrobin/status/1446905317825069063"},"yet\u2026"),") \u2014 we\u2019re actually using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/vercel/pkg"},"pkg"),", a really cool project by ",(0,s.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," that lets you turn a Node.js project into an executable that can be run without installing Node.js by bundling all of the parts your project needs right into the executable itself."),(0,s.kt)("p",null,"This is what makes it possible for you to still use a ",(0,s.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file with the full power of JavaScript, rather than a static format like JSON."),(0,s.kt)("hr",null),(0,s.kt)(l.X,{level:2,id:"which-cli-should-i-use",nextElement:{type:"paragraph"}},"Which CLI should I use?"),(0,s.kt)("p",null,"If you are already using npm in your project, use the npm-distributed version of our CLI that we\u2019ve always provided. It\u2019s simpler to update, the file size is smaller, and you\u2019re already in the ecosystem anyways \u2014 there\u2019s no benefit at all to using the standalone build."),(0,s.kt)("p",null,"If on the other hand you\u2019re working on a project where you don\u2019t otherwise need Node.js or npm, the standalone build can be a great choice. If Tailwind was the only reason you had a ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file, this is probably going to feel like a nicer solution."))}k.isMDXComponent=!0,k.layoutProps=m},73538:function(e,t,a){"use strict";a.d(t,{qk:function(){return x},YS:function(){return g},y8:function(){return j},nv:function(){return w},rU:function(){return N},ZM:function(){return b},Xo:function(){return i.X},at:function(){return y}});var n=a(92809),r=a(10219),s=a(86010),o=a(79980),l=a(85893),i=a(8657);const c=["as","className","light","dark"],d=["className"],p=["className"],m=["as","className"],u=["className"],h=["className"];function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function x(e){let{as:t="div",className:a="",light:n,dark:s}=e,o=(0,r.Z)(e,c);return(0,l.jsxs)(t,f(f({className:`w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden ${a}`},o),{},{children:[n&&(0,l.jsx)("div",{className:"aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden",style:{backgroundImage:`url(${n})`}}),s&&(0,l.jsx)("div",{className:"hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block",style:{backgroundImage:`url(${s})`}})]}))}function g(e){let{className:t=""}=e,a=(0,r.Z)(e,d);return(0,l.jsx)("h2",f({className:`mt-8 font-semibold ${t}`},a))}function j(e){let{className:t=""}=e,a=(0,r.Z)(e,p);return(0,l.jsx)("p",f({className:`mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ${t}`},a))}function w(e){let{as:t="p",className:a=""}=e,n=(0,r.Z)(e,m);return(0,l.jsx)(t,f({className:`mt-4 max-w-3xl space-y-6 ${a}`},n))}function N(e){let{className:t}=e,a=(0,r.Z)(e,u);return(0,l.jsx)(o.z,f({className:(0,s.Z)("mt-8",t)},a))}function b(e){let{className:t=""}=e,a=(0,r.Z)(e,h);return(0,l.jsx)("code",f({className:`font-mono text-slate-900 font-medium dark:text-slate-200 ${t}`},a))}let y={Simple:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{d:"M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z",fill:"currentColor",fillOpacity:e?".1":"0",stroke:"currentColor",strokeWidth:"2"}),(0,l.jsx)("path",{d:"M15 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Playful:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{d:"M5 8h36v32H5V8Z",fill:"currentColor",fillOpacity:e?".1":"0"}),(0,l.jsx)("path",{d:"M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M14 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Elegant:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{d:"M6 8h32a4 4 0 0 1 4 4v28H6V8Z",fill:"currentColor",fillOpacity:e?".1":"0"}),(0,l.jsx)("path",{d:"M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Brutalist:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{d:"M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z",fill:"currentColor",fillOpacity:e?".1":"0",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M15 7v34M17 13h-2M43 13h-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}},29852:function(e,t,a){"use strict";a.d(t,{B:function(){return N}});var n=a(92809),r=a(73538),s=a(7987),o=a(41664),l=a(87099),i=a.n(l),c=a(9008),d=a(11163),p=a(3905),m=a(85893);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const k={img:e=>(0,m.jsxs)("div",{className:"relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-lg overflow-hidden",children:[(0,m.jsx)("img",h({},e)),(0,m.jsx)("div",{className:"absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10"})]}),Footer:({children:e})=>(0,m.jsx)("p",{className:"border-t border-slate-200 mt-8 pt-6 dark:border-slate-200/5",children:e})};a(95651);var f=a(86010);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let j=i()("{dddd}, {MMMM} {DD}, {YYYY}"),w="max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-[1fr_50rem] xl:gap-x-8";function N({children:e,meta:t,slug:a,latestPosts:n}){return(0,m.jsxs)("div",{className:"mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl",children:[(0,m.jsx)("main",{children:(0,m.jsxs)("article",{className:(0,f.Z)("relative pt-10",w),children:[(0,m.jsx)(b,{meta:t}),(0,m.jsx)("h1",{className:"col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight text-slate-900 dark:text-slate-200",children:(0,m.jsx)(r.Xo,{children:t.title})}),(0,m.jsxs)("div",{className:"text-sm leading-6 mb-16 xl:mb-0",children:[(0,m.jsx)("div",{className:"hidden mb-5 pb-5 border-b border-slate-200 xl:block dark:border-slate-200/5",children:(0,m.jsx)(o.default,{href:"/blog",children:(0,m.jsxs)("a",{className:"group flex font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white",children:[(0,m.jsx)("svg",{viewBox:"0 -9 3 24",className:"overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300",children:(0,m.jsx)("path",{d:"M3 0L0 3L3 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Go back to blog"]})})}),(0,m.jsxs)("dl",{children:[(0,m.jsx)("dt",{className:"sr-only",children:"Date"}),(0,m.jsx)("dd",{className:"absolute top-0 inset-x-0 text-slate-700 sm:text-center dark:text-slate-400",children:(0,m.jsx)("time",{dateTime:t.date,children:j.render(new Date(t.date))})}),(0,m.jsxs)("div",{className:"sm:flex sm:flex-wrap sm:justify-center xl:block",children:[(0,m.jsxs)("dt",{className:"sr-only",children:["Author",t.authors.length>1&&"s"]}),t.authors.map((e=>(0,m.jsxs)("dd",{className:"flex items-center font-medium mt-6 sm:mx-3 xl:mx-0",children:[(0,m.jsx)("img",{src:e.avatar,alt:"",className:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"text-slate-900 dark:text-slate-200",children:e.name}),(0,m.jsxs)("a",{href:`https://twitter.com/${e.twitter}`,className:"text-sky-500 hover:text-sky-600 dark:text-sky-400",children:["@",e.twitter]})]})]},e.twitter)))]})]})]}),(0,m.jsx)("div",{className:"prose prose-slate dark:prose-dark",children:(0,m.jsx)(p.Zo,{components:k,children:e})})]})}),(0,m.jsx)("footer",{className:(0,f.Z)("mt-14 sm:mt-16",w),children:(0,m.jsxs)("div",{className:"col-start-2 pt-14 sm:pt-16 border-t border-slate-200 dark:border-slate-200/5",children:[(0,m.jsx)("h2",{className:"mb-10 font-semibold text-slate-900 dark:text-slate-200",children:"Latest articles"}),(0,m.jsx)("div",{className:"grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2",children:n.filter((e=>e.slug!==a)).slice(0,2).map((e=>(0,m.jsx)(s.Z,g(g({},e),{},{children:(0,m.jsx)("p",{children:e.description})}),e.slug)))})]})})]})}function b({meta:e}){let t=(0,d.useRouter)();return(0,m.jsxs)(c.default,{children:[(0,m.jsxs)("title",{children:[e.title," \u2013 GAMMA"]}),(0,m.jsx)("meta",{name:"twitter:site",content:"@tailwindcss"}),(0,m.jsx)("meta",{name:"twitter:creator",content:"@tailwindcss"}),(0,m.jsx)("meta",{name:"twitter:title",content:`${e.title} \u2013 GAMMA`}),(0,m.jsx)("meta",{name:"twitter:description",content:e.description}),e.image?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,m.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${e.image}`})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,m.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${a(21370).Z}`})]}),(0,m.jsx)("meta",{property:"og:url",content:`https://tailwindcss.com${t.pathname}`}),(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"og:title",content:`${e.title} \u2013 GAMMA`}),(0,m.jsx)("meta",{property:"og:description",content:e.description}),(0,m.jsx)("meta",{property:"og:image",content:`https://tailwindcss.com${e.image}`}),(0,m.jsx)("meta",{name:"description",content:e.description})]})}},17893:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/standalone-cli",function(){return a(21883)}])}},function(e){e.O(0,[9774,3430,184,5855,4327,489,4500,2888,179],(function(){return t=17893,e(e.s=t);var t}));var t=e.O();_N_E=t}]);