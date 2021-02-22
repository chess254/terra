<!-- =========================================================================================
  File Name: UserCreate.vue
  Description: User Create Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-create">

    <vx-card>

      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Sender Name" v-model="transaction_data.sender_name" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Beneficiary" v-model="transaction_data.beneficiary" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Amount" v-model="transaction_data.amount" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Currency" v-model="transaction_data.currency" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Ref no." v-model="transaction_data.ref_no" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Order Ref." v-model="transaction_data.order_ref" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Transaction Type</label>
          <v-select v-model="transaction_data.transaction_type" :clearable="false" :options="transactionTypeOptions" v-validate="'required'" name="transaction_type" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('transaction_type')">{{ errors.first('transaction_type') }}</span>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Payment Method</label>
          <v-select v-model="transaction_data.payment_method" :clearable="false" :options="paymentMethod" v-validate="'required'" name="payment_method" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('payment_method')">{{ errors.first('payment_method') }}</span>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Status</label>
          <v-select v-model="transaction_data.status" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
        </div>
        <!--<div class="vx-col sm:w-1/2 w-full mb-6">
          <label class="vs-input--label"></label>
          <datepicker label-placeholder="join date" format="yyyy-MM-dd" placeholder="Join Date" v-model="transaction_data.join_date"></datepicker>
        </div>-->
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2" @click="createTransaction">Submit</vs-button>
          <vs-button color="warning" type="border" class="mb-2" @click="transaction_data={}">Reset</vs-button>
        </div>
      </div>

    </vx-card>
  </div>
</template>

<script>
// import UserCreateTabAccount     from "./UserCreateTabAccount.vue"
// import UserCreateTabInformation from "./UserCreateTabInformation.vue"
// import UserCreateTabSocial      from "./UserCreateTabSocial.vue"

// Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import Datepicker from 'vuejs-datepicker';
import axios from '@/axios'
import vSelect from 'vue-select'

export default {
  components: {
    Datepicker,
    vSelect
    // UserCreateTabAccount,
    // UserCreateTabInformation,
    // UserCreateTabSocial,
  },
  data() {
    return {
      transaction_data: {
        sender_name: null,
        beneficiary: null,
        amount: null,
        currency: null,
        ref_no: null,
        order_ref: null,
        transaction_type: null,
        payment_method:null,
        status: null,
      },
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
  },
  methods: {

    // createCustomer() {
    //   // alert("clicked")
    //   this.$store.dispatch("userManagement/createCustomer", this.transaction_data)
    //     .then(res => { this.transaction_data = res.data })
    //     .catch(err => {
    //       if(err.response.status === 404) {
    //         // this.user_not_found = true
    //         return
    //       }
    //       alert.error(err) })
    // }
    createTransaction({ commit }) {
      let transaction = this.transaction_data
      // alert(customer.name)
      return new Promise((resolve, reject) => {
        axios.post("/api/transactions", transaction  )
          .then((response) => {
            // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
            
            resolve(response)
            this.$vs.notify({
                color: 'success',
                title: 'Created Transaction',
                text: response.message
              })
            this.$router.push('/apps/transaction/transaction-list').catch(() => {})
          })
          .catch((error) => {       this.$vs.notify({
                color: 'danger',
                title: 'Error',
                text: ''
              })})
      })
    }
  },
  created() {
    // Register Module UserManagement Module
    // if(!moduleUserManagement.isRegistered) {
    //   this.$store.registerModule('userManagement', moduleUserManagement)
    //   moduleUserManagement.isRegistered = true
    // }
    // this.fetch_transaction_data(this.$route.params.userId)
  }
}

</script>
