############
# AddToAny #
############
# Highly customisable share buttons:
# https://www.addtoany.com
a2a_config = a2a_config or {}
# Disable tracking:
# https://blog.futtta.be/2010/01/22/add-to-any-removed-from-here/
# https://www.addtoany.com/buttons/api/
a2a_config.no_3p = true
a2a_config.track_links = false
# Icons color:
# https://www.addtoany.com/buttons/customize/icon_color
a2a_config.icon_color = 'seashell,midnightblue'
# Number of services:
# https://www.addtoany.com/buttons/customize/number_services
a2a_config.num_services = 10
# Menu orientation
# https://www.addtoany.com/buttons/customize/orientation
a2a_config.orientation = 'down'
# Prioritize services
# https://www.addtoany.com/buttons/customize/prioritize_services
a2a_config.prioritize = [
	'facebook'
	'vk'
	'twitter'
	'reddit'
	'evernote'
	'livejournal'
	'pinterest'
	'linkedin'
	'myspace'
	'odnoklassniki'
	'design_float'
	'diary_ru'
	'dzone'
	'hacker_news'
	'known'
	'refind'
	'blogger'
	'skype'
	'slashdot'
	'tubmlr'
	'whatsapp'
]
