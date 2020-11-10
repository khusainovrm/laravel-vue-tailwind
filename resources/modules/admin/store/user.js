export default {
    namespaced: true,

    state: () => ({
        user: null,
     }),

    mutations: {
        SET_USER: (state, user) => state.user = user
    },

    actions: {
        fetch_user({commit}){
            const user = {name: "SuperUser"}
            commit("SET_USER", user)
        }
     },

    getters: {
        getUser: (state) => state.user
     }
  }
