(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionEditTabAccount_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionEditTabAccount.vue */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue");
/* harmony import */ var _TransactionEditTabInformation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionEditTabInformation.vue */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue");
/* harmony import */ var _TransactionEditTabSocial_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionEditTabSocial.vue */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue");
/* harmony import */ var _store_transaction_management_moduleTransactionManagement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/transaction-management/moduleTransactionManagement.js */ "./resources/js/src/store/transaction-management/moduleTransactionManagement.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
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


 // Store Module





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TransactionEditTabAccount: _TransactionEditTabAccount_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TransactionEditTabInformation: _TransactionEditTabInformation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TransactionEditTabSocial: _TransactionEditTabSocial_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      transaction_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed
         Please check it's watcher
      */
      activeTab: 0,
      transactionTypeOptions: ["Credit", "Debit"],
      statusOptions: ["Complete", "Processing", "Denied"],
      paymentMethod: ["Cash", "Mobile", "Bank Transfer"]
    };
  },
  watch: {
    activeTab: function activeTab() {
      this.fetch_transaction_data(this.$route.params.transactionId);
    }
  },
  methods: {
    fetch_transaction_data: function fetch_transaction_data(userId) {
      var _this = this;

      this.$store.dispatch("transactionManagement/fetchTransaction", userId).then(function (res) {
        _this.transaction_data = res.data;
      })["catch"](function (err) {
        if (err.response.status === 404) {
          _this.user_not_found = true;
          return;
        }

        console.error(err);
      });
    }
  },
  created: function created() {
    // Register Module transactionManagement Module
    if (!_store_transaction_management_moduleTransactionManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered) {
      this.$store.registerModule('transactionManagement', _store_transaction_management_moduleTransactionManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      _store_transaction_management_moduleTransactionManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered = true;
    }

    this.fetch_transaction_data(this.$route.params.transactionId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      transactionTypeOptions: ["Credit", "Debit"],
      statusOptions: ["Complete", "Processing", "Denied"],
      paymentMethod: ["Cash", "Mobile", "Bank Transfer"],
      groupOptions: ["Admin", "User", "Staff"]
    };
  },
  computed: {
    status_local: {
      get: function get() {
        return {
          label: this.capitalize(this.data_local.status),
          value: this.data_local.status
        };
      },
      set: function set(obj) {
        this.data_local.status = obj.value;
      }
    },
    role_local: {
      get: function get() {
        return {
          label: this.capitalize(this.data_local.group),
          value: this.data_local.group
        };
      },
      set: function set(obj) {
        this.data_local.group = obj.value;
      }
    },
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    updateTransaction: function updateTransaction(_ref) {
      var _this = this;

      var commit = _ref.commit;
      var transaction = this.data_local; // alert(customer.name)

      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch("/api/transactions/" + transaction.id, transaction).then(function (response) {
          // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
          resolve(response);

          _this.$router.push('/apps/transaction/transaction-view/' + transaction.id)["catch"](function () {});
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    capitalize: function capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    },
    save_changes: function save_changes() {
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data: function reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data));
    },
    update_avatar: function update_avatar() {// You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      langOptions: [{
        label: "English",
        value: "english"
      }, {
        label: "Spanish",
        value: "spanish"
      }, {
        label: "French",
        value: "french"
      }, {
        label: "Russian",
        value: "russian"
      }, {
        label: "German",
        value: "german"
      }, {
        label: "Arabic",
        value: "arabic"
      }, {
        label: "Sanskrit",
        value: "sanskrit"
      }]
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data: function reset_data() {
      this.data_local = Object.assign({}, this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data))
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data: function reset_data() {
      this.data_local = Object.assign({}, this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=template&id=55cecf66&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=template&id=55cecf66& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "page-user-edit" } },
    [
      _c(
        "vs-alert",
        {
          attrs: {
            color: "danger",
            title: "User Not Found",
            active: _vm.user_not_found
          },
          on: {
            "update:active": function($event) {
              _vm.user_not_found = $event
            }
          }
        },
        [
          _c("span", [
            _vm._v(
              "User record with id: " +
                _vm._s(_vm.$route.params.userId) +
                " not found. "
            )
          ]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("span", [_vm._v("Check ")]),
              _c(
                "router-link",
                {
                  staticClass: "text-inherit underline",
                  attrs: { to: { name: "page-user-list" } }
                },
                [_vm._v("All Users")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.transaction_data
        ? _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "tabs-container px-6 pt-6",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "vs-tabs",
                  {
                    staticClass: "tab-action-btn-fill-conatiner",
                    model: {
                      value: _vm.activeTab,
                      callback: function($$v) {
                        _vm.activeTab = $$v
                      },
                      expression: "activeTab"
                    }
                  },
                  [
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Transaction",
                          "icon-pack": "feather",
                          icon: "icon-user"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("transaction-edit-tab-account", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.transaction_data }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Information",
                          "icon-pack": "feather",
                          icon: "icon-info"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("transaction-edit-tab-information", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.transaction_data }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Social",
                          "icon-pack": "feather",
                          icon: "icon-share-2"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("transaction-edit-tab-social", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.transaction_data }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
        [
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { "label-placeholder": "Sender Name" },
            model: {
              value: _vm.data_local.sender_name,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "sender_name", $$v)
              },
              expression: "data_local.sender_name"
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
            attrs: { "label-placeholder": "Beneficiary" },
            model: {
              value: _vm.data_local.beneficiary,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "beneficiary", $$v)
              },
              expression: "data_local.beneficiary"
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
            attrs: { "label-placeholder": "Amount" },
            model: {
              value: _vm.data_local.amount,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "amount", $$v)
              },
              expression: "data_local.amount"
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
              value: _vm.data_local.currency,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "currency", $$v)
              },
              expression: "data_local.currency"
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
            attrs: { "label-placeholder": "Ref no." },
            model: {
              value: _vm.data_local.ref_no,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "ref_no", $$v)
              },
              expression: "data_local.ref_no"
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
            attrs: { "label-placeholder": "Order Ref." },
            model: {
              value: _vm.data_local.order_ref,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "order_ref", $$v)
              },
              expression: "data_local.order_ref"
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
          _c("label", { staticClass: "vs-input--label" }, [
            _vm._v("Transaction Type")
          ]),
          _vm._v(" "),
          _c("v-select", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              clearable: false,
              options: _vm.transactionTypeOptions,
              name: "transaction_type",
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.data_local.transaction_type,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "transaction_type", $$v)
              },
              expression: "data_local.transaction_type"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("transaction_type"),
                  expression: "errors.has('transaction_type')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("transaction_type")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
        [
          _c("label", { staticClass: "vs-input--label" }, [
            _vm._v("Payment Method")
          ]),
          _vm._v(" "),
          _c("v-select", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              clearable: false,
              options: _vm.paymentMethod,
              name: "payment_method",
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.data_local.payment_method,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "payment_method", $$v)
              },
              expression: "data_local.payment_method"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("payment_method"),
                  expression: "errors.has('payment_method')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("payment_method")))]
          )
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
          _c("label", { staticClass: "vs-input--label" }, [_vm._v("Status")]),
          _vm._v(" "),
          _c("v-select", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              clearable: false,
              options: _vm.statusOptions,
              name: "status",
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.data_local.status,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "status", $$v)
              },
              expression: "data_local.status"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("status"),
                  expression: "errors.has('status')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("status")))]
          )
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
          _c(
            "vs-button",
            { staticClass: "mr-3 mb-2", on: { click: _vm.updateTransaction } },
            [_vm._v("Submit")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "mb-2",
              attrs: { color: "warning", type: "border" },
              on: {
                click: function($event) {
                  _vm.data_local = {}
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=template&id=83bb7446&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=template&id=83bb7446& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full md:w-1/2" }, [
        _c(
          "div",
          { staticClass: "flex items-end" },
          [
            _c("feather-icon", {
              staticClass: "mr-2",
              attrs: { icon: "UserIcon", svgClasses: "w-5 h-5" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "leading-none font-medium" }, [
              _vm._v("Personal Information")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c("label", { staticClass: "text-sm" }, [_vm._v("Birth Date")]),
                _vm._v(" "),
                _c("flat-pickr", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: {
                    config: { dateFormat: "d F Y", maxDate: new Date() },
                    name: "dob"
                  },
                  model: {
                    value: _vm.data_local.dob,
                    callback: function($$v) {
                      _vm.$set(_vm.data_local, "dob", $$v)
                    },
                    expression: "data_local.dob"
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("dob"),
                        expression: "errors.has('dob')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("dob")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: { regex: "^\\+?([0-9]+)$" },
                  expression: "{regex: '^\\\\+?([0-9]+)$' }"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Mobile", name: "mobile" },
              model: {
                value: _vm.data_local.mobile,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "mobile", $$v)
                },
                expression: "data_local.mobile"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("mobile"),
                    expression: "errors.has('mobile')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("mobile")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "url:require_protocol",
                  expression: "'url:require_protocol'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: {
                label: "Website",
                name: "website",
                "data-vv-as": "field"
              },
              model: {
                value: _vm.data_local.website,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "website", $$v)
                },
                expression: "data_local.website"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("website"),
                    expression: "errors.has('website')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("website")))]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c("label", { staticClass: "text-sm" }, [_vm._v("Languages")]),
                _vm._v(" "),
                _c("v-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: {
                    multiple: "",
                    closeOnSelect: false,
                    options: _vm.langOptions,
                    name: "lang_known",
                    dir: _vm.$vs.rtl ? "rtl" : "ltr"
                  },
                  model: {
                    value: _vm.data_local.languages_known,
                    callback: function($$v) {
                      _vm.$set(_vm.data_local, "languages_known", $$v)
                    },
                    expression: "data_local.languages_known"
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("lang_known"),
                        expression: "errors.has('lang_known')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("lang_known")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4" }, [
              _c("label", { staticClass: "text-sm" }, [_vm._v("Gender")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c(
                    "vs-radio",
                    {
                      staticClass: "mr-4",
                      attrs: { "vs-value": "male" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Male")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      staticClass: "mr-4",
                      attrs: { "vs-value": "female" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Female")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      attrs: { "vs-value": "other" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Other")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-6" }, [
              _c("label", [_vm._v("Contact Options")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap mt-1" },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mr-4 mb-2",
                      attrs: { "vs-value": "email" },
                      model: {
                        value: _vm.data_local.contact_options,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "contact_options", $$v)
                        },
                        expression: "data_local.contact_options"
                      }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mr-4 mb-2",
                      attrs: { "vs-value": "message" },
                      model: {
                        value: _vm.data_local.contact_options,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "contact_options", $$v)
                        },
                        expression: "data_local.contact_options"
                      }
                    },
                    [_vm._v("Message")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: " mb-2",
                      attrs: { "vs-value": "Phone" },
                      model: {
                        value: _vm.data_local.contact_options,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "contact_options", $$v)
                        },
                        expression: "data_local.contact_options"
                      }
                    },
                    [_vm._v("Phone")]
                  )
                ],
                1
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-full md:w-1/2" }, [
        _c(
          "div",
          { staticClass: "flex items-end md:mt-0 mt-base" },
          [
            _c("feather-icon", {
              staticClass: "mr-2",
              attrs: { icon: "MapPinIcon", svgClasses: "w-5 h-5" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "leading-none font-medium" }, [
              _vm._v("Address")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Address Line 1", name: "addd_line_1" },
              model: {
                value: _vm.data_local.location.add_line_1,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "add_line_1", $$v)
                },
                expression: "data_local.location.add_line_1"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("addd_line_1"),
                    expression: "errors.has('addd_line_1')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("addd_line_1")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "w-full mt-4",
              attrs: { label: "Address Line 2" },
              model: {
                value: _vm.data_local.location.add_line_2,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "add_line_2", $$v)
                },
                expression: "data_local.location.add_line_2"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric",
                  expression: "'required|numeric'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Post Code", name: "post_code" },
              model: {
                value: _vm.data_local.location.post_code,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "post_code", $$v)
                },
                expression: "data_local.location.post_code"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("post_code"),
                    expression: "errors.has('post_code')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("post_code")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "City", name: "city" },
              model: {
                value: _vm.data_local.location.city,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "city", $$v)
                },
                expression: "data_local.location.city"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("city"),
                    expression: "errors.has('city')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("city")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "State", name: "state" },
              model: {
                value: _vm.data_local.location.state,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "state", $$v)
                },
                expression: "data_local.location.state"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("state"),
                    expression: "errors.has('state')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("state")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Country", name: "country" },
              model: {
                value: _vm.data_local.location.country,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "country", $$v)
                },
                expression: "data_local.location.country"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("country"),
                    expression: "errors.has('country')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("country")))]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-twitter",
              label: "Twitter",
              "icon-no-border": "",
              name: "twitter"
            },
            model: {
              value: _vm.data_local.social_links.twitter,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "twitter", $$v)
              },
              expression: "data_local.social_links.twitter"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("twitter"),
                  expression: "errors.has('twitter')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("twitter")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-facebook",
              label: "Facebook",
              "icon-no-border": "",
              name: "facebook"
            },
            model: {
              value: _vm.data_local.social_links.facebook,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "facebook", $$v)
              },
              expression: "data_local.social_links.facebook"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("facebook"),
                  expression: "errors.has('facebook')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("facebook")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-instagram",
              label: "Instagram",
              "icon-no-border": "",
              name: "instagram"
            },
            model: {
              value: _vm.data_local.social_links.instagram,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "instagram", $$v)
              },
              expression: "data_local.social_links.instagram"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("instagram"),
                  expression: "errors.has('instagram')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("instagram")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4 md:mt-0",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-github",
              label: "GitHub",
              "icon-no-border": "",
              name: "github"
            },
            model: {
              value: _vm.data_local.social_links.github,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "github", $$v)
              },
              expression: "data_local.social_links.github"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("github"),
                  expression: "errors.has('github')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("github")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-codepen",
              label: "CodePen",
              "icon-no-border": "",
              name: "codepen"
            },
            model: {
              value: _vm.data_local.social_links.codepen,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "codepen", $$v)
              },
              expression: "data_local.social_links.codepen"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("codepen"),
                  expression: "errors.has('codepen')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("codepen")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-slack",
              label: "Slack",
              "icon-no-border": "",
              name: "slack"
            },
            model: {
              value: _vm.data_local.social_links.slack,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "slack", $$v)
              },
              expression: "data_local.social_links.slack"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("slack"),
                  expression: "errors.has('slack')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("slack")))]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/transaction-management/moduleTransactionManagement.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/store/transaction-management/moduleTransactionManagement.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleTransactionManagementState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleTransactionManagementState.js */ "./resources/js/src/store/transaction-management/moduleTransactionManagementState.js");
