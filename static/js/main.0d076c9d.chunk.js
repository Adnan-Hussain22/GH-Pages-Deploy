(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},31:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"updateUser",function(){return j}),n.d(r,"removeUser",function(){return U}),n.d(r,"updateProfile",function(){return y});var a=n(0),o=n.n(a),u=n(18),c=n.n(u),s=n(12),i=n(10),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER":return Object(i.a)({},e,{user:t.data});case"REMOVE_USER":return Object(i.a)({},e,{user:null});case"UPDATE_PROFILE":return Object(i.a)({},e,{profile:t.data});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOADER":return Object(i.a)({},e,{loader:t.data});default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MEETINGLIST":return Object(i.a)({},e,{list:t.data});default:return e}},p=Object(s.b)({authReducers:l,miscellaneousReducers:d,meetingsReducers:h}),m=Object(s.c)(p),f=n(4),b=(n(31),n(5)),v=n(6),E=n(8),g=n(7),O=n(9),j=function(e){return{type:"UPDATE_USER",data:e}},U=function(){return{type:"REMOVE_USER"}},y=function(e){return{type:"UPDATE_PROFILE",data:e}},R=n(37),k=n(38),P=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(g.a)(t).call(this,e))).handleLogin=function(){n.props.history.push({pathname:"/dashboard"})},n.state={stars:0,available:!1},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({user:e.user})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("button",{onClick:this.handleLogin},"Login Karo"))}}]),t}(o.a.Component),w=Object(f.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(P),C=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(g.a)(t).call(this,e))).state={},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){console.log("Kid Props==>",e)}},{key:"render",value:function(){return o.a.createElement("h3",null,"Kid")}}]),t}(o.a.Component),L=Object(f.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(C),T=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(g.a)(t).call(this,e))).state={stars:0,available:!1},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){console.log("Judge Props==>",e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Judge"))}}]),t}(o.a.Component),D=Object(f.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(T),S=function(e){return o.a.createElement("div",null,o.a.createElement(k.a,{exact:!0,path:"/dashboard/",render:function(t){return o.a.createElement(L,e)}}),o.a.createElement(k.a,{exact:!0,path:"/dashboard/Judge",render:function(t){return o.a.createElement(D,e)}}))},A=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(g.a)(t).call(this,e))).handleLogout=function(){n.props.removeUser(),n.props.history.push({pathname:"/"})},n.handleToggleComponent=function(){n.state.toggleComponent?n.props.history.push({pathname:"/dashboard/"}):n.props.history.push({pathname:"/dashboard/Judge"}),n.setState({toggleComponent:!n.state.toggleComponent})},n.state={stars:0,available:!1},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({user:e.user})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Dashboard"),o.a.createElement(S,null),o.a.createElement("button",{onClick:this.handleToggleComponent},"Toggle"),o.a.createElement("button",{onClick:this.handleLogout},"Logout Man"))}}]),t}(o.a.Component),_=Object(f.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(A),W=function(e){return o.a.createElement(R.a,{basename:""},o.a.createElement("div",null,o.a.createElement(k.a,{exact:!0,path:"/",component:w}),o.a.createElement(k.a,{path:"/dashboard",component:_})))},J=(n(34),function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(g.a)(t).call(this,e))).state={user:e.user},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e,t){console.log("Login props==>",e),this.setState(Object(i.a)({user:e.user},e))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(W,null))}}]),t}(a.Component)),I=Object(f.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f.a,{store:m},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.0d076c9d.chunk.js.map