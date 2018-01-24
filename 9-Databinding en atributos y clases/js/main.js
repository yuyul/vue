const vm = new Vue({
    el: 'main',
    data: {
        tareas: [
            {
                titulo: "Aprender Vuejs", completada: false,
            },
            {
                titulo: "Aprender ES6", completada: false,
            },
            {
                titulo: "Aprender a cocinar", completada: false,
            },
            {
                titulo: "Aprender CSS", completada: false,
            },
            {
                titulo: "Salir a correr", completada: false,
            }
        ],
    },
    methods: {
        completarTarea(tarea) {
            tarea.completada = !tarea.completada;
        }
    },
    computed: {
        tareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completada);
        }
    }
    
});


// Vanila javascript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }