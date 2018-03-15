import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import {store} from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('Acceso global a ruta');
  console.log(to.meta);
  if (to.meta.privado) {
    console.log(store.state);
    next(store.state.auth);
  }
  else
    next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
