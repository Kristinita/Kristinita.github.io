// @Author: Kristinita
// @Date:   2017-05-02 11:44:00
// @Last Modified time: 2017-05-02 11:46:54
////////////
// Gemini //
////////////
// Example — https://github.com/noeldelgado/gemini-scrollbar/blob/master/examples/01-body.html
window.onload = function() {
	if (window.matchMedia("(min-width: 60rem)").matches) {
	// For PC
    new GeminiScrollbar({
    	// querySelector method — https://www.w3schools.com/jsref/met_document_queryselector.asp
    	element: document.querySelector("main"),
        autoshow: true
    }).create();
} else {
	// For Mobile
	new GeminiScrollbar({
	 	element: document.querySelector("body"),
	    autoshow: true
	 }).create();
}
};