/* harmony import */ var _moduleTransactionManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleTransactionManagementMutations.js */ "./resources/js/src/store/transaction-management/moduleTransactionManagementMutations.js");
/* harmony import */ var _moduleTransactionManagementActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleTransactionManagementActions.js */ "./resources/js/src/store/transaction-management/moduleTransactionManagementActions.js");
/* harmony import */ var _moduleTransactionManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleTransactionManagementGetters.js */ "./resources/js/src/store/transaction-management/moduleTransactionManagementGetters.js");
/*=========================================================================================
  File Name: moduleUserManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  // isRegistered: false,
  namespaced: true,
  state: _moduleTransactionManagementState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleTransactionManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleTransactionManagementActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleTransactionManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/transaction-management/moduleTransactionManagementActions.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/store/transaction-management/moduleTransactionManagementActions.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");
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
  // createCustomer({ commit }, customer) {
  //   alert("clicked")
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/customers/", {customer: customer})
  //       .then((response) => {
  //         alert(response)
  //         // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchTransactions: function fetchTransactions(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/transactions").then(function (response) {
        commit('SET_TRANSACTIONS', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchTransaction: function fetchTransaction(_ref2, transactionId) {
    _objectDestructuringEmpty(_ref2);

    return new Promise(function (resolve, reject) {
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/transactions/".concat(transactionId)).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeTransaction: function removeTransaction(_ref3, transactionId) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/transactions/".concat(transactionId)).then(function (response) {
        commit('REMOVE_TRANSACTION', transactionId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/transaction-management/moduleTransactionManagementGetters.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/store/transaction-management/moduleTransactionManagementGetters.js ***!
  \*********************************************************************************************/
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

