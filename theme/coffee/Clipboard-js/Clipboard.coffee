###
@Author: Kristinita
@Date:	 2017-04-09 09:17:06
@Last Modified time: 2018-05-04 08:57:40
###
################
# Clipboard.js #
################
###
Activate Clipboard.js for .SashaButton class
[DEPRECATED] Works without DOM initialization
http://ru.stackoverflow.com/a/582520/199934
[DEPRECATED] For Rainbow: http://stackoverflow.com/a/33758293/5951529
[NEW] For SuperFences: https://stackoverflow.com/a/33758435/5951529
###
new Clipboard('.SashaButton', text: (trigger) ->
	$(trigger).closest('.SashaBlockHighlight').find('pre').text()
)
