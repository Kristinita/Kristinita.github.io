// @Author: Kristinita
// @Date:   2017-03-30 16:31:37
// @Last Modified time: 2017-05-02 11:47:54
////////////
// Mailhu //
////////////
/// Don't use Malihu! Migrate to Gemini. Arguments:
// 1. Ctrl+F problem — https://github.com/malihu/malihu-custom-scrollbar-plugin/issues/486#issuecomment-298243647 ,
// 2. problem with lazy load plugins,
// 3. doesn't work link to article anchors.
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
