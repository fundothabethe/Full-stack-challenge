(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{79:function(e,n,c){},85:function(e,n,c){"use strict";c.r(n);var t,r,a=c(2),i=c.n(a),j=c(36),o=c.n(j),s=c(50),l=c(48),d=c(34),O=(c(79),c(26)),u=c(10),b=Object(O.gql)(t||(t=Object(l.a)(["\n  query jokes {\n    jokes {\n      name\n    }\n  }\n"]))),h=Object(O.gql)(r||(r=Object(l.a)(["\n  query joke($id: String) {\n    joke(id: $id) {\n      name\n    }\n  }\n"])));var k=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),c=n[0],t=n[1],r=Object(d.c)((function(e){return e})),i=Object(d.b)(),j=Object(O.useQuery)(b),o=j.data,l=j.loading,k=j.error,m=j.refetch,g=Object(O.useLazyQuery)(h),x=Object(s.a)(g,2),f=x[0],p=x[1],_=p.data,E=p.loading,v=p.error;if(l)return"Loading...";if(k)return Object(u.jsx)("p",{children:"ERROR loadig category"});if(!o)return Object(u.jsx)("p",{children:"Not found"});var w="You selected ".concat(r," chuck norris joke.This is about ").concat(c,"\ud83d\ude80");return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Fundo Full Stack Challenge"})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("ul",{className:"side-menu",children:o&&o.jokes&&o.jokes.map((function(e){return Object(u.jsx)("li",{className:"category",onClick:function(){m(),i({type:"ADD_JOKE"});var n=e.name;return t(e.name),f({variables:{id:n}}),E?"Loading...":v?Object(u.jsx)("p",{children:"ERROR loading joke"}):_?void 0:Object(u.jsx)("p",{children:"Not found"})},children:e.name},e.name)}))}),Object(u.jsxs)("div",{className:"jokes",children:[_&&_.joke&&_.joke.name&&Object(u.jsxs)("h2",{className:"joke",children:[_.joke.name," "]}),Object(u.jsx)("li",{children:""!==c?w:""})]})]})]})},m=c(40),g=0,x="ADD_JOKE",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return e+1;default:return e}},p=c(68),_=c(69),E=c(70),v=new _.a,w=new E.a({uri:"/graphql"}),y=new p.a({cache:v,link:w}),N=Object(m.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O.ApolloProvider,{client:y,children:Object(u.jsx)(d.a,{store:N,children:Object(u.jsx)(k,{})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.4574b5e8.chunk.js.map