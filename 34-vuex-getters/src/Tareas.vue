<template>
    <main>
        <tareas-restantes></tareas-restantes>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.nombre">{{ tarea.nombre }}</li>
        </ul>
    </main>
</template>

<script>
import {mapState} from 'vuex';
import TareasRestantes from './components/TareasRestantes';
export default {
    components: {TareasRestantes},
  /*  
  computed: {
      tareas() {
          return this.$store.state.tareas;
      }
  }
  */
 computed:mapState(['tareas'])
}
</script>

<style>

</style>
