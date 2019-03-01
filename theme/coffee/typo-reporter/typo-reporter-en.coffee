###
@Author: Kristinita
@Date:   2018-02-22 11:54:50
@Last Modified time: 2018-02-22 11:59:46
###
#################
# typo-reporter #
#################
# Script, that users can send message about site typos:
# https://www.npmjs.com/package/typo-reporter
# https://kristinita.ru/IT-articles/typo-reporter
# https://github.com/psmb/typo-reporter/issues/4#issuecomment-367471138
rootNode = document.createElement("div")
document.body.appendChild rootNode
typo = new TypoReporter({
	formId: "<%= form_id_typo_reporter %>"
	locale: "en"
	offset: 44
}, rootNode)
