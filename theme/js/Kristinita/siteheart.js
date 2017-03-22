/*
 * @Author: Kristinita
 * @Date:   2017-01-30 13:33:35
 * @Last Modified by:   Kristinita
 * @Last Modified time: 2017-01-30 13:36:35
 */

(function() {
    var widget_id = 825946;
    _shcp = [{
        widget_id: widget_id
    }];
    var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en")
        .substr(0, 2).toLowerCase();
    var url = "widget.siteheart.com/widget/sh/" + widget_id + "/" + lang + "/widget.js";
    var hcc = document.createElement("script");
    hcc.type = "text/javascript";
    hcc.async = true;
    hcc.src = ("https:" == document.location.protocol ? "https" : "http") + "://" + url;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hcc, s.nextSibling);
})();
