// @Author: Kristinita
// @Date:   2017-04-05 16:32:19
// @Last Modified time: 2017-04-05 16:34:56
//////////////////////
// E-mail obfuscate //
//////////////////////
// http://rot13.florianbersier.com/
// Disable «eo is not defined»,
// https://github.com/xpressyoo/Email-Obfuscator/issues/1
document.getElementById("obf").innerHTML = "<n uers=\"znvygb:FnfunPurealxuRzcerffBsHavirefr@xevfgvavgn.eh?fhowrpg=R-znvy gb Fnfun Purealxu\" gnetrg=\"_oynax\">r-znvy</n>".replace(/[a-zA-Z]/g, function(c) {
	return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
