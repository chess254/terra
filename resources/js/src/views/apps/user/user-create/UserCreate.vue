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
          <vs-input class="w-full" label-placeholder="Join Date" v-model="user_data.join_date" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Currency" v-model="user_data.currency" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Amount Paid" v-model="user_data.amount_paid" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input type="email" class="w-full" label-placeholder="Group" v-model="user_data.group" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-6">
          <vs-input class="w-full" label-placeholder="Status" v-model="user_data.status" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2">Submit</vs-button>
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

export default {
  components: {
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
        status: null,
      },
      test: 123,

      
    }
  },
  watch: {
  },
  methods: {
    // fetch_user_data(userId) {
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
