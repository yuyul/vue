Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
        <section class="alerta" :class="[tipo, posicion]">
            <header class="alerta__header">
                <a @click="ocultarWidget" href="#">Cerrar</a>
                <slot name="header">Hola</slot>
            </header>
            <div class="alerta__contenido">
                <slot>
                    Lorem ipsum dolor sit amet,
                </slot>
            </div>
            <footer class="alerta__footer">
                <slot name="footer">
                    Este es el texto del footer
                </slot>
            </footer>
        </section>
    `,
    methods: {
        ocultarWidget() {
            this.$emit('ocultar');
        }
    }
});

const vm = new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false,
    },

});