const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	assetsDir: 'static',
	publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
	outputDir: 'build',
	productionSourceMap: false,
	chainWebpack(config) {
		// alias
		config.resolve.alias.set('@', resolve('src'));
		config.devServer.disableHostCheck(true);
	},
};
