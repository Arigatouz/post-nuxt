import axios from 'axios'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, addedPost) {
        state.loadedPosts = addedPost
      },
      addPost: (state, payload) => {
        state.loadedPosts.push(payload)
      },
      updatePost: (state, editedPost) => {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
        console.log(editedPost.id)
      },
    },
    actions: {
      nuxtServerInit(vueContext, context) {
        return axios
          .get(
            'https://blog-nuxt-a4aa0-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
          )
          .then((response) => {
            const postArray = []
            for (let key in response.data) {
              postArray.push({ ...response.data[key], id: key })
            }
            vueContext.commit('setPosts', postArray)
          })
          .catch((err) => context.error(err))
      },
      addPost({ commit }, payload) {
        const addPostAndDate = {
          ...payload,
          updatedDate: new Date(),
        }
        return axios
          .post(
            'https://blog-nuxt-a4aa0-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            addPostAndDate
          )
          .then((response) =>
            commit('addPost', { ...addPostAndDate, id: response.data.name })
          )
          .catch((err) => console.log(err))
      },
      updatePost({ commit }, editedPost) {
        return axios
          .put(
            `https://blog-nuxt-a4aa0-default-rtdb.europe-west1.firebasedatabase.app/posts/${editedPost.id}.json`,
            editedPost
          )
          .then((res) => commit('updatePost', editedPost))
          .catch((err) => console.log(err))
      },

      setPosts({ commit }, payload) {
        commit('setPosts', payload)
      },
    },
    getters: {
      loadedPosts: (state) => state.loadedPosts,
    },
  })
}

export default createStore
