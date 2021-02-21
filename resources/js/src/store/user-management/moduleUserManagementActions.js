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
  createCustomer({ commit }, customer) {
    alert("clicked")
    return new Promise((resolve, reject) => {
      axios.post("/api/customers/", {customer: customer})
        .then((response) => {
          alert(response)
          // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchUsers({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/customers")
        .then((response) => {
          commit('SET_USERS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchUser({}, userId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/customers/${userId}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeRecord({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/user-management/users/${userId}`)
        .then((response) => {
          commit('REMOVE_RECORD', userId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
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
}
