import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEncontrado.vue';
import {store} from './store';

export const routes = [
    { path: '/', component: Home },
    { path: '/equipo/:id', component: Equipo, children: [
        { path: '', components: {
            default: Usuario,
            bio: UsuarioBio,
            fotos: UsuarioFotos,
        }, name: 'equipo'},
    ] },
    { path: '/contacto', meta: {privado: true}, component: Contacto, name: 'contacto', props: { newsletter: false } },
    { path: '*', component: NoEncontrado }
];