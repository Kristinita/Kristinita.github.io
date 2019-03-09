/*
Load Google Fonts

[NOTE] Script required, because Google Fonts doesn't support “font-display”:
https://css-tricks.com/google-fonts-and-font-display/
https://github.com/google/fonts/issues/358

[INFO] “font-display: swap”, that:
1. Default font will show to site visitors before Google font
2. Fix “Ensure text remains visible during webfont load” of PageSpeed Insights
https://web.dev/fast/avoid-invisible-text
https://developers.google.com/web/updates/2016/02/font-display

[LEARN][COFFEESCRIPT] For converting EcmaScript 6 to CoffeeScript:
1. Convert EcmaScript 6 to JavaScript. Online converter — https://babeljs.io/en/repl .
2. Convert JavaScript to CoffeeScript via js2coffee.
https://github.com/js2coffee/js2coffee/issues/449#issuecomment-470128539
 */
var loadFont;

loadFont = function(url) {
	var xhr;
	// [LEARN][COFFEESCRIPT] Wrap constructor to parens (parentheses, round brackets),
	// if CoffeeLint warnings:
	// https://github.com/clutchski/coffeelint/blob/master/src/rules/non_empty_constructor_needs_parens.coffee
	// https://github.com/clutchski/coffeelint/blob/master/src/rules/empty_constructor_needs_parens.coffee
	xhr = new XMLHttpRequest;
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
		var css, head, style;
		if (xhr.readyState === 4 && xhr.status === 200) {
			css = xhr.responseText;
			css = css.replace(/}/g, 'font-display: swap; }');
			head = document.getElementsByTagName('head')[0];
			style = document.createElement('style');
			style.appendChild(document.createTextNode(css));
			head.appendChild(style);
		}
	};
	xhr.send();
};

loadFont('https://fonts.googleapis.com/css?family=Play:700|El+Messiri|Scada:700i|Fira+Mono|Marck+Script&amp;subset=cyrillic&font-display=swap');
