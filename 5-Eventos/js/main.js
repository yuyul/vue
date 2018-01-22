const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Aprender Vue',
            'Ir al gimnasio',
            'Aprender cahche'
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});


// Vanila javascript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }