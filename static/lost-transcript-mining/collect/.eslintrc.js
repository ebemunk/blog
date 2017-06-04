module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"jest": true,
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"never"
		]
	}
};