import '@/assets/styles/index.scss' // 全局样式
import App from './App.vue'

import store from './store'
import router from './router'

// 引入第三方组件库
// 开发环境引入全部样式
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // 暗黑主题变量

// svg图标
import 'virtual:svg-icons-register'
import elementIcons from '@/components/SvgIcon/svgicon'

// 引入自定义插件
import plugins from './plugins'
// 自定义指令
import directive from './directive'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(plugins)
app.use(directive)
app.use(elementIcons)

app.mount('#app')
