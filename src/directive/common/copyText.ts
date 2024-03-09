import { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('click', () => {
      const value = binding.value
      if (!value) return
      // 创建一个临时的textarea元素
      const textarea = document.createElement('textarea')
      textarea.value = value
      document.body.appendChild(textarea)
      textarea.select()
      // 执行复制操作
      document.execCommand('copy')
      // 复制成功后，移除临时的textarea元素
      document.body.removeChild(textarea)
      // 提示复制成功
      ElMessage.success('复制成功')
    })
  }
}
// export default {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     el.addEventListener('click', () => {
//       console.log(binding.value);

//       const textToCopy =
//         binding.value instanceof Element
//           ? binding.value.textContent
//           : binding.value

//       // 此方法需要在安全上下文（如HTTPS或localhost）中运行
//       navigator.clipboard.writeText(textToCopy).then(
//         () => console.log('Text copied to clipboard'),
//         err => console.error('Failed to copy text: ', err)
//       )
//     })
//   },
// }
