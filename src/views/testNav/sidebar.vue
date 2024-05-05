<template>
  <div class="sidebar">
    <el-menu default-active="/testNav/menuOne" router>
      <el-sub-menu index="testNav">
        <template #title>
          <el-icon><location /></el-icon>
          <span>二级菜单</span>
        </template>
        <el-menu-item-group title="分组">
          <el-menu-item index="/testNav/menuOne">文件上传</el-menu-item>
          <el-menu-item index="/testNav/menuTwo">svg图标</el-menu-item>
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
  .el-menu {
    height: 100%;
  }
}
</style>
