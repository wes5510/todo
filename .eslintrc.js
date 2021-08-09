module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'import',
	],
	rules: {
		indent: [
			'error',
			'tab',
			{
				ignoredNodes: [
					'ArrowFunctionExpression',
				],
			},
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'implicit-arrow-linebreak': 'off',
		'react/jsx-indent': [
			'error',
			'tab',
		],
		'react/jsx-indent-props': [
			'error',
			'tab',
		],
		'operator-linebreak': [
			'error',
			'after',
		],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
				],
			},
		],
		'object-curly-newline': 'off',
		'function-paren-newline': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/no-cycle': 'warn',
		'@typescript-eslint/no-unused-vars': 'error',
		'react/jsx-wrap-multilines': ['error', {
			declaration: 'parens',
			assignment: 'parens',
			return: 'parens',
			arrow: 'parens',
			condition: 'ignore',
			logical: 'ignore',
			prop: 'ignore',
		}],
	},
	settings: {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias: {
					'@': './src',
				},
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};