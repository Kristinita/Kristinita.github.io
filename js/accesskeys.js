/*
 * @Author: Kristinita
 * @Date:   2017-01-30 13:33:35
 * @Last Modified by:   Kristinita
 * @Last Modified time: 2017-01-30 13:41:06
 */
// Хоткеи для поисковой формы, работает в Firefox и Internet Explorer, см. http://ru.stackoverflow.com/a/560571/199934
$(document).ready(function() {
    function setAccessKey() {
        if ($('#gsc-i-id1').length === 0)
            setTimeout(setAccessKey, 500);
        else
            $('#gsc-i-id1').attr('accesskey', 'k');
    }
    setTimeout(setAccessKey, 500); // Нужно, потому что поиск от Google может загрузиться позже страницы
});
