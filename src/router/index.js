import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Forgot from '../pages/auth/forgot';
import Reset from '../pages/auth/reset-password';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/forgot',
		name: 'Forgot',
		component: Forgot,
	},
	{
		path: '/reset/:id',
		name: 'Reset',
		component: Reset,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
