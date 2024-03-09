interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  readonly VITE_APP_BASE_API: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'element-plus/dist/locale/zh-cn.mjs';