Vue.component('mis-tareas', {
    template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareas = response.data;
            })
    },
    data() {
        return {
            tareas: [],
        };
    },
});

new Vue({
    el: 'main',

});