/***/ "./resources/js/src/store/transaction-management/moduleTransactionManagementMutations.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/store/transaction-management/moduleTransactionManagementMutations.js ***!
  \***********************************************************************************************/
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
  SET_Transactions: function SET_Transactions(state, transactions) {
    state.transactions = transactions;
  },
  REMOVE_RECORD: function REMOVE_RECORD(state, itemId) {
    var index = state.transactions.findIndex(function (u) {
      return u.id == itemId;
    });
    state.transactions.splice(index, 1);
  },
  SET_TRANSACTIONS: function SET_TRANSACTIONS(state, transactions) {
    state.transactions = transactions;
  }
});

/***/ }),

/***/ "./resources/js/src/store/transaction-management/moduleTransactionManagementState.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/store/transaction-management/moduleTransactionManagementState.js ***!
  \*******************************************************************************************/
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
  transactions: []
});

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionEdit_vue_vue_type_template_id_55cecf66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionEdit.vue?vue&type=template&id=55cecf66& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=template&id=55cecf66&");
/* harmony import */ var _TransactionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionEdit_vue_vue_type_template_id_55cecf66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionEdit_vue_vue_type_template_id_55cecf66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=template&id=55cecf66&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=template&id=55cecf66& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEdit_vue_vue_type_template_id_55cecf66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEdit.vue?vue&type=template&id=55cecf66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEdit.vue?vue&type=template&id=55cecf66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEdit_vue_vue_type_template_id_55cecf66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEdit_vue_vue_type_template_id_55cecf66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionEditTabAccount_vue_vue_type_template_id_68b2e6de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de&");
/* harmony import */ var _TransactionEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionEditTabAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionEditTabAccount_vue_vue_type_template_id_68b2e6de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionEditTabAccount_vue_vue_type_template_id_68b2e6de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEditTabAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabAccount_vue_vue_type_template_id_68b2e6de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabAccount.vue?vue&type=template&id=68b2e6de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabAccount_vue_vue_type_template_id_68b2e6de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabAccount_vue_vue_type_template_id_68b2e6de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionEditTabInformation_vue_vue_type_template_id_83bb7446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionEditTabInformation.vue?vue&type=template&id=83bb7446& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=template&id=83bb7446&");
/* harmony import */ var _TransactionEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionEditTabInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionEditTabInformation_vue_vue_type_template_id_83bb7446___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionEditTabInformation_vue_vue_type_template_id_83bb7446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEditTabInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=template&id=83bb7446&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=template&id=83bb7446& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabInformation_vue_vue_type_template_id_83bb7446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEditTabInformation.vue?vue&type=template&id=83bb7446& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabInformation.vue?vue&type=template&id=83bb7446&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabInformation_vue_vue_type_template_id_83bb7446___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabInformation_vue_vue_type_template_id_83bb7446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionEditTabSocial_vue_vue_type_template_id_6927cbcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc&");
/* harmony import */ var _TransactionEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionEditTabSocial.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionEditTabSocial_vue_vue_type_template_id_6927cbcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionEditTabSocial_vue_vue_type_template_id_6927cbcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEditTabSocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabSocial_vue_vue_type_template_id_6927cbcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/transaction/transaction-edit/TransactionEditTabSocial.vue?vue&type=template&id=6927cbcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabSocial_vue_vue_type_template_id_6927cbcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionEditTabSocial_vue_vue_type_template_id_6927cbcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);