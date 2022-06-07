<template>
  <div style="background: #ececec; padding: 30px">
    <GoBack />
    <a-card :title="posts?.title" :bordered="false">
      <p>{{ posts?.body }}</p>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import PostForm from "@/types/PostForm";
import { number } from "vue-types";
import GoBack from "@/components/GoBack.vue";
export default defineComponent({
  components: { GoBack },
  props: {
    postID: {
      type: number,
      require: true,
      default: 0,
    },
  },
  setup(props) {
    const posts = ref<PostForm>();
    const getPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + props.postID)
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
