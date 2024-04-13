<template>
  <div class="testUse">
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
        <el-button @click="resetForm" icon="Refresh">重置</el-button>
      </el-form-item>
    </el-form>
    <el-divider />
    <div>
      这里是一些svg图标：
      <el-link
        :underline="false"
        v-for="(item, index) in svgList"
        :key="index"
        v-copyText="`<svg-icon icon-class='${item}'></svg-icon>`"
        ><svg-icon :icon-class="item"></svg-icon
      ></el-link>
    </div>
    <div>{{ array }}</div>
  </div>
</template>

<script setup name="TestUse" lang="ts">
import { reverse } from 'lodash-es'
import type { FormInstance, FormRules } from 'element-plus'
console.log('testUse');

interface RuleForm {
  address: string
  time: string
}
let array = ref([1, 2, 3])
onMounted(() => {
  reverse(array.value)
})

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
// 图标区域
const svgList = ref(['search', 'edit', '404'])
</script>

<style lang="scss" scoped>
.testUse {
  margin: 10px;
  padding: 20px;
  background-color: var(--el-bg-color);
}
</style>
