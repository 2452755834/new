import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/testA',
      component: () => import('../pages/previewTest.vue')
    }
  ]
})
export default router