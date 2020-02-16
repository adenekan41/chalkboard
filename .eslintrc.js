module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-case-declarations': 'off',
		'comma-dangle': ['off', 'always'],
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'prettier/prettier': ['warn', { semi: true }],
	},
};
