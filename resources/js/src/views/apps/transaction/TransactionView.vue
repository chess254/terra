<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>Transaction record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="transaction_data">

      <vx-card title="Account" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="transaction_data.avatar" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">Sender Name</td>
                <td>{{ transaction_data.sender_name }}</td>
              </tr>
              <!-- <tr>
                <td class="font-semibold">Name</td>
                <td>{{ transaction_data.name }}</td>
              </tr> -->
              <tr>
                <td class="font-semibold">Beneficiary</td>
                <td>{{ transaction_data.beneficiary }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Status</td>
                <td>{{ transaction_data.status }}</td>
              </tr>
              <!-- <tr>
                <td class="font-semibold">Role</td>
                <td>{{ transaction_data.role }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Company</td>
                <td>{{ transaction_data.company }}</td>
              </tr> -->
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-4" :to="{name: 'app-transaction-edit', params: { transactionId: $route.params.transactionId }}">Edit</vs-button>
            <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord(transaction_data.id)">Delete</vs-button>
          </div>

        </div>

      </vx-card>

      <div class="vx-row mx-auto">
        <div class="vx-col lg:w-1/2 w-full mx-auto">
          <vx-card title="Information" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Sender Name</td>
                <td>{{ transaction_data.sender_name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Beneficiary</td>
                <td>{{ transaction_data.beneficiary }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Transaction Type</td>
                <td>{{ transaction_data.transaction_type }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Payment Method</td>
                <td>{{ transaction_data.payment_method }}</td>
              </tr> 
              <tr>
                <td class="font-semibold">Currency</td>
                <td>{{ transaction_data.currency }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Amount</td>
                <td>{{ transaction_data.amount }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Ref Number</td>
                <td>{{ transaction_data.ref_no }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Order Ref</td>
                <td>{{ transaction_data.order_ref }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Status</td>
                <td>{{ transaction_data.status }}</td>
              </tr>
            </table>
          </vx-card>
        </div>

       
      </div>

      <!-- Permissions -->
      <!-- <vx-card>

        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Permissions</span>
            </div>
            <vs-divider />
          </div>
        </div>

        <div class="block overflow-x-auto">
          <table class="w-full permissions-table">
            <tr>
              <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']" :key="heading">{{ heading }}</th>
            </tr>

            <tr v-for="(val, name) in transaction_data.permissions" :key="name">
              <td class="px-3 py-2">{{ name }}</td>
              <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
                <vs-checkbox v-model="val[name]" class="pointer-events-none" />
              </td>
            </tr>
          </table>
        </div>

      </vx-card> -->
    </div>
  </div>
</template>

<script>
import moduleTransactionManagement from '@/store/transaction-management/moduleTransactionManagement.js'
import axios from '@/axios'

export default {
  data() {
    return {
      transaction_data: null,
      user_not_found: false,
    }
  },
  computed: {
    userAddress() {
      let str = ""
      for(var field in this.transaction_data.location) {
        str += field + " "
      }
      return str
    }
  },
  methods: {
    confirmDeleteRecord(id) {
      // this.$vs.dialog({
      //   type: 'confirm',
      //   color: 'danger',
      //   title: `Confirm Delete`,
      //   text: `You are about to delete "${this.transaction_data.name}"`,
      //   accept: this.deleteRecord(id),
      //   acceptText: "Delete"
      // })
      this.deleteRecord(id)
    },
    deleteRecord(id) {
      /* Below two lines are just for demo purpose */
      // this.$router.push({name:'app-user-list'});
      
      axios.delete("/api/transactions/"+id)
          .then((response) => {
            // commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
            this.showDeleteSuccess()
            // resolve(response)
            this.$router.push({name:'app-transaction-list'}).catch(() => {})
          })
          .catch((error) => { (error) })
      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.transaction_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    }
  },
  created() {
    // Register Module UserManagement Module
    if(!moduleTransactionManagement.isRegistered) {
      this.$store.registerModule('transactionManagement', moduleTransactionManagement)
      moduleTransactionManagement.isRegistered = true
    }

    const transactionId = this.$route.params.transactionId
    this.$store.dispatch("transactionManagement/fetchTransaction", transactionId)
      .then(res => { this.transaction_data = res.data })
      .catch(err => {
        if(err.response.status === 404) {
          this.transaction_not_found = true
          return
        }
        console.error(err) })
  }
}

</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
