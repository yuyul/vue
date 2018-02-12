<template>
  <div>
    <elemento tipo="section">Hola mundo</elemento>
    <elemento tipo="header">Hola header</elemento>
    <elemento tipo="footer">Hola footer</elemento>
    <elemento tipo="aside">Hola aside</elemento>
  </div>
</template>

<script>
  import elemento from './components/Elemento.vue';
  export default {
    components: {elemento}
  }
</script>

<style>

</style>
