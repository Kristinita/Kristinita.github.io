// @Author: Kristinita
// @Date:   2017-04-09 09:17:06
// @Last Modified time: 2017-04-09 09:20:10
//////////////////
// Clipboard.js //
//////////////////
// Activate Clipboard.js for .SashaButton class
// http://ru.stackoverflow.com/a/582520/199934
// http://stackoverflow.com/a/33758293/5951529
document.addEventListener('DOMContentLoaded', _ => new Clipboard(".SashaButton", {
    text: function(trigger) {
        return $(trigger).parent().find('code').first().text().trim();
    }
}));
