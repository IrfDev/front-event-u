import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Index from './views/Index.vue'
import NewPost from './views/NewPost.vue'
import Login from './views/Login.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: Index,
      path: '/',
      name: 'AllPost'
    },
    {
      component: NewPost,
      path: '/new-post',
      name: 'NewPost'
    },
    {
      component: Login,
      path: '/login',
      name: 'Login'
    }
  ]
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
