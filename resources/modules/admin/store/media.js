export default {
    namespaced: true,

    state: () => ({
        media: null,
     }),

    mutations: {
        SET_MEDIA: (state, media) => state.media = media
    },

    actions: {
        fetch_media({commit}){
            const media = {media: "SuperMedia"}
            commit("SET_MEDIA", media)
        }
     },

    getters: {
        getMedia: (state) => state.media
     }
  }
