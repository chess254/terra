<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">

      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Sender Name" v-model="data_local.sender_name" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Beneficiary" v-model="data_local.beneficiary" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Amount" v-model="data_local.amount" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Currency" v-model="data_local.currency" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Ref no." v-model="data_local.ref_no" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Order Ref." v-model="data_local.order_ref" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Transaction Type</label>
          <v-select v-model="data_local.transaction_type" :clearable="false" :options="transactionTypeOptions" v-validate="'required'" name="transaction_type" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('transaction_type')">{{ errors.first('transaction_type') }}</span>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Payment Method</label>
          <v-select v-model="data_local.payment_method" :clearable="false" :options="paymentMethod" v-validate="'required'" name="payment_method" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('payment_method')">{{ errors.first('payment_method') }}</span>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Status</label>
          <v-select v-model="data_local.status" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
        </div>
        <!--<div class="vx-col sm:w-1/2 w-full mb-6">
          <label class="vs-input--label"></label>
          <datepicker label-placeholder="join date" format="yyyy-MM-dd" placeholder="Join Date" v-model="data_local.join_date"></datepicker>
        </div>-->
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2" @click="updateTransaction">Submit</vs-button>
          <vs-button color="warning" type="border" class="mb-2" @click="data_local={}">Reset</vs-button>
        </div>
      </div>

  
    

    
  </div>
</template>

<script>
import vSelect from 'vue-select'
import axios from '@/axios'

export default {
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {

      data_local: JSON.parse(JSON.stringify(this.data)),
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

      groupOptions: [
         "Admin",  
         "User",  
         "Staff",  
      ],
    }
  },
  computed: {
    status_local: {
      get() {
        return { label: this.capitalize(this.data_local.status),  value: this.data_local.status  }
      },
      set(obj) {
        this.data_local.status = obj.value
      }
    },
    role_local: {
      get() {
        return { label: this.capitalize(this.data_local.group),  value: this.data_local.group  }
      },
      set(obj) {
        this.data_local.group = obj.value
      }
    },
    validateForm() {
      return !this.errors.any()
    }
  },
  methods: {

    updateTransaction({ commit }) {
      let transaction = this.data_local
      // alert(customer.name)
      return new Promise((resolve, reject) => {
        axios.patch("/api/transactions/"+transaction.id, transaction  )
          .then((response) => {
            // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
            resolve(response)
            this.$router.push('/apps/transaction/transaction-view/'+transaction.id).catch(() => {})
          })
          .catch((error) => { reject(error) })
      })
    },
    capitalize(str) {
      return str.slice(0,1).toUpperCase() + str.slice(1,str.length)
    },
    save_changes() {
      if(!this.validateForm) return

      // Here will go your API call for updating data
      // You can get data in "this.data_local"

    },
    reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data))
    },
    update_avatar() {
      // You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  },
}
</script>
