/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_Transactions(state, transactions) {
    state.transactions = transactions
  },
  REMOVE_RECORD(state, itemId) {
      const index = state.transactions.findIndex((u) => u.id == itemId)
      state.transactions.splice(index, 1)
  },
  SET_TRANSACTIONS(state, transactions){
    state.transactions = transactions
  }
}
