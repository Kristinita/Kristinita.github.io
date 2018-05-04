/*
@Author: Kristinita
@Date:   2018-03-20 10:35:20
@Last Modified time: 2018-03-21 09:49:03
*/
//########
// Slick #
//########
// JQuery carousel and/or slideshow
// http://kenwheeler.github.io/slick/
$(document).ready(function() {
	$('.slider').slick({
		/*
		[NOTE] If “ondemand”, need wrap each image in <div>:
		https://github.com/kenwheeler/slick/issues/1473#issuecomment-150086856
		“ondemand” vs “progressive”:
		https://stackoverflow.com/a/25726743/5951529
		[NOTE] First 3 images load not lazy, after images load lazy.
		*/
		lazyLoad: 'ondemand',
		autoplay: true,
		// [NOTE] If true, slides works incorrect.
		variableWidth: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		fade: true,
		speed: 1000,
		arrows: false,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
		pauseOnFocus: false,
		pauseOnHover: false
	});
});

//# sourceMappingURL=slick.js.map
