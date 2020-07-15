(this["webpackJsonpff7r-speedrun-notes"]=this["webpackJsonpff7r-speedrun-notes"]||[]).push([[0],{76:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=a(28),o=a(129),i=a(128),u=a(113),m=a(127),h=a(12),d=a(118),E=a(117),f=a(119),g=a(133),p=a(120),C=a(121),S=a(130),v=a(131),b=a(116),y=a(47),O=a.n(y),k=Object(u.a)((function(e){return{closeButton:{marginLeft:"auto"}}}));var x=function(e){var t=e.open,a=e.onClose,n=e.settings,c=e.setSettings,l=k();return r.a.createElement(S.a,{open:t,onClose:a},r.a.createElement(o.a,{width:300},r.a.createElement(b.a,null,r.a.createElement(E.a,{className:l.closeButton,edge:"end",onClick:a},r.a.createElement(O.a,null))),r.a.createElement(d.a,null),r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:"Show encounters"}),r.a.createElement(C.a,null,r.a.createElement(v.a,{edge:"end",checked:n.showEncounters,onChange:function(){return c(Object(h.a)(Object(h.a)({},n),{},{showEncounters:!n.showEncounters}))}}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:"Show bosses"}),r.a.createElement(C.a,null,r.a.createElement(v.a,{edge:"end",checked:n.showBosses,onChange:function(){return c(Object(h.a)(Object(h.a)({},n),{},{showBosses:!n.showBosses}))}}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:"Show items to pick"}),r.a.createElement(C.a,null,r.a.createElement(v.a,{edge:"end",checked:n.showPick,onChange:function(){return c(Object(h.a)(Object(h.a)({},n),{},{showPick:!n.showPick}))}}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:"Show optional items to pick"}),r.a.createElement(C.a,null,r.a.createElement(v.a,{edge:"end",checked:n.showOptionalPick,onChange:function(){return c(Object(h.a)(Object(h.a)({},n),{},{showOptionalPick:!n.showOptionalPick}))}}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:"Show menus"}),r.a.createElement(C.a,null,r.a.createElement(v.a,{edge:"end",checked:n.showMenus,onChange:function(){return c(Object(h.a)(Object(h.a)({},n),{},{showMenus:!n.showMenus}))}}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:"Show shops"}),r.a.createElement(C.a,null,r.a.createElement(v.a,{edge:"end",checked:n.showShops,onChange:function(){return c(Object(h.a)(Object(h.a)({},n),{},{showShops:!n.showShops}))}}))))))},B=a(122),w=a(132),P=a(50),T=a(60),F=a.n(T),j=a(61),I=a.n(j),M=a(58),N=a.n(M),D=Object(u.a)((function(e){return{title:{paddingLeft:e.spacing(2),flexGrow:1}}}));var L=function(e){var t=e.theme,a=e.setTheme,n=e.onMenuClick,c=D();return r.a.createElement(B.a,{position:"sticky"},r.a.createElement(b.a,null,r.a.createElement(E.a,{color:"inherit",edge:"start",onClick:n},r.a.createElement(N.a,null)),r.a.createElement(P.a,{className:c.title,variant:"h6",noWrap:!0},"Final Fantasy VII Remake Speedrun Notes"),r.a.createElement(w.a,{title:"Toggle light/dark theme"},r.a.createElement(E.a,{color:"inherit",edge:"end",onClick:function(){return a("light"===t?"dark":"light")}},"light"===t?r.a.createElement(F.a,null):r.a.createElement(I.a,null)))))},G=Object(u.a)((function(e){return{title:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}}));var A=function(e){var t=e.title,a=e.children,n=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{variant:"h3",align:"center",paragraph:!0,className:n.title},t),r.a.createElement(o.a,{maxWidth:800,margin:"0 auto"},a))},R=a(124),H={showEncounters:!0,showBosses:!0,showPick:!0,showOptionalPick:!0,showMenus:!0,showShops:!0},J=r.a.createContext(H);var W=function(){var e=r.a.useState(H),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){var e=localStorage.getItem("SETTINGS");e&&n(JSON.parse(e))}),[]),{settings:a,setSettings:function(e){localStorage.setItem("SETTINGS",JSON.stringify(e)),n(e)}}},q=a(123),V=Object(u.a)((function(e){return{card:{marginBottom:e.spacing(2)},colorBox:{height:e.spacing(1)}}}));var z=function(e){var t=e.color,a=e.children,n=V();return r.a.createElement(q.a,{className:n.card},r.a.createElement(o.a,{className:n.colorBox,bgcolor:t}),a)},K="#F44336",Q="#FB99BB",U="#3F51B5",X="#2D6930",Y="#6FBF73",Z=Object(u.a)((function(e){return{nestedList:{marginLeft:e.spacing(2)},listItemText:{lineHeight:1}}}));var $=function(e){var t=e.name,a=e.phases,n=Z();return r.a.useContext(J).showBosses?r.a.createElement(z,{color:K},r.a.createElement(f.a,{dense:!0,subheader:r.a.createElement(R.a,null,t)},a.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:e.name,classes:{primary:n.listItemText}})),r.a.createElement(f.a,{dense:!0,disablePadding:!0,className:n.nestedList},e.instructions.map((function(e,t){return r.a.createElement(g.a,{key:t},r.a.createElement(p.a,{primary:e,classes:{primary:n.listItemText}}))}))))})))):null},_=a(125),ee=a(62),te=a.n(ee),ae=a(63),ne=a.n(ae),re=a(64),ce=a.n(re),le=Object(u.a)((function(e){return{nestedList:{marginLeft:e.spacing(2)},listItemText:{lineHeight:1},shortcutIcon:{minWidth:"30px"}}}));var se=function(e){var t=e.characters,a=le(),n={circle:te.a,square:ne.a,triangle:ce.a,x:O.a};return r.a.createElement(f.a,{dense:!0,subheader:r.a.createElement(R.a,null,"Battle Settings")},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:e.name,classes:{primary:a.listItemText}})),r.a.createElement(f.a,{dense:!0,disablePadding:!0,className:a.nestedList},e.shortcuts.map((function(e,t){return r.a.createElement(g.a,{key:t},r.a.createElement(_.a,{className:a.shortcutIcon},r.a.createElement(n[e.shortcut])),r.a.createElement(p.a,{primary:e.ability,classes:{primary:a.listItemText}}))}))))})))},oe=Object(u.a)((function(e){return{listItemText:{lineHeight:1}}}));var ie=function(e){var t=e.enemies,a=e.instructions,n=oe();return r.a.useContext(J).showEncounters?r.a.createElement(z,{color:Q},r.a.createElement(f.a,{dense:!0,subheader:r.a.createElement(R.a,null,t)},a.map((function(e,t){return r.a.createElement(g.a,{key:t},r.a.createElement(p.a,{primary:e,classes:{primary:n.listItemText}}))})))):null};var ue=function(e){var t=e.children;if(!r.a.useContext(J).showMenus)return null;var a=r.a.Children.map(t,(function(e,t){return 0===t?e:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),e)}));return r.a.createElement(z,{color:U},a)};var me=function(e){var t=e.item,a=e.description,n=e.optional,c=r.a.useContext(J);if(!c.showPick&&!n)return null;if(!c.showOptionalPick&&n)return null;var l="Pick";return n&&(l+=" (optional)"),r.a.createElement(z,{color:n?Y:X},r.a.createElement(f.a,{dense:!0,subheader:r.a.createElement(R.a,null,l)},r.a.createElement(g.a,null,r.a.createElement(p.a,{primary:t,secondary:a}))))};var he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{variant:"h4",paragraph:!0},"Chapter 1"),r.a.createElement(ie,{enemies:"Security Officer x2",instructions:["Cleave"]}),r.a.createElement(ie,{enemies:"Security Officer x2",instructions:["Punisher"]}),r.a.createElement(ue,null,r.a.createElement(se,{characters:[{name:"Cloud",shortcuts:[{shortcut:"circle",ability:"Fire"},{shortcut:"x",ability:"Cross Slash"}]}]})),r.a.createElement(ie,{enemies:"Security Officer, Guard Dog",instructions:["Security Officer: Dash, Punisher","Guard Dog: Fire, Punisher"]}),r.a.createElement(ie,{enemies:"Security Officer x2, Guard Dog",instructions:["Security Officers: Punisher","Guard Dog: Fire, Punisher"]}),r.a.createElement(ie,{enemies:"Security Officer x2",instructions:["Dash, Punisher"]}),r.a.createElement(ie,{enemies:"Security Officer x4",instructions:["Dash, Punisher rightmost one"]}),r.a.createElement(ie,{enemies:"Sentry Ray x3, Monodrive x3",instructions:["Overcharge Sentry Ray B, Combo A, Thunder x2","Punisher Monodrive B and C, Focused Thrust A"]}),r.a.createElement(ue,null,r.a.createElement(se,{characters:[{name:"Barret",shortcuts:[{shortcut:"square",ability:"Thunder"},{shortcut:"circle",ability:"Fire"}]}]})),r.a.createElement(ie,{enemies:"Sweeper",instructions:["Cloud: Dash, Punisher","Barret: Overcharge, Combo, Charge, Thunder","Barret: Charge, Combo, Charge, Focused Shot, Focused Thrust","Cloud: Punisher (fill 2 ATB), Barret Thunder x2"]}),r.a.createElement(me,{item:"Ether",description:"If near stairs after battle",optional:!0}),r.a.createElement($,{name:"Guard Scorpion",phases:[{name:"Phase 1",instructions:["Cloud: Dash","Barret: Lock, run back, Overcharge","Cloud: Counter, Punisher full, Berserk, Fire, Focused Shot","Cloud: Punisher full, Fire, Punisher x4, Berserk, Fire, Punisher"]},{name:"Phase 2",instructions:["Cloud: Dash and Roll x2, go behind","Cloud: Punisher x4, Berserk, Fire, Punisher x4, Focused Thrust","Barret: Combo, Focused Shot, Combo","Cloud: Counter, Punisher x4, Berserk, Focused Thrust, Thunder","Cloud: Punisher x2, Berserk, Overcharge, Punisher full, Thunder, Berserk"]},{name:"Phase 3",instructions:["Cloud: Fire","Barret: Combo, Thunder, Combo, Charge, Combo, Charge, Focused Shot","Cloud: Dash, Punisher x3, Berserk, Cross Slash","Barret: Overcharge, Combo, Swap to Cloud"]},{name:"Phase 4",instructions:["Cloud: Punisher x2, Berserk, Fire on Left Leg","Fire, Thunder"]}]}),r.a.createElement(ie,{enemies:"Monodrive x2",instructions:["Punisher B, Roll and Operator until ATB, Focused Thrust A"]}),r.a.createElement(ie,{enemies:"Security Officer x2, Monodrive x2",instructions:["Cloud: Operator x1 left Monodrive, Punisher full Monodrive + Security Officer","Cloud: Focused Thrust Security Officer","Barret: Overcharge Monodrive, Swap to Cloud"]}),r.a.createElement(ie,{enemies:"Shock Trooper x3, Sentry Ray x2",instructions:["Barret: Overcharge Sentry Ray A, Thunder B","Cloud: Counter and Fire/Braver/Punisher Shock Troopers"]}))};var de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{variant:"h4",paragraph:!0},"Chapter 2"))};var Ee=function(){return r.a.createElement(A,{title:"Any% No Major Glitches - Normal"},r.a.createElement(he,null),r.a.createElement(de,null))},fe=a(126);var ge=function(){var e=r.a.useState("dark"),t=Object(s.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){var e=localStorage.getItem("THEME");!e||"light"!==e&&"dark"!==e||n(e)}),[]);var c=r.a.useMemo((function(){return Object(fe.a)({palette:{type:a}})}),[a]);return{theme:a,setTheme:function(e){localStorage.setItem("THEME",e),n(e)},muiTheme:c}},pe=Object(u.a)((function(e){return{box:{padding:e.spacing(2)}}}));var Ce=function(){var e=pe(),t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],c=a[1],l=ge(),u=l.theme,h=l.setTheme,d=l.muiTheme,E=W(),f=E.settings,g=E.setSettings;return r.a.createElement(m.a,{theme:d},r.a.createElement(J.Provider,{value:f},r.a.createElement(i.a,null),r.a.createElement(x,{open:n,onClose:function(){return c(!1)},settings:f,setSettings:g}),r.a.createElement(L,{theme:u,setTheme:h,onMenuClick:function(){return c(!0)}}),r.a.createElement(o.a,{className:e.box},r.a.createElement(Ee,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.0deb7e74.chunk.js.map