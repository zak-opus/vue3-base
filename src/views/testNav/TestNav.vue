<template>
  <div class="testNav">
    <Sidebar></Sidebar>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue';
console.log('testNav');
</script>

<style lang="scss" scoped>
.testNav {
  display: flex;
  .content {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
  }
}
</style>
