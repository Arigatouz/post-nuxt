<script>
import PostList from '@/components/posts/PostList.vue'
import { mapState } from 'vuex'
export default {
  name: 'blog',
  data() {
    return {}
  },
  components: {
    PostList,
  },
  computed: {
    ...mapState(['loadedPosts']),
  },
}
</script>
<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
