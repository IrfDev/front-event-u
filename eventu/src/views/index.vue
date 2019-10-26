<template>
 <div id="index">
<div class="container">
        <form>
          <TitleInitial/>
            <FormGroup />
            <button type="submit" class="btn btn-yellow form-control ">
                Iniciar Sesión</button>
            <a href="createAccount.html" class="form-text">¿Aun no creas una cuenta?</a>
        </form>
    </div>
    </div>
</template>

<script>
import Logo from '../components/LogoImage'
import FormGroup from '../components/FormGroup'
import Background from '../components/Background'
import TitleInitial from '../components/TitleInitial'

export default {
  name: 'Index',
  components: {
    Logo,
    FormGroup,
    Background,
    TitleInitial
  }

}
</script>

<style scoped>
h1{
  font-size:25px;
  color:#fff;

}
.container {
    background: linear-gradient( rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.16)), url(../assets/bg-login.png);
    background-size: cover;
    height: 800px!important;
    background-attachment: fixed;
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
}

</style>
