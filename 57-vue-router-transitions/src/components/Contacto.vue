<template>
  <section>
      <h2>Donde encontrarme</h2>
      <p>c/. Lo que sea, Valencia</p>
      <!-- <h5>{{ $route.params.newsletter }}</h5> -->
      <h5>{{ newsletter }}</h5>
      <!-- <template v-if="$route.params.newsletter === 'true'"> -->
      <!-- <template v-if="newsletter === 'true'"> -->
      <template v-if="newsletter">          
        <form action="">
            <h3>Newsletter</h3>
            <label for="correoe">Correo-e</label>
            <input type="email" placeholder="Tu correo-e" id="correoe">
        </form>
      </template>
  </section>
</template>

<script>
    export default {
        props: ['newsletter']
    }
</script>