(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(298)},174:function(e,t,a){},294:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=a(27),o=a(9),u=a(10),s=a(13),m=a(11),h=a(12),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u6211\u662fHome"))}}]),t}(n.Component),b=(a(174),a(122)),p=a(300),v=a(14),f=a(304),E=b.b.SubMenu,g=p.a.Header,O=p.a.Content,j=p.a.Footer,y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={current:"home",pathSnippets:[]},a.handleClick=function(e){a.setState({current:e.key})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.split("/")[1]||"home",t=this.props.location.pathname.split("/").filter(function(e){return e});this.setState({current:e,pathSnippets:t})}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(g,{style:{position:"fixed",zIndex:1,width:"100%"}},l.a.createElement(b.b,{onClick:this.handleClick,selectedKeys:[this.state.current],style:{lineHeight:"64px"},mode:"horizontal",theme:"dark"},l.a.createElement(b.b.Item,{key:"home"},l.a.createElement(i.a,{to:"/"},l.a.createElement(v.a,{type:"mail"}),"Home")),l.a.createElement(b.b.Item,{key:"todoList"},l.a.createElement(i.a,{to:"/todoList"},"Todo\u5e94\u7528")),l.a.createElement(b.b.Item,{key:"main"},l.a.createElement(i.a,{to:"/main"},l.a.createElement(v.a,{type:"appstore"}),"\u6838\u5fc3\u6982\u5ff5")),l.a.createElement(b.b.Item,{key:"advanced"},l.a.createElement(i.a,{to:"/advanced"},l.a.createElement(v.a,{type:"appstore"}),"\u9ad8\u7ea7\u6307\u5f15")),l.a.createElement(E,{title:l.a.createElement("span",{className:"submenu-title-wrapper"},"\u9ad8\u7ea7\u7ec4\u4ef6")},l.a.createElement(b.b.ItemGroup,{title:"\u7ec4\u4ef6\u7ec3\u4e60"},l.a.createElement(b.b.Item,{key:"highLevel:chess"},l.a.createElement(i.a,{to:"/highLevel/chess"},"\u4e09\u5b50\u68cb")))))),l.a.createElement(O,{style:{padding:"0 20px",marginTop:64}},l.a.createElement(C,null),l.a.createElement("div",{className:"main"},this.props.children)),l.a.createElement(j,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}}]),t}(n.Component),k={"/home":"Home","/todoList":"TodoList","/main":"Main","/advanced":"Advanced","/highLevel/chess":"Chess"},C=Object(i.d)(function(e){var t=e.location;console.log(t);var a=t.pathname.split("/").filter(function(e){return e}),n=a.map(function(e,t){var n="/".concat(a.slice(0,t+1).join("/"));return l.a.createElement(f.a.Item,{key:n},l.a.createElement(i.a,{to:n},k[n]))}),r=[l.a.createElement(f.a.Item,{key:"home"},l.a.createElement(i.a,{to:"/"},"Home"))].concat(n);return l.a.createElement("div",{className:"demo"},l.a.createElement(f.a,null,r))}),S=a(18),I=a(92),N=(a(77),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isLoggedIn:!1,unreadMessages:0},a.change=a.change.bind(Object(S.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"Greeting",value:function(){return this.state.isLoggedIn?l.a.createElement(x,null):l.a.createElement(L,null)}},{key:"change",value:function(){this.setState(function(e){return{isLoggedIn:!e.isLoggedIn,unreadMessages:e.unreadMessages+1}})}},{key:"render",value:function(){var e=this.state.unreadMessages;return l.a.createElement("div",null,l.a.createElement("h2",null,"\u6211\u662f\u6761\u4ef6\u8bed\u53e5 ",l.a.createElement("button",{onClick:this.change},"change")),this.Greeting(),l.a.createElement("div",null,e>0&&l.a.createElement("h3",null,"You have ",e," unread messages.")),l.a.createElement("div",null,"The user is ",l.a.createElement("b",null,this.state.isLoggedIn?"currently":"not")," logged in."),this.state.isLoggedIn?l.a.createElement(x,null):l.a.createElement(L,null),l.a.createElement("div",null,l.a.createElement(w,{isLoggedIn:this.state.isLoggedIn})))}}]),t}(n.Component));function x(e){return l.a.createElement("h1",null,"Welcome back!")}function L(e){return l.a.createElement("h1",null,"Please sign up.")}function w(e){return e.isLoggedIn?l.a.createElement("div",{className:"warning"},"Warning!"):null}var q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=[{id:1,title:"Hello World",content:"Welcome to learning React!"},{id:2,title:"Installation",content:"You can install React from npm."}],t=l.a.createElement("ul",null,e.map(function(e){return l.a.createElement("li",{key:e.id},e.title)})),a=e.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.content))});return l.a.createElement("div",null,t,l.a.createElement("hr",null),a)}}]),t}(n.Component),M=a(90),T=a(150),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={value:"",desc:"\u5728\u8fd9\u91cc\u5199\u63cf\u8ff0",selected:["lime"],isGoing:!1},a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleAreaChange=a.handleAreaChange.bind(Object(S.a)(a)),a.handleSelectChange=a.handleSelectChange.bind(Object(S.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(T.a)({},a,n))}},{key:"handleAreaChange",value:function(e){this.setState({desc:e.target.value})}},{key:"handleSelectChange",value:function(e){console.log(this.state.selected),this.setState({selected:[].concat(Object(M.a)(this.state.selected),[e.target.value])})}},{key:"handleSubmit",value:function(e){console.log(this.state),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"\u540d\u5b57\uff1a",l.a.createElement("input",{name:"value",type:"text",value:this.state.value,onChange:this.handleChange}))," ",l.a.createElement("br",null),l.a.createElement("label",null,"\u63cf\u8ff0\uff1a",l.a.createElement("textarea",{name:"desc",value:this.state.desc,onChange:this.handleChange}))," ",l.a.createElement("br",null),l.a.createElement("label",null,"\u53c2\u4e0e:",l.a.createElement("input",{name:"isGoing",type:"checkbox",checked:this.state.isGoing,onChange:this.handleChange}))," ",l.a.createElement("br",null),l.a.createElement("label",null,"\u9009\u62e9\u4f60\u559c\u6b22\u7684\u98ce\u5473:",l.a.createElement("select",{value:this.state.selected,multiple:!0,onChange:this.handleSelectChange},l.a.createElement("option",{value:"grapefruit"},"\u8461\u8404\u67da"),l.a.createElement("option",{value:"lime"},"\u67e0\u6aac"),l.a.createElement("option",{value:"coconut"},"\u6930\u5b50"),l.a.createElement("option",{value:"mango"},"\u8292\u679c")))," ",l.a.createElement("br",null),l.a.createElement("label",null,"\u4e0a\u4f20\u6587\u4ef6\uff1a",l.a.createElement("input",{type:"file"}))," ",l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"\u63d0\u4ea4"})))}}]),t}(n.Component);function D(e){return l.a.createElement("div",{color:"blue"},l.a.createElement("h1",{className:"Dialog-title"},e.title),l.a.createElement("p",{className:"Dialog-message"},e.message),e.children)}var W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSignUp=a.handleSignUp.bind(Object(S.a)(a)),a.state={login:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(D,{title:"Mars Exploration Program",message:"How should we refer to you?"},l.a.createElement("input",{value:this.state.login,onChange:this.handleChange}),l.a.createElement("button",{onClick:this.handleSignUp},"Sign Me Up!"))}},{key:"handleChange",value:function(e){this.setState({login:e.target.value})}},{key:"handleSignUp",value:function(){alert("Welcome aboard, ".concat(this.state.login,"!"))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).goLife=a.goLife.bind(Object(S.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"goLife",value:function(){i.c.push("/main/lifeCircle")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(I.a,{type:"primary",onClick:this.goLife},"\u751f\u547d\u5468\u671f")),l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(q,null),l.a.createElement("hr",null),l.a.createElement(A,null),l.a.createElement("hr",null),l.a.createElement(W,null)))}}]),t}(l.a.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},a.handleClick=a.handleClick.bind(Object(S.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){}},{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("h1",null,"Something went wrong"):l.a.createElement("div",{onClick:this.handleClick},"Click Me")}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(n.Component),H={light:{foreground:"#000000",background:"#eeeeee"},dark:{foreground:"#ffffff",background:"#222222"}},R=l.a.createContext({theme:H.dark,toggleTheme:function(){}}),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=this.context;return console.log(e,t),l.a.createElement("button",Object.assign({className:"btn"},e,{style:{backgroundColor:t.background}}))}}]),t}(l.a.Component);z.contextType=R;var U=z,P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(R.Consumer,null,function(e){var t=e.theme,a=e.toggleTheme;return l.a.createElement("button",{onClick:a,style:{backgroundColor:t}},"Toggle Theme")})}}]),t}(n.Component);function B(){return l.a.createElement("div",null,l.a.createElement(P,null))}var J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={theme:H.light,toggleTheme:a.toggleTheme},a.toggleTheme=function(){a.setState(function(e){return{theme:e.theme===H.dark?H.light:H.dark}})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(R.Provider,{value:this.state.theme},l.a.createElement(B,null)),l.a.createElement("section",null,l.a.createElement(U,null,"111")))}}]),t}(n.Component),X=l.a.lazy(function(){return a.e(3).then(a.bind(null,307))}),Y=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(X,null)),l.a.createElement("hr",null),l.a.createElement(i.a,{to:"/contexts"},"Contexts"),l.a.createElement("hr",null),l.a.createElement(J,null),l.a.createElement("hr",null),l.a.createElement(G,null),l.a.createElement("hr",null))}}]),t}(l.a.Component),K=a(302),$=a(306),_=a(305),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={list:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"deleteItem",value:function(e){this.props.deleteItem(e)}},{key:"onChange",value:function(e){var t=this;setTimeout(function(){t.props.deleteItem(e)},600)}},{key:"render",value:function(){var e=this,t=this.props.list;return l.a.createElement(K.a,{className:"demo-loadmore-list",itemLayout:"horizontal",dataSource:t,renderItem:function(t,a){return l.a.createElement(K.a.Item,{actions:[l.a.createElement("a",{onClick:e.deleteItem.bind(e,a)},"delete")]},l.a.createElement($.a,{avatar:!0,title:!1,loading:t.loading,active:!0},l.a.createElement(_.a,{key:t.id,style:{float:"left",marginRight:10},onChange:e.onChange.bind(e,a)}),l.a.createElement(K.a.Item.Meta,{title:l.a.createElement("a",null,t.name)})))}})}}]),t}(n.Component),V=a(301),Z=a(303);var ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),a.props.handleAdd(t.username),a.props.form.resetFields())})},a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,r=t.getFieldError,c=(0,t.isFieldTouched)("username")&&r("username");return l.a.createElement(V.a,{layout:"inline",onSubmit:this.handleSubmit},l.a.createElement(V.a.Item,{validateStatus:c?"error":"",help:c||""},a("username",{rules:[{required:!0,message:"Please enter a list name!"}]})(l.a.createElement(Z.a,{prefix:l.a.createElement(v.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"name"}))),l.a.createElement(V.a.Item,null,l.a.createElement(I.a,{type:"primary",htmlType:"submit",disabled:(e=n(),Object.keys(e).some(function(t){return e[t]}))},"Add")))}}]),t}(l.a.Component),te=V.a.create({name:"horizontal_login"})(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={list:[],id:1},a.handleAdd=a.handleAdd.bind(Object(S.a)(a)),a.deleteItem=a.deleteItem.bind(Object(S.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(c.a.findDOMNode(this))}},{key:"handleAdd",value:function(e){this.setState(function(t,a){return{list:[].concat(Object(M.a)(t.list),[{name:e,id:t.id++}])}}),console.log(this.state.list)}},{key:"deleteItem",value:function(e){var t=this.state.list;t.splice(e,1),this.setState({list:t})}},{key:"getTodoItems",value:function(){var e=this;return this.state.list.map(function(t,a){return l.a.createElement(Q,{key:a,deleteItem:e.deleteItem,content:t,index:a})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(te,{handleAdd:this.handleAdd}),l.a.createElement(Q,{list:this.state.list,deleteItem:this.deleteItem}))}}]),t}(l.a.Component),ne=a(155);a(294);function le(e){return l.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}var re=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(le,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.a.Component),ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();ie(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=ie(n.squares),c=a.map(function(e,a){var n=a?"Go to move #"+a:"Go to game start";return l.a.createElement("li",{key:a},l.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},n))});return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(re,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("ol",null,c)))}}]),t}(l.a.Component);function ie(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(ne.a)(t[a],3),l=n[0],r=n[1],c=n[2];if(e[l]&&e[l]===e[r]&&e[l]===e[c])return e[l]}return null}var oe=[{path:"/",component:y,breadcrumbName:"home",indexRoute:{component:d},childRoutes:[{path:"main",breadcrumbName:"main",component:F,childRoutes:[{path:"lifeCircle",breadcrumbName:"lifeCircle",component:function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){c.a.findDOMNode(this)}},{key:"componentDidMount",value:function(){c.a.findDOMNode(this)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u751f\u547d\u5468\u671f-\u6211\u51fa\u6765\u4e86"))}}]),t}(n.Component)}]},{path:"advanced",breadcrumbName:"advanced",component:Y},{path:"todoList",breadcrumbName:"todoList",component:ae},{path:"highLevel",breadcrumbName:"highLevel",childRoutes:[{path:"chess",breadcrumbName:"chess",component:ce}]}]}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=a(118),se=a.n(ue);a(296),a(297);se.a.locale("zh-cn"),c.a.render(l.a.createElement(i.b,{history:i.c,routes:oe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){}},[[159,1,2]]]);
//# sourceMappingURL=main.fbba0f4c.chunk.js.map