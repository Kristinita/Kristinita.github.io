//#################
// Browser-Update #
//#################
var $buo_f, $buoop, alternative, arguments_en, arguments_ru, e, lifewire, quora1, quora2, slant;

/*
[PURPOSE] Show message, if user use bad or outdated browser:
https://browser-update.org/

[INFO] Options:
https://browser-update.org/customize.html

[INFO] If we add “#test-bu” to the end of any URL with browser-update,
browser-update message will always show:
http://browser-update.org/customize.html

[INFO] If “#test-bu”, test message will always show as if
“test:true”

[INFO] If we add “#ignorecookie-bu” to the end of any URL with browser-update,
browser-update will ignore cookies:
https://github.com/browser-update/browser-update/wiki/Test-the-notification#ignore-the-cookie

[INFO] Whitelist of bots and niche browsers:
https://github.com/browser-update/browser-update/wiki/Ignore-Browser-List

[INFO] Custom links:
https://github.com/browser-update/browser-update/issues/390
 */
// [INFO] Links for outdated browsers:
arguments_en = 'arguments';

arguments_ru = 'аргументы';

// [INFO] Links for Internet Explorer:
lifewire = 'Lifewire';

quora1 = 'Quora';

alternative = 'Alternative.to';

slant = 'Slant';

quora2 = 'Quora';

$buoop = {
	required: {
		/*
		[INFO] Supported browsers:
		https://github.com/browser-update/browser-update/wiki/Details-on-configuration#browsers

		[NOTE] Use “4147” or another big number for disable all browser versions:
		https://github.com/browser-update/browser-update/pull/324
		 */
		i: 4147,
		/*
		[INFO] “-1” — 2 latest browser versions required for user:
		https://github.com/browser-update/browser-update/wiki/Details-on-configuration#configure-browser-versions-to-notify

		[NOTE] We need add each browser separately, Browserslist doesn’t supported:
		https://github.com/browser-update/browser-update/issues/389
		 */
		e: -1,
		c: -1,
		f: -1,
		o: -1,
		o_a: -1,
		s: -1,
		y: -1,
		v: -1,
		uc: -1,
		ios: -1,
		samsung: -1
	},
	/*
	[REQUIRED] browser-update API version;
	get the latest version from home page:
	https://browser-update.org/
	 */
	api: 2020.10,
	// [INFO] Show browser-update messsage always
	reminder: 0,
	/*
	[INFO] Always use specific language for messages;
	English by default.
	I don’t want it; it would be nice, if users will get messages
	on native languages
	 */
	l: false,
	/*
	[INFO] Debug mode:
	https://github.com/browser-update/browser-update/wiki/Test-the-notification
	https://i.imgur.com/truAzm6.png
	 */
	test: false,
	/*
	[NOTE] Setting for default text.
	It doesn’t affect custom text in any way.
	 */
	newwindow: false,
	/*
	[INFO] No close button on browser-update notification;
	it would be nice, if users will update browsers
	 */
	noclose: true,
	/*
	[INFO] Don’t give an opportunity to close browser-update notification;
	it would be nice, if users will update browsers
	 */
	no_permanent_hide: true,
	// [INFO] Place for browser-update notification
	style: 'top',
	/*
	[INFO] Make web page content after notification bar,
	notification will not overlap content
	 */
	shift_page_down: true,
	/*
	[INFO] I don’t want notify Firefox ESR.

	[LEARN][FIREFOX] Firefox ESR — version for large organizations
	for security and stability fixes:
	https://support.mozilla.org/en-US/kb/switch-to-firefox-extended-support-release-esr
	 */
	notify_esr: false,
	/*
	[INFO] Disable tracking
	 */
	nostatistics: true,
	/*
	[INFO] Custom text:
	https://github.com/browser-update/browser-update/wiki/Details-on-configuration#custom-text

	[INFO] “{brow_name} — browser name from user-agent string”
	 */
	text: 'Please, update your browser. {brow_name} is outdated version. See the ' + arguments_en.link('https://browser-update.org/update-browser.html') + ', why this is primarily beneficial for yourself as a user.',
	// [INFO] Custom text for Russian-language users (by user-agent string data):
	text_in_ru: 'Пожалуйста, обновите Ваш браузер. {brow_name} — устаревшая версия. Смотрите ' + arguments_ru.link('https://browser-update.org/update-browser.html') + ', почему это выгодно прежде всего для Вас как пользователя.',
	/*
	[INFO] Custom message for browsers:
	https://github.com/browser-update/browser-update/wiki/Details-on-configuration#different-messages-depening-on-browser
	https://github.com/browser-update/browser-update/issues/388
	 */
	text_for_i: 'I’m sorry, {brow_name} and any another IE versions not supported for this site. Page can be displayed very incorrect. Please, use another browser. Arguments, why all Internet Explorer versions is a bad choice — ' + lifewire.link('https://www.lifewire.com/why-do-people-hate-internet-explorer-3485786') + ', ' + quora1.link('https://www.quora.com/Is-Internet-Explorer-really-as-bad-as-everyone-tries-to-make-out') + '. Recommendations at the choice of the browser for Windows: ' + alternative.link('https://alternativeto.net/software/internet-explorer/?platform=windows') + ', ' + slant.link('https://www.slant.co/topics/11157/~web-browsers-for-windows') + ', ' + quora2.link('https://www.quora.com/Which-is-the-best-browser-for-windows-10') + '.',
	/*
	[INFO] Text for specific browsers on specific languages:
	http://browser-update.org/customize.html
	 */
	text_for_i_in_ru: 'Я прошу прощения, но {brow_name} как и любая другая версия браузера IE не поддерживается на этом сайте. Веб-страницы могут отображаться некорректно. Пожалуйста, используйте другой браузер. Аргументы, почему Internet Explorer — это плохой выбор — ' + lifewire.link('https://www.lifewire.com/why-do-people-hate-internet-explorer-3485786') + ', ' + quora1.link('https://www.quora.com/Is-Internet-Explorer-really-as-bad-as-everyone-tries-to-make-out') + '. Рекомендации по выбору браузера для Windows: ' + alternative.link('https://alternativeto.net/software/internet-explorer/?platform=windows') + ', ' + slant.link('https://www.slant.co/topics/11157/~web-browsers-for-windows') + ', ' + quora2.link('https://www.quora.com/Which-is-the-best-browser-for-windows-10') + '.'
};

$buo_f = function() {
	var e;
	e = document.createElement('script');
	/*
	[NOTE] Link to browser-update.org required:
	https://github.com/browser-update/browser-update/issues/504

	We can’t use in this script CDN links as these:
	https://cdn.jsdelivr.net/npm/browser-update/update.npm.full.min.js
	https://cdn.jsdelivr.net/npm/browser-update/update.npm.js
	https://raw.githack.com/browser-update/browser-update/master/scripts/update.show.min.js
	 */
	e.src = 'https://browser-update.org/update.min.js';
	document.body.appendChild(e);
};

try {
	document.addEventListener('DOMContentLoaded', $buo_f, false);
} catch (error) {
	e = error;
	window.attachEvent('onload', $buo_f);
}

//# sourceMappingURL=browser-update.js.map
