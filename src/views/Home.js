import Vue from 'vue';
import HelloWorld from '../components/HelloWorld';
const Home = Vue.component('Home', {
	render() {
		return (
			<span>
				<HelloWorld /> <h2>Hello</h2>
			</span>
		);
	},
});

export default Home;
