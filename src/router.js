import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MainPage from './components/MainPage.vue'
import InstallPage from './components/InstallPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/install', component: InstallPage }
]

export default new Router({
  routes
})
