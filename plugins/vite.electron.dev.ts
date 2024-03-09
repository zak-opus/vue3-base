// 开发环境 electron 插件
import esbuild from 'esbuild'
import electron from 'electron'
import fs from 'node:fs'
// 导入plugins插件类型
import type { Plugin } from 'vite'
import { AddressInfo } from 'net'
// 用于不同进程之间通信
import { spawn } from 'child_process'
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
// 编写插件实现跟随vite服务启动electron
export const electronPluginDev = (): Plugin => {
  return {
    name: 'electron-plugin-dev',
    configureServer(server) {
      // 首次打包
      buildBackground()
      // 监听vite服务
      server.httpServer?.once('listening', () => {
        console.log('服务启动')
        // 获取服务端口号
        const port = (server.httpServer?.address() as AddressInfo).port
        // 拼接ip地址
        const address = `http://localhost:${port}`
        console.log(address)
        // 创建子进程给 dist/background.js 传递ip地址
        let ElectronRrocess = spawn(electron.toString(), [
          'dist/background.js',
          address,
        ])
        // 监听electron主进程变化，热更新
        fs.watchFile('src/background.ts', () => {
          // 杀死当前进程
          ElectronRrocess.kill()
          buildBackground()
          // 重新创建子进程
          ElectronRrocess = spawn(electron.toString(), [
            'dist/background.js',
            address,
          ])
        })
        // 监听日志
        ElectronRrocess.stdout.on('data', data => {
          console.log('日志：', data.toString())
        })
      })
    },
  }
}
