import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'home',
      redirect: '/home/delivery',
      component: () => import('./views/home.vue'),
      children: [{
          path: '/home/delivery',
          name: 'delivery',
          component: () => import('./views/delivery.vue'),
          children: [
          {
            path: '/home/delivery/multipoint',
            name: 'multipoint',
            component: () => import('./views/delivery/multipoint.vue')
          },
          {
            path: '/home/delivery/handpick',
            name: 'handpick',
            component: () => import('./views/delivery/handpick.vue')
          }
        ]
        },
        {
          path: '/home/classify',
          name: 'classify',
          component: () => import('./views/classify.vue')
        },
        {
          path: '/home/vip',
          name: 'vip',
          component: () => import('./views/vip.vue')
        },
        {
          path: '/home/gocar',
          name: 'gocar',
          component: () => import('./views/gocar.vue')
        },
        {
          path: '/home/my',
          name: 'my',
          component: () => import('./views/my.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})