<template>
 <div class="index">
   <logo />
<h1> Éste es el inicio de algo gigante </h1>
 </div>
</template>

<script>
import Logo from '../components/LogoImage'

export default {
  name: 'Index',
  components: {
    Logo
  }
}
</script>

<style scoped>
h1{
  font-size:25px;
  color:#333333;

}

</style>
