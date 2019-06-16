//#########
// RunKit #
//#########
// Run npm code online in browser:
// https://runkit.com
// Needs use theme-maker, that change styles:
// https://stackoverflow.com/a/56545110/5951529
// https://runkit.com/docs/theme-maker
// [NOTE] It not documented:
// https://github.com/runkitdev/runkit-demo/issues/4#issuecomment-359939358
var notebook;

notebook = RunKit.createNotebook({
	// [NOTE] Id required, class will not work
	element: document.getElementById('SashaRunkit'),
	// [NOTE] You need paste here content of your RunKit notebook even if it long:
	source: 'var stringSimilarity = require(\'string-similarity\')\n\nvar similarity = stringSimilarity.compareTwoStrings(\'Кира\', \'Кирк\');',
	// [INFO] https://runkit.com/docs/theme-maker/untilted-2jxk2crve1p7 theme
	theme: 'untilted-028u85ijnoyr'
});
