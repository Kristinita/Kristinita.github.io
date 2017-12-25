// @Author: Kristinita
// @Date:   2017-05-02 11:44:00
// @Last Modified time: 2017-12-06 16:17:15
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
            // Force Gemini for correct scrollbar displaying in mobile devices
            // https://github.com/noeldelgado/gemini-scrollbar#options
            forceGemini: true,
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
            autoshow: true,
            forceGemini: true,
        }).create();

        $(".SashaLazy").Lazy({
            appendScroll: $(mobilescrollbar.getViewElement()),
            afterLoad: function() {
                mobilescrollbar.update();
            }
        });
    }

};
