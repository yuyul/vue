Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template',
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo: 'una tarea' },
            { titulo: 'dos tarea '},
            { titulo: 'tres tarea' },
        ],
    },
});