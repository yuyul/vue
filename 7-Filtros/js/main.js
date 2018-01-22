const vm = new Vue({
    el: 'main',
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [
            {
                titulo: 'Battlefield 1',
                genero: 'FPS',
                puntuacion: 9,
            },
            {
                titulo: 'Civilization VI',
                genero: 'Estrategia',
                puntuacion: 10,
            },
            {
                titulo: 'Resident Evil 7',
                genero: 'Survival Horror',
                puntuacion: 7,
            },
        ],
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    },
    computed: {
        mejoresJuegos() {
            return this.juegos.filter(juego => juego.puntuacion >= this.minimo);
        },
        buscarJuegos() {
            return this.juegos.filter(juego => juego.titulo.includes(this.busqueda));
        }
    }
});


// Vanila javascript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }