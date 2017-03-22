	var Supports = {
		details: ('open' in document.createElement('details'))
	};
	yepnope({
		test: Supports.details,
		nope: 'details.polyfill.js'
	});
