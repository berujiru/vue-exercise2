<template>
  <div class="container">
    <h2>Post</h2>
    <a-list item-layout="horizontal" :data-source="posts">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.body">
            <template #title>
              <a href="https://www.antdv.com/"></a>
              <router-link
                :to="{ name: 'postdetail', params: { postID: item.id } }"
                >{{ item.title }}
              </router-link>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import PostForm from "@/types/PostForm";
export default defineComponent({
  setup() {
    const posts = ref<PostForm[]>([]);
    const getPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => (posts.value = response.data));
    };
    getPosts();
    onMounted(() => {
      getPosts;
    });
    return { posts };
  },
});
</script>
