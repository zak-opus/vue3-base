## 加载中插件的使用

```ts
const { proxy } = getCurrentInstance()!
onMounted(() => {
  proxy?.$MyLoading.show()
})
```

