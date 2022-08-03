import { defineStore, _ActionsTree, _GettersTree } from "pinia";

// 將其命名為useXXXStore，就像vue3的composable一樣
const useStore = defineStore("main", {
  state : () => {
    userData:null
},
  actions: {
    setUser(userData) {
        this.userData = userData;
    },
    resetUser() {
      this.userData = initState.userData;
    },
    async fetchAndSetUser() {
      // const user = await fetchUser();
      const user = {
        "name":"皮卡丘"
      }
      this.userData = user;
      
    },
  },
  getters: {
    getUserName: state.userData?.name,
  },
});

export default useStore;
