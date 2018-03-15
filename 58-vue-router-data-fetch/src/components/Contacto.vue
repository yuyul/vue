<template>
  <section>
      <pre>{{ numero }}</pre>
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
        props: ['newsletter'],
        data() {
            return {
                numero: null,
            }
        },
        beforeRouteEnter: (to, from, next) => {
            console.info('Antes de entrar');
            setTimeout(() => {
                next(vm => {
                    vm.numero = Math.floor(Math.random() * 1000);
                });
            }, 2000);
        },
    }
</script>