import Components from 'unplugin-vue-components/vite'
// 自动导入ele组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
  return Components({
    resolvers: [ElementPlusResolver()],
    // 指定声明文件目录
    dts: 'src/types/auto-components.d.ts',
    // 自动从该目录下搜索使用到的全局组件
    dirs: ['src/components'],
  })
}