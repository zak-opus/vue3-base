import AutoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    // 指定声明文件目录
    dts: 'src/types/auto-imports.d.ts',
    // eslint报错解决，生成eslint全局变量
    eslintrc: {
      enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
    },
  })
}
