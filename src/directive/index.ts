import { App } from 'vue'
import copyText from './common/copyText'

export default function installPlugins(app: App) {
  // 自定义复制指令v-copyText：仅支持复制初始文本
  app.directive('copyText', copyText)
}
