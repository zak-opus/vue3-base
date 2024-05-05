<template>
  <div class="testNav" :style="{ '--side-width': `${sidebarWidth}px` }">
    <Sidebar ref="sidebarRef"></Sidebar>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
const sidebarRef = ref(null)
const { width: sidebarWidth } = useElementSize(sidebarRef)

console.log('testNav')
</script>

<style lang="scss" scoped>
.testNav {
  display: flex;
  height: 100%;
  .content {
    flex: 1;
    padding: 10px;
    /* overflow-y: auto; */
    overflow-x: hidden;
  }
}
</style>
