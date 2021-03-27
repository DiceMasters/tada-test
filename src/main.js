import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Object.defineProperty(Vue.prototype, '$bus', {
  get: function () {
    return this.$root.bus
  }
})

new Vue({
  data: {
    bus: new Vue({})
  },
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
