import { defineStore } from 'pinia'

// 將其命名為useXXXStore，就像vue3的composable一樣
const useStore = defineStore("main",{
  state : () => {
    return {
      userData:'我開心心',
      count:0
    } 
  },
  actions: {
    setUser(userData) {
      this.userData = userData;
    },
    resetUser() {
      this.userData = initState.userData;
    },
    addOne(data) {
      console.log('pinia裏面')
      console.log(data)
      this.count++; // 就像使用vue的data一樣
    },
    async fetchAndSetUser() {
      // const user = await fetchUser();
      const user = {
        "name":"皮卡丘"
      }
      this.userData = user;
      
    },
  },
  // getters: {
  //   getUserName: state.userData?.name,
  // },
});

export default useStore;

//教學如以下
//https://www.penguin-cho.com/posts/nuxt3-pinia
