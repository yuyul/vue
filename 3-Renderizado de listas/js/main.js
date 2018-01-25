// Vanilla JavaScript
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');
// input.addEventListener('keyup', () => h1.innerHTML = input.value);

const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre: 'Hacer la compra', prioridad: 'baja'},
            {nombre: 'Aprender Vue', prioridad: 'alta'},
            {nombre: 'Ir al gimnasio', prioridad: 'baja'},
        ],
        persona: {
            nombre: 'Juan',
            apellidos: 'Fernandez',
            edad: 30,
        },
    },
});