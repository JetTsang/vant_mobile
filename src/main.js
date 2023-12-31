import Vue from 'vue'
import App from './App.vue'
import '@/styles/reset-css'
import '@/plugins/vant'
import router from '@/plugins/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
