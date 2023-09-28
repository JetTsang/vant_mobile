import Vue from 'vue'
import App from './App.vue'
import '@/styles/reset-css'
import Vant from '@/plugins/vant'
import router from '@/plugins/router'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
