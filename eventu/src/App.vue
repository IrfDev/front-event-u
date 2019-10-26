<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './views/index'

export default {
  name: 'App',
  components: {
    index
  }
}

// ({
//   el:'#app',
//   data:{
//     colorScheme:"dark"
//   }
// })
</script>

<style>
#app {
  font-family: 'Futura', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  /* margin-top: 60px; */
  background-color:#f0f0f0;
}
img{
  max-width: 250px;
}
</style>
