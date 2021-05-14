import { createStore } from 'vuex'
import axios from 'axios';


const data = { "database": "xfence", "collection": "products" };
const dataOrder = { "database": "xfence", "collection": "orders" };
const dataContacts = { "database": "xfence", "collection": "contacts" };
// var data = JSON.stringify({
//   database: 'aquapriceplus',
//   collection: 'products',
// });

// var config = {
//   method: "get",
//   url: "https://4f1564d1fb75.ngrok.io/api",
//   headers: {
//     Authorization:
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiU2xhdmEiLCJleHAiOjE2MDYxNTUyODV9.Rgtl6miC-0i_18FpJV30LfuL0MY64aL2VmbSeVmMvfs",
//     "Content-Type": "application/json",
//   },
//   data: data,
// };
export default createStore({
  state: {
    products: [],
    colors: [],
    costumers: [],
    costumersitem: JSON.parse(localStorage.getItem('costumersitem') || '[]'),
    contacts: [],
    contactitem: JSON.parse(localStorage.getItem('contactitem') || '[]'),
    productitem: JSON.parse(localStorage.getItem('productitem') || '[]'),
    // newsitem: [],
    coloritem: JSON.parse(localStorage.getItem('coloritem') || '[]'),
    token: localStorage.getItem("token") || "",
    status: "",
    user: {}
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PRODUCTITEM(state, productitem) {
      state.productitem = productitem
      localStorage.setItem('productitem', JSON.stringify(state.productitem))
    },
    SET_COLORS: (state, colors) => {
      state.colors = colors;
    },
    SET_COLORITEM(state, coloritem) {
      state.coloritem = coloritem
      localStorage.setItem('coloritem', JSON.stringify(state.coloritem))
    },
    SET_COSTUMERS: (state, costumers) => {
      state.costumers = costumers;
    },
    SET_COSTUMERSITEM(state, costumersitem) {
      state.costumersitem = costumersitem
      localStorage.setItem('costumersitem', JSON.stringify(state.costumersitem))
    },
    SET_CONTACTS: (state, contacts) => {
      state.contacts = contacts;
    },
    SET_CONTACTITEM(state, contactitem) {
      state.contactitem = contactitem
      localStorage.setItem('contactitem', JSON.stringify(state.contactitem))
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return axios('https://admin.xfence.ru/api/admin/v1/product/', {
        method: "GET",
        // params: data,

      }, {
        headers: {
          'Authorization': this.state.token,
          'Content-Type': 'application/json'
        },
      })
        .then((products) => {
          commit('SET_PRODUCTS', products.data)
          console.log(this.state.token)
          return products;
        })
        .catch((error) => {
          console.log(error)
          console.log(data)
          console.log(this.state.token)
          return error;
        })
    },
    GET_PRODUCTITEM({
      commit
    }, productitem) {

      commit('SET_PRODUCTITEM', productitem)
    },
    GET_COLORS({ commit }) {
      return axios('https://admin.xfence.ru/api/admin/v1/colors/', {
        method: "GET",
        // params: dataNews,

      }, {
        headers: {
          'Authorization': this.state.token,
          'Content-Type': 'application/json'
        },
      })
        .then((colors) => {
          commit('SET_COLORS', colors.data)
          return colors;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    },
    GET_COLORITEM({
      commit
    }, coloritem) {

      commit('SET_COLORITEM', coloritem)
    },
    GET_COSTUMERS({ commit }) {
      return axios('https://admin.xfence.ru/api/admin/v1/orders/', {
        method: "GET",
        // params: dataOrder,

      }, {
        headers: {
          'Authorization': this.state.token,
          'Content-Type': 'application/json'
        },
      })
        .then((costumers) => {
          commit('SET_COSTUMERS', costumers.data)
          return costumers;
        })
        .catch((error) => {
          console.log(error)
          console.log(this.state.status)
          console.log(this.state.token)
          return error;
        })
    },
    GET_COSTUMERSITEM({
      commit
    }, costumersitem) {

      commit('SET_COSTUMERSITEM', costumersitem)
    },
    GET_CONTACTS({ commit }) {
      return axios('https://admin.xfence.ru/api/admin/v1/contacts/', {
        method: "GET",
        // params: dataContacts,

      }, {
        headers: {
          'Authorization': this.state.token,
          'Content-Type': 'application/json'
        },
      })
        .then((contacts) => {
          commit('SET_CONTACTS', contacts.data)
          return contacts;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    },
    GET_CONTACTITEM({
      commit
    }, contactitem) {

      commit('SET_CONTACTITEM', contactitem)
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'https://admin.xfence.ru/api/admin/v1/user/login', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },

  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    PRODUCTID(state) {
      return state.productitem;
    },
    COLORS(state) {
      return state.colors;
    },
    COLORID(state) {
      return state.coloritem;
    },
    COSTUMERS(state) {
      return state.costumers;
    },
    COSTUMERSID(state) {
      return state.costumersitem;
    },
    CONTACTS(state) {
      return state.contacts;
    },
    CONTACTID(state) {
      return state.contactitem;
    },
    TOKEN(state) {
      return state.token;
    },
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    ProductsById: s => article => s.products.find(t => t.article === article),
    ColorById: s => article => s.colors.find(t => t.article === article),


  },
})
