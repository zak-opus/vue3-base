# Vue 3 + TypeScript + Vite

## 线上预览

[vue3-base 系统演示](http://39.107.60.116:8080/vue3-base/)

## 介绍

基于 vue3、vue-router4、pinia+ts+vite+elementplus 搭建的pc端项目基座，包含自定义指令|插件、svg图标使用、暗黑主题、vite常用插件等;
不定期更新！！
本项目也是参考了一些其他开源项目，加以借鉴修改，供大家学习参考，欢迎star！！

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



### 更新日志

#### 20240413

1、关于`views`目录下业务组件名的统一修改；

>  将组件文件名改为大驼峰，这样可以不用在路由组件中声明`name`，不适用`index.vue`以便于方便确认打印信息所在组件；
>
> 补充：在组合式API编写组件时，要给组件添加name，有两种方式：通过第三方插件`如：vite-plugin-vue-setup-extend`；使用官方新API`defineOptions()`，仅支持 Vue 3.3+

```
摘官方文档：在 3.2.34 或以上的版本中，使用 <script setup> 的单文件组件会自动根据文件名生成对应的 name 选项，即使是在配合 <KeepAlive> 使用时也无需再手动声明。
```

2、