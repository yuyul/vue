import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Usuario from './components/Usuario.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/usuario/:id', component: Usuario },
];