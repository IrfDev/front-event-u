<template>
  <div className="new-post">
    <div class="container">
      <form-new-post
        :loading="loading"
        @submit="savePost"
      />
    </div>
  </div>
</template>

<script>
// import FormNewPost from '../components/FormNewPost'

// import api from '../lib/api'

// export default {
//   name: 'NewPost',
//   components: {
//     FormNewPost
//   },
//   data () {
//     return {
//       author: '',
//       loading: false
//     }
//   },
//   methods: {
//     async getUser() {
//       const payload = await api.validateSession()

//       sessionStorage.setItem('token', payload.token)

//       this.author = payload.name
//     },
//     async savePost(post) {
//       this.loading = true;

//       await api.createPost({
//         ...post,
//         author: this.author
//       })

//       this.loading = false;

//       this.$router.push('/')
//     }
//   },
//   beforeRouteEnter (to, from, next) {
//     const token = sessionStorage.getItem('token')

//     if (token) next()
//     else next('/login')
//   },
//   mounted() {
//     this.getUser()
//   },
// }
</script>

<style scoped>
.container {
  padding: 2rem 0;
}
</style>
