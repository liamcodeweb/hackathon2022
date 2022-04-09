(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3261],{21370:function(e,t){"use strict";t.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},839:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(159),s=n(10219),r=(n(67294),n(3905)),o=(n(41664),n(49485)),l=(n(34304),n(27606)),i=n(83096);n(67753),n(83121),n(58211);const c=["components"],p={Layout:l.L,meta:{title:"Optimizing for Production",description:"Getting the most performance out of Tailwind CSS projects."},slug:"optimizing-for-production",tableOfContents:[]},d=i.X_;function u(e){let{components:t}=e,n=(0,s.Z)(e,c);return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tailwind CSS is incredibly performance focused and aims to produce the smallest CSS file possible by only generating the CSS you are ",(0,r.kt)("em",{parentName:"p"},"actually using")," in your project."),(0,r.kt)("p",null,"Combined with minification and network compression, this usually leads to CSS files that are less than 10kB, even for large projects. For example, Netflix uses Tailwind for ",(0,r.kt)("a",{parentName:"p",href:"https://top10.netflix.com/"},"Netflix Top 10")," and the entire website delivers only 6.5kB of CSS over the network."),(0,r.kt)("p",null,"With CSS files this small, you don\u2019t have to worry about complex solutions like code-splitting your CSS for each page, and can instead just ship a single small CSS file that\u2019s downloaded once and cached until you redeploy your site."),(0,r.kt)("p",null,"For the smallest possible production build, we recommend minifying your CSS with a tool like ",(0,r.kt)("a",{parentName:"p",href:"https://cssnano.co/"},"cssnano"),", and compressing your CSS with ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Brotli"},"Brotli"),"."),(0,r.kt)("p",null,"If you\u2019re using Tailwind CLI, you can minify your CSS by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--minify")," flag:"),(0,r.kt)("pre",{className:"language-shell"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx tailwindcss -o build.css --minify")),(0,r.kt)("p",null,"If you\u2019ve installed Tailwind as a PostCSS plugin, add ",(0,r.kt)("inlineCode",{parentName:"p"},"cssnano")," to the end of your plugin list:"),(0,r.kt)(o.M,{filename:"postcss.config.js"},(0,r.kt)("pre",{className:"language-js"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,r.kt)("span",{parentName:"code",className:"token property-access"},"exports")," ",(0,r.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,r.kt)("span",{parentName:"code",className:"token literal-property property"},"plugins"),(0,r.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,r.kt)("span",{parentName:"code",className:"token literal-property property"},"tailwindcss"),(0,r.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,r.kt)("span",{parentName:"code",className:"token literal-property property"},"autoprefixer"),(0,r.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,r.kt)("span",{parentName:"code",className:"token spread operator"},"..."),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"("),"process",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,r.kt)("span",{parentName:"code",className:"token property-access"},"env"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,r.kt)("span",{parentName:"code",className:"token constant"},"NODE_ENV")," ",(0,r.kt)("span",{parentName:"code",className:"token operator"},"===")," ",(0,r.kt)("span",{parentName:"code",className:"token string"},"'production'")," ",(0,r.kt)("span",{parentName:"code",className:"token operator"},"?")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{")," ",(0,r.kt)("span",{parentName:"code",className:"token literal-property property"},"cssnano"),(0,r.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,r.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,r.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n  ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,r.kt)("p",null,"If you\u2019re using a framework, check the documentation as this is often handled for you in production automatically and you don\u2019t even need to configure it."))}u.isMDXComponent=!0,u.layoutProps=p},49485:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var a=n(79836),s=n(85893);function r({filename:e,children:t}){return(0,s.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,s.jsx)(a.n,{primary:{name:e},showTabMarkers:!1}),(0,s.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:t})]})}},83121:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var a=n(56727),s=n(86010),r=n(67294),o=n(85893);function l({className:e}){return(0,o.jsx)("div",{className:(0,s.Z)("pointer-events-none absolute inset-0",e)})}function i({children:e,selectedIndex:t,myIndex:n,marker:r}){const i=t===n,c=i?null:t===n-1?"capped":"normal",p=i?null:t===n+1?"capped":"normal";return(0,o.jsxs)(a.OK,{className:(0,s.Z)("flex items-center relative z-10 overflow-hidden px-4 py-1",i?"text-sky-300":"text-slate-400"),children:[(0,o.jsx)("span",{className:"z-10",children:e}),"close"===r&&(0,o.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,o.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}),"modified"===r&&(0,o.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}),!i&&(0,o.jsx)(l,{className:(0,s.Z)("bg-slate-700/50 border-y border-slate-500/30","capped"===c&&"border-l rounded-tl","capped"===p&&"border-r rounded-tr")}),"normal"===p&&(0,o.jsx)(l,{className:"inset-y-px border-r border-slate-200/5 z-20"}),i&&(0,o.jsx)(l,{className:"border-b border-b-sky-300"})]})}function c({children:e,actions:t}){let{0:n,1:l}=(0,r.useState)(0);return(0,o.jsxs)(a.OK.Group,{as:"div",onChange:l,className:"not-prose bg-slate-800 rounded-xl shadow-md",children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(a.OK.List,{className:"flex text-slate-400 text-xs leading-6 overflow-hidden rounded-tl-xl pt-2",children:e.map(((e,t)=>(0,o.jsx)(i,{myIndex:t,selectedIndex:n,children:e.props.filename},e.props.filename)))}),(0,o.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,o.jsx)("div",{className:(0,s.Z)("flex-auto flex justify-end bg-slate-700/50 border-y border-slate-500/30 pr-4",n===e.length-1?"rounded-tl border-l":"")})}),t?(0,o.jsx)("div",{className:"absolute top-2 right-4 h-8 flex",children:t({selectedIndex:n})}):null]}),(0,o.jsx)(a.OK.Panels,{className:"flex overflow-auto",children:e.map((e=>(0,o.jsx)(a.OK.Panel,{className:"flex-none min-w-full p-5 text-sm leading-6 text-slate-50 ligatures-none",children:e.props.children},e.props.filename)))})]})}},67753:function(e,t,n){"use strict";n.d(t,{Vw:function(){return s},qm:function(){return r},$o:function(){return o}});var a=n(85893);function s({children:e}){return(0,a.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,a.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,a.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,a.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:e})]})}function r({children:e}){return(0,a.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,a.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,a.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,a.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:e})]})}function o({children:e}){return(0,a.jsxs)("div",{className:"not-prose mt-6 -mb-1 flex space-x-2",children:[(0,a.jsx)("svg",{className:"flex-none w-5 h-5 text-slate-400 dark:text-slate-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,a.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:e})]})}},27606:function(e,t,n){"use strict";n.d(t,{L:function(){return m}});var a=n(92809),s=n(92417),r=n(9008),o=n(11163),l=n(21370),i=n(34878),c=n(50946),p=n(85893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){let t=(0,o.useRouter)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.D,{suffix:"/"===t.pathname?void 0:"Tailwind CSS",children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,p.jsxs)(r.default,{children:[(0,p.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,p.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${l.Z}`},"twitter:image")]}),(0,p.jsx)(s.C,u({nav:c.u},e))]})}m.nav=c.u},5629:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/optimizing-for-production",function(){return n(839)}])}},function(e){e.O(0,[9774,3430,184,5855,4327,489,946,7181,8211,2888,179],(function(){return t=5629,e(e.s=t);var t}));var t=e.O();_N_E=t}]);