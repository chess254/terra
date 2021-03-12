(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+b6T":function(t,e,s){var a=s("k9+V");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},J2sQ:function(t,e,s){"use strict";s.r(e);var a=s("RZZ2"),n=s("bJaO"),r={data:function(){return{user_data:null,user_not_found:!1}},computed:{userAddress:function(){var t="";for(var e in this.user_data.location)t+=e+" ";return t}},methods:{confirmDeleteRecord:function(t){this.deleteRecord(t)},deleteRecord:function(t){var e=this;n.a.delete("/api/customers/"+t).then((function(t){e.showDeleteSuccess(),e.$router.push({name:"app-user-list"}).catch((function(){}))})).catch((function(t){}))},showDeleteSuccess:function(){this.$vs.notify({color:"success",title:"User Deleted",text:"The selected user was successfully deleted"})}},created:function(){var t=this;a.a.isRegistered||(this.$store.registerModule("userManagement",a.a),a.a.isRegistered=!0);var e=this.$route.params.userId;this.$store.dispatch("userManagement/fetchUser",e).then((function(e){t.user_data=e.data})).catch((function(e){404!==e.response.status?console.error(e):t.user_not_found=!0}))}},i=(s("vwO6"),s("KHd+")),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page-user-view"}},[s("vs-alert",{attrs:{color:"danger",title:"User Not Found",active:t.user_not_found},on:{"update:active":function(e){t.user_not_found=e}}},[s("span",[t._v("User record with id: "+t._s(t.$route.params.userId)+" not found. ")]),t._v(" "),s("span",[s("span",[t._v("Check ")]),s("router-link",{staticClass:"text-inherit underline",attrs:{to:{name:"page-user-list"}}},[t._v("All Users")])],1)]),t._v(" "),t.user_data?s("div",{attrs:{id:"user-data"}},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Account"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col",attrs:{id:"avatar-col"}},[s("div",{staticClass:"img-container mb-4"},[s("img",{staticClass:"rounded w-full",attrs:{src:t.user_data.avatar}})])]),t._v(" "),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-1"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Username")]),t._v(" "),s("td",[t._v(t._s(t.user_data.name))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("phone")]),t._v(" "),s("td",[t._v(t._s(t.user_data.phone))])])])]),t._v(" "),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-2"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Status")]),t._v(" "),s("td",[t._v(t._s(t.user_data.status))])])])]),t._v(" "),s("div",{staticClass:"vx-col w-full flex",attrs:{id:"account-manage-buttons"}},[s("vs-button",{staticClass:"mr-4",attrs:{"icon-pack":"feather",icon:"icon-edit",to:{name:"app-user-edit",params:{userId:t.$route.params.userId}}}},[t._v("Edit")]),t._v(" "),s("vs-button",{attrs:{type:"border",color:"danger","icon-pack":"feather",icon:"icon-trash"},on:{click:function(e){return t.confirmDeleteRecord(t.user_data.id)}}},[t._v("Delete")])],1)])]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Information"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Birth Date")]),t._v(" "),s("td",[t._v(t._s(t.user_data.name))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Mobile")]),t._v(" "),s("td",[t._v(t._s(t.user_data.phone))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Currency")]),t._v(" "),s("td",[t._v(t._s(t.user_data.currency))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Join Date")]),t._v(" "),s("td",[t._v(t._s(t.user_data.join_date))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Amount Paid")]),t._v(" "),s("td",[t._v(t._s(t.user_data.amount_paid))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Group")]),t._v(" "),s("td",[t._v(t._s(t.user_data.group))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Status")]),t._v(" "),s("td",[t._v(t._s(t.user_data.status))])])])])],1),t._v(" "),s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Social Links"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Twitter")]),t._v(" "),s("td",[t._v("@"+t._s(t.user_data.name))])])])])],1)])],1):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},RZZ2:function(t,e,s){"use strict";var a=s("bJaO");var n={createCustomer:function(t,e){t.commit;return alert("clicked"),new Promise((function(t,s){a.a.post("/api/customers/",{customer:e}).then((function(e){alert(e),t(e)})).catch((function(t){s(t)}))}))},fetchUsers:function(t){var e=t.commit;return new Promise((function(t,s){a.a.get("/api/customers").then((function(s){e("SET_USERS",s.data),t(s)})).catch((function(t){s(t)}))}))},fetchUser:function(t,e){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),new Promise((function(t,s){a.a.get("/api/customers/".concat(e)).then((function(e){t(e)})).catch((function(t){s(t)}))}))},removeRecord:function(t,e){var s=t.commit;return new Promise((function(t,n){a.a.delete("/api/user-management/users/".concat(e)).then((function(a){s("REMOVE_RECORD",e),t(a)})).catch((function(t){n(t)}))}))},fetchTransactions:function(t){var e=t.commit;return new Promise((function(t,s){a.a.get("/api/transactions").then((function(s){e("SET_TRANSACTIONS",s.data),t(s)})).catch((function(t){s(t)}))}))}};e.a={isRegistered:!1,namespaced:!0,state:{users:[]},mutations:{SET_USERS:function(t,e){t.users=e},REMOVE_RECORD:function(t,e){var s=t.users.findIndex((function(t){return t.id==e}));t.users.splice(s,1)}},actions:n,getters:{}}},"k9+V":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"#avatar-col {\n  width: 10rem;\n}\n#page-user-view table td {\n  vertical-align: top;\n  min-width: 140px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1 {\n    width: calc(100% - 12rem) !important;\n}\n}",""])},vwO6:function(t,e,s){"use strict";s("+b6T")}}]);