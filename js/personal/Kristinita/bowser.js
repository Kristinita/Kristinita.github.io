/*
@Author: Kristinita
@Date:   2017-01-30 13:33:35
@Last Modified time: 2017-01-30 13:39:59
*/
var SashaBowserExplorer, SashaBowserFirefox;

//#########
// Bowser #
//#########
// Show different messages for different browsers:
// https://www.npmjs.com/package/bowser
// http://ru.stackoverflow.com/a/611507/199934
// Internet Explorer:
// Rewrite id to class: http://javascript.ru/forum/misc/45918-getelementsbyclassname-ne-rabotaet.html#post303442
if (bowser.msie) {
	SashaBowserExplorer = document.getElementsByClassName('SashaBowserExplorer')[0];
	SashaBowserExplorer.innerHTML = '<div>Нажмите <kbd>Alt+K</kbd> и вводите поисковый запрос</div>';
// Firefox:
} else if (bowser.gecko) {
	SashaBowserFirefox = document.getElementsByClassName('SashaBowserFirefox')[0];
	SashaBowserFirefox.innerHTML = '<div>Нажмите <kbd>Shift+Alt+K</kbd> и вводите поисковый запрос</div>';
}
