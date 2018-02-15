import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nombre: 'Juan Julián',
        apellidos: 'Caro Sancho',
        profesion: 'Developer',
        ciudad: 'Barcelona'
    }
})