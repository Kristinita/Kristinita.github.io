//#################
// Browser-Update #
//#################
// Show message, that user install another browser:
// https://browser-update.org/
// Options:
// https://browser-update.org/customize.html
// [WARNING] Different messages for different browsers not support at May 2018:
// https://github.com/browser-update/browser-update/issues/388
var $buo_f, $buoop, alternative, e, lifewire, quora1, quora2, slant;

lifewire = 'Lifewire';

quora1 = 'Quora';

alternative = 'Alternative.to';

slant = 'Slant';

quora2 = 'Quora';

$buoop = {
	notify: {
		// Browser keys:
		// https://github.com/browser-update/browser-update/wiki/Details-on-configuration
		i: 4147
	},
	// Required parameter, my value as in default example:
	// https://browser-update.org/
	api: 2018.05,
	// Show message all the time
	reminder: 0,
	text: 'I\'m sorry, {brow_name} and any another IE versions not supported for this site. Page can be displayed very incorrect. Please, use another browser. Arguments, why all Internet Explorer versions is a bad choice — ' + lifewire.link('https://www.lifewire.com/why-do-people-hate-internet-explorer-3485786') + ', ' + quora1.link('https://www.quora.com/Is-Internet-Explorer-really-as-bad-as-everyone-tries-to-make-out') + '. Recommendations at the choice of the browser for Windows: ' + alternative.link('https://alternativeto.net/software/internet-explorer/?platform=windows') + ', ' + slant.link('https://www.slant.co/topics/11157/~web-browsers-for-windows') + ', ' + quora2.link('https://www.quora.com/Which-is-the-best-browser-for-windows-10') + '.'
};

$buo_f = function() {
	var e;
	e = document.createElement('script');
	e.src = 'https://browser-update.org/update.min.js';
	document.body.appendChild(e);
};

try {
	document.addEventListener('DOMContentLoaded', $buo_f, false);
} catch (error) {
	e = error;
	window.attachEvent('onload', $buo_f);
}
