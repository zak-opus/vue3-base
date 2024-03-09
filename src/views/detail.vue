<template>
  <div class="detail">
    <el-form ref="formRef" :model="formData" :rules="rules" inline>
      <el-form-item label="地址" prop="address">
        <el-input v-model="formData.address" />
      </el-form-item>
      <el-form-item label="日期" prop="time">
        <el-date-picker
          v-model="formData.time"
          type="date"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm"
          ><svg-icon icon-class="search"></svg-icon>查询</el-button
        >
        <el-button @click="resetForm" icon="Refresh">Reset</el-button>
      </el-form-item>
    </el-form>
    <div><svg-icon icon-class="code"></svg-icon>详情页面</div>
    <div>点击复制，将复制该文本：{{ str }}</div>
    <el-link :underline="false" icon="DocumentCopy" v-copyText="str"
      >复制</el-link
    >
    <div></div>
  </div>
</template>

<script setup name="Detail" lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
  address: string
  time: string
}
// 表单数据
const formRef = ref<FormInstance>()
const formData = ref<RuleForm>({
  address: '',
  time: '',
})
const rules = reactive<FormRules<RuleForm>>({
  address: [
    { required: true, message: '请输入地址', trigger: 'blur' },
    { min: 1, max: 50, message: '请输入 1-50 字内容', trigger: 'blur' },
  ],
  time: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'change',
    },
  ],
})
function submitForm() {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
function resetForm() {
  formRef.value?.resetFields()
}
const str = ref('adsad')
</script>

<style lang="scss" scoped>
.detail {
  margin: 10px;
  padding: 20px;
  background-color: var(--el-bg-color);
}
</style>
