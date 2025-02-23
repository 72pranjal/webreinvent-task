export const state = () => ({
    posts: [],
    lastFetch: null
  })
  
  export const mutations = {
    SET_POSTS(state, posts) {
      state.posts = posts
      state.lastFetch = new Date().getTime();
      localStorage.setItem('cachedPosts', JSON.stringify({ posts, lastFetch: state.lastFetch }));
    }
  }
  
  export const actions = {
    async fetchPosts({ state, commit }) {

      const now = new Date().getTime();
      const cachedData = JSON.parse(localStorage.getItem('cachedPosts'));

      if (cachedData && now - cachedData.lastFetch < 900000) {
        commit('SET_POSTS', cachedData.posts);
        return;
      }
  
      try {
        const { data } = await this.$axios.get('https://dummyjson.com/posts')
        commit('SET_POSTS', data.posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }