"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[3237],{8730:(e,t,a)=>{a.d(t,{T:()=>c});var r=a(67294),n=a(39960),i=a(44996);const o={borderlessCard:"borderlessCard_sjEN",infoMode:"infoMode_oa1U",icon:"icon_c5iy",cardHeader:"cardHeader_Melu",title:"title_AiRZ",cardBody:"cardBody__x5U",cardFooter:"cardFooter_BYOD",link:"link_YPJo"};function c(e){let{title:t,icon:a,href:c,body:s}=e;const l=!c,m=l?"64px":"32px";return r.createElement("div",{className:`card ${o.borderlessCard} ${l&&o.infoMode}`},r.createElement("div",{className:`card__header ${o.cardHeader}`},r.createElement("img",{className:o.icon,src:(0,i.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,height:m,width:m}),r.createElement("h3",{className:o.title},t)),r.createElement("div",{className:`card__body ${o.cardBody}`},r.createElement("p",null,s)),!l&&r.createElement("div",{className:`card__footer ${o.cardFooter}`},r.createElement("strong",null,r.createElement(n.Z,{href:c,className:o.link},"Learn more"))))}},78914:(e,t,a)=>{a.d(t,{V:()=>o});var r=a(67294),n=a(39960);const i={hero:"hero_wgFg",container:"container_Iw7w",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function o(e){let{title:t,subtitle:a,ctaList:o,className:c}=e;return r.createElement("div",{className:`hero ${i.hero} ${c}`},r.createElement("div",{className:`container ${i.container}`},r.createElement("h1",{className:"hero__title"},t),a&&r.createElement("h2",{className:i.subtitle},a),r.createElement("div",{className:i.ctaList},o&&o.map((e=>{let{title:t,href:a}=e;return r.createElement(n.Z,{key:t,href:a,className:"button button--primary button--lg"},t)})))))}},66569:(e,t,a)=>{a.d(t,{k:()=>l});var r=a(67294),n=a(39960),i=a(44996);const o={linkCard:"linkCard_uxt7",icon:"icon_lqTJ",cardHeader:"cardHeader_NaDd",cardBody:"cardBody_svEQ",paragraph:"paragraph_UbEf"};function c(e){let{href:t,children:a}=e;return r.createElement(n.Z,{href:t,className:o.linkCard},a)}function s(e){let{title:t,icon:a,body:n}=e;return r.createElement("div",{className:"card"},r.createElement("div",{className:`card__header ${o.cardHeader}`},r.createElement("img",{className:o.icon,src:(0,i.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,width:"48px",height:"48px"}),r.createElement("h2",{title:t,className:"text--truncate"},t)),r.createElement("div",{className:`card__body ${o.cardBody}`},r.createElement("p",{className:`${o.paragraph}`},n)))}const l=e=>r.createElement(c,{href:e.href},r.createElement(s,e))},3e4:(e,t,a)=>{a.d(t,{P:()=>o});var r=a(67294),n=a(44996);const i={quoteCard:"quoteCard_rWDi"};function o(e){let{name:t,position:a,image:o,body:c}=e;return r.createElement("div",{className:`card ${i.quoteCard}`},r.createElement("div",{className:"card__body"},r.createElement("p",null,c)),r.createElement("div",{className:"card__footer avatar"},o&&r.createElement("div",{className:"avatar__photo-wrapper"},r.createElement("img",{className:"avatar__photo",src:(0,n.Z)(`/img/${o}`),alt:t,title:t})),r.createElement("div",{className:"avatar__intro"},r.createElement("div",{className:"avatar__name"},t),r.createElement("small",{className:"avatar__subtitle"},a))))}},83666:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(87462),n=a(67294),i=a(25935),o=a(52263),c=a(44996),s=a(14521),l=a(78914),m=a(66569),d=a(3e4),u=a(8730);const h={hero:{title:"Arrow brings idiomatic <u>functional programming</u> to Kotlin",ctaList:[{title:"What is Arrow",href:"/learn/overview"},{title:"Get Started",href:"/learn/quickstart"}]},features:[{title:"Quickstart",href:"/learn/quickstart",icon:"icon-quickstart.svg",body:"Gradle or Maven, JVM or Multiplatform, Arrow fits in all your projects"},{title:"Typed errors",href:"/learn/typed-errors",icon:"icon-typed-errors.svg",body:"Structured, predictable, and efficient handling of errors"},{title:"Coroutines",href:"/learn/coroutines",icon:"icon-coroutines.svg",body:"High-level utilities for working with coroutines, and correctly managing resources and shared data"},{title:"Resilience",href:"/learn/resilience",icon:"icon-resilience.svg",body:"Make your code respond to failures in an organized way"},{title:"Immutable data",href:"/learn/immutable-data",icon:"icon-immutable-data.svg",body:"Great tooling for dealing with immutable data and sealed hierarchies"},{title:"Collections and functions",href:"/learn/collections-functions",icon:"icon-generic-6.svg",body:"Powerful additions to the basics to make your code more expressive"}],quotes:[{name:"George Popides",position:"Software Engineer at Katanox",body:"Our system consists of multiple services built with Kotlin and Spring Boot and the communication between the services is done through GRPC. The more services involved the more the failure points which means we need a streamlined way to handle failures and errors without affecting the operation of our system. [..] By using Either and Validated, we have eliminated unexpected exceptions in our system and we can now have a look on errors through our logs without worrying about unexpected exceptions that can bring our system down"},{name:"Ilyan Germanov",position:"Co-founder of Ivy Apps",body:"This week, I'm into sharing things that made my life as an Android developer with Kotlin easier. In my opinion, functional programming is an awesome paradigm and can be a first-class citizen in Kotlin. [..] Arrow is a \"Functional companion to Kotlin's Standard Library\" and provides the core constructs from the FP world to get you started."}]},g={verticalRhythm:"verticalRhythm_yh8W",textContainer:"textContainer_n5O4",featuresContainer:"featuresContainer_hwgM",quotesContainer:"quotesContainer__Qcv",projectsContainer:"projectsContainer_IRh5",navigationContainer:"navigationContainer_Aik1",usageWrapperContainer:"usageWrapperContainer_uUHj",usageContainer:"usageContainer_sNYk"};function p(){const{siteConfig:e}=(0,o.Z)();return n.createElement(s.Z,{description:e.tagline},n.createElement(l.V,{title:(0,i.ZP)(h.hero.title),ctaList:h.hero.ctaList,className:g.verticalRhythm}),n.createElement("main",null,n.createElement("section",{className:`container text--center ${g.textContainer} ${g.verticalRhythm}`},n.createElement("h1",null,"Start learning now"),n.createElement("p",null,"Arrow is composed of different libraries that greatly improve your developer experience using Kotlin")),n.createElement("section",{className:`container ${g.featuresContainer} ${g.verticalRhythm}`},h.features.map((e=>n.createElement(m.k,(0,r.Z)({key:e.title},e))))),n.createElement("section",{className:`container text--center margin-bottom--lg ${g.textContainer}`},n.createElement("h1",null,"What the community says"),n.createElement("p",null,"Some opinions about Arrow from the community and its practitioners")),n.createElement("section",{className:`container ${g.quotesContainer} ${g.verticalRhythm}`},h.quotes?.map((e=>n.createElement(d.P,(0,r.Z)({key:e.name},e))))),h.navs&&n.createElement("section",{className:`container ${g.navigationContainer} ${g.verticalRhythm}`},h.navs.map((e=>n.createElement(u.T,(0,r.Z)({key:e.title},e))))),n.createElement("section",{className:`${g.usageWrapperContainer}`},n.createElement("div",{className:`container ${g.usageContainer}`},h.companies?.map((e=>n.createElement("img",{key:e.name,src:(0,c.Z)(`/img/${e.logo}`),alt:e.name,title:e.name})))))))}}}]);