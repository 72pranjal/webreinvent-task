<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-gray-100">
    <div class="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
      <NuxtLink
        to="/posts"
        class="text-blue-500 hover:underline flex items-center mb-6"
      >
         Go to Posts Page →
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
