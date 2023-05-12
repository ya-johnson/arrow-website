"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[8680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,u=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"either-and-ior",title:"Either & Ior",description:"Use cases for Either and Ior.",sidebar_position:3},o="Either & Ior",l={unversionedId:"learn/typed-errors/either-and-ior",id:"learn/typed-errors/either-and-ior",title:"Either & Ior",description:"Use cases for Either and Ior.",source:"@site/content/docs/learn/typed-errors/either_ior.md",sourceDirName:"learn/typed-errors",slug:"/learn/typed-errors/either-and-ior",permalink:"/learn/typed-errors/either-and-ior",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/typed-errors/either_ior.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"either-and-ior",title:"Either & Ior",description:"Use cases for Either and Ior.",sidebar_position:3},sidebar:"learnSidebar",previous:{title:"Why nullable types & Option?",permalink:"/learn/typed-errors/nullable-and-option"},next:{title:"Validation",permalink:"/learn/typed-errors/validation"}},p={},s=[{value:"Using builders",id:"using-builders",level:2},{value:"Combining Ior errors",id:"combining-ior-errors",level:3},{value:"Without builders",id:"without-builders",level:2},{value:"Either for validation",id:"either-for-validation",level:2}],d={toc:s},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"either--ior"},"Either & Ior"),(0,a.kt)("p",null,"Both ",(0,a.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-either/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Either<E, A>")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-ior/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Ior<E, A>")),"\nhold values that may be of type ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),".\nBy convention, the type ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," represents ",(0,a.kt)("em",{parentName:"p"},"errors")," and the type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," represents\n",(0,a.kt)("em",{parentName:"p"},"success"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Either<DbError, User>")," could be a good result type for\na function that accesses a database and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," but may also fail\nwith a ",(0,a.kt)("inlineCode",{parentName:"p"},"DbError"),". Another point of view is that both types ",(0,a.kt)("em",{parentName:"p"},"extend")," the capabilities\nof the built-in ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")),"\ntype, but no longer constraining the potential errors to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Either<E, A>")," only admits these two possibilities: a ",(0,a.kt)("inlineCode",{parentName:"p"},"Left")," holding a value of\ntype ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Right")," holding a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),". On the other hand, ",(0,a.kt)("inlineCode",{parentName:"p"},"Ior<E, A>"),"\nprovides a third option, namely ",(0,a.kt)("inlineCode",{parentName:"p"},"Both"),". Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Both"),", you can represent states\nthat are considered successful but with some potential errors during execution;\nlike a compiler that finishes successfully but has some warnings. Nevertheless,\n",(0,a.kt)("inlineCode",{parentName:"p"},"Ior")," is not used very often."),(0,a.kt)("h2",{id:"using-builders"},"Using builders"),(0,a.kt)("p",null,"The preferred way to work with ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Ior")," is to use ",(0,a.kt)("a",{parentName:"p",href:"../../typed-errors/"},"builders"),".\nThose start with a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"either")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ior")," followed by a lambda; inside that\nblock, we can access the uniform typed errors API with functions like ",(0,a.kt)("inlineCode",{parentName:"p"},"raise"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"ensure"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.core.raise.either\nimport arrow.core.raise.ensure\n\ndata class MyError(val message: String)\n\nfun isPositive(i: Int): Either<MyError, Int> = either {\n  ensure(i > 0) { MyError("$i is not positive") }\n  i\n}\n\nsuspend fun example() {\n  isPositive(-1) shouldBe MyError("-1 is not positive").left()\n  isPositive(1)  shouldBe 1.right()\n}\n')),(0,a.kt)("p",null,"To give you the complete picture, inside those blocks, the potential errors are\nrepresented by a receiver of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Raise<E>"),". Functions with that receiver can\nbe transformed into a variety of types; not only ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Ior"),", but also\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Option"),", or a nullable type."),(0,a.kt)("p",null,"A common scenario is to have an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Ior")," value that we want to execute\nas part of the block. That is, we want potential errors in those values to bubble\nas errors of the entire block or keep the execution if the value represents\nsuccess. In those cases, we need to call ",(0,a.kt)("inlineCode",{parentName:"p"},".bind()")," over the value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Either"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"Ior"),"."),(0,a.kt)("mermaid",{value:'graph LR;\n  raise{{"Raise&lt;E&gt;.() -> A"}};\n  other{{"Either&lt;E, A&gt; / Ior&lt;E, A&gt;"}};\n  raise--\x3e|either / ior|other;\n  other--\x3e|".bind()"|raise;'}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/woltapp/arrow-detekt-rules#noeffectscopebindablevalueasstatement"},"custom ",(0,a.kt)("inlineCode",{parentName:"a"},"NoEffectScopeBindableValueAsStatement")," rule"),"\nfor ",(0,a.kt)("a",{parentName:"p",href:"https://detekt.dev/"},"Detekt")," to prevent forgetting ",(0,a.kt)("inlineCode",{parentName:"p"},".bind()")," inside\nan ",(0,a.kt)("inlineCode",{parentName:"p"},"either")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ior")," block.")),(0,a.kt)("h3",{id:"combining-ior-errors"},"Combining Ior errors"),(0,a.kt)("p",null,"The flow in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," block is simple: we execute each step; if at some point\nwe ",(0,a.kt)("inlineCode",{parentName:"p"},"bind()")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"Left")," or find a ",(0,a.kt)("inlineCode",{parentName:"p"},"raise"),", we stop and return that value; if we get\nto the end, we wrap the result in ",(0,a.kt)("inlineCode",{parentName:"p"},"Right"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"ior")," blocks are a bit more complicated,\nsince we may end up in a situation in which we have errors to be reported, yet\nwe also have a value to continue the execution. This brings up a question: what\nshould we do if ",(0,a.kt)("em",{parentName:"p"},"several")," steps in the block are ",(0,a.kt)("inlineCode",{parentName:"p"},"Both"),"? The current API leaves\nthe answer open to the developer. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ior")," builder has\nan additional parameter that specifies how to combine several errors."),(0,a.kt)("h2",{id:"without-builders"},"Without builders"),(0,a.kt)("p",null,"In some scenarios, builders may be overkill for the task at hand. For those cases,\nwe provide functions that create or operate directly on ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Ior"),"."),(0,a.kt)("p",null,"On the generation front, extension functions like ",(0,a.kt)("inlineCode",{parentName:"p"},".left()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".right()"),"\nprovide another way to write expressions that won't obscure the inner contents\nas much as a constructor. Validations are often written in that style."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"// this is the type we want to construct\n@JvmInline value class Age(val age: Int)\n\n// these are the potential problems\nsealed interface AgeProblem {\n  object InvalidAge: AgeProblem\n  object NotLegalAdult: AgeProblem\n}\n\n// validation returns either problems or the constructed value\nfun validAdult(age: Int): Either<AgeProblem, Age> = when {\n  age < 0  -> AgeProblem.InvalidAge.left()\n  age < 18 -> AgeProblem.NotLegalAdult.left()\n  else     -> Age(age).right()\n}\n")),(0,a.kt)("p",null,"Another way to obtain an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," is using ",(0,a.kt)("inlineCode",{parentName:"p"},"Either.catch"),", which wraps a\ncomputation that may throw exceptions and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Left")," if that's the case.\nEssentially, ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/run-catching.html"},(0,a.kt)("inlineCode",{parentName:"a"},"runCatching")," from the standard library"),",\nbut replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Either"),"."),(0,a.kt)("p",null,"The rest of the API closely follows the one from ",(0,a.kt)("a",{parentName:"p",href:"../../typed-errors/"},"typed errors"),".\nFor example, you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"recover")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"zipOrAccumulate")," directly on ",(0,a.kt)("inlineCode",{parentName:"p"},"Either"),"\nwithout the need for an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"either { }")," block. One potentially useful\nfunction not part of builders is ",(0,a.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-either/map-left.html"},(0,a.kt)("inlineCode",{parentName:"a"},"mapLeft")),",\nwhich applies a function when the value represents an error. This scenario often\narises when your code has a hierarchy of different error types."),(0,a.kt)("h2",{id:"either-for-validation"},"Either for validation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Either")," has a double face: it can be used to model problems in a piece of code,\npretty much like exceptions, but also to define validations over some input data.\nThe difference between these two scenarios is how we react to ",(0,a.kt)("em",{parentName:"p"},"several")," problems\narising in a piece of code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When we think of exceptions, we have a ",(0,a.kt)("em",{parentName:"li"},"fail-fast")," or ",(0,a.kt)("em",{parentName:"li"},"fail-first")," approach:\nOnce we discover a problem, we want to stop execution and immediately report\nto the caller. In those scenarios, steps ",(0,a.kt)("em",{parentName:"li"},"depend")," on one another, so it makes\nno sense to keep trying."),(0,a.kt)("li",{parentName:"ul"},"When we think of validation, we want to be as comprehensive as possible with\npotential problems with the input data. In other words, if the given name\nand age are wrong, we want to report both, not just the first one.\nThis approach is called ",(0,a.kt)("em",{parentName:"li"},"accumulation")," and arises when the code is computations\nwhose failure is ",(0,a.kt)("em",{parentName:"li"},"independent")," of each other.")),(0,a.kt)("p",null,"By default, an ",(0,a.kt)("inlineCode",{parentName:"p"},"either")," block follows the first approach. If you want to accumulate\nerrors instead, you should use ",(0,a.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-either/-companion/zip-or-accumulate.html"},(0,a.kt)("inlineCode",{parentName:"a"},"zipOrAccumulate")),",\nor ",(0,a.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/map-or-accumulate.html"},(0,a.kt)("inlineCode",{parentName:"a"},"mapOrAccumulate")),".\nThe difference is that the former takes the different computations as arguments,\nand they can return different types, whereas the latter applies the same computation\nuniformly to elements of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterable"),"."),(0,a.kt)("p",null,"One common pattern when describing validations is to have an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," with\n",(0,a.kt)("inlineCode",{parentName:"p"},"List<Problem>")," as the error type. Arrow provides a more refined version\nwhere we ensure that we never end up in an awkward situation in which we have\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Left")," value, but the list of problems is empty."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"public typealias EitherNel<E, A> = Either<NonEmptyList<E>, A>\n")),(0,a.kt)("p",null,"In Arrow 1.x series, a different type called ",(0,a.kt)("inlineCode",{parentName:"p"},"Validation")," embodied\nthe accumulation strategy for errors. However, the API was almost identical, and\nsometimes code became flooded with conversion back and forth between ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Validation"),".\nArrow 2.x provides a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," type instead, but we encourage you to use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"EitherNel")," type alias if you are describing a validation."))}c.isMDXComponent=!0}}]);