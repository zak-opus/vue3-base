<script setup lang="ts">
const isShow = ref(false)
function show() {
  isShow.value = true
}
function hide() {
  isShow.value = false
}
defineExpose({
  show,
  hide,
})
</script>

<template>
  <div class="loading" v-if="isShow">loading</div>
</template>

<style scoped lang="scss">
.loading {
  width: 200px;
  height: 100px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #f3f3f3;
  border-radius: 10px;
}
</style>
