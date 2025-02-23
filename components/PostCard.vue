<template>
  <NuxtLink
    :to="`/post/${post.id}`"
    class="block p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
  >
    <h2 class="text-2xl font-bold text-gray-900 leading-tight">
      {{ post.title }}
    </h2>
    <p class="text-gray-600 mt-3">{{ post.body.substring(0, 120) }}...</p>

    <div class="mt-5 flex items-center justify-between">
      <p
        class="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-all duration-200"
      >
        Read More →
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>
