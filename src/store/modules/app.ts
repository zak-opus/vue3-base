const useAppStore = defineStore('app', {
  state: () => ({
    device: 'desktop',
    size: 'small',
  }),
  actions: {
    setSize(size: string) {
      this.size = size
    },
  },
})

export default useAppStore
