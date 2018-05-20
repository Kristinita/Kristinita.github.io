/*
@Author: Kristinita
@Date:   2017-01-30 13:33:35
@Last Modified time: 2017-01-30 13:39:59
*/
(function() {  //##############################
	// Google Custom Search Engine #
	//##############################
	// Custom Search Engine:
	// https://www.google.com/cse/
	// [WARNING]: New search engine, because in old error “X-Frame-Options”:
	// http://stackoverflow.com/a/32696709/5951529
	// [NOTE] “enableHistory = true” enables history management.
	/*
	[DEPRECATED] Old form.
	< gcse: search enableHistory = true > < /gcse:search>
	< gcse: searchbox enableHistory = trueautoCompleteMaxCompletions = 10 >
	< /gcse:searchbox> < gcse: searchresults > < /gcse:searchresults>
	*/
	var cx, gcse, s;
	cx = '013024336414733191742:sps98skj394';
	gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	s = document.getElementsByTagName('script')[0];
	/*
	Add autofocus for Google Custom Search Engine Form:
	http://bit.ly/2Iq1nGs ;
	Replace eval: https://github.com/eslint/eslint/issues/7861#issuecomment-270670327
	*/
	// 1000 delay work not always, I increase delay
	setTimeout((function() {
		document.getElementById('gsc-i-id1').focus();
	}), 1500);
	s.parentNode.insertBefore(gcse, s);
})();
