(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{R1nn:function(t,a,e){"use strict";e.r(a);e("RZZ2");var s=e("+jP+"),r=e("bJaO"),n=e("Snq/"),u=e.n(n),i={components:{Datepicker:s.a,vSelect:u.a},data:function(){return{user_data:{name:null,phone:null,join_date:null,currency:null,amount_paid:null,group:null,status:null},test:123,statusOptions:["Active","Blocked","Deactivated"],groupOptions:["Admin","Customer","Staff"]}},watch:{},methods:{createCustomer:function(t){var a=this,e=(t.commit,this.user_data);return new Promise((function(t,s){r.a.post("/api/customers",e).then((function(e){t(e),a.$router.push("/apps/user/user-list").catch((function(){}))})).catch((function(t){s(t)}))}))}},created:function(){}},c=e("KHd+"),o=Object(c.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"page-user-create"}},[e("vx-card",[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Name"},model:{value:t.user_data.name,callback:function(a){t.$set(t.user_data,"name",a)},expression:"user_data.name"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Phone"},model:{value:t.user_data.phone,callback:function(a){t.$set(t.user_data,"phone",a)},expression:"user_data.phone"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Amount Paid"},model:{value:t.user_data.amount_paid,callback:function(a){t.$set(t.user_data,"amount_paid",a)},expression:"user_data.amount_paid"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Currency"},model:{value:t.user_data.currency,callback:function(a){t.$set(t.user_data,"currency",a)},expression:"user_data.currency"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("label",{staticClass:"vs-input--label"},[t._v("Status")]),t._v(" "),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:t.statusOptions,name:"status",dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.user_data.status,callback:function(a){t.$set(t.user_data,"status",a)},expression:"user_data.status"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("status"),expression:"errors.has('status')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("status")))])],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("label",{staticClass:"vs-input--label"},[t._v("Group")]),t._v(" "),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:t.groupOptions,name:"group",dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.user_data.group,callback:function(a){t.$set(t.user_data,"group",a)},expression:"user_data.group"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("group"),expression:"errors.has('group')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("group")))])],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-6"},[e("label",{staticClass:"vs-input--label"}),t._v(" "),e("datepicker",{attrs:{"label-placeholder":"join date",format:"yyyy-MM-dd",placeholder:"Join Date"},model:{value:t.user_data.join_date,callback:function(a){t.$set(t.user_data,"join_date",a)},expression:"user_data.join_date"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("vs-button",{staticClass:"mr-3 mb-2",on:{click:t.createCustomer}},[t._v("Submit")]),t._v(" "),e("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"border"},on:{click:function(a){t.user_data={}}}},[t._v("Reset")])],1)])])],1)}),[],!1,null,null,null);a.default=o.exports},RZZ2:function(t,a,e){"use strict";var s=e("bJaO");var r={createCustomer:function(t,a){t.commit;return alert("clicked"),new Promise((function(t,e){s.a.post("/api/customers/",{customer:a}).then((function(a){alert(a),t(a)})).catch((function(t){e(t)}))}))},fetchUsers:function(t){var a=t.commit;return new Promise((function(t,e){s.a.get("/api/customers").then((function(e){a("SET_USERS",e.data),t(e)})).catch((function(t){e(t)}))}))},fetchUser:function(t,a){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),new Promise((function(t,e){s.a.get("/api/customers/".concat(a)).then((function(a){t(a)})).catch((function(t){e(t)}))}))},removeRecord:function(t,a){var e=t.commit;return new Promise((function(t,r){s.a.delete("/api/user-management/users/".concat(a)).then((function(s){e("REMOVE_RECORD",a),t(s)})).catch((function(t){r(t)}))}))},fetchTransactions:function(t){var a=t.commit;return new Promise((function(t,e){s.a.get("/api/transactions").then((function(e){a("SET_TRANSACTIONS",e.data),t(e)})).catch((function(t){e(t)}))}))}};a.a={isRegistered:!1,namespaced:!0,state:{users:[]},mutations:{SET_USERS:function(t,a){t.users=a},REMOVE_RECORD:function(t,a){var e=t.users.findIndex((function(t){return t.id==a}));t.users.splice(e,1)}},actions:r,getters:{}}}}]);