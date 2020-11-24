// [DECLINED] I migrate to Chocolat:
// [LINK] “../Chocolat/chocolat.coffee”
// ###
// @Author: Kristinita
// @Date:	 2017-04-04 13:01:15
// @Last Modified time: 2017-04-14 14:37:51
// ###
// ############
// # Fancybox #
// ############
// ###
// Modal window for images:
// http://fancyapps.com/fancybox/3/
// http://fancyapps.com/fancybox/3/docs/#options
// http://xiper.net/collect/js-plugins/gallery/fancybox
// ###
// # [INFO] Disable <a> wrapper for FancyBox 3:
// # https://stackoverflow.com/a/25908042/5951529
// $('.SashaLazy').each(->
// 	$(this).replaceWith '<a data-fancybox="gallery" href="' + $(this).attr('data-src') + \
// 	'">' + $(this)[0].outerHTML + '</a>'
// 	return
// ).promise().done()
// # [INFO] FancyBox3 options:
// # https://fancyapps.com/fancybox/3/docs/#options
// # Show all buttons in top right corner
// # [BUG] Scrollbar scroll to top for galleries:
// # https://github.com/fancyapps/fancybox/issues/2186
// # So I remove 'slideShow' button.
// $('[data-fancybox="gallery"]').fancybox buttons: [
// 	'zoom'
// 	'share'
// 	'fullScreen'
// 	'download'
// 	'thumbs'
// 	'close'
// ]


//# sourceMappingURL=fancybox.js.map
