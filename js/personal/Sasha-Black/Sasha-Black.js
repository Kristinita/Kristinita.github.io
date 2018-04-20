// @Author: Kristinita
// @Date:   2017-03-17 17:16:39
// @Last Modified time: 2018-02-24 17:55:50
function SashaFunction(url, SashaSite) {
	//url = parse_url(url).hostname; // Выделяем из произвольного адреса только hostname
	//Убрано, поскольку если адрес введут неполным, т. е. не "https://kristinita.ru" а просто "Kristinita.ru", работает некорректно

	if (url.substring(0, 7) == "http://") url = url.substring(7);
	if (url.substring(0, 8) == "https://") url = url.substring(8);
	if (url.substring(0, 4) == "www.") url = url.substring(4);

	var l = url.length;
	if (url.substring(l - 1, l) == '/') url = url.substring(0, l - 1);

	var query = SashaSite + url; // Для большинства сайтов достаточно сформировать строку так, но если появятся исключения, добавим

	if (SashaSite == 'https://www.robtex.com/en/advisory/dns/') // Вот и исключение
	{ // Здесь нужны запросы вида https://www.robtex.com/en/advisory/dns/ru/Kristinita/
		var ms = url.split(".");
		if (l > 1) {
			var domain = ms[l - 1];
			var adr = ms[l - 2]; // Нужен только домен 2-го уровня
			query = SashaSite + domain + '/' + adr + '/';
			if (l == 3) query = SashaSite + ms[l - 1] + '/' + ms[l - 2] + '/' + ms[l - 3];
		}
	}

	//Window.open(query, "nw");  nw.focus();
	window.open(query).focus();
}
