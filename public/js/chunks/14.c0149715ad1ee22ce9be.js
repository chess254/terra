(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8QAU":function(s,e,a){"use strict";a("MTsq")},Lqhw:function(s,e){s.exports="/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a"},MTsq:function(s,e,a){var t=a("NToQ");"string"==typeof t&&(t=[[s.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(t,i);t.locals&&(s.exports=t.locals)},NToQ:function(s,e,a){(s.exports=a("I1BE")(!1)).push([s.i,".register-tabs-container {\n  min-height: 517px;\n}\n[dir] .register-tabs-container .con-tab {\n  padding-bottom: 23px;\n}",""])},Ofs7:function(s,e,a){"use strict";a.r(e);var t={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.displayName&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUserJWt:function(){if(this.validateForm&&this.checkLogin()){var s={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUserJWT",s)}}}},i=a("KHd+"),r={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.displayName&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUser:function(){if(this.validateForm&&this.checkLogin()){var s={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUser",s)}}}},l={methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})}}},o={components:{RegisterJwt:Object(i.a)(t,(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"clearfix"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:s.displayName,callback:function(e){s.displayName=e},expression:"displayName"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("displayName")))]),s._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:s.email,callback:function(e){s.email=e},expression:"email"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("email")))]),s._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("password")))]),s._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:s.confirm_password,callback:function(e){s.confirm_password=e},expression:"confirm_password"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("confirm_password")))]),s._v(" "),a("vs-checkbox",{staticClass:"mt-6",model:{value:s.isTermsConditionAccepted,callback:function(e){s.isTermsConditionAccepted=e},expression:"isTermsConditionAccepted"}},[s._v("I accept the terms & conditions.")]),s._v(" "),a("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[s._v("Login")]),s._v(" "),a("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!s.validateForm},on:{click:s.registerUserJWt}},[s._v("Register")])],1)}),[],!1,null,null,null).exports,RegisterFirebase:Object(i.a)(r,(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"clearfix"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:s.displayName,callback:function(e){s.displayName=e},expression:"displayName"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("displayName")))]),s._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:s.email,callback:function(e){s.email=e},expression:"email"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("email")))]),s._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("password")))]),s._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:s.confirm_password,callback:function(e){s.confirm_password=e},expression:"confirm_password"}}),s._v(" "),a("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("confirm_password")))]),s._v(" "),a("vs-checkbox",{staticClass:"mt-6",model:{value:s.isTermsConditionAccepted,callback:function(e){s.isTermsConditionAccepted=e},expression:"isTermsConditionAccepted"}},[s._v("I accept the terms & conditions.")]),s._v(" "),a("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[s._v("Login")]),s._v(" "),a("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!s.validateForm},on:{click:s.registerUser}},[s._v("Register")])],1)}),[],!1,null,null,null).exports,RegisterAuth0:Object(i.a)(l,(function(){var s=this.$createElement;return(this._self._c||s)("vs-button",{staticClass:"mb-3 mt-4 ml-2",attrs:{color:"#eb5424"},on:{click:this.registerAuth0}},[this._v("Auth0")])}),[],!1,null,null,null).exports}},n=(a("8QAU"),Object(i.a)(o,(function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"},[e("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[e("vx-card",[e("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row no-gutter"},[e("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[e("img",{staticClass:"mx-auto",attrs:{src:a("Lqhw"),alt:"register"}})]),this._v(" "),e("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[e("div",{staticClass:"px-8 pt-8 register-tabs-container"},[e("div",{staticClass:"vx-card__title mb-4"},[e("h4",{staticClass:"mb-4"},[this._v("Create Account")]),this._v(" "),e("p",[this._v("Fill the below form to create a new account.")])]),this._v(" "),e("vs-tabs",[e("vs-tab",{attrs:{label:"JWT"}},[e("register-jwt")],1),this._v(" "),e("vs-tab",{attrs:{label:"Firebase"}},[e("register-firebase")],1),this._v(" "),e("vs-tab",{attrs:{label:"Auth0"}},[e("register-auth0")],1)],1)],1)])])])])],1)])}),[],!1,null,null,null));e.default=n.exports}}]);