// 生产环境 electron 插件
import esbuild from 'esbuild'
import fs from 'node:fs'
import path from 'node:path'
import * as electronBuilder from 'electron-builder'
// 导入plugins插件类型
import type { Plugin } from 'vite'
// 打包background.ts公共方法
const buildBackground = () => {
  esbuild.buildSync({
    entryPoints: ['src/background.ts'],
    bundle: true,
    outfile: 'dist/background.js',
    platform: 'node',
    external: ['electron'],
  })
}
// 编写插件实现vite打包后启动electron
export const electronPluginBuild = (): Plugin => {
  return {
    name: 'electron-plugin-build',
    closeBundle: () => {
      buildBackground()
      // 指定 package.json 的 main
      const json = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
      json.main = 'background.js'
      fs.writeFileSync('dist/package.json', JSON.stringify(json, null, 4))
      fs.mkdirSync('dist/node_modules')
      electronBuilder.build({
        config: {
          directories: {
            output: path.resolve(process.cwd(), 'release'),
            app: path.resolve(process.cwd(), 'dist'),
          },
          files: ['**/*'],
          asar: true,
          appId: 'com.example.app',
          productName: 'My Electron App',
          nsis: {
            oneClick: false,
            allowToChangeInstallationDirectory: true,
          },
        },
      })
    },
  }
}
