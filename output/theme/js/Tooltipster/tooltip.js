/*
 * @Author: Kristinita
 * @Date:   2017-01-24 18:34:57
 * @Last Modified by:   Kristinita
 * @Last Modified time: 2017-01-24 18:35:34
 */
$(document).ready(function() {
    var $SashaElement = $('.SashaTooltip');
    $SashaElement.tooltipster({
        content: 'Click to copy code to clipboard',
        theme: ['tooltipster-punk-purple'],
        timer: 2000,
        side: ['left', 'top', 'bottom', 'right']
    });
    $SashaElement.tooltipster({
        content: 'Copied!',
        theme: 'tooltipster-punk-aquamarine',
        trigger: 'click',
        multiple: true,
        timer: 2000,
        side: ['left', 'top', 'bottom', 'right']
    });
});