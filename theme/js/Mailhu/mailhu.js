// @Author: Kristinita
// @Date:   2017-03-30 16:31:37
// @Last Modified time: 2017-04-09 15:10:21
////////////
// Mailhu //
////////////
// Settings — http://manos.malihu.gr/jquery-custom-content-scroller/
$(window).on("load resize", function() {
    if (window.matchMedia("(min-width: 960px)").matches) {
        $("main").mCustomScrollbar({
            // Theme
            theme: "sasha-scrollbar",
            // If "outside", scrollbar don't display, but all hotkeys works,
            // if cursor not in active tab.
            // Mailhu have bug — different behavior for left and right scrollbars.
            scrollbarPosition: "inside",
            // Hide scrollbar, if cursor not in active window
            autoHideScrollbar: true,
        });
    } else {
        $("body").mCustomScrollbar({
            theme: "sasha-scrollbar",
            scrollbarPosition: "outside",
            autoHideScrollbar: true,
        });
    }
});
