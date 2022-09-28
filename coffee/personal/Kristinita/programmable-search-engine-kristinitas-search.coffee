###
@Author: Kristinita
@Date:   2017-01-30 13:33:35
@Last Modified time: 2017-01-30 13:39:59
###
###############################
# Google Custom Search Engine #
###############################
###
[OVERVIEW] Programmable Search Engine:
https://programmablesearchengine.google.com/about/

[INFO] New search engine, because in old error “X-Frame-Options”:
http://stackoverflow.com/a/32696709/5951529

[INFO] “enableHistory = true” enables history management.

[DEPRECATED] Old form.
< gcse: search enableHistory = true > < /gcse:search>
< gcse: searchbox enableHistory = trueautoCompleteMaxCompletions = 10 >
< /gcse:searchbox> < gcse: searchresults > < /gcse:searchresults>
###
do ->
	cx = '013024336414733191742:sps98skj394'
	gcse = document.createElement('script')
	gcse.type = 'text/javascript'
	gcse.async = true
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore gcse, s
	return


###
[INFO] Add autofocus for Programmable Search Engine Form:
http://bit.ly/2Iq1nGs

[LEARN][JAVASCRIPT] Replace eval:
https://github.com/eslint/eslint/issues/7861#issuecomment-270670327

[NOTE] Big timeout, because I can get errors in browsers console:
“TypeError: document.getElementById(…) is null”:
https://ru.stackoverflow.com/q/941455/199934
###
setTimeout (->
	document.getElementById('gsc-i-id1').focus()
	return
), 7000
