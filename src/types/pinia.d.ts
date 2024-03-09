import 'pinia'
declare module 'pinia' {
  export interface PiniaCustomProperties {
    // 通过使用 setter，我们可以同时允许字符串和引用
    // set secret(value: string | Ref<string>)
    // get secret(): string
    // 你也可以定义更简单的值
    secret: string
  }
}