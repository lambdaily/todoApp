(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var o=c(1),s=c.n(o),n=c(8),a=c.n(n),l=(c(15),c(3)),d=c(0),i=function(e){var t=e.setStatus;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"select",children:[Object(d.jsxs)("select",{onChange:function(e){t(e.target.value)},name:"todos",className:"filter-todos",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]}),Object(d.jsx)("div",{className:"dato",children:Object(d.jsx)("h2",{children:" They are x todos"})})]})})},r=c(9),j=c(10),u=function(e){var t=e.setInputText,c=e.todos,o=e.setTodos,s=e.inputText;return Object(d.jsx)("div",{className:"todo",children:Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("section",{className:"logo",children:Object(d.jsx)("h2",{className:"logo__title",children:"TODO"})}),Object(d.jsxs)("div",{className:"todo__header",children:[Object(d.jsx)("div",{className:"todo__circle"}),Object(d.jsx)("label",{htmlFor:"todo-input",children:"Create a new todo"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:s,onChange:function(e){t(e.target.value)},className:"todo__input",placeholder:"Create a new todo..."}),Object(d.jsx)("button",{className:"submit",onClick:function(e){e.preventDefault(),o([].concat(Object(r.a)(c),[{text:s,completed:!1,id:Object(j.a)()}])),t("")},type:"submit",children:"+"})]})]})]})})},b=c(7),O=c(6),m=function(e){var t=e.text,c=e.todo,o=e.todos,s=e.setTodos;console.log(c);return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""," "),children:t}),Object(d.jsx)("button",{onClick:function(){s(o.map((function(e){return e.id===c.id?Object(b.a)(Object(b.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(d.jsx)(O.a,{})}),Object(d.jsx)("button",{onClick:function(e){s(o.filter((function(e){return e.id!==c.id})))},className:"trash-btn",children:Object(d.jsx)(O.b,{})})]})},x=function(e){var t=e.todos,c=e.setTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(d.jsx)(m,{setTodos:c,todos:t,todo:e,text:e.text},e.id)}))})})};var h=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)([]),a=Object(l.a)(n,2),r=a[0],j=a[1],b=Object(o.useState)("all"),O=Object(l.a)(b,2),m=O[0],h=O[1],p=Object(o.useState)([]),f=Object(l.a)(p,2),v=(f[0],f[1]);Object(o.useEffect)((function(){N()}),[r,m]);var N=function(){switch(m){case"completed":v(r.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(r.filter((function(e){return!1===e.completed})));break;default:v(r)}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{inputText:c,todos:r,setTodos:j,setInputText:s}),Object(d.jsx)(x,{setTodos:j,todos:r}),Object(d.jsx)(i,{setStatus:h})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.01010739.chunk.js.map