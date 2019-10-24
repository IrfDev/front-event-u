<template>
  <div class="card">
    <img
      :src="src"
      :alt="alt"
      class="card-img-top"
    >
    <div class="card-body">
      <h5 class="card-title">
        {{ title }}
      </h5>
      <p class="card-text">
        {{ text }}
      </p>
      <router-link
        class="btn btn-primary"
        :to="buttonTo"
      >
        {{ buttonText }}
      </router-link>
    </div>
  </div>
</template>

<script>
const stringDefault = {
  type: String,
  required: true
}

export default {
  name: 'PostCard',
  props: {
    src: stringDefault,
    alt: stringDefault,
    title: stringDefault,
    text: stringDefault,
    buttonTo: stringDefault,
    buttonText: stringDefault
  }
}
</script>

<style scoped>
</style>
