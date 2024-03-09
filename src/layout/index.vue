<template>
  <div class="layout">
    <Header></Header>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :exclude="['Demo']">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script setup name="Layout" lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style lang="scss" scoped>
.layout {
  /* margin: 20px; */
  height: 100%;
}
</style>
