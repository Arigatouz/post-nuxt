<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{ loadedPost.title || 'bekabo' }} ==> (ID from the route :
        {{ this.$route.params.id }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate.slice(0, 10) || 'bekabo' }}
        </div>
        <div class="post-detail">
          written by {{ loadedPost.author || 'bekabo' }}
        </div>
      </div>
      <p class="post-content">The post {{ loadedPost.content || 'bekabo' }}</p>
    </section>
    <section class="post-feedback">
      <p>
        let me know what do u think about the post ,send a mail to
        <a :href="`mailto:${loadedPost.email || 'bekabo'}`">{{
          loadedPost.email || 'bekabo'
        }}</a>
      </p>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'post-page-id',
  computed: {},
  asyncData(context) {
    return axios
      .get(
        `https://blog-nuxt-a4aa0-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`
      )
      .then((res) => {
        console.log(res.data)
        return {
          loadedPost: res.data,
        }
      })
      .catch((err) => {
        context.error(err)
      })
  },
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
