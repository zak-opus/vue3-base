<template>
  <div class="detail">
    <div>详情页面</div>
    <el-button type="primary" size="small" @click="handle">跳转</el-button>
    <el-link :underline="false" icon="DocumentCopy" v-copyText="str"
      >复制</el-link
    >
  </div>
</template>

<script setup name="Detail" lang="ts">
const router = useRouter()

function handle() {
  router.push('/queryMenu')
}
// console.log('创建demo')
const str = ref('adsad')

</script>

<style lang="scss" scoped>
.detail {
  margin: 10px;
  padding: 20px;
  background-color: var(--el-bg-color);
}
</style>
