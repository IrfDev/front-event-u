<template>

 <div class="container">
        <form>
            <div class="title-login">
                <img 
                src""
                 alt="logo" 
                class="logo">
                <h1>Inicia Sesión</h1>
                <h3>Provedores y Organizadores</h3>
            </div>
    <LoginInputGroup/>
            <button type="submit" class="btn btn-yellow form-control ">
                Iniciar Sesión</button>
            <a href="createAccount.html" class="form-text">¿Aun no creas una cuenta?</a>
        </form>
    </div>
    <div 
id="background" 
className="img-responsive"/>

</template>

<script>
// import LoginInputGroup from '../components/LoginInputGroup'
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
//       this.loading = true;

//       const { token } = await api.login(this.email, this.password)

//       sessionStorage.setItem('token', token)

//       this.loading = false;

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

<style >
* {
    font-family: futura;
}

/* #background {
    background: linear-gradient( rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.16)), url(../public/images/bg-login.jpg);
    background-size: cover;
    height: 800px!important;
    background-attachment: fixed;
} */

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
}

h1 {
    font-size: 3.9rem;
}

h3 {
    font-size: 1.2em;
    margin-bottom: 1em;
}


/*Input forms*/

.first-input-register {
    border-radius: 10px 10px 0px 0px;
}

input.form-control:hover {
    border: 3px solid #ffff00;
    color: black;
}

.last-input-register {
    border-radius: 0px 0px 10px 10px;
}

.form-control {
    border: none;
    color: black;
    border-bottom: 1px solid black;
    font-size: 1.1em;
}

.form-text {
    font-size: 1em;
}


/* Buttons and fonts */

.btn-yellow {
    background: #ffff00;
    box-shadow: 2px 3px 6px 0px #000000ab;
    border-radius: 5px;
    font-size: 23px!important;
    font-weight: 100px!important;
}

input {
    height: 50px!important;
}

a {
    color: #fff;
    font-weight: 100;
    font-size: 1em;
    margin-bottom: -2%;
}


/* end Buttons and fonts */


/* Login */

.logo {
    width: 200px;
}

.title-login {
    text-align: center;
}

.container {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 5%;
}

.form-text:hover {
    color: #fff;
}


/* end Login */


/* MediaQuery for Login */

@media (max-width: 700px) {
    .container {
        width: 100%;
    }
    /* #background {
        height: 900px!important;
        background: 
        linear-gradient( rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.12)), url(../../public/images/);
        background-size: 400%;
        background-attachment: fixed;
        background-position-y: bottom;
        background-position-x: center;
    } */
    h1 {
        font-size: 3.8rem;
    }
    .form-text {
        font-size: 1em;
    }
}
/* End MediaQuery for Login */
</style>
