(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5hLr":function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,"#avatar-col {\n  width: 10rem;\n}\n#page-user-view table td {\n  vertical-align: top;\n  min-width: 140px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1 {\n    width: calc(100% - 12rem) !important;\n}\n}",""])},"74a0":function(t,a,n){var s=n("5hLr");"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,e);s.locals&&(t.exports=s.locals)},HN7F:function(t,a,n){"use strict";n("74a0")},QUU0:function(t,a,n){"use strict";var s=n("bJaO");var e={fetchTransactions:function(t){var a=t.commit;return new Promise((function(t,n){s.a.get("/api/transactions").then((function(n){a("SET_TRANSACTIONS",n.data),t(n)})).catch((function(t){n(t)}))}))},fetchTransaction:function(t,a){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),new Promise((function(t,n){s.a.get("/api/transactions/".concat(a)).then((function(a){t(a)})).catch((function(t){n(t)}))}))},removeTransaction:function(t,a){var n=t.commit;return new Promise((function(t,e){s.a.delete("/api/transactions/".concat(a)).then((function(s){n("REMOVE_TRANSACTION",a),t(s)})).catch((function(t){e(t)}))}))}};a.a={namespaced:!0,state:{transactions:[]},mutations:{SET_Transactions:function(t,a){t.transactions=a},REMOVE_RECORD:function(t,a){var n=t.transactions.findIndex((function(t){return t.id==a}));t.transactions.splice(n,1)},SET_TRANSACTIONS:function(t,a){t.transactions=a}},actions:e,getters:{}}},"o9+M":function(t,a,n){"use strict";n.r(a);var s=n("QUU0"),e=n("bJaO"),i={data:function(){return{transaction_data:null,user_not_found:!1}},computed:{userAddress:function(){var t="";for(var a in this.transaction_data.location)t+=a+" ";return t}},methods:{confirmDeleteRecord:function(t){this.deleteRecord(t)},deleteRecord:function(t){var a=this;e.a.delete("/api/transactions/"+t).then((function(t){a.showDeleteSuccess(),a.$router.push({name:"app-transaction-list"}).catch((function(){}))})).catch((function(t){}))},showDeleteSuccess:function(){this.$vs.notify({color:"success",title:"User Deleted",text:"The selected user was successfully deleted"})}},created:function(){var t=this;s.a.isRegistered||(this.$store.registerModule("transactionManagement",s.a),s.a.isRegistered=!0);var a=this.$route.params.transactionId;this.$store.dispatch("transactionManagement/fetchTransaction",a).then((function(a){t.transaction_data=a.data})).catch((function(a){404!==a.response.status?console.error(a):t.transaction_not_found=!0}))}},o=(n("HN7F"),n("KHd+")),r=Object(o.a)(i,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"page-user-view"}},[n("vs-alert",{attrs:{color:"danger",title:"User Not Found",active:t.user_not_found},on:{"update:active":function(a){t.user_not_found=a}}},[n("span",[t._v("Transaction record with id: "+t._s(t.$route.params.userId)+" not found. ")]),t._v(" "),n("span",[n("span",[t._v("Check ")]),n("router-link",{staticClass:"text-inherit underline",attrs:{to:{name:"page-user-list"}}},[t._v("All Users")])],1)]),t._v(" "),t.transaction_data?n("div",{attrs:{id:"user-data"}},[n("vx-card",{staticClass:"mb-base",attrs:{title:"Account"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col",attrs:{id:"avatar-col"}},[n("div",{staticClass:"img-container mb-4"},[n("img",{staticClass:"rounded w-full",attrs:{src:t.transaction_data.avatar}})])]),t._v(" "),n("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-1"}},[n("table",[n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Sender Name")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.sender_name))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Beneficiary")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.beneficiary))])])])]),t._v(" "),n("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-2"}},[n("table",[n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Status")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.status))])])])]),t._v(" "),n("div",{staticClass:"vx-col w-full flex",attrs:{id:"account-manage-buttons"}},[n("vs-button",{staticClass:"mr-4",attrs:{"icon-pack":"feather",icon:"icon-edit",to:{name:"app-transaction-edit",params:{transactionId:t.$route.params.transactionId}}}},[t._v("Edit")]),t._v(" "),n("vs-button",{attrs:{type:"border",color:"danger","icon-pack":"feather",icon:"icon-trash"},on:{click:function(a){return t.confirmDeleteRecord(t.transaction_data.id)}}},[t._v("Delete")])],1)])]),t._v(" "),n("div",{staticClass:"vx-row mx-auto"},[n("div",{staticClass:"vx-col lg:w-1/2 w-full mx-auto"},[n("vx-card",{staticClass:"mb-base",attrs:{title:"Information"}},[n("table",[n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Sender Name")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.sender_name))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Beneficiary")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.beneficiary))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Transaction Type")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.transaction_type))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Payment Method")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.payment_method))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Currency")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.currency))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Amount")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.amount))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Ref Number")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.ref_no))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Order Ref")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.order_ref))])]),t._v(" "),n("tr",[n("td",{staticClass:"font-semibold"},[t._v("Status")]),t._v(" "),n("td",[t._v(t._s(t.transaction_data.status))])])])])],1)])],1):t._e()],1)}),[],!1,null,null,null);a.default=r.exports}}]);