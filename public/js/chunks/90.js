(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/user-management/moduleUserManagement.js */ "./resources/js/src/store/user-management/moduleUserManagement.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import UserCreateTabAccount     from "./UserCreateTabAccount.vue"
// import UserCreateTabInformation from "./UserCreateTabInformation.vue"
// import UserCreateTabSocial      from "./UserCreateTabSocial.vue"
// Store Module

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// UserCreateTabAccount,
    // UserCreateTabInformation,
    // UserCreateTabSocial,
  },
  data: function data() {
    return {
      user_data: {
        name: null,
        phone: null,
        join_date: null,
        currency: null,
        amount_paid: null,
        status: null
      },
      test: 123
    };
  },
  watch: {},
  methods: {// fetch_user_data(userId) {
    //   this.$store.dispatch("userManagement/fetchUser", userId)
    //     .then(res => { this.user_data = res.data })
    //     .catch(err => {
    //       if(err.response.status === 404) {
    //         this.user_not_found = true
    //         return
    //       }
    //       console.error(err) })
    // }
  },
  created: function created() {// Register Module UserManagement Module
    // if(!moduleUserManagement.isRegistered) {
    //   this.$store.registerModule('userManagement', moduleUserManagement)
    //   moduleUserManagement.isRegistered = true
    // }
    // this.fetch_user_data(this.$route.params.userId)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=template&id=4c15ab0a&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=template&id=4c15ab0a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-user-create" } },
    [
      _c("vx-card", [
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "label-placeholder": "Name" },
                model: {
                  value: _vm.user_data.name,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "name", $$v)
                  },
                  expression: "user_data.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "label-placeholder": "Phone" },
                model: {
                  value: _vm.user_data.phone,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "phone", $$v)
                  },
                  expression: "user_data.phone"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "label-placeholder": "Join Date" },
                model: {
                  value: _vm.user_data.join_date,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "join_date", $$v)
                  },
                  expression: "user_data.join_date"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "label-placeholder": "Currency" },
                model: {
                  value: _vm.user_data.currency,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "currency", $$v)
                  },
                  expression: "user_data.currency"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "label-placeholder": "Amount Paid" },
                model: {
                  value: _vm.user_data.amount_paid,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "amount_paid", $$v)
                  },
                  expression: "user_data.amount_paid"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { type: "email", "label-placeholder": "Group" },
                model: {
                  value: _vm.user_data.group,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "group", $$v)
                  },
                  expression: "user_data.group"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "label-placeholder": "Status" },
                model: {
                  value: _vm.user_data.status,
                  callback: function($$v) {
                    _vm.$set(_vm.user_data, "status", $$v)
                  },
                  expression: "user_data.status"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-button", { staticClass: "mr-3 mb-2" }, [_vm._v("Submit")]),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mb-2",
                  attrs: { color: "warning", type: "border" },
                  on: {
                    click: function($event) {
                      _vm.user_data = {}
                    }
                  }
                },
                [_vm._v("Reset")]
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagement.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleUserManagementState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleUserManagementState.js */ "./resources/js/src/store/user-management/moduleUserManagementState.js");
/* harmony import */ var _moduleUserManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleUserManagementMutations.js */ "./resources/js/src/store/user-management/moduleUserManagementMutations.js");
/* harmony import */ var _moduleUserManagementActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleUserManagementActions.js */ "./resources/js/src/store/user-management/moduleUserManagementActions.js");
/* harmony import */ var _moduleUserManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleUserManagementGetters.js */ "./resources/js/src/store/user-management/moduleUserManagementGetters.js");
/*=========================================================================================
  File Name: moduleUserManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleUserManagementState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleUserManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleUserManagementActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleUserManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementActions.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementActions.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchUsers: function fetchUsers(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/user-management/users").then(function (response) {
        commit('SET_USERS', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchUser: function fetchUser(_ref2, userId) {
    _objectDestructuringEmpty(_ref2);

    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/user-management/users/".concat(userId)).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeRecord: function removeRecord(_ref3, userId) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/user-management/users/".concat(userId)).then(function (response) {
        commit('REMOVE_RECORD', userId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementGetters.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementGetters.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementMutations.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementMutations.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_USERS: function SET_USERS(state, users) {
    state.users = users;
  },
  REMOVE_RECORD: function REMOVE_RECORD(state, itemId) {
    var userIndex = state.users.findIndex(function (u) {
      return u.id == itemId;
    });
    state.users.splice(userIndex, 1);
  }
});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementState.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementState.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  users: []
});

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionCreate_vue_vue_type_template_id_4c15ab0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionCreate.vue?vue&type=template&id=4c15ab0a& */ "./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=template&id=4c15ab0a&");
/* harmony import */ var _TransactionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionCreate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionCreate_vue_vue_type_template_id_4c15ab0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionCreate_vue_vue_type_template_id_4c15ab0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=template&id=4c15ab0a&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=template&id=4c15ab0a& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionCreate_vue_vue_type_template_id_4c15ab0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionCreate.vue?vue&type=template&id=4c15ab0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-create/TransactionCreate.vue?vue&type=template&id=4c15ab0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionCreate_vue_vue_type_template_id_4c15ab0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionCreate_vue_vue_type_template_id_4c15ab0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);