import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";



export default createStore({
  state: {
    imageUrl: 'http://127.0.0.1:3000/images/avatar.png',
    connected: false,
    token: '',
    userId: '',
    pseudo: '',
    email: '',
  },
  plugins: [createPersistedState()]
    ,
  mutations: {
    CHANGE_CONNECTED(state, val){
      state.connected = val
    },
    ADD_TOKEN(state, val){
      state.token = val
    },
    ADD_INFO(state, val){
      state.userId = val.userId,
      state.pseudo = val.pseudo,
      state.email = val.email,
      state.imageUrl = val.imageUrl
    }
  },
  actions: {
    loginAccount:({commit},userInfo) =>{
      commit;
      console.log('User Info: ',userInfo)
      commit('CHANGE_CONNECTED', userInfo.connected)
      commit('ADD_TOKEN', userInfo.token)
      commit('ADD_INFO', userInfo)
    },
    disconnect:({commit}) =>{
      commit('CHANGE_CONNECTED',false)
      commit('ADD_TOKEN', '')
    },
    updateProfile:({commit},userInfo) =>{
      commit('ADD_INFO', userInfo)
    }
  },
  modules: {
  }
})
