<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-gray-100">
    <div class="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
      <NuxtLink
        to="/posts"
        class="text-blue-500 hover:underline flex items-center mb-6"
      >
        <span class="mr-2">←</span> Back to Posts
      </NuxtLink>

      <div v-if="postData && !isPostHave">
        <h1 class="text-4xl font-extrabold text-gray-900">
          {{ postData.title }}
        </h1>

        <p class="text-lg text-gray-700 mt-4 leading-relaxed">
          {{ postData.body }}
        </p>

        <div class="mt-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Tags</h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in postData.tags"
              :key="index"
              class="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <div class="mt-6 flex items-center gap-6 border-t pt-4">
          <div class="flex items-center gap-2 text-green-600 font-semibold">
            👍 Likes:
            <span class="text-gray-900">{{ postData.reactions.likes }}</span>
          </div>
          <div class="flex items-center gap-2 text-red-600 font-semibold">
            👎 Dislikes:
            <span class="text-gray-900">{{ postData.reactions.dislikes }}</span>
          </div>
        </div>

        <div class="mt-4 text-gray-600">
          👀
          <span class="font-semibold text-gray-900">{{ postData.views }}</span>
          views
        </div>
      </div>
      <div
        v-if="isPostHave"
        class="mt-6 text-center text-red-500 text-lg font-semibold"
      >
        ❌ Post not found.
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      productId: this.$route.params.id,
      postData: null,
      isPostHave: false,
    };
  },
  fetch() {
    axios
      .get(`https://dummyjson.com/posts/${this.productId}`)
      .then((response) => {
        if (response.statusText === "OK") {
          this.isPostHave = false;
          this.postData = response.data;
        } else {
          this.isPostHave = true;
        }
      })
      .catch((error) => {
        console.log("error", error);
        this.isPostHave = true;
      });
  },
};
</script>
