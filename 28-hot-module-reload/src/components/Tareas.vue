<template>
  <div>
      <h2>Las Tareas por hacer</h2>
      <ul>
          <li v-for="tarea in tareasPendientes" :key="tarea.nombre">
              <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
          </li>
      </ul>
      <h2>Tareas finalizadas</h2>
      <li v-for="tarea in tareasFinalizadas" :key="tarea.nombre">
          <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
      </li>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                tareas: [
                    {nombre: 'Aprender Vje.js', completado: false},
                    {nombre: 'Grabar el módulo de Vuex', completado: false},
                    {nombre: 'Responder comentarios (de una vez)', completado: false},
                    {nombre: 'Salir a correr para despejarme', completado: false},
                    {nombre: 'Diseñar el módulo de firebase', completado: false},
                    {nombre: 'Diseñar el ejercicio final', completado: false},
                ],
                finalizadas: []
            }
        },
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;
            }
        },
        computed: {
            tareasPendientes() {
                return this.tareas.filter((tarea) => !tarea.completado);
            },
            tareasFinalizadas() {
                return this.tareas.filter((tarea) => tarea.completado);
            }
        }
    }    
</script>

<style>
    li a {
        color: darkgoldenrod;
        font-weight: bold;
        text-decoration: none;
    }
</style>
