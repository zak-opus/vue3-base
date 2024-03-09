<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'// 中文语言
</script>

<template>
  <el-config-provider :locale="zhCn" size="small">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
