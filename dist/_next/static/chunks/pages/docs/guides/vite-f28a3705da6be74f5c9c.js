(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7990],{53364:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var i=n(47957),s=n(85893);function a({title:e,description:t,children:n}){return(0,s.jsxs)(i.i,{children:[(0,s.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,s.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,s.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,s.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,s.jsx)("section",{className:"mb-16 relative",children:n})]})}},44253:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r},default:function(){return c}});var i=n(27606),s=n(53364),a=n(78917),l=n(85893);let d=[{title:"Create your project",body:()=>(0,l.jsxs)("p",{children:["Start by creating a new Vite project if you don\u2019t have one set up already. The most common approach is to use"," ",(0,l.jsx)("a",{href:"https://github.com/vitejs/vite/tree/main/packages/create-vite#readme",children:"Create Vite"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm init vite my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,l.jsxs)("p",{children:["Install ",(0,l.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate both ",(0,l.jsx)("code",{children:"tailwind.config.js"})," and ",(0,l.jsx)("code",{children:"postcss.config.js"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:()=>(0,l.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,l.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"js",code:'  module.exports = {\n>   content: [\n>     "./index.html",\n>     "./src/**/*.{vue,js,ts,jsx,tsx}",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }'}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,l.jsxs)("p",{children:["Create a ",(0,l.jsx)("code",{children:"./src/index.css"})," file and add the ",(0,l.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind\u2019s layers."]}),code:{name:"index.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Import the CSS file",body:()=>(0,l.jsxs)("p",{children:["Import the newly-created ",(0,l.jsx)("code",{children:"./src/index.css"})," file in your"," ",(0,l.jsx)("code",{children:"./src/main.js"})," file."]}),code:{name:"main.js",lang:"js",code:"  import { createApp } from 'vue'\n  import App from './App.vue'\n> import './index.css'\n\n  createApp(App).mount('#app')"}},{title:"Start your build process",body:()=>(0,l.jsxs)("p",{children:["Run your build process with ",(0,l.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,l.jsx)("p",{children:"Start using Tailwind\u2019s utility classes to style your content."}),code:{name:"App.vue",lang:"html",code:'  <template>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </template>'}}];var r=!0;function c({code:e}){return(0,l.jsx)(s.a,{title:"Install Tailwind CSS with Vue 3 and Vite",description:"Setting up Tailwind CSS in a Vue 3 and Vite project.",children:(0,l.jsx)(a.R,{steps:d,code:e})})}c.layoutProps={meta:{title:"Install Tailwind CSS with Vue 3 and Vite",section:"Installation"},Layout:i.L,allowOverflow:!1}},2642:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/vite",function(){return n(44253)}])}},function(e){e.O(0,[9774,4327,946,2418,2888,179],(function(){return t=2642,e(e.s=t);var t}));var t=e.O();_N_E=t}]);