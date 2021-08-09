module.exports = {
	'src/**/\*.{js,jsx,tsx,ts}': ['npm run lint'],
	'src/**/\*.{tsx,ts}': ['tsc-files --noEmit'],
};