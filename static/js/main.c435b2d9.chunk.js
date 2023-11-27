(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(4),c=s.n(a),n=s(1),i=(s(9),s(10),s(11),s(2)),l=s.n(i),o=s(0);const d=e=>{let{posts:t,selectedPost:s,setSelectedPost:a,setIsFormShown:c}=e;const n=e=>()=>{a(e),c(!1)},i=()=>{a(null)};return Object(o.jsxs)("div",{"data-cy":"PostsList",children:[Object(o.jsx)("p",{className:"title",children:"Posts:"}),Object(o.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-link-light",children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((e=>Object(o.jsxs)("tr",{"data-cy":"Post",children:[Object(o.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(o.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:e.id===(null===s||void 0===s?void 0:s.id)?Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:i,children:"Close"}):Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:n(e),children:"Open"})})]},e.id)))})]})]})};s(13);const r=()=>Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})}),m="https://mate.academy/students-api";function j(e){return new Promise((t=>{setTimeout(t,e)}))}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const a={method:t};return s&&(a.body=JSON.stringify(s),a.headers={"Content-Type":"application/json; charset=UTF-8"}),j(300).then((()=>fetch(m+e,a))).then((e=>e.json()))}const h=e=>b(e),O=(e,t)=>b(e,"POST",t),u=e=>b(e,"DELETE");const x={name:"",email:"",body:""},y={name:"",email:"",body:""},N=e=>{let{selectedPost:t,setComments:s,setErrorMessage:a}=e;const[c,i]=Object(n.useState)(x),[d,r]=Object(n.useState)(y),[m,j]=Object(n.useState)(!1),b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,h=e=>{i((t=>({...t,[e.target.name]:e.target.value}))),r((t=>({...t,[e.target.name]:""})))};return Object(o.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:e=>{e.preventDefault();const n=c.name.trim(),l=c.email.trim(),o=c.body.trim();if(n||r((e=>({...e,name:"Name is required"}))),l||r({...d,email:"Email is required"}),l&&!b.test(l)&&r({...d,email:"Email is invalid"}),o||r((e=>({...e,body:"Enter some text"}))),!n||!b.test(l)||!o)return;const m={id:0,postId:t.id,name:c.name,email:c.email,body:c.body};var h;j(!0),(h=m,O("/comments",h)).then((e=>{s((t=>[...t,e]))})).catch((()=>a("Can not add a comment, try again later"))).finally((()=>{j(!1),i({...c,body:""})}))},children:[Object(o.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":d.name}),value:c.name,onChange:h}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),d.name&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),d.email&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:d.email})]}),Object(o.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":d.email}),value:c.email,onChange:h}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),d.email&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),d.email&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("textarea",{"is-danger":d.body}),value:c.body,onChange:h})}),d.body&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:d.body})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:l()("button is-link",{"is-loading":m}),children:"Add"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:()=>{r({name:"",email:"",body:""}),i({name:"",email:"",body:""})},children:"Clear"})})]})]})},p=e=>{let{selectedPost:t,isFormShown:s,setIsFormShown:a}=e;const[c,i]=Object(n.useState)([]),[l,d]=Object(n.useState)(!1),[m,j]=Object(n.useState)("");Object(n.useEffect)((()=>{var e;j(""),d(!0),(e=t.id,h("/comments?postId=".concat(e))).then(i).catch((()=>j("Something went wrong"))).finally((()=>d(!1)))}),[t]);const b=e=>()=>{i((t=>t.filter((t=>t.id!==e)))),function(e){return u("/comments/".concat(e))}(e).catch((()=>{i(c),j("Can not add a comment, try again later")}))};return Object(o.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(o.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(o.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(o.jsxs)("div",{className:"block",children:[l&&Object(o.jsx)(r,{}),m&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!c.length&&!l&&Object(o.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),c.length>0&&!l&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"title is-4",children:"Comments:"}),c.map((e=>Object(o.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(o.jsxs)("div",{className:"message-header",children:[Object(o.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(o.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:b(e.id),children:"delete button"})]}),Object(o.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)))]}),!l&&!s&&Object(o.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:()=>{a(!0)},children:"Write a comment"})]}),s&&Object(o.jsx)(N,{selectedPost:t,setComments:i,setErrorMessage:j})]})})},g=e=>{let{users:t,selectedUser:s,setSelectedUser:a,setSelectedPost:c}=e;const[i,d]=Object(n.useState)(!1),r=e=>()=>{a(e),d(!1),c(null)};return Object(o.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(o.jsx)("div",{className:"dropdown-trigger",children:Object(o.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:()=>d(!i),children:[Object(o.jsx)("span",{children:s?s.name:"Choose a user"}),Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),i&&Object(o.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(o.jsx)("div",{className:"dropdown-content",children:t.map((e=>Object(o.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":e.id===(null===s||void 0===s?void 0:s.id)}),onClick:r(e),children:e.name},e.id)))})})]})};const v=()=>{const[e,t]=Object(n.useState)([]),[s,a]=Object(n.useState)(null),[c,i]=Object(n.useState)(!1),[m,j]=Object(n.useState)(""),[b,O]=Object(n.useState)(null),[u,x]=Object(n.useState)(null),[y,N]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{h("/users").then(t)}),[]),Object(n.useEffect)((()=>{var e;j(""),s&&(i(!0),(e=s.id,h("/posts?userId=".concat(e))).then(O).catch((()=>j("Something went wrong!"))).finally((()=>i(!1))))}),[s]),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsxs)("div",{className:"tile is-child box is-success",children:[Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(g,{users:e,selectedUser:s,setSelectedUser:a,setSelectedPost:x})}),Object(o.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!s&&Object(o.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),c&&Object(o.jsx)(r,{}),m&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),b&&!b.length&&!c&&Object(o.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),b&&b.length>0&&!c&&Object(o.jsx)(d,{posts:b,selectedPost:u,setSelectedPost:x,setIsFormShown:N})]})]})}),Object(o.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":u}),children:Object(o.jsx)("div",{className:"tile is-child box is-success ",children:u&&Object(o.jsx)(p,{selectedPost:u,isFormShown:y,setIsFormShown:N})})})]})})})};c.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c435b2d9.chunk.js.map