"use strict";(self.webpackChunkproject_1_social=self.webpackChunkproject_1_social||[]).push([[7],{5007:function(s,e,a){a.r(e),a.d(e,{default:function(){return S}});a(2791);var i=a(7962),n="Dialogs_dialogs__s2FUI",o="Dialogs_dialogsContent__2rDgc",l="Dialogs_dialogsItems__airvQ",t="Dialogs_messages__SaqTJ",c="Dialogs_newMessages__Etlr5",g="Dialogs_newMessagesText__CFm7E",d="Dialogs_newMessagesButton__jsVgl",r="DialogItem_dialogUser__OTMbE",m="DialogItem_dialogUserPhoto__DZO++",_="DialogItem_dialogUserName__z5fHy",u="DialogItem_active__eaal3",x=a(3504),h=a(184),j=function(s){var e="/dialogs/"+s.id;return(0,h.jsx)("div",{className:r,children:(0,h.jsxs)(x.OL,{className:function(s){return s.isActive?"".concat(_," ").concat(u):_},to:e,children:[(0,h.jsx)("img",{className:m,src:s.photo,alt:"photo"}),s.name]})})},f="Message_message__Mjv+m",v=function(s){return(0,h.jsx)("p",{className:f,children:s.message})},D=a(6871),p=a(6139),M=a(704),N=a(4771),C=a(5304),b=a(1284),w=(0,M.Z)({form:"dialogAddMessageForm"})((function(s){var e=(0,C.D)(100);return(0,h.jsxs)("form",{className:c,onSubmit:s.handleSubmit,children:[(0,h.jsx)(p.Z,{component:N.gx,className:g,name:"newMessagesText",placeholder:"Enter your message",validate:[C.C,e]}),(0,h.jsx)("button",{className:d,children:"Send message"})]})})),k=function(s){var e=s.dialogsPage,a=e.dialogs.map((function(s){return(0,h.jsx)(j,{id:s.id,photo:s.photo,name:s.name},s.id)})),i=e.messages.map((function(s){return(0,h.jsx)(v,{id:s.id,message:s.message},s.id)}));e.addMessageText;return s.isAuth?(0,h.jsx)(b.Z,{title:"Messages",children:(0,h.jsxs)("div",{className:n,children:[(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:l,children:a}),(0,h.jsx)("div",{className:t,children:(0,h.jsx)("div",{children:i})})]}),(0,h.jsx)(w,{onSubmit:function(e){s.addMessageClick(e.newMessagesText)}})]})}):(0,h.jsx)(D.Fg,{to:"/login"})},I=a(8687),T=a(1548),S=(0,a(7781).qC)((0,I.$j)((function(s){return{dialogsPage:s.dialogsPage}}),{addMessageClick:i.x}),T.D)(k)}}]);
//# sourceMappingURL=7.aee171d4.chunk.js.map