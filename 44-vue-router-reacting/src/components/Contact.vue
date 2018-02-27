<template>
  <section>
    <h2>Contact</h2>
    <button @click="volverHome">Volver a home</button>
  </section>
</template>

<script>
  export default {
    created() {
      setTimeout(() => this.$router.push('/'), 2000);
    },
    methods: {
      volverHome() {
        this.$router.push('/', () => console.log('Ruta cambiada')); // Home
      }
    }
  }
</script> 