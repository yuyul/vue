new Vue({
    el: 'main',
    mounted() {
        console.log('Instancia montada');
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            this.$http.get('https://randomuser.me/api/?results=500')
            .then(response => {

                console.log(response);
                // get body data
                //this.someData = response.body;
                this.personas = response.body.results;
            
              }, response => {
                // error callback
              });
        }
    }
});