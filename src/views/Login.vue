<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <form-input
        id="email"
        name="email"
        placeholder="fulanito@detal.com"
        aria-described-by="email for login"
        label="Email"
        type="email"
        @input="onChangeValue"
        @change="onChangeValue"
        required
      />
      <form-input
        id="password"
        name="password"
        placeholder="**********"
        aria-described-by="password for login"
        label="Password"
        type="password"
        @input="onChangeValue"
        @change="onChangeValue"
        required
      />
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="loading"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
// import FormInput from '../components/FormInput'

// import api from '../lib/api'

// export default {
//   name: 'Login',
//   components: {
//     FormInput
//   },
//   data () {
//     return {
//       email: '',
//       password: '',
//       loading: false
//     }
//   },
//   methods: {
//     onChangeValue (event) {
//       const { name, value } = event.target

//       this[name] = value
//     },
//     async onSubmit() {
//       this.loading = true

//       const { token } = await api.login(this.email, this.password)

//       sessionStorage.setItem('token', token)

//       this.loading = false

//       this.$router.push('/new-post')
//     }
//   },
//   beforeRouteEnter (to, from, next) {
//     const token = sessionStorage.getItem('token')

//     if (!token) next()
//     else next('/new-post')
//   }
// }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 100%;
}
</style>
