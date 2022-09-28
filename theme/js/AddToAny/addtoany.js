//###########
// AddToAny #
//###########
/*
[OVERVIEW] Highly customisable share buttons:
https://www.addtoany.com

[INFO] API:
https://www.addtoany.com/buttons/api/
 */
var a2a_config;

a2a_config = a2a_config || {};

/*
[INFO] Disable tracking:
https://blog.futtta.be/2010/01/22/add-to-any-removed-from-here/
 */
a2a_config.no_3p = true;

a2a_config.track_links = false;

/*
[INFO] Icons color:
https://www.addtoany.com/buttons/customize/icon_color
 */
a2a_config.icon_color = 'seashell,midnightblue';

/*
[INFO] Number of services:
https://www.addtoany.com/buttons/customize/number_services
 */
a2a_config.num_services = 10;

/*
[INFO] Menu orientation:
https://www.addtoany.com/buttons/customize/orientation
 */
a2a_config.orientation = 'down';

/*
[INFO] Prioritize services:
https://www.addtoany.com/buttons/customize/prioritize_services
 */
a2a_config.prioritize = [
	'facebook',
	'vk',
	'twitter',
	'evernote',
	'livejournal',
	'viber',
	'whatsapp',
	'myspace',
	'odnoklassniki',
	'telegram',
	'pinterest',
	'design_float',
	'diary_ru',
	'linkedin',
	'reddit',
	'dzone',
	'hacker_news',
	'known',
	'refind',
	'blogger',
	'skype',
	'slashdot',
	'tubmlr',
	// [INFO] RSS subscribe buttons:
	// https://www.addtoany.com/subscribe/preferences
	'the_free_library',
	'daily_rotation',
	'newsisfree',
	'protopage_news_feeds',
	'bitty_browser_preview',
	'my_aol',
	'agregator',
	'my_yahoo',
	'feedblitz',
	'outlook'
];

//# sourceMappingURL=addtoany.js.map
