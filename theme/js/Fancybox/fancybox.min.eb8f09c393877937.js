$(".SashaLazy").each(function(){$(this).replaceWith('<a data-fancybox="gallery" href="'+$(this).attr("data-src")+'">'+$(this)[0].outerHTML+"</a>")}).promise().done(),$('[data-fancybox="gallery"]').fancybox({buttons:["zoom","share","fullScreen","download","thumbs","close"]});
//# sourceMappingURL=fancybox.min.js.map
