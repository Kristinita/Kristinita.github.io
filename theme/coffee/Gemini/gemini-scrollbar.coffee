###
@Author: Kristinita
@Date:	 2017-05-02 11:44:00
@Last Modified time: 2020-09-13 08:49:55
###
####################
# gemini-scrollbar #
####################
###
[PURPOSE] Custom scrollbar instead of native body scrollbar:
https://noeldelgado.github.io/gemini-scrollbar/

[INFO] Usage — post of plugin author:
https://github.com/noeldelgado/gemini-scrollbar/issues/46
###

# [REQUIRED] Don’t delete this line! Scrolling will be incorrect.
internals = {}


internals.initialize = ->
	internals.scrollbar = new GeminiScrollbar(
		###
		[INFO] “querySelector” method:
		https://www.w3schools.com/jsref/met_document_queryselector.asp
		###
		element: document.querySelector('body')

		autoshow: true

		###
		[NOTE][REQUIRED] That Gemini scrollbar don’t prevent
		native iframes lazy loading:
		https://github.com/noeldelgado/gemini-scrollbar/issues/69
		###
		createElements: false

		###
		[INFO] Force Gemini for correct scrollbar displaying in mobile devices
		https://github.com/noeldelgado/gemini-scrollbar#options

		[INFO] I use gemini-scrollbar to replace the ugly default scrollbars
		of desktop browsers. Mobile browsers haven’t ugly scrollbars
		and I don’t need gemini-scrollbar for them.

		[INFO] In my opinion, the site looks prettier without gemini-scrollbar
		on mobile browsers

		[COMPARE]
		https://i.imgur.com/1dAPPY0.png
		https://i.imgur.com/DCGDJg5.png
		###
		forceGemini: false).create()

	internals.scrollingElement = internals.scrollbar.getViewElement()
	internals.scrollToHash()


	###
	[DECLINED] I migrated to Defer.js

	[INFO] JQuery Lazy support:
	https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299138103

	$('.SashaLazy').Lazy
		appendScroll: $(internals.scrollbar.getViewElement())

		[INFO] Run Gemini “update” method:
		https://github.com/noeldelgado/gemini-scrollbar#basic-methods
		http://jquery.eisbehr.de/lazy/example_callback-functions
		https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299196388

		afterLoad: ->
			internals.scrollbar.update()
			return
	###


	###
	[DEPRECATED] Wildfire no longer functioning more

	[INFO] Wildfire comments lazy loading:
	https://stackoverflow.com/a/63869810/5951529
	[LEARN][JQUERY_LAZY] Create custom loader:
	https://github.com/dkern/jquery.lazy#custom-content-loaders

	$('.wildfire_thread').Lazy
		KiraComments: (element, response) ->
			$.getScript 'https://cdn.jsdelivr.net/npm/wildfire/dist/wildfire.auto.js', ->
				response true
				return
			return
		# [FIXME] Duplicate code
		appendScroll: $(internals.scrollbar.getViewElement())
		afterLoad: ->
			internals.scrollbar.update()
			return
	return
	###


internals.handleOrientationChange = ->
	internals.scrollbar.update()
	internals.scrollToHash()
	return

internals.scrollToHash = ->
	###
	[INFO] Get hash — part of URL after “#” symbol:
	https://javascript.ru/window-location
	###
	hash = location.hash

	###
	[INFO] Decode URL hash, example:
	“#%D0%9A%D0%B8%D1%80%D0%B0” → “#Кира”
	https://www.w3schools.com/jsref/jsref_decodeuri.asp

	[NOTE] Decoding required for some browsers as Chrome and Opera;
	without decoding links with anchors will not open;
	scrollbar will move to top of page:
	https://stackoverflow.com/a/48218282/5951529
	###
	dechash = decodeURI(hash)

	if dechash
		###
		[INFO] Replacing to id, example:
		“#Кира” → “<a id="Кира">”
		###
		element = document.getElementById(dechash.replace('#', ''))
		if element
			# [INFO] Scroll to id
			internals.scrollingElement.scrollTo 0, element.offsetTop
	return

# [INFO] Listeners
window.onload = internals.initialize
window.onorientationchange = internals.handleOrientationChange
