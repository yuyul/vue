Vue.component('contrasena', {
    props: ['contrasena'],
    template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">`,
    methods: {
        comprobarContrasena(contrasena) {
            //console.log(contrasena);
            //this.$emit('input', contrasena);
            if (this.noValidas.includes(contrasena)) {
                this.$refs.pass.value = contrasena = '';
            }
        }
    },
    data() {
        return {
            noValidas: ['abc', 'admin', '123456', 'root'],
        }
    }
});

new Vue({
    el: 'main',
    data: {
        contrasena: '5235dfdsf234',
    },
});