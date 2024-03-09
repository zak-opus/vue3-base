// 编写加载中插件
import { render, type App, createVNode } from 'vue'
import Loading from './loading/index.vue'

export default {
  install(app: App) {
    const VNode = createVNode(Loading)
    render(VNode, document.body)
    app.config.globalProperties.$MyLoading = {
      show: VNode.component?.exposed?.show,
      hide: VNode.component?.exposed?.hide,
    }
  },
}
