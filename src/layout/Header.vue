<template>
  <div class="header">
    当前系统主题：{{ isDark ? '深色' : '浅色' }}
    <div>
      <el-link type="primary" @click="jumpPath('/testNav')">导航测试</el-link> |
      <el-link type="primary" @click="jumpPath('/testUse')">功能测试</el-link>
    </div>
  </div>
</template>

<script setup name="Header" lang="ts">
// 使用vueuse的useDark，自动监听系统主题设置对应html类名
import { useDark, useTitle } from '@vueuse/core'
const isDark = useDark()

const router = useRouter()
const route = useRoute()
// 获取网页标题
const baseTitie = import.meta.env.VITE_APP_TITLE
// 监听路由变化
watch(
  () => route.path,
  () => {
    useTitle(`${route.meta.title}-${baseTitie}` as string)
  },
  { immediate: true }
)
// 打印当前路由信息
console.log(route)

function jumpPath(path: string) {
  router.replace(path)
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  text-align: center;
  background-color: var(--el-bg-color);
}
</style>
