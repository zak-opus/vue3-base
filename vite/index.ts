import vue from '@vitejs/plugin-vue'

// 自动导入api
import createAutoImport from './auto-import'
// 自动导入elementplus组件、自定义组件
import createComponents from './auto-components'
// 用于支持组件name
import createSetupExtend from './setup-extend'
// 用于支持svg组件
import createSvgIcon from './svg-icon'
// 生成打包报告
import { visualizer } from 'rollup-plugin-visualizer'
// ts语法检查，报错直接在浏览器提示
// import checker from 'vite-plugin-checker'
// 开发环境 electron 插件
// import { electronPluginDev } from '../plugins/vite.electron.dev'
// 生产环境 electron 插件
// import { electronPluginBuild } from '../plugins/vite.electron.build'
// 生产环境压缩
// import createCompression from './compression'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    vue(),
    visualizer(),
    // checker({
    //   typescript: true,
    //   vueTsc: true,
    // }),
  ]
  vitePlugins.push(createAutoImport(isBuild))
  vitePlugins.push(createComponents(isBuild))
  // vitePlugins.push(electronPluginDev())
  // vitePlugins.push(electronPluginBuild())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))
  // isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
