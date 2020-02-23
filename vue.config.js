module.exports = {
	productionSourceMap: false,
	devServer: { port: 8081 },

	chainWebpack(config) {
		// Only convert .svg files that are imported by these files as Vue component
		const IMG_DIR = /\.(vue|js|ts|svg)$/;

		// Use vue-cli's default rule for svg in non .vue .js .ts files
		config.module.rule('svg').issuer((file) => !IMG_DIR.test(file));

		// Use our loader to handle svg imported by other files
		config.module
			.rule('svg-component')
			.test(/\.svg$/)
			.issuer((file) => IMG_DIR.test(file))
			.use('vue')
			.loader('vue-loader')
			.end()
			.use('svg-to-vue-component')
			.loader('svg-to-vue-component/loader');
	},
};
