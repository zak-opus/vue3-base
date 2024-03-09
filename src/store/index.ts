import { PiniaPluginContext } from 'pinia'

const store = createPinia()
function SecretPiniaPlugin(context: PiniaPluginContext) {
  console.log(context);
  return { secret: 'the cake is a lie' }
}
// 将插件提供给 pinia
store.use(SecretPiniaPlugin)
export default store
