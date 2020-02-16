import Vue from 'vue';
import './assets/styles/app.scss';
const App = Vue.component('App', {
	render() {
		return (
			<div id="app">
				<router-view />
			</div>
		);
	},
});

export default App;
