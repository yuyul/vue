<template>
  <section>
    <h1>Bienvenid@ a mi super App</h1>
    <button @click="cambiar">Cambiar Auth</button>
    <hr>
    <transition name="aparecer" appear>
      <router-view></router-view>
    </transition>
  </section>
  
</template>

<script>
import {mapMutations} from 'Vuex';
export default {
  methods: mapMutations(['cambiar']),
}
</script>

<style>
/* TRANSITION */

        .aparecer-enter {
            opacity: 0;
        }

        .aparecer-enter-active {
            transition: opacity 1s;
        }

        .aparecer-leave-to {
            opacity: 0;
        }

        .aparecer-leave-active {
            transition: opacity 1s;
        }

        /* ANIMATIONS */

        .bounce-enter-active {
            animation: bounce-in .5s;
        }

        .bounce-leave-active {
            animation: bounce-in .5s reverse;
        }

        @keyframes bounce-in {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
</style>
