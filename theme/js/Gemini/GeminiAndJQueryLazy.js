// @Author: Kristinita
// @Date:   2017-05-02 11:44:00
// @Last Modified time: 2017-05-04 17:21:59
////////////
// Gemini //
////////////
// Example — https://github.com/noeldelgado/gemini-scrollbar/blob/master/examples/01-body.html
window.onload = function() {
    if (window.matchMedia("(min-width: 60rem)").matches) {
        // For PC
        var pcscrollbar = new GeminiScrollbar({
            // querySelector method — https://www.w3schools.com/jsref/met_document_queryselector.asp
            element: document.querySelector("main"),
            autoshow: true,
        }).create();

        // JQuery Lazy support —
        // https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299138103
        $(".SashaLazy").Lazy({
            appendScroll: $(pcscrollbar.getViewElement()),
            // Run method “update” of Gemini:
            // https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299196388
            // http://jquery.eisbehr.de/lazy/example_callback-functions
            // https://github.com/noeldelgado/gemini-scrollbar#basic-methods
            afterLoad: function() {
                pcscrollbar.update();
            }
        });
    } else {
        // For Mobile
        var mobilescrollbar = new GeminiScrollbar({
            element: document.querySelector("body"),
            autoshow: true
        }).create();

        $(".SashaLazy").Lazy({
            appendScroll: $(mobilescrollbar.getViewElement()),
            afterLoad: function() {
                mobilescrollbar.update();
            }
        });
    }

};
