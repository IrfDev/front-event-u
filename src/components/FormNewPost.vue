<template>
  <form @submit.prevent="onSubmit">
    <form-input
      id="title"
      name="title"
      placeholder="El super post de la muerte"
      aria-described-by="title for the post"
      label="Titulo"
      @input="onChangeValue"
      @change="onChangeValue"
      required
    />

    <form-input
      id="readTime"
      name="readTime"
      placeholder="666min"
      aria-described-by="read time"
      label="Tiempo de lectura"
      type="number"
      @input="onChangeValue"
      @change="onChangeValue"
      required
    />

    <form-input
      id="description"
      name="description"
      placeholder="Este es un post bien perron"
      aria-described-by="post description"
      label="Descripción"
      @input="onChangeValue"
      @change="onChangeValue"
      required
    />

    <form-input
      id="image"
      name="image"
      placeholder="https://inserte-meme-aqui.com"
      aria-described-by="image input"
      label="Imagén"
      @input="onChangeValue"
      @change="onChangeValue"
      required
    />

    <img
      v-if="image"
      :src="image"
      class="card-img-top"
      alt="meme-preview"
    >

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="loading"
    >
      <span
        v-if="loading"
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />

      Save Post
    </button>
  </form>
</template>

<script>
import FormInput from './FormInput'

export default {
  name: 'FormNewPost',
  components: {
    FormInput
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: '',
      readTime: '',
      description: '',
      image: ''
    }
  },
  methods: {
    onChangeValue (event) {
      const { name, value } = event.target

      this[name] = value
    },
    onSubmit () {
      this.$emit('submit', {
        title: this.title,
        readTime: this.readTime,
        description: this.description,
        image: this.image
      })
    }
  }
}
</script>

<style scoped>
.btn.btn-primary {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
}
</style>
