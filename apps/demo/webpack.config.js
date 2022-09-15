const webpack = require('@nativescript/webpack');
const { resolve } = require('path');
const { addFontsCongigFontAwesome } = require('@nativescript/fonts');
module.exports = (env) => {
	webpack.init(env);
	webpack.useConfig('typescript');

	console.log(require.resolve('@fortawesome/fontawesome-free/LICENSE.txt'));

	webpack.chainWebpack((config) => {
		// shared demo code
		config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
	});

	addFontsCongigFontAwesome();

	// Example if you need to share images across demo apps:
	// webpack.Utils.addCopyRule({
	//   from: '../../tools/images',
	// 	 to: 'images',
	//   context: __dirname
	// });

	// Example if you need to share images across demo apps:
	webpack.Utils.addCopyRule({
		from: '../../../tools/images',
		to: 'images',
		context: webpack.Utils.project.getProjectFilePath('node_modules'),
	});

	webpack.Utils.addCopyRule({
		from: '../../../tools/assets/logos',
		to: 'logos',
		context: webpack.Utils.project.getProjectFilePath('node_modules'),
	});

	return webpack.resolveConfig();
};
