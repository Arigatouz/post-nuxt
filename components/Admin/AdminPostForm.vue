<template>
  <form @submit.prevent="onSave">
    <AppControlInput control-type="input" v-model="editedPost.author">
      <template #label>Author Name</template>
    </AppControlInput>
    <AppControlInput controlType="email" v-model="editedPost.email">
      <template #label>E-mail Address</template>
    </AppControlInput>

    <AppControlInput control-type="input" v-model="editedPost.title">
      <template #label>Title</template>
    </AppControlInput>

    <AppControlInput control-type="input" v-model="editedPost.thumbnail">
      <template #label>Thumbnail Image Link</template>
    </AppControlInput>

    <AppControlInput control-type="textarea" v-model="editedPost.content">
      <template #label>Content</template>
    </AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.previewText">
      <template #label>preview Text</template>
    </AppControlInput>

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue'
import AppButton from '@/components/UI/AppButton.vue'
export default {
  name: 'post-form',
  $emit: ['onSubmit'],
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
            email: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('onSubmit', this.editedPost)
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
  components: {
    AppControlInput,
    AppButton,
  },
}
</script>

<style scoped></style>
