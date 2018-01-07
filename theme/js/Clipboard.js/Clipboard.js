// @Author: Kristinita
// @Date:   2017-04-09 09:17:06
// @Last Modified time: 2018-01-06 20:48:00
//////////////////
// Clipboard.js //
//////////////////
// Activate Clipboard.js for .SashaButton class
// http://ru.stackoverflow.com/a/582520/199934
// [Deprecated] For Rainbow: http://stackoverflow.com/a/33758293/5951529
// [New] For SuperFences: https://stackoverflow.com/a/33758435/5951529
document.addEventListener('DOMContentLoaded', _ => new Clipboard(".SashaButton", {
    text: function(trigger) {
        return $(trigger).closest('.SashaBlockHighlight').find('pre').text();
    }
}));
