(this["webpackJsonpiti-homework-ignat"]=this["webpackJsonpiti-homework-ignat"]||[]).push([[0],[,,,,,,,,function(g,A,e){g.exports={header:"Header_header__kgyBM",nav:"Header_nav__xLxbe",menuItem:"Header_menuItem__3N7d_",activeLink:"Header_activeLink__AwRIX",toggleMenu:"Header_toggleMenu__2loXm",hideMenu:"Header_hideMenu__1cv-n"}},,function(g,A,e){g.exports={someClass:"Affairs_someClass__1PhwT",affairButton:"Affairs_affairButton__1gmn7",activeFilter:"Affairs_activeFilter__2i3PW"}},,function(g,A,e){g.exports={message:"Message_message__329if",avatar:"Message_avatar__3ALlt",messageCorner:"Message_messageCorner__1DXPm",messageBody:"Message_messageBody__1EZXX",messageName:"Message_messageName__2L-s4",messageText:"Message_messageText__2tKfN",messageTime:"Message_messageTime__3-4Db"}},,,function(g,A,e){g.exports={greetingBox:"Greeting_greetingBox__334Zc",addBox:"Greeting_addBox__1BqnB",error:"Greeting_error__3Lyi3",errorMessage:"Greeting_errorMessage__uEh6I",addButton:"Greeting_addButton__16ejb",input:"Greeting_input__1lsoI"}},,,function(g,A,e){g.exports={affairContainer:"Affair_affairContainer__37fQT",high:"Affair_high__uBwRU",middle:"Affair_middle__ROiqy",delButton:"Affair_delButton__26bqn"}},,function(g,A,e){g.exports={blue:"HW4_blue__ZTnCI",column:"HW4_column__X5yML",testSpanError:"HW4_testSpanError__QW0nb"}},,,,,function(g,A,e){g.exports={default:"SuperButton_default__3W2KR",red:"SuperButton_red__3e_N-"}},function(g,A,e){g.exports={superInput:"SuperInputText_superInput__2sMrY",errorInput:"SuperInputText_errorInput__3dhTL",error:"SuperInputText_error__3aSfc"}},function(g,A,e){g.exports={checkbox:"SuperCheckbox_checkbox__2r8mr",spanClassName:"SuperCheckbox_spanClassName__3JV_-"}},,,function(g,A,e){g.exports={App:"App_App__2D15b"}},,function(g,A,e){g.exports={editableSpan:"SuperEditableSpan_editableSpan__3CodI"}},,,,,,function(g,A,e){},,,,,,,function(g,A,e){"use strict";e.r(A);var I=e(1),C=e.n(I),t=e(29),a=e.n(t),n=(e(38),e(30)),c=e.n(n),r=e(4),s=e(13),i=e(8),o=e.n(i),l=e(0);var j=function(){var g=Object(I.useState)(!1),A=Object(r.a)(g,2),e=A[0],C=A[1];return Object(l.jsx)("div",{className:o.a.header,onMouseEnter:function(){C(!0)},onMouseLeave:function(){C(!1)},children:Object(l.jsxs)("nav",{className:"".concat(o.a.nav," ").concat(!e&&o.a.hideMenu),children:[Object(l.jsx)(s.b,{className:o.a.menuItem,to:"/pre-junior",activeClassName:o.a.activeLink,children:"pre-junior"}),Object(l.jsx)(s.b,{className:o.a.menuItem,to:"/junior",activeClassName:o.a.activeLink,children:"junior"}),Object(l.jsx)(s.b,{className:o.a.menuItem,to:"/junior-plus",activeClassName:o.a.activeLink,children:"junior +"}),Object(l.jsx)("div",{className:o.a.toggleMenu,onClick:function(){C(!e)}})]})})},d=e(2),u=e(12),b=e.n(u);var m=function(g){return Object(l.jsxs)("div",{className:b.a.message,children:[Object(l.jsx)("img",{src:g.avatar,alt:"",className:b.a.avatar}),Object(l.jsx)("svg",{className:b.a.messageCorner,xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{fill:"#1A1C27",d:"M 0 20 A 20 20, 0, 0, 0, 20 0 L 20 20 Z"})}),Object(l.jsxs)("div",{className:b.a.messageBody,children:[Object(l.jsxs)("div",{className:b.a.leftPart,children:[Object(l.jsx)("div",{className:b.a.messageName,children:g.name}),Object(l.jsx)("div",{className:b.a.messageText,children:g.message})]}),Object(l.jsx)("div",{className:b.a.messageTime,children:g.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Artem",x="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",p="20:00";var f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)(m,{avatar:h,name:O,message:x,time:p}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},v=e(9),N=e(11),Z=e(25),M=e.n(Z),k=function(g){var A=g.red,e=g.className,I=Object(N.a)(g,["red","className"]),C="".concat(A?M.a.red:M.a.default," ").concat(e);return Object(l.jsx)("button",Object(v.a)({className:C},I))},G=e(18),y=e.n(G);var w=function(g){var A;return"high"===g.affair.priority&&(A="".concat(y.a.high)),"middle"===g.affair.priority&&(A="".concat(y.a.middle)),Object(l.jsxs)("div",{className:y.a.affairContainer,children:[Object(l.jsx)("div",{children:g.affair.name}),Object(l.jsx)("div",{className:A,children:"[".concat(g.affair.priority,"]")}),Object(l.jsx)(k,{onClick:function(){g.deleteAffairCallback(g.affair._id)},className:y.a.delButton,children:"X"})]})},B=e(10),S=e.n(B);var E=function(g){var A=g.filter,e=g.data.map((function(A){return Object(l.jsx)(w,{affair:A,deleteAffairCallback:g.deleteAffairCallback},A._id)}));return Object(l.jsxs)("div",{className:S.a.someClass,children:[e,Object(l.jsx)(k,{className:"".concat(S.a.affairButton," ").concat("all"===A?S.a.activeFilter:""),onClick:function(){g.setFilter("all")},children:"All"}),Object(l.jsx)(k,{className:"".concat(S.a.affairButton," ").concat("high"===A?S.a.activeFilter:""),onClick:function(){g.setFilter("high")},children:"High"}),Object(l.jsx)(k,{className:"".concat(S.a.affairButton," ").concat("middle"===A?S.a.activeFilter:""),onClick:function(){g.setFilter("middle")},children:"Middle"}),Object(l.jsx)(k,{className:"".concat(S.a.affairButton," ").concat("low"===A?S.a.activeFilter:""),onClick:function(){g.setFilter("low")},children:"Low"})]})},R=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var g=Object(I.useState)(R),A=Object(r.a)(g,2),e=A[0],C=A[1],t=Object(I.useState)("all"),a=Object(r.a)(t,2),n=a[0],c=a[1],s=function(g,A){return"all"===A?g:"low"===A?g.filter((function(g){return"low"===g.priority})):"middle"===A?g.filter((function(g){return"middle"===g.priority})):"high"===A?g.filter((function(g){return"high"===g.priority})):g}(e,n);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(E,{data:s,filter:n,setFilter:c,deleteAffairCallback:function(g){return C(function(g,A){return g.filter((function(g){return g._id!==A}))}(e,g))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},Y=e(33),_=e(15),L=e.n(_),V=e(26),U=e.n(V),T=function(g){g.type;var A=g.onChange,e=g.onChangeText,I=g.onKeyPress,C=g.onEnter,t=g.error,a=g.className,n=g.spanClassName,c=Object(N.a)(g,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),r="".concat(U.a.error," ").concat(n||""),s="".concat(t?U.a.errorInput:""," ").concat(a);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(v.a)({type:"text",onChange:function(g){A&&A(g),e&&e(g.currentTarget.value)},onKeyPress:function(g){I&&I(g),C&&"Enter"===g.key&&C()},className:s},c)),t&&Object(l.jsx)("span",{className:r,children:t})]})},D=function(g){var A=g.name,e=g.setNameCallback,I=g.addUserKeyCallback,C=g.addUser,t=g.error,a=g.totalUsers,n=t?L.a.error:"";return Object(l.jsxs)("div",{className:L.a.greetingBox,children:[Object(l.jsxs)("div",{className:L.a.addBox,children:[Object(l.jsx)(T,{name:A,onChange:e,onKeyPress:I,className:"".concat(n," ").concat(L.a.input)}),Object(l.jsx)("span",{className:L.a.errorMessage,children:t})]}),Object(l.jsx)(k,{disabled:!!n,onClick:C,className:L.a.addButton,children:"add"}),Object(l.jsx)("span",{children:a})]})},H=function(g){var A=g.users,e=g.addUserCallback,C=Object(I.useState)(""),t=Object(r.a)(C,2),a=t[0],n=t[1],c=Object(I.useState)(""),s=Object(r.a)(c,2),i=s[0],o=s[1],j=function(){""===a.trim()?o("name is ruquire!"):(alert("Hello ".concat(a.trim()," !")),e(a.trim()))},d=A.length;return Object(l.jsx)(D,{name:a,setNameCallback:function(g){n(g.currentTarget.value),""!==g.currentTarget.value.trim()&&o("")},addUser:j,addUserKeyCallback:function(g){"Enter"===g.key&&j()},error:i,totalUsers:d})},P=e(47);var z=function(){var g=Object(I.useState)([]),A=Object(r.a)(g,2),e=A[0],C=A[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(H,{users:e,addUserCallback:function(g){var A={_id:Object(P.a)(),name:g};C([A].concat(Object(Y.a)(e)))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},F=e(20),J=e.n(F),K=e(27),Q=e.n(K),X=function(g){g.type;var A=g.onChange,e=g.onChangeChecked,I=g.className,C=(g.spanClassName,g.children),t=Object(N.a)(g,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(Q.a.checkbox," ").concat(I||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(v.a)({type:"checkbox",onChange:function(g){A&&A(g),e&&e(g.currentTarget.checked)},className:a},t)),C&&Object(l.jsx)("span",{className:Q.a.spanClassName,children:C})]})};var q=function(){var g=Object(I.useState)(""),A=Object(r.a)(g,2),e=A[0],C=A[1],t=e?"":"error",a=function(){t?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(e)},n=Object(I.useState)(!1),c=Object(r.a)(n,2),s=c[0],i=c[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:J.a.column,children:[Object(l.jsx)(T,{value:e,onChangeText:C,onEnter:a,error:t,spanClassName:J.a.testSpanError}),Object(l.jsx)(T,{className:J.a.blue}),Object(l.jsx)(k,{children:"default"}),Object(l.jsx)(k,{red:!0,onClick:a,children:"delete "}),Object(l.jsx)(k,{disabled:!0,children:"disabled"}),Object(l.jsx)(X,{checked:s,onChangeChecked:i,children:"some text "}),Object(l.jsx)(X,{checked:s,onChange:function(g){return i(g.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},$=e(32),gg=e.n($),Ag=function(g){g.autoFocus;var A=g.onBlur,e=g.onEnter,C=g.spanProps,t=Object(N.a)(g,["autoFocus","onBlur","onEnter","spanProps"]),a=Object(I.useState)(!1),n=Object(r.a)(a,2),c=n[0],s=n[1],i=C||{},o=i.children,j=i.onDoubleClick,d=i.className,u=Object(N.a)(i,["children","onDoubleClick","className"]),b="".concat(gg.a.editableSpan," ").concat(d);return Object(l.jsx)(l.Fragment,{children:c?Object(l.jsx)(T,Object(v.a)({autoFocus:!0,onBlur:function(g){s(!1),A&&A(g)},onEnter:function(){s(!1),e&&e()}},t)):Object(l.jsxs)("span",Object(v.a)(Object(v.a)({onDoubleClick:function(g){s(!0),j&&j(g)},className:b},u),{},{children:[Object(l.jsx)("img",{src:"data:image/png;base64,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Zj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6ZWZmMmU4NjktZDk0My00MmFlLWIzMDktMDEzMWYwMjg3YmMwIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3ZTU4NmY5LWZiNjQtNGZlMi05OWMzLWVkZWU0OTFiZWViYSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE4ZDdkNGUwLTA4MzMtNDZkZS04OTQyLTNhYTU4NGQ1ZWNkYiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjIwNTY5Mjg4NDE0OTkzIgogICBHSU1QOlZlcnNpb249IjIuMTAuMjQiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDU0ZjJjZmQtNzcxNi00MDFhLWEzMTctY2VmM2EwYzNhYTQ4IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIxLTA1LTA5VDE3OjAwOjQ4Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY3YjhjODI5LWUxMGQtNGIyNi04MTZkLTZkNjBiMGNiNzY0OSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wOVQxNzowODowOCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5TZ5CSAAAABmJLR0QAwAB4ABfJZ++LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QUJDggI8ynPWwAAAMlJREFUOMvVk6EOgzAURU+bTGHr6N9gl6Cw+wX0PgDBHJ9SvSzZvmXUYac3U5KmgdEWs1350px3332v8OsSYUFpewI0MExj+doFVNqegc7Vb0CdCpWBs85rUgGN0lZmAd2YM+wN9MATMErbIgc4uDEBLsAVMMAxBRpmWADN7AzwIVGZLm1Zes5CbULFUtE5NW4xSVCx1ikXKr7lkQMVW1tLhYqYU0iBRv0C97j27tRXBbRLh70HekgGRkDjM1zJtPWcPaaxvPMX+gA+1FT0DnhJmQAAAABJRU5ErkJggg==",alt:""}),o||t.value]}))})};function eg(g,A){var e=JSON.stringify(A);localStorage.setItem(g,e)}function Ig(g,A){var e=A,I=localStorage.getItem(g);return null!==I&&(e=JSON.parse(I)),e}eg("test",{x:"A",y:1});Ig("test",{x:"",y:0});var Cg=function(){var g=Object(I.useState)(""),A=Object(r.a)(g,2),e=A[0],C=A[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(Ag,{value:e,onChangeText:C,spanProps:{children:e?void 0:"enter text..."}})}),Object(l.jsx)(k,{onClick:function(){eg("editable-span-value",e)},children:"save"}),Object(l.jsx)(k,{onClick:function(){C(Ig("editable-span-value",e))},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var tg=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(W,{}),Object(l.jsx)(z,{}),Object(l.jsx)(q,{}),Object(l.jsx)(Cg,{})]})};var ag=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var ng=function(){return Object(l.jsx)("div",{children:"Jinior"})};var cg=function(){return Object(l.jsx)("div",{children:"JuniorPlus"})},rg="/pre-junior",sg="/junior",ig="/junior-plus";var og=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(d.a,{to:rg})}}),Object(l.jsx)(d.b,{exact:!0,path:rg,render:function(){return Object(l.jsx)(tg,{})}}),Object(l.jsx)(d.b,{exact:!0,path:sg,render:function(){return Object(l.jsx)(ng,{})}}),Object(l.jsx)(d.b,{exact:!0,path:ig,render:function(){return Object(l.jsx)(cg,{})}}),"// add routes",Object(l.jsx)(d.b,{render:function(){return Object(l.jsx)(ag,{})}})]})})};var lg=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(og,{})]})})};var jg=function(){return Object(l.jsxs)("div",{className:c.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(lg,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(C.a.StrictMode,{children:Object(l.jsx)(jg,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(g){g.unregister()})).catch((function(g){console.error(g.message)}))}],[[45,1,2]]]);
//# sourceMappingURL=main.4dc4e803.chunk.js.map