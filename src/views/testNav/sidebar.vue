<template>
  <div class="sidebar">
    <el-menu default-active="/testNav/menuOne" router>
      <el-sub-menu index="testNav">
        <template #title>
          <el-icon><location /></el-icon>
          <span>二级菜单</span>
        </template>
        <el-menu-item-group title="分组">
          <el-menu-item index="/testNav/menuOne">页面1</el-menu-item>
          <el-menu-item index="/testNav/menuTwo">页面2</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar {
  min-width: 220px;
  max-width: 280px;
  resize: horizontal;
  overflow: auto;
}
</style>
