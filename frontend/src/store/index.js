import { createStore } from 'vuex'



export default createStore({
  state: {
    connected: false,
    token: ''
  },
  mutations: {
    CHANGE_CONNECTED(state, val){
      state.connected = val
    },
    ADD_TOKEN(state, val){
      state.token = val
    }
  },
  actions: {
    loginAccount:({commit},userInfo) =>{
      commit;
      console.log(userInfo);
      commit('CHANGE_CONNECTED', userInfo.connected);
      commit('ADD_TOKEN', userInfo.token);
    },
    disconnect:({commit}) =>{
      commit('CHANGE_CONNECTED',false)
      commit('ADD_TOKEN', '')
    }
  },
  modules: {
  }
})
