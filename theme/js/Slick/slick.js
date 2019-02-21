/*
@Author: Kristinita
@Date:	 2018-03-20 10:35:20
@Last Modified time: 2018-03-21 09:49:03
 */
//########
// Slick #
//########
// JQuery carousel and/or slideshow:
// http://kenwheeler.github.io/slick/
// Options:
// http://kenwheeler.github.io/slick/#settings
$(document).ready(function() {
	$('.KiraSlider').slick({
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

// [INFO] srcset support:
// https://github.com/kenwheeler/slick/pull/1661#issuecomment-386572834
// [WARNING] PageSpeed Insights doesn't support it:
// https://github.com/GoogleChrome/lighthouse/issues/7245
// [FIXME] Migrate to Swiper:
// http://idangero.us/swiper/get-started/
$('.KiraSlider').on('lazyLoaded', function(evt) {
	$(evt.currentTarget).find('source').each(function(i, source) {
		var $source;
		$source = $(source);
		$source.attr('srcset', $source.data('lazy-srcset'));
	});
});
