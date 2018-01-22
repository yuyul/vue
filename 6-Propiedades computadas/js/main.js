const vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Mundo!',
        nuevaTarea: null,
        tareas: [
            {
                titulo : 'Aprender Vue',
                prioridad: true,
                antiguedad: 23,
            },
            {
                titulo : 'Aprender ES6',
                prioridad: false,
                antiguedad: 135,
            },
            {
                titulo : 'Publicar algo todos los días',
                prioridad: true,
                antiguedad: 378,
            },
        ]
    },
    methods: {
        agregarTarea() {
            var nuevaTarea = {
                titulo: this.nuevaTarea,
                prioridad: false,
                antigudad: 50
            };

            this.tareas.unshift(nuevaTarea);
            this.nuevaTarea = null;
        }
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad() {
            return this.tareas.filter(tarea => tarea.prioridad);
        }
    }
});


// Vanila javascript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }