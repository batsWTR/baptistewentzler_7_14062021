import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    createAccount:({commit}, userInfo) =>{
      commit;
      console.log(userInfo);
    },
    loginAccount:({commit},userInfo) =>{
      commit;
      console.log(userInfo);
    }
  },
  modules: {
  }
})
