/*
@Author: Kristinita
@Date:   2017-03-17 17:16:39
@Last Modified time: 2018-02-24 17:55:50
 */
var KiraFunction;

//##############
// Sasha-Black #
//##############
// [INFO] Sasha Black script:
KiraFunction = function(url, KiraSite) {
	var adr, domain, l, ms, query;
	/*
	[DEPRECATED]
	If “kristinita.netlify.app”, not “https://kristinita.netlify.app”, works incorrect

	url = parse_url(url).hostname;
	 */
	// [INFO] Select “hostname” from address
	if (url.substring(0, 7) === 'http://') {
		url = url.substring(7);
	}
	if (url.substring(0, 8) === 'https://') {
		url = url.substring(8);
	}
	if (url.substring(0, 4) === 'www.') {
		url = url.substring(4);
	}
	l = url.length;
	if (url.substring(l - 1, l) === '/') {
		url = url.substring(0, l - 1);
	}
	query = KiraSite + url;
	// [INFO] For Robtex:
	if (KiraSite === 'https://www.robtex.com/en/advisory/dns/') {
		// [INFO] Queries as https://www.robtex.com/en/advisory/dns/ru/Kristinita/
		ms = url.split('.');
		if (l > 1) {
			domain = ms[l - 1];
			adr = ms[l - 2];
			// [INFO] Second-level domain:
			query = KiraSite + domain + '/' + adr + '/';
			if (l === 3) {
				query = KiraSite + ms[l - 1] + '/' + ms[l - 2] + '/' + ms[l - 3];
			}
		}
	}
	return window.open(query).focus();
};

//# sourceMappingURL=Sasha-Black.js.map
