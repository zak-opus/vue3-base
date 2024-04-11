<template>
  <div class="layout">
    <Header></Header>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script setup name="Layout" lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
// import { useDebounceFn, useWindowSize } from '@vueuse/core'
// const { width, height } = useWindowSize()
// const debouncedFn = useDebounceFn(() => {
//   console.log('resize')
//   console.log(width)
//   console.log(height)
// }, 1000)

// window.addEventListener('resize', debouncedFn)
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>
