(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){e.exports=t(48)},44:function(e,a,t){},45:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(29),o=t.n(l),c=t(16),s=t(12),i=t(31),m=t(20),u=t(11),p={displayPlayerData:[{id:1,firstName:"Mark",lastName:"Otto",score:98},{id:2,firstName:"Junge",lastName:"John",score:68},{id:3,firstName:"Vera",lastName:"Rob",score:88}]},d=Object(s.c)({playersReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PLAYER_ACTION":return Object(u.a)({},e,{displayPlayerData:[].concat(Object(m.a)(e.displayPlayerData),[Object(u.a)({},a.payload,{id:e.displayPlayerData.length+1})])});case"DELETE_PLAYER_ACTION":var t=e.displayPlayerData;return t.splice(t.findIndex(function(e){return e.id===a.payload}),1),Object(u.a)({},e,{displayPlayerData:Object(m.a)(t)});case"EDIT_PLAYER_ACTION":var r=e.displayPlayerData,n=r.findIndex(function(e){return e.id===a.payload.formData.id});return console.log(n),Object(u.a)({},e,{displayPlayerData:[].concat(Object(m.a)(r.slice(0,n)),[Object(u.a)({},a.payload.formData)],Object(m.a)(r.slice(n+1,r.length)))});case"HANDLE_SORT_DATA":return Object(u.a)({},e,{displayPlayerData:Object(m.a)(a.payload)});default:return e}}});t(44);var y=t(13),f=t(14),h=t(17),E=t(15),N=t(18),P=t(58),O=t(57),D=(t(45),t(21)),b=t(50),v=t(51),A=t(52),j=t(53),g=t(54),w=t(55),C=t(59),S=function(e){return function(a){a({type:"EDIT_PLAYER_ACTION",payload:e})}},k=function(e){function a(){var e,t;Object(y.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(n)))).state={displayNewPlayer:!1},t.handleChange=function(e){var a=e.target;"score"===a.name?a.value>=0&&a.value<=100&&t.setState(Object(D.a)({},a.name,a.value)):t.setState(Object(D.a)({},a.name,a.value))},t.handleClick=function(e){e.stopPropagation(),e.preventDefault();var a=t.state,r=a.firstName,n=a.lastName,l=a.score;return r?n?l?(t.props.location.state&&t.props.location.state.edit?t.props.editPlayerAction({formData:{firstName:r,lastName:n,score:l,id:t.props.location.state.formData.id}}):t.props.addPlayerAction({formData:{firstName:r,lastName:n,score:l}}),void t.setState({displayNewPlayer:!0})):alert("Please Enter The Score"):alert("Please Enter The Last Name"):alert("Please Enter The First Name")},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.props.location.state&&this.props.location.state.edit&&this.setState({firstName:this.props.location.state.formData.firstName,lastName:this.props.location.state.formData.lastName,score:this.props.location.state.formData.score})}},{key:"render",value:function(){var e=this.state,a=e.firstName,t=e.lastName,r=e.score;return e.displayNewPlayer?n.a.createElement(C.a,{to:"/"}):n.a.createElement("div",{className:"App"},n.a.createElement(b.a,null,n.a.createElement(v.a,{row:!0},n.a.createElement(A.a,{for:"exampleEmail",sm:2},"First Name ",n.a.createElement("span",{style:{color:"red"}},"*")),n.a.createElement(j.a,{sm:10},n.a.createElement(g.a,{type:"text",name:"firstName",value:a,onChange:this.handleChange,placeholder:"Enter First Name"}))),n.a.createElement(v.a,{row:!0},n.a.createElement(A.a,{for:"exampleEmail",sm:2},"Last Name ",n.a.createElement("span",{style:{color:"red"}},"*")),n.a.createElement(j.a,{sm:10},n.a.createElement(g.a,{type:"text",name:"lastName",value:t,onChange:this.handleChange,placeholder:"Enter Last Name"}))),n.a.createElement(v.a,{row:!0},n.a.createElement(A.a,{for:"exampleEmail",sm:2},"Score ",n.a.createElement("span",{style:{color:"red"}},"*")),n.a.createElement(j.a,{sm:10},n.a.createElement(g.a,{type:"number",name:"score",value:r,onChange:this.handleChange,placeholder:"Enter The Score"}))),n.a.createElement(v.a,{row:!0},n.a.createElement(j.a,{sm:12},n.a.createElement(w.a,{color:"primary",onClick:this.handleClick},"Save Player")," "))))}}]),a}(r.Component),T=Object(c.b)(null,function(e){return{addPlayerAction:function(a){return e(function(e){return function(a){a({type:"ADD_PLAYER_ACTION",payload:Object(u.a)({},e.formData)})}}(a))},editPlayerAction:function(a){return e(S(a))}}})(k),_=t(56),I=function(e){function a(){var e,t;Object(y.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(n)))).state={addNewPlayer:!1,displayPlayerData:[],sortingIsDoneOn:"",editPlayer:!1},t.removePlayer=function(e,a){t.props.deletePlayerAction(a.id)},t.editPlayer=function(e,a){t.setState({editPlayer:a})},t.handleSort=function(e){var a=t.state,r=a.displayPlayerData,n=a.sortingIsDoneOn;if("score"===e)return t.props.handleSortingAction(r.sort(function(e,a){return Number("score"===n?e.score:a.score)-Number("score"===n?a.score:e.score)||(e.firstName+", "+e.lastName).localeCompare(a.firstName+", "+a.lastName)})),t.setState({sortingIsDoneOn:"score"===n?"":"score"});t.props.handleSortingAction(r.sort(function(e,a){return("name"===n?e.firstName+", "+e.lastName:a.firstName+", "+a.lastName).localeCompare("name"===n?a.firstName+", "+a.lastName:e.firstName+", "+e.lastName)})),t.setState({sortingIsDoneOn:"name"===n?"":"name"})},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.displayPlayerData;this.setState({displayPlayerData:e})}},{key:"componentWillReceiveProps",value:function(e){var a=e.displayPlayerData;this.setState({displayPlayerData:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.addNewPlayer,r=a.editPlayer,l=this.props.displayPlayerData;return t?n.a.createElement(C.a,{to:"/add-player"}):r?(console.log(r),n.a.createElement(C.a,{to:{pathname:"/add-player",state:{formData:r,edit:!0}}})):n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return e.handleSort("name")}},"Full Name"),n.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return e.handleSort("score")}},"Score"),n.a.createElement("th",null,"Action"))),n.a.createElement("tbody",null,l.map(function(a,t){return n.a.createElement("tr",{key:a.firstName+t},n.a.createElement("td",null,a.firstName+", "+a.lastName),n.a.createElement("td",null,a.score),n.a.createElement("td",{style:{cursor:"pointer"}},n.a.createElement("span",{onClick:function(t){return e.removePlayer(t,a)}},"Delete "),n.a.createElement("span",{onClick:function(t){return e.editPlayer(t,a)}}," Edit")))}))),n.a.createElement(w.a,{color:"primary",onClick:function(){e.setState({addNewPlayer:!0})}},"Add New Player")," ")}}]),a}(r.Component),L=Object(c.b)(function(e){return e.playersReducers},function(e){return{deletePlayerAction:function(a){return e(function(e){return function(a){a({type:"DELETE_PLAYER_ACTION",payload:e})}}(a))},handleSortingAction:function(a){return e(function(e){return function(a){a({type:"HANDLE_SORT_DATA",payload:e})}}(a))},editPlayerAction:function(a){return e(S(a))}}})(I),R=function(e){function a(){return Object(y.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement(P.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(O.a,{exact:!0,path:"/add-player",component:T}),n.a.createElement(O.a,{exact:!0,path:"/",component:L})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);o.a.render(n.a.createElement(c.a,{store:Object(s.d)(d,Object(s.a)(i.a))},n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.2370759f.chunk.js.map