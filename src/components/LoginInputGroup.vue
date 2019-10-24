<template>
   <div class="form-group">
        <input type="email" class="form-control input-group-lg first-input-register effect-8 focus-border" placeholder="Correo Electronico">
        <input type="password" class="form-control input-group-lg last-input-register effect-8 focus-border" placeholder="Contraseña">
        <a href="#" class="form-text">¿Olvidaste tu contraseña?</a>
    </div>
</template>

<script>

</script>

<style scoped>

input {
    height: 50px!important;
}
input.form-control:hover {
    border: 3px solid #ffff00;
    color: black;
}

.form-control {
    border: none;
    color: black;
    border-bottom: 1px solid black;
    font-size: 1.1em;
}

.last-input-register {
    border-radius: 0px 0px 10px 10px;
}
</style>
