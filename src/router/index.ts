import { createWebHistory, createRouter } from 'vue-router'
// 引入框架页面
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/detail',
      children: [
        {
          path: '/queryMenu',
          component: () => import('@/views/queryMenu/index.vue'),
          name: 'QueryMenu',
          meta: { title: '查询栏目' },
          redirect: '/queryMenu/prodType',
          children: [
            {
              path: '/queryMenu/prodType',
              component: () =>
                import('@/views/queryMenu/menus/prodType/index.vue'),
              name: 'ProdType',
              meta: { title: '产品类型' },
            },
          ],
        },
        {
          path: '/detail',
          name: 'Detail',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/detail.vue'),
          meta: { title: '测试' },
        },
      ],
    },

    {
      path: '/401',
      component: () => import('@/views/error/401.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/404.vue'),
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    // 返回 savedPosition 或新的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
