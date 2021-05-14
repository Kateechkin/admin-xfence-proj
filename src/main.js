import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/style/style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from "axios";

library.add(faUserSecret)
const token = localStorage.getItem('token')
if (token) {
   axios.defaults.headers.common['Authorization'] = token
}

createApp(App).component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(store).use(router).mount('#app')
