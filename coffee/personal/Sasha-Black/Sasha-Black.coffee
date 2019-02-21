###
@Author: Kristinita
@Date:   2017-03-17 17:16:39
@Last Modified time: 2018-02-24 17:55:50
###
###############
# Sasha-Black #
###############
# Sasha-Black script:
KiraFunction = (url, KiraSite) ->
	# Select “hostname” from address
	# [DEPRECATED]
	# If “Kristinita.ru”, not “https://kristinita.ru”, works incorrect
	# url = parse_url(url).hostname;
	if url.substring(0, 7) is 'http://'
		url = url.substring(7)
	if url.substring(0, 8) is 'https://'
		url = url.substring(8)
	if url.substring(0, 4) is 'www.'
		url = url.substring(4)
	l = url.length
	if url.substring(l - 1, l) is '/'
		url = url.substring(0, l - 1)
	query = KiraSite + url
	# For Robtex:
	if KiraSite is 'https://www.robtex.com/en/advisory/dns/'
		# Queries as https://www.robtex.com/en/advisory/dns/ru/Kristinita/
		ms = url.split('.')
		if l > 1
			domain = ms[l - 1]
			adr = ms[l - 2]
			# Second-level domain:
			query = KiraSite + domain + '/' + adr + '/'
			if l is 3
				query = KiraSite + ms[l - 1] + '/' + ms[l - 2] + '/' + ms[l - 3]
	# “Window.open(query, "nw"); nw.focus();”
	window.open(query).focus()
	return
