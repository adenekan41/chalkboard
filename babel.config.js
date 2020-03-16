module.exports = {
	plugins: ['jsx-v-model', 'jsx-event-modifiers'],
	presets: [
		['@vue/cli-plugin-babel/preset'],
		[
			'@vue/babel-preset-jsx',
			{
				injectH: false,
			},
		],
	],
};
