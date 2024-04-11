import { createWebHistory, createRouter } from 'vue-router'
// 引入框架页面
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/testUse',
      children: [
        {
          path: 'testNav',
          component: () => import('@/views/testNav/index.vue'),
          name: 'TestNav',
          meta: { title: '菜单测试' },
          redirect: '/testNav/prodType',
          children: [
            {
              path: 'prodType',
              component: () =>
                import('@/views/testNav/menus/prodType/index.vue'),
              name: 'ProdType',
              meta: { title: '产品类型' },
            },
          ],
        },
        {
          path: 'testUse',
          name: 'TestUse',
          component: () => import('../views/testUse.vue'),
          meta: { title: '功能测试' },
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
