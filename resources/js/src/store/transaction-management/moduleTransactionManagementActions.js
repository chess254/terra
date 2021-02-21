/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios"

export default {
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

  fetchTransactions({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/transactions")
        .then((response) => {
          commit('SET_TRANSACTIONS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchTransaction({}, transactionId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/transactions/${transactionId}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeTransaction({ commit }, transactionId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/transactions/${transactionId}`)
        .then((response) => {
          commit('REMOVE_TRANSACTION', transactionId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
