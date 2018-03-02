// @Author: Kristinita
// @Date:   2017-05-02 11:44:00
// @Last Modified time: 2018-03-02 12:45:05
////////////
// Gemini //
////////////
// Example — https://github.com/noeldelgado/gemini-scrollbar/blob/master/examples/01-body.html
window.onload = function() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        // For landscape orientation
        var landscapescrollbar = new GeminiScrollbar({
            // querySelector method — https://www.w3schools.com/jsref/met_document_queryselector.asp
            element: document.querySelector("main"),
            autoshow: true,
            // Force Gemini for correct scrollbar displaying in mobile devices
            // https://github.com/noeldelgado/gemini-scrollbar#options
            forceGemini: true,
        }).create();

        window.myscroolbar = landscapescrollbar;

        // JQuery Lazy support —
        // https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299138103
        $(".SashaLazy").Lazy({
            appendScroll: $(landscapescrollbar.getViewElement()),
            // Run method “update” of Gemini:
            // https://github.com/eisbehr-/jquery.lazy/issues/88#issuecomment-299196388
            // http://jquery.eisbehr.de/lazy/example_callback-functions
            // https://github.com/noeldelgado/gemini-scrollbar#basic-methods
            afterLoad: function() {
                landscapescrollbar.update();
            }
        });
    } else {
        // For portrait orientation
        var portraitscrollbar = new GeminiScrollbar({
            element: document.querySelector("body"),
            autoshow: true,
            forceGemini: true,
        }).create();

        window.myscroolbar = portraitscrollbar;

        $(".SashaLazy").Lazy({
            appendScroll: $(portraitscrollbar.getViewElement()),
            afterLoad: function() {
                portraitscrollbar.update();
            }
        });
    }

};

// Scrollbar works on resize
// Thanks to Alfy — https://vk.com/dark_alf
window.onresize = function() {
    if(window.myscroolbar)
        window.myscroolbar.destroy();
    window.onload();
};