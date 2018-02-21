const home = Vue.component('home', {
    template: '<h2>Home</h2>'
});

const contacto = Vue.component('contacto', {
    template: '<h2>Contacto</h2>'
});

const routes = [
    { path: '/', component: home },
    { path: '/contacto', component: contacto },
];

const router = new VueRouter({
    routes,
});

new Vue({
    router: router,
    el: 'main',
});