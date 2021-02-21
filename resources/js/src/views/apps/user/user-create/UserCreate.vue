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
          <vs-input class="w-full" label-placeholder="Name" v-model="user_data.name" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Phone" v-model="user_data.phone" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Amount Paid" v-model="user_data.amount_paid" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Currency" v-model="user_data.currency" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Status</label>
          <v-select v-model="user_data.status" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Group</label>
          <v-select v-model="user_data.group" :clearable="false" :options="groupOptions" v-validate="'required'" name="group" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('group')">{{ errors.first('group') }}</span>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-6">
        <label class="vs-input--label"></label>
          <datepicker label-placeholder="join date" format="yyyy-MM-dd" placeholder="Join Date" v-model="user_data.join_date"></datepicker>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2" @click="createCustomer">Submit</vs-button>
          <vs-button color="warning" type="border" class="mb-2" @click="user_data={}">Reset</vs-button>
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
      user_data: {
        name: null,
        phone: null,
        join_date: null,
        currency: null,
        amount_paid: null,
        group: null,
        status: null,
      },
      test: 123,
      statusOptions: [
        "Active", "Blocked", "Deactivated"
      ],
      groupOptions: [
       "Admin",
       "Customer",  
       "Staff"
      ],

      
    }
  },
  watch: {
  },
  methods: {

    // createCustomer() {
    //   // alert("clicked")
    //   this.$store.dispatch("userManagement/createCustomer", this.user_data)
    //     .then(res => { this.user_data = res.data })
    //     .catch(err => {
    //       if(err.response.status === 404) {
    //         // this.user_not_found = true
    //         return
    //       }
    //       alert.error(err) })
    // }
    createCustomer({ commit }) {
      let customer = this.user_data
      // alert(customer.name)
      return new Promise((resolve, reject) => {
        axios.post("/api/customers/", customer  )
          .then((response) => {
            // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
            resolve(response)
            this.$router.push('/apps/user/user-list').catch(() => {})
          })
          .catch((error) => { reject(error) })
      })
    }
  },
  created() {
    // Register Module UserManagement Module
    // if(!moduleUserManagement.isRegistered) {
    //   this.$store.registerModule('userManagement', moduleUserManagement)
    //   moduleUserManagement.isRegistered = true
    // }
    // this.fetch_user_data(this.$route.params.userId)
  }
}

</script>
