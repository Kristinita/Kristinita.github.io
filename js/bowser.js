/*
 * @Author: Kristinita
 * @Date:   2017-01-30 13:33:35
 * @Last Modified by:   Kristinita
 * @Last Modified time: 2017-01-30 13:39:59
 */
// Bowser, см. http://ru.stackoverflow.com/a/611507/199934
if (bowser.msie) {
    var SashaBowserExplorer = document.getElementById("SashaBowserExplorer");
    SashaBowserExplorer.innerHTML = "<SashaTag>Нажмите <kbd>Alt+K</kbd> и вводите поисковый запрос</SashaTag>";
} else if (bowser.gecko) {
    var SashaBowserFirefox = document.getElementById("SashaBowserFirefox");
    SashaBowserFirefox.innerHTML = "<SashaTag>Нажмите <kbd>Shift+Alt+K</kbd> и вводите поисковый запрос</SashaTag>";
}
