(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02c6":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"11d4":function(t,e,n){},"3c95":function(t,e,n){"use strict";n("11d4")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("div",{staticClass:"d-flex align-stretch"},[n("Drawer",{attrs:{username:t.username,loggedIn:t.loggedIn},on:{"change-room":t.changeRoom}}),n("Screen",{attrs:{userName:t.username,roomName:t.activeRoom,wsInstance:t.connection}})],1),n("Login",{attrs:{open:t.openLoginDialog,loading:t.loadingLoginDialog},on:{submit:t.connect}})],1)],1)},r=[],s=n("5530"),i=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{tile:"",height:"100vh",width:"256",elevation:"6"}},[n("v-navigation-drawer",{attrs:{src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",dark:"",permanent:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:""},on:{click:function(e){t.dialog=!0}}},[t._v(" Создать комнату ")])],1)]},proxy:!0}])},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.username)+" ")]),n("v-list-item-subtitle",[t._v(" "+t._s(t.getUserStatus)+" ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.rooms,(function(e,a){return n("v-list-item",{key:"room-"+a,attrs:{link:""},on:{click:function(n){return t.emitRoomChange(e.name)}}},[n("v-list-item-content",[n("v-list-item-title",[n("div",{staticClass:"d-flex align-center"},[n("v-avatar",{staticClass:"mr-2",attrs:{color:"#232323",size:"30"}},[t._v(" "+t._s(t.getRoomAbbr(e.name))+" ")]),t._v(" "+t._s(e.name)+" ")],1)])],1)],1)})),1)],1),n("CreateRoom",{attrs:{open:t.dialog},on:{close:function(e){t.dialog=!1}}})],1)}),c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" Новая комната ")]),n("v-card-text",[n("v-text-field",{attrs:{dense:"",outlined:"",label:"Название комнаты",rules:t.rules.required,loading:t.loading,disabled:t.loading},model:{value:t.roomName,callback:function(e){t.roomName=e},expression:"roomName"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"green darken-1",block:"",text:"",type:"submit",loading:t.loading,disabled:t.loading}},[t._v(" Создать ")])],1)],1)],1)],1)},u=[],m=n("1da1"),d=(n("96cf"),n("498a"),{props:{open:{type:Boolean,default:function(){return!1}},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{roomName:"",valid:!1,rules:{required:[function(t){return!!t.trim()||"Обязательное поле"}]}}},methods:{submit:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.form.validate();case 2:n=e.sent,n&&(t.$emit("close"),t.$bus.$emit("createRoom",t.roomName));case 4:case"end":return e.stop()}}),e)})))()}}}),f=d,v=n("2877"),g=n("6544"),p=n.n(g),h=n("8336"),b=n("b0af"),w=n("99d9"),y=n("169a"),x=n("4bd4"),_=n("8654"),C=Object(v["a"])(f,l,u,!1,null,null,null),R=C.exports;p()(C,{VBtn:h["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:y["a"],VForm:x["a"],VTextField:_["a"]});var V={props:{username:{type:String,default:""},loggedIn:{type:Boolean,default:function(){return!1}}},components:{CreateRoom:R},data:function(){return{collapsed:!1,rooms:[],dialog:!1}},created:function(){this.fetchRooms(),this.$bus.$on("updateRooms",this.fetchRooms)},beforeDestroy:function(){this.fetchRooms&&this.$bus.$off("updateRooms",this.fetchRooms)},computed:{getUserStatus:function(){return this.loggedIn?"logged in":""}},methods:{fetchRooms:function(){var t=this;this.$store.dispatch("api/fetchRooms").then((function(e){t.rooms=e.data.result})).catch((function(t){throw new Error(t)}))},emitRoomChange:function(t){if(!t)throw new Error("Не передано имя комнаты");this.$emit("change-room",t)},getRoomAbbr:function(t){return t[0]}}},$=V,k=n("8212"),L=n("ce7e"),O=n("8860"),S=n("da13"),j=n("5d23"),D=n("f774"),N=Object(v["a"])($,i,c,!1,null,null,null),I=N.exports;p()(N,{VAvatar:k["a"],VBtn:h["a"],VCard:b["a"],VDivider:L["a"],VList:O["a"],VListItem:S["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VNavigationDrawer:D["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen-room"},[t.roomName?n("div",{staticClass:"screen-room-chat"},[n("v-app-bar",{attrs:{dense:"",dark:"",flat:""}},[n("v-toolbar-title",[t._v(t._s(t.roomName))])],1),n("div",{staticClass:"screen-room-chat-window"},[n("transition-group",{attrs:{name:"list"}},t._l(t.messageList,(function(e,a){return n("Cloud",{key:"msg-"+a,staticClass:"my-2",attrs:{color:e.sender.username===t.userName?"#26c6da":"#232323",name:e.sender.username,text:e.text,date:e.created}})})),1)],1),n("div",{staticClass:"screen-room-chat-input"},[n("v-form",{ref:"chat",on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}},model:{value:t.validate,callback:function(e){t.validate=e},expression:"validate"}},[n("v-text-field",{attrs:{"append-outer-icon":"mdi-send",outlined:"",dark:"","clear-icon":"mdi-close-circle",clearable:"",label:"Сообщение",type:"text"},on:{"click:append-outer":t.sendMessage},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1):n("div",{staticClass:"screen-room-empty"},[n("SvgNature"),n("p",{staticClass:"text-subtitle-2"},[t._v(" Выберите комнату в меню слева... ")])],1)])},T=[],B=(n("fb6a"),function(t,e){var n=e._c;return n("svg",{staticClass:"svg-nature",attrs:{id:"Capa_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("g",[n("path",{attrs:{d:"m503.971 440.245h-33.592v-26.782c8.846-.175 17.114-1.099 24.07-5.932 9.566-6.646 14.022-18.94 14.022-38.688 0-21.953-7.214-47.54-17.776-65.452 13.75-14.023 21.305-32.443 21.305-52.193 0-36.899-27.404-68.559-63.822-73.858-5.356-11.023-13.998-20.158-24.639-26.147-4.299-37.748-36.003-66.103-74.147-66.103-9.892 0-19.453 1.907-28.478 5.643-7.75-14.234-15.807-21.229-24.376-21.229-8.688 0-16.728 7.079-24.576 21.642-6.235 11.568-12.361 27.969-17.718 47.426-3.683 13.381-6.873 27.755-9.514 42.54-13.291-7.815-28.314-11.914-43.987-11.914-4.594 0-9.125.363-13.563 1.062v-56.72c0-25.125-15.864-47.764-39.477-56.333-3.893-1.413-8.195.598-9.609 4.491-1.413 3.894.598 8.195 4.492 9.608 17.701 6.425 29.594 23.396 29.594 42.233v60.487c-14.502 5.038-27.418 13.823-37.417 25.413v-12.249l14.413-14.413c2.929-2.93 2.929-7.678 0-10.607-2.929-2.928-7.678-2.928-10.606 0l-3.807 3.807v-45.71c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v11.215l-7.564-7.564c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l18.171 18.171v58.161c-10.938-15.765-23.801-27.37-37.417-28.789v-68.528c0-18.772 11.836-35.726 29.454-42.185 3.889-1.426 5.885-5.734 4.459-9.624-1.426-3.889-5.733-5.881-9.624-4.46-23.5 8.617-39.29 31.229-39.29 56.269v71.168c-14.469 6.493-29.263 24.069-41.992 50.39-15.545 32.139-24.824 71.579-24.824 105.5 0 34.729 7.468 56.094 23.501 67.233 13.16 9.144 30.003 9.969 48.019 10.035v22.379h-64.55c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h496.471c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zm-361.479-38.979c5.225.787 10.74.995 16.422 1.047v37.933h-24.153v-32.178c2.756-1.883 5.341-4.128 7.731-6.802zm31.423 1.048c6.747-.059 13.259-.336 19.327-1.55v39.481h-19.327zm78.954-44.971c7.1 8.667 15.737 11.979 24.843 13.249-9.438 6.003-20.389 9.223-31.897 9.223-8.139 0-15.965-1.602-23.325-4.742 2.884-8.371 4.279-18.874 4.279-31.804 0-1.272-.029-2.558-.062-3.844 5.193-1.619 10.198-3.731 14.988-6.29 2.677 10.419 6.37 18.343 11.174 24.208zm-44.308 37.219c2.528-1.756 4.776-3.836 6.762-6.248 8.924 4.009 18.405 6.184 28.264 6.468v45.463h-35.344zm50.025-.845c11.018-1.881 21.369-6.189 30.451-12.677v59.205h-30.451zm45.451-22.361c5.848-.09 11.683-.459 17.24-1.923v70.812h-17.24zm48.609-9.661v78.55h-16.368v-78.777c1.353-1.221 2.666-2.585 3.928-4.125 1.49-1.819 2.872-3.84 4.152-6.067 2.416 3.635 5.183 7.429 8.288 10.419zm15 10.077c5.922 2.932 12.365 4.903 19.105 5.747v62.726h-19.105zm34.105 5.743c5.385-.676 10.639-2.077 15.627-4.164.65 17.123 5.116 28.057 13.93 34.18 6.956 4.833 15.229 5.785 24.07 5.948v26.765h-53.628v-62.729zm84.14 17.698c-3.608 2.506-9.064 3.123-15.512 3.26v-13.592c.139-.12.279-.239.411-.371l11.909-11.909c2.929-2.93 2.929-7.678 0-10.607-2.93-2.928-7.678-2.928-10.607 0l-1.713 1.713v-21.404c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v56.172c-6.456-.137-11.903-.753-15.512-3.261-5.102-3.545-7.582-12.17-7.582-26.37 0-16.418 4.514-35.553 12.074-51.187 7.695-15.91 15.443-21.839 18.52-21.839s10.824 5.929 18.519 21.839c7.561 15.634 12.074 34.769 12.074 51.187 0 14.199-2.48 22.824-7.581 26.369zm11.109-144.015c0 14.921-5.402 28.891-15.276 39.842-5.877-6.376-12.308-10.223-18.845-10.223-2.939 0-5.856.777-8.711 2.211v-79.593c0-3.304-.28-6.542-.797-9.702 25.349 7.074 43.629 30.521 43.629 57.465zm-146.668-58.237c5.366-19.366 23.796-34.443 43.919-34.443 24.768 0 44.917 20.149 44.917 44.917v93.621c-10.632 14.832-18.742 37.656-21.148 59.146-.036.021-.073.038-.108.06-4.952 3.076-10.443 5.113-16.161 6.077v-43.99l14.413-14.413c2.929-2.93 2.929-7.678 0-10.607-2.93-2.928-7.678-2.928-10.607 0l-3.806 3.806v-45.709c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v11.215l-7.563-7.564c-2.929-2.929-7.678-2.93-10.606-.001-2.93 2.929-2.93 7.678-.001 10.606l18.171 18.172v78.507c-16.156-2.719-29.769-14.093-35.102-30.006-.013-.039-.031-.074-.044-.113 3.6-14.51 5.286-33.761 5.286-58.947 0-25.4-2.326-53.253-6.56-80.334zm-53.795-108.456c1.75 0 10.496 6.29 21.313 37.064 1.373 3.907 5.65 5.963 9.563 4.588 3.907-1.373 5.962-5.654 4.588-9.563-1.552-4.414-3.113-8.501-4.684-12.286 7.005-2.798 14.414-4.218 22.075-4.218 27.736 0 51.214 18.755 57.805 44.852-4.172-.923-8.5-1.424-12.946-1.424-19.482 0-37.327 9.513-48.389 24.607-1.132-5.522-2.334-10.973-3.621-16.308-.972-4.026-5.022-6.505-9.05-5.532-4.026.972-6.503 5.023-5.532 9.05 9.045 37.498 14.232 80.493 14.232 117.96 0 39.243-4.347 63.625-13.29 74.541-5.753 7.023-13.082 8.297-24.564 8.508v-38.393l24.331-24.331c2.929-2.93 2.929-7.678 0-10.607-2.93-2.928-7.678-2.928-10.607 0l-13.724 13.724v-62.506c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v15.679l-10.667-10.667c-2.93-2.928-7.678-2.928-10.607 0-2.929 2.93-2.929 7.678 0 10.607l21.251 21.251c.008.008.016.014.023.021v85.222c-11.482-.211-18.812-1.486-24.564-8.508-8.943-10.916-13.29-35.298-13.29-74.541 0-42.009 6.551-90.885 17.522-130.742 13.136-47.719 25.481-58.048 27.832-58.048zm-95.795 99.693c14.958 0 29.2 4.506 41.347 13.04-3.808 25.666-5.906 51.959-5.906 76.058 0 17.487.815 32.107 2.516 44.274-4.159 2.584-8.548 4.72-13.122 6.397-2.417-20.204-8.44-41.091-17.335-59.491v-18.184l15.806-15.806c2.929-2.929 2.929-7.677 0-10.606-2.929-2.928-7.678-2.929-10.606.001l-5.199 5.199v-8.658c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v23.918c-8.732-10.562-17.992-16.303-26.827-16.303-10.617 0-20.524 7.783-29.012 19.038-1.517-3.467-3.128-6.915-4.822-10.311 10.019-29.05 37.407-48.566 68.16-48.566zm-168.152 211.315c-7.324-5.089-17.06-16.317-17.06-54.915 0-31.77 8.72-68.768 23.327-98.97 13.138-27.166 29.111-44.72 40.694-44.72 12.109 0 32.472 21.205 48.032 61.73-4.703 8.788-8.67 18.302-11.693 27.338-1.314 3.928.805 8.178 4.733 9.491 3.928 1.318 8.178-.805 9.492-4.733 10.682-31.932 27.159-51.697 36.299-51.697 6.195 0 17.697 9.996 28.311 31.943 10.672 22.067 17.043 49.091 17.043 72.288 0 20.725-3.849 33.474-11.767 38.975-6.213 4.316-15.379 4.96-26.087 5.065v-22.935l24.331-24.331c2.929-2.93 2.929-7.678 0-10.607-2.929-2.928-7.678-2.928-10.606 0l-13.725 13.725v-36.718c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v80.872c-10.71-.098-19.874-.753-26.087-5.07-7.918-5.501-11.767-18.25-11.767-38.975 0-6.063.424-12.417 1.261-18.886.531-4.107-2.368-7.868-6.476-8.4-4.109-.525-7.869 2.368-8.4 6.477-.919 7.104-1.385 14.105-1.385 20.81 0 26.364 5.786 42.663 18.208 51.294.609.423 1.231.813 1.858 1.191-9.549 6.412-22.948 7.042-39.076 7.108v-78.313l11.516-11.516c2.929-2.93 2.929-7.678 0-10.607-2.929-2.928-7.678-2.928-10.606 0l-.91.91v-20.647c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v64.157l-9.443-9.443c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l18.99 18.99c.331.331.688.619 1.06.875v34.989c-16.075-.064-29.908-.717-39.461-7.352zm54.46 22.349c11.577-.048 22.736-.411 32.711-3.097v25.48h-32.711z"}})])])}),E=[],M=(n("c4e4"),{}),A=Object(v["a"])(M,B,E,!0,null,null,null),P=A.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.color,dark:""}},[n("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.text)+" ")]),n("v-card-actions",[n("div",{staticClass:"d-flex align-center"},[n("v-list-item",{staticClass:"grow"},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-avatar",{attrs:{size:"40"}},[t._v(" "+t._s(t.name[0])+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.name))])],1)],1),t.date?n("span",{staticClass:"text-caption"},[t._v(" "+t._s(t.getReadableDate)+" ")]):t._e()],1)])],1)},H=[],J={props:{color:{type:String,default:"#26c6da"},name:{type:String,default:""},text:{type:String,default:""},date:{type:String,default:""}},computed:{getReadableDate:function(){var t=new Date(this.date);return t.toLocaleDateString()}}},U=J,q=n("8270"),G=Object(v["a"])(U,F,H,!1,null,null,null),W=G.exports;p()(G,{VAvatar:k["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VListItem:S["a"],VListItemAvatar:q["a"],VListItemContent:j["a"],VListItemTitle:j["c"]});var K=n("2f62"),Q={props:{roomName:{type:String,default:""},wsInstance:null,userName:{type:String,default:""}},components:{SvgNature:P,Cloud:W},data:function(){return{message:"",messageList:[],messageLimit:30,validate:!1}},watch:{roomName:function(){this.messageList=this.history.slice(-this.messageLimit)}},created:function(){this.$bus.$on("message",this.getMessage)},beforeDestroy:function(){this.getMessage&&this.$bus.$off("message",this.getMessage)},computed:Object(s["a"])({},Object(K["b"])({history:function(t){return t.history.history}})),methods:{sendMessage:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.wsInstance||!t.roomName){e.next=7;break}return e.next=3,t.$refs.chat.validate();case 3:n=e.sent,n&&(a={room:t.roomName,text:t.message},t.message="",t.wsInstance.send(JSON.stringify(a))),e.next=8;break;case 7:throw new Error("Передайте валидный инстанс веб сокет соединения и имя комнаты");case 8:case"end":return e.stop()}}),e)})))()},getMessage:function(t){var e=JSON.parse(t.data);this.roomName===e.room&&(this.messageList.length>this.messageLimit&&this.messageList.shift(),this.messageList.push(e))}}},X=Q,Y=(n("3c95"),n("40dc")),Z=n("2a7f"),tt=Object(v["a"])(X,z,T,!1,null,null,null),et=tt.exports;p()(tt,{VAppBar:Y["a"],VForm:x["a"],VTextField:_["a"],VToolbarTitle:Z["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" Авторизуйтесь ")]),n("v-card-text",[n("v-text-field",{attrs:{dense:"",outlined:"",label:"Имя пользователя",rules:t.rules.required,loading:t.loading,disabled:t.loading},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"green darken-1",block:"",text:"",type:"submit",loading:t.loading,disabled:t.loading}},[t._v(" Войти ")])],1)],1)],1)],1)},at=[],ot={props:{open:{type:Boolean,default:function(){return!1}},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{username:"",valid:!1,rules:{required:[function(t){return!!t.trim()||"Обязательное поле"}]}}},methods:{submit:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.form.validate();case 2:n=e.sent,n&&t.$emit("submit",t.username);case 4:case"end":return e.stop()}}),e)})))()}}},rt=ot,st=Object(v["a"])(rt,nt,at,!1,null,null,null),it=st.exports;p()(st,{VBtn:h["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:y["a"],VForm:x["a"],VTextField:_["a"]});var ct={name:"App",components:{Drawer:I,Screen:et,Login:it},data:function(){return{username:"%username%",loggedIn:!1,connection:null,activeRoom:null,openLoginDialog:!0,loadingLoginDialog:!1}},created:function(){this.$bus.$on("createRoom",this.createRoom)},beforeDestroy:function(){this.createRoom&&this.$bus.$off(this.createRoom)},computed:Object(s["a"])({},Object(K["b"])({wsConnectionURI:function(t){return t.api.wsConnect}})),methods:{connect:function(t){var e=this;console.log("Connection start..."),this.loadingLoginDialog=!0,this.connection=new WebSocket(encodeURI(this.wsConnectionURI+"?username=".concat(t))),this.connection.onopen=function(n){console.log(n),e.openLoginDialog=!1,e.username=t,e.loggedIn=!0,e.loadingLoginDialog=!1},this.connection.onerror=function(t){console.log(t),e.loadingLoginDialog=!1},this.connection.onmessage=function(t){e.$bus.$emit("message",t)}},changeRoom:function(t){var e=this;this.$store.dispatch("api/fetchHistory",t).then((function(){e.activeRoom=t})).catch((function(t){throw new Error(t)}))},createRoom:function(t){var e={id:this.username,room:t,text:"Новая комната ".concat(t,", была создана пользователем ").concat(this.username)};this.connection.send(JSON.stringify(e)),this.activeRoom=t,this.$bus.$emit("updateRooms")}}},lt=ct,ut=(n("034f"),n("7496")),mt=n("f6c4"),dt=Object(v["a"])(lt,o,r,!1,null,null,null),ft=dt.exports;p()(dt,{VApp:ut["a"],VMain:mt["a"]});n("5319"),n("ac1f"),n("d3b7");var vt={wsConnect:"wss://nane.tada.team/ws",apiBase:"https://nane.tada.team/api",GET:{settings:"/settings",rooms:"/rooms",history:"/rooms/{name}/history"}},gt={getSettings:function(t){return t.apiBase+t.GET.settings},getRooms:function(t){return t.apiBase+t.GET.rooms},getHistory:function(t){return function(e){return t.apiBase+t.GET.history.replace(/{name}/,e)}}},pt={fetchSettings:function(t){var e=t.getters;return new Promise((function(t,n){a["a"].$http.get(e.getSettings).then((function(e){return t(e)})).catch((function(t){return n(t)}))}))},fetchRooms:function(t){var e=t.getters;return new Promise((function(t,n){a["a"].$http.get(e.getRooms).then((function(e){return t(e)})).catch((function(t){return n(t)}))}))},fetchHistory:function(t,e){var n=t.getters,o=t.commit;return new Promise((function(t,r){a["a"].$http.get(n.getHistory(e)).then((function(e){o("history/setHistory",e.data.result,{root:!0}),t(e)})).catch((function(t){return r(t)}))}))}},ht={namespaced:!0,state:vt,getters:gt,actions:pt},bt={history:[]},wt={setHistory:function(t,e){t.history=e}},yt={namespaced:!0,state:bt,mutations:wt};a["a"].use(K["a"]);var xt=new K["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{api:ht,history:yt}}),_t=n("f309");a["a"].use(_t["a"]);var Ct=new _t["a"]({}),Rt=n("bc3a"),Vt=n.n(Rt),$t=n("2106"),kt=n.n($t);a["a"].config.productionTip=!1,a["a"].use(kt.a,Vt.a),Object.defineProperty(a["a"].prototype,"$bus",{get:function(){return this.$root.bus}}),new a["a"]({data:{bus:new a["a"]({})},store:xt,vuetify:Ct,render:function(t){return t(ft)}}).$mount("#app")},"85ec":function(t,e,n){},c4e4:function(t,e,n){"use strict";n("02c6")}});
//# sourceMappingURL=app.a6463107.js.map