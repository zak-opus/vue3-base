<template>
  <div class="layout">
    <Header></Header>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup name="Layout" lang="ts">
import Header from './Header.vue'

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
  main {
    padding-top: 64px;
    position: relative;
    height: 100%;
  }
}
</style>
