import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  // const { VITE_APP_ENV } = env
  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
    // base: VITE_APP_ENV === 'production' ? '/dcp/' : '/',
    base: './',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    // vite 相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: p => p.replace(/^\/dev-api/, ''),
        },
      },
    },
    //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: atRule => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
      preprocessorOptions: {
        scss: {
          // 向全局sass文件中导入元素主题变量，@use方式不会重复
          additionalData: `@use "@/assets/styles/element-theme.scss" as *;`,
        },
      },
    },
    build: {
      // outDir: 'dist/dcp',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // chunkFileNames: 'static/js/[name]-[hash].js',
          // entryFileNames: 'static/js/entry-[hash].js',
          // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          },
        },
      },
    },
  }
})
