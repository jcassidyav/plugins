import * as symbolsParser from 'scss-symbols-parser';
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

	const icons = getFontAwesomeStyleIcons('@fortawesome/fontawesome-free/scss/_variables.scss', '$fa-var-');
	console.log('Icons', icons);

	addFontsConfig(icons, 'fas-', [pathToFont]); //TODO need multiple fonts
}

function getFontAwesomeStyleIcons(variablesScss: string, variablesPrefix: string) {
	const variablesPath = require.resolve(variablesScss);
	const fontAwesomeSymbols = symbolsParser.parseSymbols(readFileSync(variablesPath).toString());

	console.log('************************');

	return fontAwesomeSymbols.variables.reduce(function (acc, value) {
		acc[value.name.replace(variablesPrefix, '')] = value.value.slice(1);
		return acc;
	}, {});
}

function getMDIStyleIcons(variablesScss: string, variableName: string): object {
	const result: object = {};
	const variablesPath = require.resolve(variablesScss);
	const fontAwesomeSymbols = symbolsParser.parseSymbols(readFileSync(variablesPath).toString());

	console.log('************************');
	const variable = fontAwesomeSymbols.variables.find((value) => value.name === variableName);
	if (variable) {
		const v = variable.value.split(',\n');

		for (const value of v) {
			const entry = value.trimStart().split(' ');
			result[entry[0].replace('"', '').replace('"', '')] = entry[1]; // fix this
		}

		console.log('parsed', result);
	}

	return result;
}

export function addFontsCongigMDIFont() {
	// which fonts to use in the font-awesome bundle.

	console.log('node_modules location', webpack.Utils.project.getProjectFilePath('node_modules'));
	console.log('resolved font', require.resolve('@mdi/font/fonts/materialdesignicons-webfont.ttf'));

	const pathToFont = path.relative(webpack.Utils.project.getProjectFilePath('node_modules'), require.resolve('@mdi/font/fonts/materialdesignicons-webfont.ttf'));
	const icons = getMDIStyleIcons('@mdi/font/scss/_variables.scss', '$mdi-icons');

	console.log('path to font', pathToFont);
	addFontsConfig(icons, 'mdi-', [pathToFont]);
}

export function addFontsConfig(iconsFromScss: object, inAppPrefix: string, fontLocation: string[]) {
	// custom font pass in list of characters and skip the parsing/replacing
	// material font usage ?

	console.log('************************');

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
					console.log('match', p1);
					if (iconsFromScss[p1]) {
						const unicodeHex = iconsFromScss[p1];
						const numericValue = parseInt(unicodeHex, 16);
						const character = fixedFromCharCode(numericValue);
						iconsUsedInApp.push(character);
						console.log('matched ', character);
						return character;
					}
					return match;
				},
				flags: 'g',
			});
		console.log('iconsUsedInApp X****************************', iconsUsedInApp);
		for (const fontPath of fontLocation) {
			console.log('Font Path', fontPath);
			config.plugin('CopyWebpackPlugin').tap((args) => {
				args[0].patterns.push({
					from: fontPath,
					to: 'fonts',
					transform: {
						transformer: (content) => {
							console.log('iconsUsedInApp X****************************', iconsUsedInApp);
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
		}
	});
}
