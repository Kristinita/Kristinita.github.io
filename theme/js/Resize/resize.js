// @Author: SashaChernykh
// @Date:   2017-03-30 20:33:15
// @Last Modified time: 2017-03-30 20:35:36
// Refresh page content, if window resize, see
// http://stackoverflow.com/a/37008766/5951529
// Because Mailhu hide page content, if resize window
window.addEventListener('resize', function(event) {
	clearTimeout(resizeTimeout);
	var resizeTimeout = setTimeout(function(){
		window.location.reload();
	}, 1500);
});
