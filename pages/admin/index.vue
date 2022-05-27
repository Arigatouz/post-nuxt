<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
    </section>
    <PostList isAdmin :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { mapState } from 'vuex'
export default {
  name: 'Admin-page',
  components: {
    PostList,
    AppButton,
  },
  computed: {
    // loadedPost() {
    //   return this.$store.getters.loadedPost
    // },
    // ...mapGetters(['loadedPost']),
    ...mapState(['loadedPosts']),
  },
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
  font-size: 20px;
}
</style>
