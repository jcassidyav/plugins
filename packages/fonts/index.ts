import * as symbolsParser from 'scss-symbols-parser';
//import * as Fontmin from 'fontmin';
import { readFileSync } from 'fs';
import * as webpack from '@nativescript/webpack';
import * as path from 'path';
import * as Fontmin from 'fontmin';

function fixedFromCharCode(codePt) {
	if (codePt > 0xffff) {
		codePt -= 0x10000;
		return String.fromCharCode(0xd800 + (codePt >> 10), 0xdc00 + (codePt & 0x3ff));
	} else {
		return String.fromCharCode(codePt);
	}
}

function processFont(glyphs, content) {
	return new Promise((resolvePromise, reject) => {
		new Fontmin()
			.src(content)
			.use(Fontmin.glyph({ text: glyphs }))
			.run(function (err, files) {
				if (err) {
					reject(err);
				} else {
					resolvePromise(files[0].contents);
				}
			});
	});
}
export function addFontsCongigFontAwesome() {
	// which fonts to use in the font-awesome bundle.

	console.log('node_modules location', webpack.Utils.project.getProjectFilePath('node_modules'));
	console.log('resolved font', require.resolve('@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf'));

	const pathToFont = path.relative(webpack.Utils.project.getProjectFilePath('node_modules'), require.resolve('@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf'));

	console.log('path to font', pathToFont);
	addFontsCongig('@fortawesome/fontawesome-free/scss/_variables.scss', '$fa-var-', 'fas-', [pathToFont]); //TODO need multiple fonts
}

export function addFontsCongig(variablesScss: string, variablesPrefix: string, inAppPrefix: string, fontLocation: string[]) {
	// custom font pass in list of characters and skip the parsing/replacing
	// material font usage ?

	const variablesPath = require.resolve(variablesScss);
	const fontAwesomeSymbols = symbolsParser.parseSymbols(readFileSync(variablesPath).toString());

	console.log('************************');
	// console.log(JSON.stringify(fontAwesomeSymbols));

	const fontAwesomeIcons = fontAwesomeSymbols.variables.reduce(function (acc, value) {
		acc[value.name.replace(variablesPrefix, '')] = value.value.slice(1);
		return acc;
	}, {});

	console.log('************************');
	// console.log(JSON.stringify(fontAwesomeIcons));

	webpack.chainWebpack((config) => {
		const iconsUsedInApp = [];

		config.module
			.rule('process font awesome')
			.before('bundle')
			.test(/\.(ts|js|xml|html)$/)
			.exclude.add(/node_modules/)
			.end()
			.use('string-replace-loader')
			.loader('string-replace-loader')
			.options({
				search: inAppPrefix + '([a-z-]+)',
				replace: (match, p1) => {
					if (fontAwesomeIcons[p1]) {
						const unicodeHex = fontAwesomeIcons[p1];
						const numericValue = parseInt(unicodeHex, 16);
						const character = fixedFromCharCode(numericValue);
						iconsUsedInApp.push(character);
						return character;
					}
					return match;
				},
				flags: 'g',
			});
		console.log('iconsUsedInApp ****************************', iconsUsedInApp);
		config.plugin('CopyWebpackPlugin').tap((args) => {
			args[0].patterns.push({
				from: fontLocation,
				to: 'fonts',
				transform: {
					transformer: (content, path) => {
						console.log('iconsUsedInApp ****************************', iconsUsedInApp);
						return processFont(iconsUsedInApp.join(''), content);
					},
				},
				// the context of the "from" rule, in this case node_modules
				// we used the getProjectFilePath util here, but this could have been
				// a path.resolve(__dirname, 'node_modules') too.
				context: webpack.Utils.project.getProjectFilePath('node_modules'),
			});

			// should always return all the arguments that should be passed to the plugin constructor
			// in some cases you may want to remove an argument - you can do that by returning an array
			// with that argument removed from it.
			console.log('args)))', args);
			return args;
		});
	});
}
