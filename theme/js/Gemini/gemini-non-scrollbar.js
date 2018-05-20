/*
@Author: Kristinita
@Date:   2017-05-02 14:47:01
@Last Modified time: 2017-05-02 15:18:45
*/
//###################
// gemini-scrollbar #
//###################
/*
Custom scrollbar instead of native body scrollbar:
https://noeldelgado.github.io/gemini-scrollbar/
Disable scrollbar, but continue scrolling.
*/
window.onload = function() {
	new GeminiScrollbar({
		// querySelector method — https://www.w3schools.com/jsref/met_document_queryselector.asp
		element: document.querySelector('body'),
		autoshow: true
	}).create();
};
