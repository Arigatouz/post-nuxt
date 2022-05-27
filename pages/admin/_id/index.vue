<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @onSubmit="updatePost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import axios from 'axios'

export default {
  name: 'admin-page-id',
  // testing gethub
  components: {
    AdminPostForm,
  },
  created() {},
  computed: {},

  asyncData(context) {
    return axios
      .get(
        `https://blog-nuxt-a4aa0-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.id },
        }
      })
      .catch((err) => {
        context.error(err)
      })
  },
  methods: {
    updatePost(payload) {
      this.$store
        .dispatch('updatePost', payload)
        .then((res) => this.$router.push('/admin'))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
