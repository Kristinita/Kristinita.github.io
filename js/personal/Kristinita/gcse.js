/*    Place this tag where you want both of the search box and the search results to render-- >
    enableHistory = true enables history management. < gcse: search enableHistory = true > < /gcse:search>

    < gcse: searchbox enableHistory = true autoCompleteMaxCompletions = 10 > < /gcse:searchbox> < gcse: searchresults > < /gcse:searchresults>
*/
(function() {
    var cx = '013024336414733191742:lmo7aip_90c'; // Insert your own Custom Search engine ID here
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    // Gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    /*

    Add autofocus, see https://www.experts-exchange.com/questions/27924508/How-to-get-autofocus-in-the-search-field-using-Google's-Search-Engine-on-a-site.html#a38565775 ;

    Replace eval, see https://github.com/eslint/eslint/issues/7861#issuecomment-270670327

    */
    // 1000 delay work not always, I increase delay
    setTimeout(function() {
        document.getElementById('gsc-i-id1').focus();
    }, 1500);
    s.parentNode.insertBefore(gcse, s);
}());
