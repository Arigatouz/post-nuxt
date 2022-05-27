<script>
import PostPreview from '@/components/posts/PostPreview.vue'
export default {
  name: 'post-list',
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    PostPreview,
  },
}
</script>
<template>
  <section class="posts-list">
    <!-- preview the posts -->
    <PostPreview
      class="post-preview"
      v-for="post in posts"
      :key="post.id"
      :is-admin="isAdmin"
      :id="post.id"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :previewText="post.previewText"
    />
  </section>
</template>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  margin-bottom: 20px;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
</style>
