<template>
  <div class="queryMenu">
    <Sidebar></Sidebar>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup name="QueryMenu" lang="ts">
import Sidebar from './sidebar.vue'
console.log('创建首页')
</script>

<style lang="scss" scoped>
.queryMenu {
  display: flex;
  .content {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
  }
}
</style>
