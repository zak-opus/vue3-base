<template>
  <div class="menu-one">
    <el-upload
      ref="uploadRef"
      drag
      :multiple="false"
      :show-file-list="false"
      :auto-upload="false"
      v-model:file-list="fileList"
      :on-change="handleChange"
    >
      <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
      <div class="el-upload__text">拖拽文件 或 <em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
    <el-divider content-position="left">文件列表</el-divider>
    <el-table :data="fileList">
      <el-table-column type="index" width="55" label="序号" />
      <el-table-column prop="name" label="文件名" />
      <el-table-column prop="size" label="文件大小" :formatter="formatSize" />
      <el-table-column label="修改日期">
        <template #default="{ row }">
          {{ $parseTime(row.raw.lastModifiedDate) }}
        </template>
      </el-table-column>

      <el-table-column prop="status" label="状态" :formatter="formatStatus" />
      <el-table-column
        prop="percentage"
        label="上传进度"
        :formatter="formatPercentage"
      />
      <el-table-column prop="operate" label="操作">
        <template #default="{ row }">
          <el-button type="primary" link @click="toUpload(row)">上传</el-button>
          <el-button type="primary" link @click="toStop(row)">暂停</el-button>
          <el-button type="danger" link @click="toDel(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { UploadFile } from 'element-plus'

// const { proxy } = getCurrentInstance()!
// 文件数据
const uploadRef = ref()
const fileList = ref([])
// 文件上传
const handleChange = (uploadFile: UploadFile) => {
  console.log(uploadFile)
}
// 表格数据
// 文件大小格式化
const formatSize = (row: UploadFile) => {
  return row.size ? (row.size / 1024 / 1024).toFixed(2) + 'MB' : '0 MB'
}
// 文件状态格式化
const statusMap = {
  ready: '准备',
  uploading: '上传中',
  success: '上传成功',
  fail: '上传失败',
}
const formatStatus = (row: UploadFile) => {
  return statusMap[row.status]
}
// 文件上传进度格式化
const formatPercentage = (row: UploadFile) => {
  return row.percentage ? row.percentage.toFixed(2) + '%' : '0%'
}
// 文件上传
const toUpload = (row: UploadFile) => {
  console.log(row)
}
// 文件暂停
const toStop = (row: UploadFile) => {
  console.log(row)
}
// 文件删除
const toDel = (row: UploadFile) => {
  console.log(row)
}
</script>

<style lang="scss" scoped>
.menu-one {
  height: 1000px;
}
</style>
