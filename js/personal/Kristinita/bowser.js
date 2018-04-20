/*
* @Author: Kristinita
* @Date:   2017-01-30 13:33:35
* @Last Modified by:   Kristinita
* @Last Modified time: 2017-01-30 13:39:59
*/
// Bowser, см. http://ru.stackoverflow.com/a/611507/199934
// Rewrite id to class, see http://javascript.ru/forum/misc/45918-getelementsbyclassname-ne-rabotaet.html#post303442
if (bowser.msie) {
	var SashaBowserExplorer = document.getElementsByClassName("SashaBowserExplorer")[0];
	SashaBowserExplorer.innerHTML = "<div>Нажмите <kbd>Alt+K</kbd> и вводите поисковый запрос</div>";
} else if (bowser.gecko) {
	var SashaBowserFirefox = document.getElementsByClassName("SashaBowserFirefox")[0];
	SashaBowserFirefox.innerHTML = "<div>Нажмите <kbd>Shift+Alt+K</kbd> и вводите поисковый запрос</div>";
}
