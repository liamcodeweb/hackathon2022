(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7768],{21370:function(e,t){"use strict";t.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},30554:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return h},default:function(){return m}});var n=a(159),r=a(10219),o=(a(67294),a(3905)),s=(a(41664),a(34304),a(29852)),i=a(6953),l=a(55978);const c=["components"],d={meta:{private:!0,title:"Designing Tailwind UI Ecommerce",description:"Hey! We've been working on this new Tailwind UI Ecommerce kit for months now and are finally closing in on the finish line so I thought I'd write up a bit about the process and give you an update on where things are at.",date:"2021-08-07T12:45:00.0Z",authors:[i.Oq],image:l.Z},slug:"designing-tailwind-ui-ecommerce",tableOfContents:[]},p=s.B;var h=!0;function m(e){let{components:t}=e,a=(0,r.Z)(e,c);return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hey! We\u2019ve been working on this new Tailwind UI Ecommerce kit for months now and are finally closing in on the finish line so I thought I\u2019d write up a bit about the process and give you an update on where things are at."),(0,o.kt)("p",null,"Designing and building a big component kit like this is a ",(0,o.kt)("em",{parentName:"p"},"huge")," amount of work. If you weren\u2019t following along when Steve and I started working on Tailwind UI in the first place, it took about 10 months before we had something we felt good about releasing. We designed dozens of components only to scrap all of them and start from scratch at least three separate times. ",(0,o.kt)("em",{parentName:"p"},"Oof.")),(0,o.kt)("p",null,"We\u2019ve learned a lot since then and have really refined our process, and it\u2019s made putting together these ecommerce ideas go a lot smoother."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The first step was to research and catalog"),". We started by studying as many ecommerce sites as we could possibly find and cataloging every UI pattern we could pick out, like:"),(0,o.kt)("ul",{role:"list"},(0,o.kt)("li",{parentName:"ul"},"Product overviews"),(0,o.kt)("li",{parentName:"ul"},"Product lists"),(0,o.kt)("li",{parentName:"ul"},"Product feature details"),(0,o.kt)("li",{parentName:"ul"},"Category previews"),(0,o.kt)("li",{parentName:"ul"},"Checkout forms"),(0,o.kt)("li",{parentName:"ul"},"Shopping carts"),(0,o.kt)("li",{parentName:"ul"},"Category filters"),(0,o.kt)("li",{parentName:"ul"},"Customer reviews"),(0,o.kt)("li",{parentName:"ul"},"Order history"),(0,o.kt)("li",{parentName:"ul"},"Order details"),(0,o.kt)("li",{parentName:"ul"},"Category mega menus"),(0,o.kt)("li",{parentName:"ul"},"Product quickviews"),(0,o.kt)("li",{parentName:"ul"},"Promo sections")),(0,o.kt)("p",null,"We scoured dozens of different types of stores as part of this research, including clothing stores like ",(0,o.kt)("a",{parentName:"p",href:"https://www.everlane.com/"},"Everlane"),", shoe stores like ",(0,o.kt)("a",{parentName:"p",href:"https://www.allbirds.com/"},"Allbirds"),", office accessory makers like ",(0,o.kt)("a",{parentName:"p",href:"https://grovemade.com/"},"Grovemade"),", mattress companies like ",(0,o.kt)("a",{parentName:"p",href:"https://casper.com/"},"Casper"),", audio plugin developers like ",(0,o.kt)("a",{parentName:"p",href:"https://www.toontrack.com/"},"Toontrack"),", and tons more. We tried not to focus on any one specific ",(0,o.kt)("em",{parentName:"p"},"type")," of store, and I think that really helped in identifying which patterns are truly universal for these types of sites, and how different ideas fit into those patterns."),(0,o.kt)("p",null,"Some of them were pretty hard to identify, especially because there\u2019s quite a bit of overlap between the sort of patterns you see in an ecommerce site and in a more brochure-style marketing website."),(0,o.kt)("p",null,"For example, this section isn\u2019t really that different from a hero section you might see on a marketing site:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/adidas-hero.jpg",alt:null})),(0,o.kt)("p",null,"So should the ecommerce kit have \u201cHero Sections\u201d too, like the marketing kit? And if so what makes them different \u2014 why have two duplicate categories?"),(0,o.kt)("p",null,"It took a lot of research and thinking before we eventually noticed that in ecommerce sites, the \u201chero\u201d is almost ",(0,o.kt)("em",{parentName:"p"},"never")," a real hero. It\u2019s never something with like a summary of the whole brand or anything, like \u201cHandmade office accessories for the modern knowledge worker\u201d, it\u2019s always some timely promotional thing like \u201cGet 50% off until the end of the summer\u201d or \u201cOur fall collection just dropped, explore it now\u201d."),(0,o.kt)("p",null,"We also noticed that these \u201chero\u201d sections were almost always designs that could very easily be moved to the middle of the page \u2014 they were never really true \u201cheader\u201d content. This is when we came up with the concept of a \u201cpromo section\u201d, which is like a big banner that promotes a sale or a new product and ",(0,o.kt)("em",{parentName:"p"},"could")," be used as a hero, but could also be mixed in with other page content as well."),(0,o.kt)("p",null,"There were lots of little eureka moments like this that don\u2019t seem like much when you see the finished result but man, it is hard work to figure this stuff out. Organizing and categorizing all of these ideas was almost as much work as designing them."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next was designing full page examples"),". If there\u2019s one thing we learned from the initial work on the Application UI and Marketing packages, it\u2019s that the components you extract are a lot better when designed in the context of a complete page."),(0,o.kt)("p",null,"For the first set of Tailwind UI stuff, we did a lot of designing in isolation, just thinking through a nice pagination design for example. But what we found is that when we started putting all that stuff together into real UIs, lots of little things felt off."),(0,o.kt)("p",null,"Sometimes it was the font size being a little too big compared to other elements in the design, maybe not using enough whitespace, or giving an element too much contrast, making it stand out against the rest of the page when it was supposed to feel like secondary content. When we reworked our approach to always ",(0,o.kt)("em",{parentName:"p"},"extract")," smaller examples from bigger examples, everything really started to click a lot better."),(0,o.kt)("p",null,"So for the ecommerce package, we designed ",(0,o.kt)("em",{parentName:"p"},"everything")," as page examples from the very beginning. In total, we\u2019ve designed around 50 complete pages so far, including home pages, category listings, product pages, checkout forms, and tons more."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/50-pages.jpg",alt:null})),(0,o.kt)("p",null,"We\u2019d reuse a few things across pages to move quickly (like footer or navbar ideas), but generally we tried to make every core element of every page unique, to generate as many ideas as possible."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Then we built the pages.")," A lot of folks assume we have this like really clean design hand-off process where we create these bullet-proof, perfect Figma designs, then implement them exactly as-is in their perfect form but that\u2019s totally not true at all."),(0,o.kt)("p",null,"What happens instead is we take the full page designs that are in ",(0,o.kt)("em",{parentName:"p"},"pretty good")," shape, build them as best we can, then we review the finished designs together in the browser to make adjustments. Usually there are a ",(0,o.kt)("em",{parentName:"p"},"lot")," of little changes that happen, especially stuff related to little spacing details that are just easier to judge in the browser than they are in a design file. Sometimes though we make really drastic changes, like totally replacing part of the design with something else if we decide it just doesn\u2019t look as good as we hoped, or if it would make the code extremely complicated to match the design exactly but for little or no benefit over a slightly different design."),(0,o.kt)("p",null,"Here\u2019s an example of a design that changed a ",(0,o.kt)("em",{parentName:"p"},"lot")," during the building process \u2014 Figma on the left, final HTML version on the right:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/figma-vs-html.jpg",alt:null})),(0,o.kt)("p",null,"Definitely think everything turns out a lot better when we are open to iterating on designs like this as we go instead of just throwing them over the wall."),(0,o.kt)("p",null,"If you\u2019re interested in the actual process we use for writing the templates, we author them in a sort of home-grown templating language driven by PostHTML, which we ultimately use to render the components to multiple targets, like HTML, React, and Vue."),(0,o.kt)("p",null,"Here\u2019s what it looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/templating-sample.jpg",alt:null})),(0,o.kt)("p",null,"You can read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://blog.tailwindcss.com/building-react-and-vue-support-for-tailwind-ui"},"in this email I sent back in April")," if you\u2019re curious about more of the details!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next, we extracted the individual components.")," Once the page designs are finalized and built, we extract the individual elements into their own templates. This is where \u201cProduct Overviews\u201d are extracted from product pages, \u201cProduct Lists\u201d are extracted from category pages, and \u201cPromo Sections\u201d are extracted from storefront home pages."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/exploded-view.jpg",alt:null})),(0,o.kt)("p",null,"The thing that\u2019s tough about this process is it\u2019s not really as simple as just \u201ca page is comprised of components\u201d \u2014 as you probably know even ",(0,o.kt)("em",{parentName:"p"},"components")," are comprised of components, so deciding exactly how to slice things for Tailwind UI is always tough."),(0,o.kt)("p",null,"Generally we err on the side of bigger components, because it\u2019s easy for someone to pull out a small piece of a bigger component if they like it and want to use it elsewhere, but it\u2019s not always easy to come up with ideas for the bigger components yourself if all you have is the tiny individual pieces."),(0,o.kt)("p",null,"The way I like to think about it is we\u2019re trying to give you pre-built LEGO creations, not just the bricks."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/lego.jpeg",alt:null})),(0,o.kt)("p",null,"It\u2019s easy to take the wheels off the truck if that\u2019s all you need \u2014 it\u2019s harder to turn the wheels, a seat, and some headlights into a nice truck from scratch though."),(0,o.kt)("p",null,"For example, this single \u201cProduct Overview\u201d section could be cut up into a bunch of smaller components:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/product-overview.jpg",alt:null})),(0,o.kt)("p",null,"There\u2019s an image gallery, a star review widget, a color swatch picker, and a feature accordion there at a bare minimum. But I think providing it holistically like this is the better place to start \u2014 you can still grab all that stuff if you need it but as a bigger component it also serves as ",(0,o.kt)("em",{parentName:"p"},"inspiration")," and that\u2019s a really important ingredient in what makes Tailwind UI a cool product."),(0,o.kt)("p",null,"We might extract a lot of these things into smaller components as well down the road, but I definitely think this \u201coutside-in\u201d approach is the right way to go overall."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Finally, take inventory, and repeat the whole thing.")," A lesson I keep re-learning over and over again about product design is that no amount of planning will lead to the right product on the first try. You have to be keep iterating and improving \u2014 it\u2019s not a linear process."),(0,o.kt)("p",null,"For this ecommerce kit, we couldn\u2019t really see where the holes were in the product until we had designed and built a bunch of pages, extracted all of those components, and then assessed where we were at."),(0,o.kt)("p",null,"We noticed a bunch of things we were blind to at first, for example, we only had two mega menu ideas \u2014 probably because it was really easy to just not design the \u201copen\u201d state of any navbar when designing new pages. So we went back to the design step, and came up with a bunch of new concepts to flesh out the category."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/mega-menu-concepts.jpg",alt:null})),(0,o.kt)("p",null,"We also noticed that we had a disproportionate number of sort of card-based designs on off-white backgrounds, and not enough just flat simple designs which I think is a lot more common in ecommerce design. So we went back to the beginning and designed a bunch of new pages to fill this gap as well:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tailwindui.nyc3.cdn.digitaloceanspaces.com/20210806-ecommerce-update/white-backgrounds.jpg",alt:null})),(0,o.kt)("p",null,"We\u2019re less than a week away from when we hope to release this thing and every day we are ",(0,o.kt)("em",{parentName:"p"},"still")," designing brand new things to fill gaps we are identifying as we get closer to the finish line. The product is getting more awesome every day though, and I think these are the best designs we\u2019ve come up with for Tailwind UI period ",(0,o.kt)("em",{parentName:"p"},"(thank god really, getting worse at this would be depressing.)")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"So when is it coming out?")," I don\u2019t want to make any promises but we are trying ",(0,o.kt)("em",{parentName:"p"},"really")," hard to get this thing out the door mid-next week. I\u2019ll definitely send out another update when we know for sure, but it\u2019s looking good right now even though we\u2019ve still got a lot to wrap up."),(0,o.kt)("p",null,"As mentioned in an earlier update, the ecommerce kit is a separate product so it will be a paid add-on for existing customers, but if you already own the Marketing and Application UI packages, it\u2019s going to be ",(0,o.kt)("em",{parentName:"p"},"really")," affordable, like cheaper than taking your kids out for lunch sort of territory. I ",(0,o.kt)("strong",{parentName:"p"},"hate")," when companies give the best deals to new customers ",(0,o.kt)("em",{parentName:"p"},"(hello telecom industry)")," instead of rewarding the people who supported them from the beginning, and we will never be that type of business."),(0,o.kt)("p",null,"Thanks as always for following along \u2014 look for another update early next week, and fingers crossed we\u2019ll have this ready for release shortly after!"),(0,o.kt)("p",null,"\u2013 Adam"))}m.isMDXComponent=!0,m.layoutProps=d},73538:function(e,t,a){"use strict";a.d(t,{qk:function(){return k},YS:function(){return w},y8:function(){return y},nv:function(){return b},rU:function(){return x},ZM:function(){return j},Xo:function(){return l.X},at:function(){return v}});var n=a(92809),r=a(10219),o=a(86010),s=a(79980),i=a(85893),l=a(8657);const c=["as","className","light","dark"],d=["className"],p=["className"],h=["as","className"],m=["className"],u=["className"];function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e){let{as:t="div",className:a="",light:n,dark:o}=e,s=(0,r.Z)(e,c);return(0,i.jsxs)(t,f(f({className:`w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden ${a}`},s),{},{children:[n&&(0,i.jsx)("div",{className:"aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden",style:{backgroundImage:`url(${n})`}}),o&&(0,i.jsx)("div",{className:"hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block",style:{backgroundImage:`url(${o})`}})]}))}function w(e){let{className:t=""}=e,a=(0,r.Z)(e,d);return(0,i.jsx)("h2",f({className:`mt-8 font-semibold ${t}`},a))}function y(e){let{className:t=""}=e,a=(0,r.Z)(e,p);return(0,i.jsx)("p",f({className:`mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ${t}`},a))}function b(e){let{as:t="p",className:a=""}=e,n=(0,r.Z)(e,h);return(0,i.jsx)(t,f({className:`mt-4 max-w-3xl space-y-6 ${a}`},n))}function x(e){let{className:t}=e,a=(0,r.Z)(e,m);return(0,i.jsx)(s.z,f({className:(0,o.Z)("mt-8",t)},a))}function j(e){let{className:t=""}=e,a=(0,r.Z)(e,u);return(0,i.jsx)("code",f({className:`font-mono text-slate-900 font-medium dark:text-slate-200 ${t}`},a))}let v={Simple:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z",fill:"currentColor",fillOpacity:e?".1":"0",stroke:"currentColor",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M15 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Playful:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5 8h36v32H5V8Z",fill:"currentColor",fillOpacity:e?".1":"0"}),(0,i.jsx)("path",{d:"M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M14 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Elegant:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M6 8h32a4 4 0 0 1 4 4v28H6V8Z",fill:"currentColor",fillOpacity:e?".1":"0"}),(0,i.jsx)("path",{d:"M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Brutalist:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z",fill:"currentColor",fillOpacity:e?".1":"0",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M15 7v34M17 13h-2M43 13h-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}},29852:function(e,t,a){"use strict";a.d(t,{B:function(){return x}});var n=a(92809),r=a(73538),o=a(7987),s=a(41664),i=a(87099),l=a.n(i),c=a(9008),d=a(11163),p=a(3905),h=a(85893);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const g={img:e=>(0,h.jsxs)("div",{className:"relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-lg overflow-hidden",children:[(0,h.jsx)("img",u({},e)),(0,h.jsx)("div",{className:"absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10"})]}),Footer:({children:e})=>(0,h.jsx)("p",{className:"border-t border-slate-200 mt-8 pt-6 dark:border-slate-200/5",children:e})};a(95651);var f=a(86010);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let y=l()("{dddd}, {MMMM} {DD}, {YYYY}"),b="max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-[1fr_50rem] xl:gap-x-8";function x({children:e,meta:t,slug:a,latestPosts:n}){return(0,h.jsxs)("div",{className:"mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl",children:[(0,h.jsx)("main",{children:(0,h.jsxs)("article",{className:(0,f.Z)("relative pt-10",b),children:[(0,h.jsx)(j,{meta:t}),(0,h.jsx)("h1",{className:"col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight text-slate-900 dark:text-slate-200",children:(0,h.jsx)(r.Xo,{children:t.title})}),(0,h.jsxs)("div",{className:"text-sm leading-6 mb-16 xl:mb-0",children:[(0,h.jsx)("div",{className:"hidden mb-5 pb-5 border-b border-slate-200 xl:block dark:border-slate-200/5",children:(0,h.jsx)(s.default,{href:"/blog",children:(0,h.jsxs)("a",{className:"group flex font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white",children:[(0,h.jsx)("svg",{viewBox:"0 -9 3 24",className:"overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300",children:(0,h.jsx)("path",{d:"M3 0L0 3L3 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Go back to blog"]})})}),(0,h.jsxs)("dl",{children:[(0,h.jsx)("dt",{className:"sr-only",children:"Date"}),(0,h.jsx)("dd",{className:"absolute top-0 inset-x-0 text-slate-700 sm:text-center dark:text-slate-400",children:(0,h.jsx)("time",{dateTime:t.date,children:y.render(new Date(t.date))})}),(0,h.jsxs)("div",{className:"sm:flex sm:flex-wrap sm:justify-center xl:block",children:[(0,h.jsxs)("dt",{className:"sr-only",children:["Author",t.authors.length>1&&"s"]}),t.authors.map((e=>(0,h.jsxs)("dd",{className:"flex items-center font-medium mt-6 sm:mx-3 xl:mx-0",children:[(0,h.jsx)("img",{src:e.avatar,alt:"",className:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"text-slate-900 dark:text-slate-200",children:e.name}),(0,h.jsxs)("a",{href:`https://twitter.com/${e.twitter}`,className:"text-sky-500 hover:text-sky-600 dark:text-sky-400",children:["@",e.twitter]})]})]},e.twitter)))]})]})]}),(0,h.jsx)("div",{className:"prose prose-slate dark:prose-dark",children:(0,h.jsx)(p.Zo,{components:g,children:e})})]})}),(0,h.jsx)("footer",{className:(0,f.Z)("mt-14 sm:mt-16",b),children:(0,h.jsxs)("div",{className:"col-start-2 pt-14 sm:pt-16 border-t border-slate-200 dark:border-slate-200/5",children:[(0,h.jsx)("h2",{className:"mb-10 font-semibold text-slate-900 dark:text-slate-200",children:"Latest articles"}),(0,h.jsx)("div",{className:"grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2",children:n.filter((e=>e.slug!==a)).slice(0,2).map((e=>(0,h.jsx)(o.Z,w(w({},e),{},{children:(0,h.jsx)("p",{children:e.description})}),e.slug)))})]})})]})}function j({meta:e}){let t=(0,d.useRouter)();return(0,h.jsxs)(c.default,{children:[(0,h.jsxs)("title",{children:[e.title," \u2013 GAMMA"]}),(0,h.jsx)("meta",{name:"twitter:site",content:"@tailwindcss"}),(0,h.jsx)("meta",{name:"twitter:creator",content:"@tailwindcss"}),(0,h.jsx)("meta",{name:"twitter:title",content:`${e.title} \u2013 GAMMA`}),(0,h.jsx)("meta",{name:"twitter:description",content:e.description}),e.image?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,h.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${e.image}`})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,h.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${a(21370).Z}`})]}),(0,h.jsx)("meta",{property:"og:url",content:`https://tailwindcss.com${t.pathname}`}),(0,h.jsx)("meta",{property:"og:type",content:"article"}),(0,h.jsx)("meta",{property:"og:title",content:`${e.title} \u2013 GAMMA`}),(0,h.jsx)("meta",{property:"og:description",content:e.description}),(0,h.jsx)("meta",{property:"og:image",content:`https://tailwindcss.com${e.image}`}),(0,h.jsx)("meta",{name:"description",content:e.description})]})}},96156:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/designing-tailwind-ui-ecommerce",function(){return a(30554)}])}},function(e){e.O(0,[9774,3430,184,5855,4327,489,4500,2888,179],(function(){return t=96156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);