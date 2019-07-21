(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return o}),n.d(t,"rightToc",function(){return l}),n.d(t,"default",function(){return h});n(0);var a=n(127);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={id:"linked-list",title:"Linked List"},l=[{value:"Notes",id:"notes",children:[]},{value:"Common Routines",id:"common-routines",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended Leetcode questions",id:"recommended-leetcode-questions",children:[]},{value:"More questions",id:"more-questions",children:[]}],s={rightToc:l},c="wrapper";function h(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(c,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"notes"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#notes"}),"#"),"Notes"),Object(a.b)("p",null,"Like arrays, linked lists are used to represent sequential data. The benefit of linked lists is that insertion and deletion from anywhere in the list is O(1) whereas in arrays the following elements will have to be shifted."),Object(a.b)("p",null,"Adding a dummy node at the head and/or tail might help to handle many edge cases where operations have to be performed at the head or the tail. The presence of dummy nodes essentially ensures that operations will never have be done on the head or the tail, thereby removing a lot of headache in writing conditional checks to dealing with null pointers. Be sure to remember to remove them at the end of the operation."),Object(a.b)("p",null,"Sometimes linked lists problem can be solved without additional storage. Try to borrow ideas from reverse a linked list problem."),Object(a.b)("p",null,"For deletion in linked lists, you can either modify the node values or change the node pointers. You might need to keep a reference to the previous element."),Object(a.b)("p",null,"For partitioning linked lists, create two separate linked lists and join them back together."),Object(a.b)("p",null,"Linked lists problems share similarity with array problems, think about how you would do it for an array and try to apply it to a linked list."),Object(a.b)("p",null,"Two pointer approaches are also common for linked lists. For example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Getting the k",Object(a.b)("sup",null,"th")," from last node - Have two pointers, where one is k nodes ahead of the other. When the node ahead reaches the end, the other node is k nodes behind"),Object(a.b)("li",{parentName:"ul"},"Detecting cycles - Have two pointers, where one pointer increments twice as much as the other, if the two pointers meet, means that there is a cycle"),Object(a.b)("li",{parentName:"ul"},"Getting the middle node - Have two pointers, where one pointer increments twice as much as the other. When the faster node reaches the end of the list, the slower node will be at the middle")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"common-routines"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#common-routines"}),"#"),"Common Routines"),Object(a.b)("p",null,"Be familiar with the following routines because many linked list questions make use of one or more of these routines in the solution:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Counting the number of nodes in the linked list"),Object(a.b)("li",{parentName:"ul"},"Reversing a linked list in-place"),Object(a.b)("li",{parentName:"ul"},"Finding the middle node of the linked list using fast/slow pointers"),Object(a.b)("li",{parentName:"ul"},"Merging two lists together")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"corner-cases"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#corner-cases"}),"#"),"Corner cases"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single node"),Object(a.b)("li",{parentName:"ul"},"Two nodes"),Object(a.b)("li",{parentName:"ul"},"Linked list has cycle. ",Object(a.b)("strong",{parentName:"li"},"Tip:")," Clarify with the interviewer whether there can be a cycle in the list. Usually the answer is no")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"recommended-leetcode-questions"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#recommended-leetcode-questions"}),"#"),"Recommended Leetcode questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/reverse-linked-list/"}),"Reverse a Linked List")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/linked-list-cycle/"}),"Detect Cycle in a Linked List")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/merge-two-sorted-lists/"}),"Merge Two Sorted Lists")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/merge-k-sorted-lists/"}),"Merge K Sorted Lists")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"}),"Remove Nth Node From End Of List")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/reorder-list/"}),"Reorder List"))),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"more-questions"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#more-questions"}),"#"),"More questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Given a linked list, in addition to the next pointer, each node has a child pointer that can point to a separate list. With the head node, flatten the list to a single-level linked list.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/06/12/flatten-a-linked-list/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"Reverse a singly linked list. Implement it recursively and iteratively."),Object(a.b)("li",{parentName:"ul"},"Convert a binary tree to a doubly circular linked list."),Object(a.b)("li",{parentName:"ul"},"Implement an LRU cache with O(1) runtime for all its operations."),Object(a.b)("li",{parentName:"ul"},"Check distance between values in linked list."),Object(a.b)("li",{parentName:"ul"},"A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists."),Object(a.b)("li",{parentName:"ul"},"Given a singly linked list (a list which can only be traversed in one direction), find the item that is located at 'k' items from the end. So if the list is a, b, c, d and k is 2 then the answer is 'c'. The solution should not search the list twice."),Object(a.b)("li",{parentName:"ul"},"How can you tell if a Linked List is a Palindrome?")))}h.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){return i.a.createElement(i.a.Fragment,{},e.children)}},h=function(e){var t=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(t);return i.a.createElement(s[r+"."+n]||s[n]||c[n]||a,t?Object.assign({},l,{components:t}):l)};function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);