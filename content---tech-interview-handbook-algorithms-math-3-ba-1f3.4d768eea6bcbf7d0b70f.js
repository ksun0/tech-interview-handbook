(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{127:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},s=function(e){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(t);return r.a.createElement(u[i+"."+n]||u[n]||b[n]||a,t?Object.assign({},l,{components:t}):l)};function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return o}),n.d(t,"rightToc",function(){return l}),n.d(t,"default",function(){return s});n(0);var a=n(127);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={id:"math",title:"Math"},l=[{value:"Notes",id:"notes",children:[]},{value:"Recommended Leetcode questions",id:"recommended-leetcode-questions",children:[]},{value:"More questions",id:"more-questions",children:[]}],u={rightToc:l},b="wrapper";function s(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(b,r({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"notes"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#notes"}),"#"),"Notes"),Object(a.b)("p",null,"If code involves division or modulo, remember to check for division or modulo by 0 case."),Object(a.b)("p",null,'When a question involves "a multiple of a number", perhaps modulo might be useful.'),Object(a.b)("p",null,"Check for and handle overflow/underflow if you are using a typed language like Java and C++. At the very least, mention that overflow/underflow is possible and ask whether you need to handle it."),Object(a.b)("p",null,"Consider negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed."),Object(a.b)("p",null,"If the question asks to implement an operator such as power, squareroot or division and want it to be faster than O(n), binary search is usually the approach to go."),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"some-common-formulas"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#some-common-formulas"}),"#"),"Some common formulas:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sum of 1 to N = (n+1) ","*"," n/2"),Object(a.b)("li",{parentName:"ul"},"Sum of GP = 2",Object(a.b)("sup",null,"0")," + 2",Object(a.b)("sup",null,"1")," + 2",Object(a.b)("sup",null,"2")," + 2",Object(a.b)("sup",null,"3")," + ... 2",Object(a.b)("sup",null,"n")," = 2",Object(a.b)("sup",null,"n+1")," - 1"),Object(a.b)("li",{parentName:"ul"},"Permutations of N = N! / (N-K)!"),Object(a.b)("li",{parentName:"ul"},"Combinations of N = N! / (K! ","*"," (N-K)!)")),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"recommended-leetcode-questions"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#recommended-leetcode-questions"}),"#"),"Recommended Leetcode questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/powx-n/"}),"Pow(x, n)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/sqrtx/"}),"Sqrt(x)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/integer-to-english-words/"}),"Integer to English Words"))),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"more-questions"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#more-questions"}),"#"),"More questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a square root function."),Object(a.b)("li",{parentName:"ul"},'Given a string such as "123" or "67", write a function to output the number represented by the string without using casting.'),Object(a.b)("li",{parentName:"ul"},'Make a program that can print out the text form of numbers from 1 - 1000 (ex. 20 is "twenty", 105 is "one hundred and five").'),Object(a.b)("li",{parentName:"ul"},"Write a function that parses Roman numerals.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"XIV")," returns ",Object(a.b)("inlineCode",{parentName:"li"},"14"),"."))),Object(a.b)("li",{parentName:"ul"},"Write in words for a given digit.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"123")," returns ",Object(a.b)("inlineCode",{parentName:"li"},"one hundred and twenty three"),"."))),Object(a.b)("li",{parentName:"ul"},"Given a number ",Object(a.b)("inlineCode",{parentName:"li"},"N"),", find the largest number just smaller than ",Object(a.b)("inlineCode",{parentName:"li"},"N")," that can be formed using the same digits as ",Object(a.b)("inlineCode",{parentName:"li"},"N"),"."),Object(a.b)("li",{parentName:"ul"},"Compute the square root of ",Object(a.b)("inlineCode",{parentName:"li"},"N")," without using any existing functions."),Object(a.b)("li",{parentName:"ul"},"Given numbers represented as binary strings, and return the string containing their sum.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"add('10010', '101')")," returns ",Object(a.b)("inlineCode",{parentName:"li"},"'10111'"),"."))),Object(a.b)("li",{parentName:"ul"},"Take in an integer and return its english word-format.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'E.g. 1 -> "one", -10,203 -> "negative ten thousand two hundred and three".'))),Object(a.b)("li",{parentName:"ul"},"Write a function that returns values randomly, according to their weight. Suppose we have 3 elements with their weights: A (1), B (1) and C (2). The function should return A with probability 25%, B with 25% and C with 50% based on the weights.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/11/11/uber-interview-question-weighted-random-numbers/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"Given a number, how can you get the next greater number with the same set of digits?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2017/01/20/arrange-given-numbers-to-form-the-biggest-number-possible/"}),"Source"))))))}s.isMDXComponent=!0}}]);