###
@Author: Kristinita
@Date:   2017-05-02 14:47:01
@Last Modified time: 2017-05-02 15:18:45
###
###
[DECLINED] Expected behavior possible get via pure CSS, without Gemini:

[LINK] “../../../stylus/components/scrollbar-body-hide.styl”
###
####################
# gemini-scrollbar #
####################
###
[INFO] Custom scrollbar instead of native body scrollbar:
https://noeldelgado.github.io/gemini-scrollbar/

[PURPOSE] Disable scrollbar, but continue scrolling.
###
window.onload = ->
	new GeminiScrollbar(
		###
		[INFO] querySelector method:
		https://www.w3schools.com/jsref/met_document_queryselector.asp
		###
		element: document.querySelector('body')

		autoshow: true).create()
	return
