import Button from './button';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
	install(Vue) {
		Vue.component('LoadingButton', Button);
	},
};

export default GlobalComponents;
