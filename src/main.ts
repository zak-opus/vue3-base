// 全局样式、element主题样式、第三方初始化样式
import '@/assets/styles/index.scss'
import App from './App.vue'

import store from './store'
import router from './router'

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
