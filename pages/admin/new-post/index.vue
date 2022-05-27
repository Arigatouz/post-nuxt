<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @onSubmit="submitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import axios from 'axios'
export default {
  name: 'new-post',
  component: {
    AdminPostForm,
  },
  components: {
    AdminPostForm,
  },
  methods: {
    submitted(payload) {
      this.$store
        .dispatch('addPost', payload)
        .then((res) => this.$router.push('/admin'))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
