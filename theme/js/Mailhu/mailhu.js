// @Author: Kristinita
// @Date:   2017-03-30 16:31:37
// @Last Modified time: 2017-03-30 16:34:53
$(window).on("load resize", function() {
    if (window.matchMedia("(min-width: 960px)").matches) {
        $("main").mCustomScrollbar({
            // Theme
            theme: "sasha-scrollbar",
            // If "outside", scrollbar don't display, but all hotkeys works
            scrollbarPosition: "inside",
            // Hide scrollbar, if cursor not in active window
            autoHideScrollbar: true,
        });
    } else {
        $("body").mCustomScrollbar({
            theme: "sasha-scrollbar",
            // If "outside", scrollbar don't display, but all hotkeys works
            scrollbarPosition: "outside",
            autoHideScrollbar: true,
        });
    }
});
