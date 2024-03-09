<template>
  <div class="header">当前系统主题：{{ isDark ? '深色' : '浅色' }}</div>
</template>

<script setup name="Header" lang="ts">
// 使用vueuse的useDark，自动监听系统主题设置对应html类名
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  line-height: 64px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  text-align: center;
  background-color: var(--el-bg-color);
}
</style>
