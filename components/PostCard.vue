<template>
    <div class="post-container">
        <NuxtLink :to="`/post/${post.id}`" class="block p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="text-gray-600 mt-2">{{ post.body.substring(0, 100) }}...</p>
          <p class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
            View More About Post →
          </p>
        </NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object
    }
  }
  </script>