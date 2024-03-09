// electron 主进程
import { app, BrowserWindow } from 'electron'
// 创建 electron 窗口
app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 启用 Node.js 集成，默认false不允许
      contextIsolation: false, // 启用上下文隔离
      webSecurity: false, // 禁用同源策略
    },
  })
  // 打开控制台工具
  win.webContents.openDevTools()
  if (process.argv[2]) {
    // 开发环境加载地址
    win.loadURL(process.argv[2])
  } else {
    // 生产环境，直接加载文件
    win.loadFile('index.html')
  }
})
