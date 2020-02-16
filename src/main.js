import Vue from 'vue';
import App from './App.js';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
