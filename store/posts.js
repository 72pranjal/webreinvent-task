export const state = () => ({
    posts: [],
    lastFetched: null
  })
  
  export const mutations = {
    SET_POSTS(state, posts) {
      state.posts = posts
      state.lastFetched = Date.now()
    }
  }
  
  export const actions = {
    async fetchPosts({ state, commit }) {
      if (state.lastFetched && Date.now() - state.lastFetched < 15 * 60 * 1000) {
        return
      }
  
      try {
        const { data } = await this.$axios.get('https://dummyjson.com/posts')
        commit('SET_POSTS', data.posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }