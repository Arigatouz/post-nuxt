<script>
export default {
  name: 'post-preview',
  data() {
    return {
      imageLink:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Y2U33GE7LdQ4mTz2Vhd2RwHaFj%26pid%3DApi&f=1',
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
    },
  },
}
</script>
<template>
  <div>
    <div>
      <nuxt-link :to="postLink">
        <article>
          <div
            class="post-thumbnail"
            :style="{
              backgroundImage: `url(${this.thumbnail || this.imageLink})`,
            }"
          ></div>
          <div class="post-content">
            <h1>{{ this.title || 'hello' }}</h1>
            <p>{{ this.previewText || 'hello' }}</p>
          </div>
        </article>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
