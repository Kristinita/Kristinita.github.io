//############
// lazysizes #
//############
/*
[INFO] Lazy loading images and iframes:
https://github.com/aFarkas/lazysizes#js-api---events
https://afarkas.github.io/lazysizes/index.html
 */
/*
[INFO] Update the scrollbar after image loading,
otherwise Gemini Scrollbar will have incorrect positions:
https://github.com/aFarkas/lazysizes#js-api---events
https://github.com/noeldelgado/gemini-scrollbar#basic-methods
 */
document.addEventListener('lazybeforeunveil', function() {
	return internals.scrollbar.update();
});

//# sourceMappingURL=lazysizes.js.map
