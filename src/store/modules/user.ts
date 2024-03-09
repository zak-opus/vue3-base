const useUserStore = defineStore('user', {
  state: () => ({
    name: 'zak',
    age: 20,
  }),
  actions: {
    setAge(age: number) {
      this.age = age
    },
  },
})

export default useUserStore
