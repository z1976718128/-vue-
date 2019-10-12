import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // component: (resolve) => require(['@/pages/Index/Index.vue'],resolve)
      component:()=>import("@/pages/Index/Index")
    },
    {
      path: '/pric',
      // component: (resolve) => require(['@/pages/Index/Index.vue'],resolve)
      component:()=>import("@/pages/pric/pric")
    }
  ]
})
