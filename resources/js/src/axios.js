// axios
import axios from 'axios'

// const domain = ""

// export default axios.create({
//   domain
//   // You can add your headers here
// })


const ajax = axios.create({
  // baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : '//trackerapp.local/'
  baseURL: "https://terra-tech-test.herokuapp.com"
})

ajax.CancelToken = axios.CancelToken
ajax.isCancel = axios.isCancel

/*
* The interceptor here ensures that we check for the token in local storage every time an ajax request is made
*/
ajax.interceptors.request.use(
 (config) => {
   let token = localStorage.getItem('accessToken')

   if (token) {
     config.headers['Authorization'] = `Bearer ${ token }`
   }

   return config
 },

 (error) => {
   return Promise.reject(error)
 }
)

export default ajax
