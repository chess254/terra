<!-- =========================================================================================
  File Name: UserEdit.vue
  Description: User Edit Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-edit">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <vx-card v-if="transaction_data">

      <div slot="no-body" class="tabs-container px-6 pt-6">

        <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
          <vs-tab label="Transaction" icon-pack="feather" icon="icon-user">
            <div class="tab-text">
              <transaction-edit-tab-account class="mt-4" :data="transaction_data" />
            </div>
          </vs-tab>
          <vs-tab label="Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <transaction-edit-tab-information class="mt-4" :data="transaction_data" />
            </div>
          </vs-tab>
          <vs-tab label="Social" icon-pack="feather" icon="icon-share-2">
            <div class="tab-text">
              <transaction-edit-tab-social class="mt-4" :data="transaction_data" />
            </div>
          </vs-tab>
        </vs-tabs>

      </div>

    </vx-card>
  </div>
</template>

<script>
import TransactionEditTabAccount     from "./TransactionEditTabAccount.vue"
import TransactionEditTabInformation from "./TransactionEditTabInformation.vue"
import TransactionEditTabSocial      from "./TransactionEditTabSocial.vue"

// Store Module
import moduleTransactionManagement from '@/store/transaction-management/moduleTransactionManagement.js'
import Datepicker from 'vuejs-datepicker';
import axios from '@/axios'
import vSelect from 'vue-select'

export default {
  components: {
    TransactionEditTabAccount,
    TransactionEditTabInformation,
    TransactionEditTabSocial,
    Datepicker,
    vSelect
  },
  data() {
    return {
      transaction_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed

        Please check it's watcher
      */
      activeTab: 0,
      transactionTypeOptions: [
        "Credit", "Debit"
      ],
      statusOptions: [
        "Complete", "Processing", "Denied"
      ],
      paymentMethod: [
       "Cash",
       "Mobile",  
       "Bank Transfer"
      ],
    }
  },
  watch: {
    activeTab() {
      this.fetch_transaction_data(this.$route.params.transactionId)
    }
  },
  methods: {
    fetch_transaction_data(userId) {
      this.$store.dispatch("transactionManagement/fetchTransaction", userId)
        .then(res => { this.transaction_data = res.data })
        .catch(err => {
          if(err.response.status === 404) {
            this.user_not_found = true
            return
          }
          console.error(err) })
    }
  },
  created() {
    // Register Module transactionManagement Module
    if(!moduleTransactionManagement.isRegistered) {
      this.$store.registerModule('transactionManagement', moduleTransactionManagement)
      moduleTransactionManagement.isRegistered = true
    }
    this.fetch_transaction_data(this.$route.params.transactionId)
  }
}

</script>
