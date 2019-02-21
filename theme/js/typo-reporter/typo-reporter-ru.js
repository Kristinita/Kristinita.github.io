/*
@Author: Kristinita
@Date:   2018-02-22 11:54:50
@Last Modified time: 2018-02-22 12:00:36
 */
var rootNode, typo;

//################
// typo-reporter #
//################
// Script, that users can send message about site typos:
// https://www.npmjs.com/package/typo-reporter
// https://kristinita.ru/IT-articles/typo-reporter
// https://github.com/psmb/typo-reporter/issues/4#issuecomment-367471138
rootNode = document.createElement('div');

document.body.appendChild(rootNode);

typo = new TypoReporter({
	formId: '1FAIpQLSfu5tnuHYKNPjH0n1fR9EmWDHwlFESzJj7JQFu_O5IS8G5R2A',
	locale: 'ru',
	offset: 44
}, rootNode);
