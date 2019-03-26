import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import AppMovies from './containers/AppMovies.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/', redirect:'/movies'},
  {path:'/movies', component: AppMovies},
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
  
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')