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

    <!-- Avatar Row -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
          <img :src="data.avatar" class="mr-8 rounded h-24 w-24" />
          <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
          <div>
            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">{{ data.name  }}</p>
            <input type="file" class="hidden" ref="update_avatar_input" @change="update_avatar" accept="image/*">

            <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
            <vs-button class="mr-4 mb-4">Change Avatar</vs-button>
            <!-- <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> -->

            <vs-button type="border" color="danger">Remove Avatar</vs-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->
    <!-- <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4" label="Username" v-model="data_local.name" v-validate="'required|alpha_num'" name="username" />
        <span class="text-danger text-sm"  v-show="errors.has('username')">{{ errors.first('username') }}</span>

        <vs-input class="w-full mt-4" label="Name" v-model="data_local.name" v-validate="'required|alpha_spaces'" name="name" />
        <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>

        <vs-input class="w-full mt-4" label="Email" v-model="data_local.phone" type="email" v-validate="'required|email'" name="email" />
        <span class="text-danger text-sm"  v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">

        <div class="mt-4">
          <label class="vs-input--label">Status</label>
          <v-select v-model="status_local" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
        </div>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <v-select v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
        </div>

        <vs-input class="w-full mt-4" label="Company" v-model="data_local.status" v-validate="'alpha_spaces'" name="company" />
        <span class="text-danger text-sm"  v-show="errors.has('company')">{{ errors.first('company') }}</span>

      </div>
    </div> -->
    <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Name" v-model="data_local.name" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Phone" v-model="data_local.phone" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Amount Paid" v-model="data_local.amount_paid" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Currency" v-model="data_local.currency" />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Status</label>
          <v-select v-model="data_local.status" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <label class="vs-input--label">Group</label>
          <v-select v-model="data_local.group" :clearable="false" :options="groupOptions" v-validate="'required'" name="group" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('group')">{{ errors.first('group') }}</span>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-6">
        <label class="vs-input--label"></label>
          <datepicker label-placeholder="join date" format="yyyy-MM-dd" placeholder="Join Date" v-model="data_local.join_date"></datepicker>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2" @click="updateCustomer">Save Changes</vs-button>
          <vs-button color="warning" type="border" class="mb-2" @click="data_local={}">Reset</vs-button>
        </div>
      </div>

  
    

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="save_changes" :disabled="!validateForm">Save Changes</vs-button>
          <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import axios from 'axios'

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

      statusOptions: [
         "Active",  
         "Blocked",  
         "Deactivated",  
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

    updateCustomer({ commit }) {
      let customer = this.data_local
      // alert(customer.name)
      return new Promise((resolve, reject) => {
        axios.patch("/api/customers/"+customer.id, customer  )
          .then((response) => {
            // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
            resolve(response)
            this.$router.push('/apps/user/user-view/'+customer.id).catch(() => {})
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
