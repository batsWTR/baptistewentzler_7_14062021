import { createStore } from 'vuex'

const axios = require('axios').default;

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    createAccount:({commit}, userInfo) =>{
      commit;
      console.log(userInfo);
      axios.post("http://127.0.0.1:3000/api/auth/signup",{
        email:'bw@fgfg.com',
        pseudo: 'mike',
        password:'45654654654'
      })
      .then(function (response){
        console.log(response)
      })
      .catch(function (error){
        console.log(error)
      })
    },
    loginAccount:({commit},userInfo) =>{
      commit;
      console.log(userInfo);
    }
  },
  modules: {
  }
})
