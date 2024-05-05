import { ComponentCustomProperties } from 'vue'
// 添加全局挂载属性
type Time = string | number | Date
type Pattern = string | undefined
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $MyLoading: {
      show: () => void
      hide: () => void
    }
    $parseTime: (time: Time, pattern?: Pattern) => string | null
  }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties
