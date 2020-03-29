import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    }
  ]
})


new Vue({
  render: h => h(App),
}).$mount('#app')
