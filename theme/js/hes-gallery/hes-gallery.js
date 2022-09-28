//##############
// hes-gallery #
//##############
/*
[OVERVIEW] Light, dependency free responsive lightbox/gallery:
https://github.com/demtario/hes-gallery
https://demtario.github.io/hes-gallery/demo/

[OPTIONS] https://github.com/demtario/hes-gallery#global-options
 */
HesGallery.init({
	/*
	[INFO] “Create loop on gallery, you can go from last photo to first with one click”
	 */
	wrapAround: true,
	/*
	[INFO] Disable request to styles from hes-gallery script:
	https://github.com/demtario/hes-gallery/blob/b5cd99a14177bfa9eea50fe1110dc608cbca8365/src/hes-gallery.js#L76-L78

	Reasons:
		1. “element.innerHTML +=” is bad for web performance:
		https://stackoverflow.com/a/11515395/5951529
		2. I can do a hes-gallery script and styles uploading parallel, not sequential.
		This is a plus for a web-performance.
		3. Non-critical styles are best loaded with Defer.js:
		https://github.com/shinsenter/defer.js#Defer.css
		4. My experience shows that unpkg works less stable than JSDelivr.
		Site loading sometimes hangs due to slow unpkg.
	 */
	hostedStyles: false
});

//# sourceMappingURL=hes-gallery.js.map
