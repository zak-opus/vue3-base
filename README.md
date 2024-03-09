# Vue 3 + TypeScript + Vite


## 介绍

基于vue3、vue-router4、pinia+ts+vite+elementplus 搭建的pc端项目基座，包含自定义指令|插件、svg图标使用、暗黑主题、vite常用插件等;

### 常用命令

#### 克隆代码

```bash
git clone https://github.com/zak-opus/vue3-base.git
```

#### 项目命令

```bash
# 安装依赖包
npm install
# 运行
npm run dev
# 打包
npm run build
```

### 主要功能

+ vue全家桶配置：vue@3.4.15、vue-router4、pinia2
+ elementplus 组件库自动导入、elementplus图标采用全部注册；

+ 自定义插件：加载中提示插件、自定义指令：复制`v-copyText`
+ vite 插件：自动导入（框架api、elementplus组件 与 API函数、自定义组件）、svg图标组件化、打包分析报告、组件支持name
+ 生产环境按需导入elementplus样式、开发环境采用全部引入样式防止卡顿；
+ 暗黑模式、自定义elementplus主题