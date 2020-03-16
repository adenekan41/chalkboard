import Vue from 'vue';
import './assets/styles/app.scss';
import Alert from './components/alerts';
const App = Vue.component('App', {
	render() {
		return (
			<div id="app">
				<Alert />
				<router-view />
			</div>
		);
	},
});

export default App;
