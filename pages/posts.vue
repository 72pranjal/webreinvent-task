<template>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  import PostCard from '~/components/PostCard.vue'
  
  export default {
    components: { PostCard },
    computed: {
      ...mapState('posts', ['posts'])
    },
    async mounted() {
      await this.fetchPosts()
    },
    methods: {
      ...mapActions('posts', ['fetchPosts'])
    }
  }
  </script>