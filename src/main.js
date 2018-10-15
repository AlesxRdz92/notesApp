import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //Using lifecycle hook befofeCreate to extract the data from the localStorage
  beforeCreate() {
    this.$store.dispatch('initialStore');
  },
  render: h => h(App)
}).$mount('#app')
