import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.js';
import './registerServiceWorker';
import router from './router';
import Vuelidate from 'vuelidate';
import store from './vuex/store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(Vuex);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
