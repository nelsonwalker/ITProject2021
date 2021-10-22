(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(t,n,e){},69:function(t,n,e){},95:function(t,n,e){},97:function(t,n,e){"use strict";e.r(n);var a,i,o=e(0),r=e(36),s=e.n(r),c=(e(69),e(19)),l=e(20),d=e(22),p=e(21),h=e(12),u=e(7),b=e(5),x=e(10),j=e(31),g="GET_ERRORS",m="SET_CURRENT_USER",f={},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return n.payload;default:return t}},v=e(44),y={isAuthenticated:!1,user:{}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return Object(v.a)(Object(v.a)({},t),{},{isAuthenticated:!0,user:n.payload});default:return t}},N=e(18),S=e.n(N),k=e(27),C=e(39),F=e(11),T=e.n(F),D=function(){return function(){var t=Object(k.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L()),t.next=3,T.a.get("/api/tags").then((function(t){console.log(t.data),n(E(t.data))})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},I=Object(C.a)({name:"tags",initialState:{loading:"idle",tags:[]},reducers:{tagsLoading:function(t,n){"idle"===t.loading&&(t.loading="pending")},tagsReceived:function(t,n){"pending"===t.loading&&(t.loading="idle",t.tags=n.payload)},tagSelected:function(t,n){t.tags.find((function(t){return t.name===n.payload})).selected=!t.tags.find((function(t){return t.name===n.payload})).selected}}}),B=I.actions,L=B.tagsLoading,E=B.tagsReceived,z=B.tagSelected,A=I.reducer,R=function(){return function(){var t=Object(k.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(P()),t.next=3,T.a.get("/api/contacts").then((function(t){n(H(t.data))})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},U=Object(C.a)({name:"contacts",initialState:{loading:"idle",contacts:[]},reducers:{contactsLoading:function(t,n){"idle"===t.loading&&(t.loading="pending")},contactsReceived:function(t,n){"pending"===t.loading&&(t.loading="idle",t.contacts=n.payload)}}}),_=U.actions,P=_.contactsLoading,H=_.contactsReceived,M=U.reducer,J=Object(x.b)({errors:O,auth:w,tags:A,contacts:M}),G=Object(x.d)(J,{},Object(x.c)(Object(x.a)(j.a))),W=e(32),q=function(t){t?T.a.defaults.headers.common.Authorization=t:delete T.a.defaults.headers.common.Authorization},K=function(t){return{type:m,payload:t}},Q=function(t){return function(t){localStorage.removeItem("jwtToken"),q(!1),t(K({})),T.a.get("/logout")}},V=e(2),X=e(9),Y=e(8),Z=(e(57),e(3)),$=e(1);var tt,nt,et,at,it,ot,rt,st,ct,lt,dt,pt=function(){return Object($.jsx)(ht,{children:Object($.jsx)(ut,{})})},ht=Z.a.div(a||(a=Object(V.a)(["\n    \n"]))),ut=Z.a.img.attrs({src:"/images/logo.png"})(i||(i=Object(V.a)(["\n    width: 90%;\n    margin: 8px;\n  "]))),bt=function(t){Object(d.a)(e,t);var n=Object(p.a)(e);function e(){var t;return Object(c.a)(this,e),(t=n.call(this)).state={email:"",password:"",userName:"",firstName:"",lastName:"",loginStatus:!1,errors:{}},t.handleInputChange=t.handleInputChange.bind(Object(Y.a)(t)),t.handleLogin=t.handleLogin.bind(Object(Y.a)(t)),t.handleSignup=t.handleSignup.bind(Object(Y.a)(t)),t}return Object(l.a)(e,[{key:"handleInputChange",value:function(t){this.setState(Object(X.a)({},t.target.name,t.target.value))}},{key:"handleLogin",value:function(t){t.preventDefault();var n={email:this.state.email,password:this.state.password};this.props.loginUser(n,this.props.history)}},{key:"handleSignup",value:function(t){t.preventDefault();var n={email:this.state.email,password:this.state.password,userName:this.state.userName,firstName:this.state.firstName,lastName:this.state.lastName};this.props.registerUser(n,this.props.history)}},{key:"componentWillReceiveProps",value:function(t){t.auth.isAuthenticated&&this.props.history.push("/home"),t.errors&&this.setState({errors:t.errors})}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/home")}},{key:"render",value:function(){var t=this;return Object($.jsxs)(jt,{children:[Object($.jsx)(Ot,{children:Object($.jsx)(ft,{children:Object($.jsx)(pt,{})})}),Object($.jsx)(vt,{onSubmit:this.handleLogin,children:Object($.jsxs)(Nt,{loginStatus:this.state.loginStatus,children:[Object($.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"Email",onChange:this.handleInputChange,value:this.state.email}),Object($.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:this.handleInputChange,value:this.state.password}),Object($.jsx)(wt,{children:Object($.jsx)("input",{type:"submit",value:"Login"})})]})}),Object($.jsx)(yt,{onSubmit:this.handleSignup,children:Object($.jsxs)(Nt,{loginStatus:!this.state.loginStatus,children:[Object($.jsx)("input",{type:"text",id:"userName",name:"userName",placeholder:"Username",onChange:this.handleInputChange,value:this.state.userName}),Object($.jsx)("input",{type:"text",id:"firstName",name:"firstName",placeholder:"First Name",onChange:this.handleInputChange,value:this.state.firstName}),Object($.jsx)("input",{type:"text",id:"lastName",name:"lastName",placeholder:"Last Name",onChange:this.handleInputChange,value:this.state.lastName}),Object($.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"Email",onChange:this.handleInputChange,value:this.state.email}),Object($.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:this.handleInputChange,value:this.state.password}),Object($.jsx)(wt,{children:Object($.jsx)("input",{type:"submit",value:"Signup"})})]})}),Object($.jsxs)(gt,{children:[Object($.jsx)(mt,{loginStatus:this.state.loginStatus,onClick:function(){return t.setState({loginStatus:!0})},children:Object($.jsx)("p",{children:"Don't have an account? Sign up here"})}),Object($.jsx)(mt,{loginStatus:!this.state.loginStatus,onClick:function(){return t.setState({loginStatus:!1})},children:Object($.jsx)("p",{children:"Have an account? Login here"})}),Object($.jsx)("p",{children:"Contact us: branch@gmail.com"})]})]})}}]),e}(o.Component),xt=Object(b.b)((function(t){return{auth:t.auth,errors:t.errors}}),{registerUser:function(t,n){return function(e){T.a.post("/api/signup",t).then((function(t){var a=t.data.token;localStorage.setItem("jwtToken",a),q(a);var i=Object(W.a)(a);e(K(i)),n.push("/home")})).catch((function(t){e({type:g,payload:t.response.data})}))}},loginUser:function(t,n){return function(e){T.a.post("/api/login",t).then((function(t){var a=t.data.token;localStorage.setItem("jwtToken",a),q(a);var i=Object(W.a)(a);e(K(i)),n.push("/home")})).catch((function(t){e({type:g,payload:t.response.data})}))}}})(Object(u.e)(bt)),jt=Z.a.div(tt||(tt=Object(V.a)(['\n  height: 100vh;\n  width: 100vw;\n  background-image: url("/images/background.png");\n  background-position: center;\n  background-size: cover;\n']))),gt=Z.a.div(nt||(nt=Object(V.a)(["\n  position: fixed;\n  display: flex;\n  color: grey;\n  font-weight: 700;\n  font-size: 20px;\n  height: 55px;\n  background-color: black;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: space-between;\n  align-items: center;\n"]))),mt=Z.a.p(et||(et=Object(V.a)(["\n    margin: 0 10px;\n    display: ",";\n    cursor: pointer;\n    p:hover{\n        color: white;\n    }\n"])),(function(t){return t.loginStatus?"none":"flex"})),ft=Z.a.div(at||(at=Object(V.a)(["\n  width: 50%;\n"]))),Ot=Z.a.div(it||(it=Object(V.a)(["\n    height: 80px;\n    display: flex;\n    position: fixed;\n    align-items: center;\n    top: 15%;\n    left: 50%; \n    transform: translate(-30%, 0);\n    font-size: 30px;\n    h1 {\n        transform: translate(0, -5px);\n    }\n"]))),vt=Z.a.form.attrs({action:"/api/login",method:"post"})(ot||(ot=Object(V.a)(["\n  gap: 10px;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 35%;\n  left: 50%; \n  transform: translate(-50%, 0%);\n\n  input[type=text], input[type=password] {\n    padding: 5px 5px;\n    background-color: transparent;\n    margin: 8px 0;\n    border-bottom: 1px solid black;\n    border-right: none;\n    border-top: none;\n    border-left: none;\n    box-sizing: border-box;\n    color: black;\n  }\n\n  input[type=text]:focus, input[type=password]:focus  {\n    outline: none;\n  } \n"]))),yt=Z.a.form.attrs({action:"/api/signup",method:"post"})(rt||(rt=Object(V.a)(["\n  gap: 10px;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 35%;\n  left: 50%; \n  transform: translate(-50%, 0%);\n\n  input[type=text], input[type=password] {\n    padding: 5px 5px;\n    background-color: transparent;\n    margin: 8px 0;\n    border-bottom: 1px solid black;\n    border-right: none;\n    border-top: none;\n    border-left: none;\n    box-sizing: border-box;\n    color: black;\n  }\n\n  input[type=text]:focus, input[type=password]:focus  {\n    outline: none;\n  } \n"]))),wt=Z.a.div(st||(st=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 8px;\n\n  input[type=submit] {\n    text-align: center;\n    width: 60px;\n    padding: 5px;\n    border-radius: 10px;\n    background-color: rgb(150, 180, 180);\n    cursor: pointer;\n    outline: none;\n    border: none;\n    box-shadow: 2px 2px 5px grey;\n  }\n\n  input[type=submit]:hover {\n    background-color: rgb(50, 230, 230);\n    cursor: pointer;\n    box-shadow: 4px 4px 5px grey;\n  }\n"]))),Nt=Z.a.div(ct||(ct=Object(V.a)(["\n    display: ",";\n    grid-template-columns: 1;\n    \n    \n"])),(function(t){return t.loginStatus?"none":"grid"})),St=e(38),kt=e.n(St);var Ct,Ft,Tt,Dt,It,Bt,Lt=function(t){return Object($.jsxs)(Et,{children:[Object($.jsx)(zt,{to:"/home",children:Object($.jsx)(pt,{})}),Object($.jsx)("h1",{onClick:t.logout,children:"Logout"})]})},Et=Z.a.div(lt||(lt=Object(V.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1vh;\n  display: flex;\n  justify-content: space-between;\n\n  h1 {\n    margin: 10px;\n  }\n"]))),zt=Object(Z.a)(h.b)(dt||(dt=Object(V.a)(["\n  width: 20%;\n"]))),At=function(){var t=Object(b.c)();Object(o.useEffect)((function(){t(R())}),[t]);var n=Object(b.d)((function(t){return t.contacts})).contacts.map((function(t){return Object($.jsx)(Ut,{className:"contact-excerpt",to:"/contact/".concat(t._id),style:{textDecoration:"none"},children:Object($.jsxs)(Ht,{children:[Object($.jsx)(_t,{children:Object($.jsx)("p",{children:t.firstName+" "+t.lastName})}),Object($.jsx)(Pt,{children:Object($.jsx)("p",{children:t.highlight})})]})})}));return Object($.jsx)(Rt,{className:"contact-list",children:n})},Rt=Z.a.div(Ct||(Ct=Object(V.a)(["\n    position: relative;\n    display: grid;\n    grid-gap: 1vw;\n    grid-template-columns: repeat( auto-fill, minmax(18vw, 18vw) );\n    grid-template-rows: repeat( auto-fill, minmax(18vh, 18vh) );\n    top: 18vh;\n    max-width: 65vw;\n    height: 45vh;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    padding-right: 24px;\n    padding-bottom: 24px;\n"]))),Ut=Object(Z.a)(h.b)(Ft||(Ft=Object(V.a)(["\n    width: 18vw;\n    height: 18vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: solid;\n    border-color: #707070;\n    border-radius: 2vw;\n    p{\n      color: #707070;\n      text-decorations-style: none;\n    }\n\n"]))),_t=Z.a.h1(Tt||(Tt=Object(V.a)(["\n   display: flex;\n   text-align: center;\n   p {\n    padding: 8px;\n    font-size: 24px;\n    border: none;\n    margin: 0px 5px;\n   }\n"]))),Pt=Z.a.p(Dt||(Dt=Object(V.a)(["\n   border: none;\n   justify-content: center;\n   display: flex;\n   p {\n    border: none;\n    margin: 0px 5px;\n  }\n"]))),Ht=Z.a.div(It||(It=Object(V.a)(["\n   display: inline;\n   justify-content: center;\n   align-items: center;\n"]))),Mt=e(61),Jt=e.n(Mt),Gt=e(62),Wt=e.n(Gt),qt=e(63),Kt=e.n(qt),Qt=function(t){for(var n=0,e=0;e<t.length;e++)n=t.charCodeAt(e)+((n<<5)-n);var a="#";for(e=0;e<3;e++){a+=("00"+(n>>8*e&255).toString(16)).substr(-2)}return a};var Vt,Xt,Yt,Zt,$t,tn,nn,en,an,on=function(t){var n=t.name,e=t.selected,a=t.tagID,i=Object(b.c)();return Object($.jsx)(rn,{onClick:function(){var t;i(z(n)),i(e?R():(t=a,function(){var n=Object(k.a)(S.a.mark((function n(e){var a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(P()),a={tagIDs:t},n.next=4,T.a.post("/api/contacts/tag",a).then((function(t){e(H(t.data))})).catch((function(t){console.log(t)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()))},selected:e,color:Qt(n),children:Object($.jsxs)("h3",{children:[" ",n," "]})})},rn=Z.a.div(Bt||(Bt=Object(V.a)(["\n    background-color: ",";\n    height: 60px;\n    min-width: 150px;\n    margin: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #707070;\n    border-width: 3px;\n    cursor: pointer;\n    h3 {\n        z-index: 100;\n        color: ",";\n    }\n"])),(function(t){return t.selected?t.color:"white"}),(function(t){return t.selected?"#FFFFFF":"#707070"})),sn=function(){var t=Object(b.c)();Object(o.useEffect)((function(){t(D())}),[t]);var n=Object(b.d)((function(t){return t.tags})).tags.map((function(t){return Object($.jsx)(on,{tagID:t._id,name:t.name,color:t.color,selected:t.selected})}));return Object($.jsx)(cn,{children:n})},cn=Z.a.div(Vt||(Vt=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin-left: -10px;\n  margin-top: -12px;\n  max-width: 65vw;\n"])));var ln,dn,pn,hn,un,bn,xn,jn,gn=function(t){var n=t.choosingSort;return Object($.jsxs)(Nn,{children:[Object($.jsxs)(fn,{children:[Object($.jsxs)(vn,{children:[Object($.jsx)("input",{type:"text"}),Object($.jsx)(yn,{})]}),Object($.jsx)(wn,{onClick:n,children:Object($.jsx)("h3",{children:"Add Tag"})}),Object($.jsx)(h.b,{to:"/addingCard",children:Object($.jsx)(On,{sx:{fontSize:"60px"}})})]}),Object($.jsx)(sn,{})]})},mn=Z.a.div(Xt||(Xt=Object(V.a)(["\n  \n  input{\n    background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);\n    height: 35px;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #707070;\n    padding-left: 10px;\n    color: #1c1c1c;\n  }\n  input:focus{\n    outline: none;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #1c1c1c;\n  }\n"]))),fn=Z.a.div(Yt||(Yt=Object(V.a)(["\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n\n  p {\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n"]))),On=Object(Z.a)(Jt.a)(Zt||(Zt=Object(V.a)(["\n  margin-left: 30px;\n  margin-right: 30px;\n  cursor: pointer;\n  color: #707070;\n"]))),vn=Object(Z.a)(mn)($t||($t=Object(V.a)(["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 35vw;\n  input{\n    position: relative;\n    width: 100%;\n    margin: 0px 0px;\n  }\n"]))),yn=Object(Z.a)(Wt.a)(tn||(tn=Object(V.a)(["\n  cursor: pointer;\n  position: relative;\n  right: 40px;\n"]))),wn=Z.a.div(nn||(nn=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 35px;\n  border-radius: 24px;\n  border-style: solid;\n  border-color: #707070;\n  border-width: 3px;\n  background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);\n  cursor: pointer;\n  h3 {\n    color: #707070;\n  }\n"]))),Nn=(Object(Z.a)(Kt.a)(en||(en=Object(V.a)(["\n  margin-left: 10px;\n  color: #707070;\n"]))),Z.a.div(an||(an=Object(V.a)(["\n  display: grid;\n  top: 45px;\n  position: absolute;\n"])))),Sn=function(t){Object(d.a)(e,t);var n=Object(p.a)(e);function e(){var t;return Object(c.a)(this,e),(t=n.call(this)).state={name:"",color:""},t.handleInputChange=t.handleInputChange.bind(Object(Y.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(Y.a)(t)),t.handleLogout=t.handleLogout.bind(Object(Y.a)(t)),t}return Object(l.a)(e,[{key:"handleInputChange",value:function(t){this.setState(Object(X.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault();var n={name:this.state.name};this.props.addTag(n,this.props.history)}},{key:"handleLogout",value:function(t){t.preventDefault(),this.props.logoutUser(this.props.history)}},{key:"render",value:function(){return Object($.jsxs)(Cn,{onSubmit:this.handleSubmit,children:[Object($.jsx)("input",{type:"text",name:"name",placeholder:"Tag Name",onChange:this.handleInputChange}),Object($.jsx)("input",{type:"submit",value:"Add Tag"})]})}}]),e}(o.Component),kn=Object(b.b)(null,{addTag:function(t,n){return function(e){T.a.post("/api/add/tag",t).then((function(t){n.push("/")})).catch((function(t){console.log(t)}))}}})(Object(u.e)(Sn)),Cn=Z.a.form(ln||(ln=Object(V.a)(["\n    \n    input[type=text]{\n        margin: 10px;\n        background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);\n        height: 5vh;\n        border-radius: 24px;\n        border-style: solid;\n        border-color: #707070;\n        padding-left: 10px;\n        color: #1c1c1c;\n        border-width: 2px;\n    }\n    input[type=text]:focus{\n        outline: none;\n        border-radius: 24px;\n        border-style: solid;\n        border-color: #1c1c1c;\n        border-width: 2px;\n    }\n    input[type=submit] {\n        margin: 10px;\n        text-align: center;\n        width: 100px;\n        height: 40px;\n        padding: 5px;\n        border-radius: 10px;\n        background-color: rgb(150, 180, 180);\n        cursor: pointer;\n        outline: none;\n        border: none;\n        box-shadow: 2px 2px 5px grey;\n    }\n    input[type=submit]:hover {\n        background-color: rgb(50, 230, 230);\n        cursor: pointer;\n        box-shadow: 4px 4px 5px grey;\n    }\n"]))),Fn=function(t){Object(d.a)(e,t);var n=Object(p.a)(e);function e(){var t;return Object(c.a)(this,e),(t=n.call(this)).state={choosingSort:!1,firstName:"",lastName:"",email:"",notes:""},t.isChoosingSort=t.isChoosingSort.bind(Object(Y.a)(t)),t.notChoosingSort=t.notChoosingSort.bind(Object(Y.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(Y.a)(t)),t.handleLogout=t.handleLogout.bind(Object(Y.a)(t)),t}return Object(l.a)(e,[{key:"isChoosingSort",value:function(t){this.setState({choosingSort:!0})}},{key:"notChoosingSort",value:function(t){this.setState({choosingSort:!1})}},{key:"handleSubmit",value:function(t){t.preventDefault();var n={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,notes:this.state.notes};console.log(n)}},{key:"handleLogout",value:function(t){t.preventDefault(),this.props.logoutUser(this.props.history)}},{key:"render",value:function(){return Object($.jsxs)(Dn,{children:[Object($.jsx)(Lt,{logout:this.handleLogout}),Object($.jsxs)(In,{children:[!this.state.addingCard&&!this.state.choosingSort&&Object($.jsx)(gn,{choosingSort:this.isChoosingSort}),!this.state.addingCard&&this.state.choosingSort&&Object($.jsxs)(Ln,{children:[Object($.jsx)(kn,{}),Object($.jsx)(Bn,{sx:{fontSize:"40px"},onClick:this.notChoosingSort})]}),Object($.jsx)(At,{})]})]})}}]),e}(o.Component),Tn=Object(b.b)((function(t){return{auth:t.auth}}),{logoutUser:Q})(Object(u.e)(Fn)),Dn=(Z.a.div(dn||(dn=Object(V.a)(["\n  \n  input{\n    background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);\n    height: 35px;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #707070;\n    padding-left: 10px;\n    color: #1c1c1c;\n  }\n  input:focus{\n    outline: none;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #1c1c1c;\n  }\n"]))),Z.a.div(pn||(pn=Object(V.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: #F8F5F5;\n  display: flex;\n"])))),In=Z.a.div(hn||(hn=Object(V.a)(["\n  position: fixed;\n  display: flex;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  width: 80vw;\n  background-color: white;\n  border-style: solid;\n  border-color: #707070;\n  border-radius: 32px;\n  border-width: 2px;\n  overflow: hidden;\n  margin: auto;\n  margin-top: 16px;\n"]))),Bn=Object(Z.a)(kt.a)(un||(un=Object(V.a)(["\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  cursor: pointer;\n  cursor: pointer;\n  color: #707070;\n"]))),Ln=Z.a.div(bn||(bn=Object(V.a)(["\n  display: flex;\n  position: absolute;\n  top: 65px;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  width: 45vw;\n  background-color: white;\n  border-style: solid;\n  border-color: #707070;\n  border-radius: 32px;\n  border-width: 2px;\n  background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);\n"])));var En,zn,An,Rn,Un,_n,Pn,Hn,Mn,Jn,Gn,Wn,qn,Kn,Qn,Vn,Xn,Yn,Zn,$n,te,ne,ee,ae,ie,oe,re=function(){return Object($.jsx)(se,{to:"/home",children:Object($.jsx)(ce,{sx:{fontSize:"60px"}})})},se=Object(Z.a)(h.b)(xn||(xn=Object(V.a)([""]))),ce=Object(Z.a)(kt.a)(jn||(jn=Object(V.a)(["\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  cursor: pointer;\n  cursor: pointer;\n  color: #707070;\n"]))),le=e(30),de=e.n(le),pe=(e(95),function(){var t=Object(b.c)();Object(o.useEffect)((function(){t(D())}),[t]);var n=window.location.href.substring(window.location.href.lastIndexOf("/")+1),e=Object(b.d)((function(t){return t.tags})),a=Object(b.d)((function(t){return t.contacts})),i=e.tags,r=a.contacts.filter((function(t){return t._id==n})),s=[];i.forEach((function(t){r[0].tags.includes(t._id)&&s.push(t)}));var c=s.map((function(t){return Object($.jsx)(he,{children:Object($.jsx)("p",{children:t.name})})}));return Object($.jsx)("div",{children:c})}),he=Z.a.div(En||(En=Object(V.a)(["\n    margin-left: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    p {\n        transform: translate(0px, -5px);\n    }\n"]))),ue=function(t){var n=t.match.params.contactId,e=Object(b.d)((function(t){return t.contacts.contacts.find((function(t){return t._id===n}))})),a=function(){var t=Object(k.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.location.href.substring(window.location.href.lastIndexOf("/")+1),t.next=3,T.a.post("/api/remove",{contactID:n}).then((function(t){window.location.href="/"}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e?Object($.jsxs)(be,{children:[Object($.jsx)(Lt,{}),Object($.jsx)(xe,{children:Object($.jsxs)(je,{children:[Object($.jsx)(re,{}),Object($.jsxs)(Oe,{children:[Object($.jsxs)("div",{className:"splitCells",children:[e.firstName?Object($.jsxs)("p",{className:"splitTextBox textDisplay",children:[e.firstName," "]}):Object($.jsx)(me,{className:"splitTextBox textDisplay",children:"First Name "}),e.middleName?Object($.jsxs)("p",{className:"splitTextBox textDisplay",children:[" ",e.middleName," "]}):Object($.jsx)(me,{className:"splitTextBox textDisplay",children:"Middle Name"}),e.lastName?Object($.jsxs)("p",{className:"splitTextBox textDisplay",children:[" ",e.lastName," "]}):Object($.jsx)(me,{className:"splitTextBox textDisplay",children:"Last Name"})]}),e.company?Object($.jsxs)("p",{className:"textBox textDisplay",children:[" ",e.company," "]}):Object($.jsx)(me,{className:"textBox textDisplay",children:"Company"}),Object($.jsxs)("div",{className:"splitCells",children:[e.phoneNumber?Object($.jsxs)("p",{className:"splitTextBox textDisplay",children:[e.phoneNumber," "]}):Object($.jsx)(me,{className:"splitTextBox textDisplay",children:" Phone Number "}),e.email?Object($.jsx)("p",{className:"splitTextBox  textDisplay",children:e.email}):Object($.jsx)(me,{className:"splitTextBox textDisplay",children:"Email"})]}),e.address?Object($.jsxs)("p",{className:"textBox  textDisplay",children:[" ",e.address," "]}):Object($.jsx)(me,{className:"textBox textDisplay",children:" Address "}),e.notes?Object($.jsxs)("p",{className:"tallTextBox  textDisplay",children:[" ",e.notes," "]}):Object($.jsx)(me,{className:"tallTextBox textDisplay",children:"No Notes"})]}),Object($.jsxs)("div",{className:"leftBar",children:[Object($.jsx)(ge,{children:e.highlight?Object($.jsxs)("p",{className:"splitTextBox textDisplay",children:[" ",e.highlight," "]}):Object($.jsx)(me,{className:"splitTextBox textDisplay",children:"Highlight"})}),Object($.jsx)(pe,{})]}),Object($.jsx)(fe,{children:Object($.jsx)("input",{className:"textBox",type:"submit",value:"Delete",onClick:a})})]})})]}):Object($.jsx)("section",{children:Object($.jsx)("h2",{children:"Contact not found!"})})},be=Z.a.div(zn||(zn=Object(V.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: #F8F5F5;\n  display: flex;\n"]))),xe=Z.a.div(An||(An=Object(V.a)(["\n  position: fixed;\n  display: flex;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  width: 80vw;\n  background-color: white;\n  border-style: solid;\n  border-color: #707070;\n  border-radius: 32px;\n  border-width: 2px;\n  overflow: hidden;\n"]))),je=Z.a.div(Rn||(Rn=Object(V.a)(["\n  display: flex;\n  background-color: white;\n  height: 80vh;\n  width: 80vw;\n"]))),ge=(Z.a.div(Un||(Un=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  height: 15vw;\n  width: 15vw;\n  background-color: #707070;\n  border-radius: 140px;\n  cursor: pointer;\n  margin-bottom: 20px;\n"]))),Object(Z.a)(de.a)(_n||(_n=Object(V.a)(["\n  position: fixed;\n"]))),Z.a.div(Pn||(Pn=Object(V.a)(["\n  display: grid;\n  position: fixed;\n  justify-content: space-between;\n  width: 15vw;\n  left: 7vh;\n  top: 7vh;\n  bottom: 80px;\n"]))),Z.a.div(Hn||(Hn=Object(V.a)(["\n  width: 100%;\n"])))),me=Z.a.p(Mn||(Mn=Object(V.a)(["\n  color: #707070;\n"]))),fe=Z.a.div(Jn||(Jn=Object(V.a)(["\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: 60px;\n\n  input[type=submit] {\n    text-align: center;\n    width: 100px;\n    height: 40px;\n    padding: 5px;\n    border-radius: 10px;\n    background-color: rgb(150, 180, 180);\n    cursor: pointer;\n    outline: none;\n    border: none;\n    box-shadow: 2px 2px 5px grey;\n  }\n  input[type=submit]:hover {\n    background-color: rgb(50, 230, 230);\n    cursor: pointer;\n    box-shadow: 4px 4px 5px grey;\n  }\n  \n  \n"]))),Oe=Z.a.div(Gn||(Gn=Object(V.a)(["\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1;\n  width: 50vw;\n  top: 5vh;\n  right: 7vw;\n"]))),ve=function(){var t=Object(b.c)();Object(o.useEffect)((function(){t(D())}),[t]);var n=Object(b.d)((function(t){return t.tags})).tags.map((function(t){return Object($.jsxs)(ye,{children:[Object($.jsx)("p",{children:t.name}),Object($.jsx)("input",{type:"checkbox",id:t.id,name:t.name,color:t.color,selected:t.selected})]})}));return Object($.jsx)("div",{children:n})},ye=Z.a.div(Wn||(Wn=Object(V.a)(["\n    margin-left: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    p {\n        transform: translate(0px, -5px);\n    }\n"]))),we=function(t){Object(d.a)(e,t);var n=Object(p.a)(e);function e(){var t;return Object(c.a)(this,e),(t=n.call(this)).state={choosingSort:!1,firstName:"",lastName:"",email:"",notes:"",highlight:""},t.handleInputChange=t.handleInputChange.bind(Object(Y.a)(t)),t.isChoosingSort=t.isChoosingSort.bind(Object(Y.a)(t)),t.notChoosingSort=t.notChoosingSort.bind(Object(Y.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(Y.a)(t)),t.handleLogout=t.handleLogout.bind(Object(Y.a)(t)),t}return Object(l.a)(e,[{key:"handleInputChange",value:function(t){this.setState(Object(X.a)({},t.target.name,t.target.value))}},{key:"isChoosingSort",value:function(t){this.setState({choosingSort:!0})}},{key:"notChoosingSort",value:function(t){this.setState({choosingSort:!1})}},{key:"handleSubmit",value:function(t){t.preventDefault();var n={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,notes:this.state.notes,highlight:this.state.highlight};this.props.addContact(n,this.props.history)}},{key:"handleLogout",value:function(t){t.preventDefault(),this.props.logoutUser(this.props.history)}},{key:"render",value:function(){return Object($.jsxs)(Be,{children:[Object($.jsx)(Lt,{}),Object($.jsx)(Le,{children:Object($.jsxs)(ke,{children:[Object($.jsx)(re,{}),Object($.jsxs)(Ce,{onSubmit:this.handleSubmit,children:[Object($.jsxs)(Fe,{children:[Object($.jsxs)("div",{className:"splitCells",children:[Object($.jsx)("input",{className:"splitTextBox",type:"text",name:"firstName",placeholder:"First Name...",onChange:this.handleInputChange,value:this.state.firstName}),Object($.jsx)("input",{className:"splitTextBox",type:"text",placeholder:"Middle Name..."}),Object($.jsx)("input",{className:"splitTextBox",type:"text",name:"lastName",placeholder:"Last Name...",onChange:this.handleInputChange,value:this.state.lastName})]}),Object($.jsx)("input",{className:"textBox",type:"text",placeholder:"Company..."}),Object($.jsxs)("div",{className:"splitCells",children:[Object($.jsx)("input",{className:"splitTextBox",type:"text",name:"email",placeholder:"Email...",onChange:this.handleInputChange,value:this.state.email}),Object($.jsx)("input",{className:"splitTextBox",type:"text",placeholder:"Phone Number..."})]}),Object($.jsx)("input",{className:"textBox",type:"text",placeholder:"Address..."}),Object($.jsx)("textarea",{className:"tallTextBox",type:"text",name:"notes",placeholder:"Notes..",onChange:this.handleInputChange,value:this.state.notes})]}),Object($.jsxs)("div",{className:"leftBar",children:[Object($.jsx)(De,{children:Object($.jsx)("input",{className:"splitTextBox",type:"text",name:"highlight",placeholder:"Highlight...",onChange:this.handleInputChange,value:this.state.highlight})}),Object($.jsx)(ve,{})]}),Object($.jsx)(Ie,{children:Object($.jsx)("input",{className:"textBox",type:"submit",value:"Create"})})]})]})})]})}}]),e}(o.Component),Ne=Object(b.b)(null,{addContact:function(t,n){return function(e){T.a.post("/api/add",t).then((function(t){n.push("/home")})).catch((function(t){console.log(t)}))}}})(Object(u.e)(we)),Se=Z.a.div(qn||(qn=Object(V.a)(["\n  \n  input, textarea{\n    background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);\n    height: 5vh;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #707070;\n    padding-left: 10px;\n    color: #1c1c1c;\n    border-width: 2px;\n  }\n  input:focus, textarea:focus{\n    outline: none;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #1c1c1c;\n    border-width: 2px;\n  }\n\n\n"]))),ke=Z.a.div(Kn||(Kn=Object(V.a)(["\n  display: flex;\n  background-color: white;\n  height: 80vh;\n  width: 80vw;\n"]))),Ce=Z.a.form.attrs({})(Qn||(Qn=Object(V.a)([""]))),Fe=Object(Z.a)(Se)(Vn||(Vn=Object(V.a)(["\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1;\n  width: 50vw;\n  top: 5vh;\n  right: 7vw;\n"]))),Te=Z.a.div(Xn||(Xn=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  right: 0;\n  input{\n    width: 100%;\n  }\n"]))),De=(Z.a.div(Yn||(Yn=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 80px;\n  left: 80px;\n  height: 280px;\n  width: 280px;\n  background-color: #707070;\n  border-radius: 140px;\n  cursor: pointer;\n  margin-bottom: 20px;\n"]))),Object(Z.a)(de.a)(Zn||(Zn=Object(V.a)(["\n  position: fixed;\n"]))),Object(Z.a)(Te)($n||($n=Object(V.a)(["\n  input {\n    height: 200px;\n  }\n"]))),Z.a.div(te||(te=Object(V.a)(["\n  display: grid;\n  position: fixed;\n  justify-content: space-between;\n  width: 280px;\n  left: 80px;\n  top: 70px;\n  bottom: 80px;\n"]))),Z.a.div(ne||(ne=Object(V.a)(["\n  display: flex;\n  position: relative;\n  left: 0;\n  right: 0;\n  margin: 10px 0px;\n  input{\n    width: 100%;\n    height: 35px;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #707070;\n    padding-left: 10px;\n    color: #1c1c1c;\n  }\n  input:focus{\n    outline: none;\n    border-radius: 24px;\n    border-style: solid;\n    border-color: #1c1c1c;\n  }\n"]))),Object(Z.a)(Se)(ee||(ee=Object(V.a)([""])))),Ie=Z.a.div(ae||(ae=Object(V.a)(["\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: 60px;\n\n  input[type=submit] {\n    text-align: center;\n    width: 100px;\n    height: 40px;\n    padding: 5px;\n    border-radius: 10px;\n    background-color: rgb(150, 180, 180);\n    cursor: pointer;\n    outline: none;\n    border: none;\n    box-shadow: 2px 2px 5px grey;\n  }\n  input[type=submit]:hover {\n    background-color: rgb(50, 230, 230);\n    cursor: pointer;\n    box-shadow: 4px 4px 5px grey;\n  }\n  \n  \n"]))),Be=Z.a.div(ie||(ie=Object(V.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: #F8F5F5;\n  display: flex;\n"]))),Le=Z.a.div(oe||(oe=Object(V.a)(["\n  position: fixed;\n  display: flex;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  width: 80vw;\n  background-color: white;\n  border-style: solid;\n  border-color: #707070;\n  border-radius: 32px;\n  border-width: 2px;\n  overflow: hidden;\n"])));if(localStorage.jwtToken){q(localStorage.jwtToken);var Ee=Object(W.a)(localStorage.jwtToken);G.dispatch(K(Ee));var ze=Date.now()/1e3;Ee.exp<ze&&(G.dispatch(Q((void 0).history)),window.location.href="/login")}var Ae=function(t){Object(d.a)(e,t);var n=Object(p.a)(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object($.jsx)(b.a,{store:G,children:Object($.jsx)(h.a,{children:Object($.jsxs)("div",{children:[Object($.jsx)(u.a,{exact:!0,path:"/",component:xt}),Object($.jsx)(u.a,{path:"/home",component:Tn}),Object($.jsx)(u.a,{exact:!0,path:"/contact/:contactId",component:ue}),Object($.jsx)(u.a,{exact:!0,path:"/addingCard",component:Ne})]})})})}}]),e}(o.Component),Re=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,104)).then((function(n){var e=n.getCLS,a=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;e(t),a(t),i(t),o(t),r(t)}))};s.a.render(Object($.jsx)(Ae,{}),document.getElementById("root")),Re()}},[[97,1,2]]]);
//# sourceMappingURL=main.9608d53b.chunk.js.map