const vm = new Vue({
    el: 'main',
    data: {
        mostrar: true,
        mensajes: {
            transicion: 'Transiciones CSS con Vue.js',
            animacion: 'Animaciones CSS con Vue.js',
            animationCustom: 'Animaciones custom con Vue.js',
            entreElementos: 'Transiciones entre elementos con Vue.js'
        }
    },
});


// Vanila javascript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }