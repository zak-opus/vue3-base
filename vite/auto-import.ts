import AutoImport from 'unplugin-auto-import/vite'
// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    resolvers: [ElementPlusResolver()],
    // 指定声明文件目录
    dts: 'src/types/auto-imports.d.ts',
    // eslint报错解决，生成eslint全局变量
    eslintrc: {
      enabled: true, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
    },
  })
}
