/* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php */
(function(doc) {
    'use strict';
    var i, j,
        textWrapper,
        idCount = 0,
        rootNode = doc.documentElement,
        headElem = doc.getElementsByTagName('head')[0] || rootNode,
        bodyElem = doc.getElementsByTagName('body')[0] || rootNode,
        detailStyleTag = doc.createElement('style'),
        rules = 'details { display: block; overflow:hidden; } \n' +
        'details[open] { height: auto; } \n' +
        'summary { display:inline-block; } \n' +
        'details * { visibility: hidden; } \n' +
        'summary:first-child { visibility: visible; cursor: pointer; } \n' +
        'details[open] * { visibility: visible } \n' +
        'details[open] summary { margin-bottom: 0; }',
        /* Technically, a summary element has a "Phrasing content" model and should be displayed inline.
         * see http://dev.w3.org/html5/spec/Overview.html#the-summary-element,
         * http://dev.w3.org/html5/spec/Overview.html#phrasing-content
         *
         * FYI: Chrome currently and incorrectly treats the <summary> element as block level.
         */
        addRule = function(styleTag, rule) {
            if (styleTag.nodeName.toLowerCase() === 'style') {
                if (!!styleTag['styleSheet'] && styleTag.styleSheet['cssText'] !== undefined) { //for MSIE
                    styleTag.styleSheet.cssText += '\n' + rule;
                } else { styleTag.appendChild(doc.createTextNode('\n' + rule)); }
            }
        },
        addEvent = function(el, eventName, f) {
            //W3C event biding
            if (el.addEventListener) {
                el.addEventListener(eventName, f);
                //IE event binding
            } else if (el.attachEvent) {
                el.attachEvent('on' + eventName, f);
                // Fallback, but don't overwrite a preexisting "onclick" attribute.
            } else if (el['on' + eventName] === null) {
                el['on' + eventName] = f;
            }
        },
        toggle = function(e) {
            /* When a <summary> element is clicked the parent <details> element's "open"
             * attribute needs to be toggled to maintain the attribute's reflective nature.
             * see http://dev.w3.org/html5/spec/Overview.html#attr-details-open
             */
            var detailsElmnt,
                target = e.target || e.srcElement;
            if (target.nodeName.toLowerCase() === 'summary') {
                detailsElmnt = target;
                while (detailsElmnt.nodeName.toLowerCase() !== 'details') {
                    detailsElmnt = detailsElmnt.parentNode;
                    //Break if we get to the root node without finding a details element.
                    if (detailsElmnt === bodyElem) {
                        detailsElmnt = null;
                        break;
                    }
                }
                if (detailsElmnt) {
                    if (detailsElmnt.getAttribute('open')) {
                        detailsElmnt.removeAttribute('open');
                    } else { detailsElmnt.setAttribute('open', 'open'); }
                    bodyElem.className = bodyElem.className;
                }
            }
        },
        init = function() {
            var detailsID,
                detailsElem,
                summaryElem,
                height, //height of the summary element
                detailsElems = doc.getElementsByTagName('details');
            for (i = 0; i < detailsElems.length; i++) {
                detailsElem = detailsElems[i];
                if (!detailsElem.getAttribute('data-detailsid')) {
                    detailsID = 'd' + (idCount++);
                    detailsElem.className += (' ' + detailsID);
                    detailsElem.setAttribute('data-detailsID', detailsID);
                    /* The spec expects the functional <summary> element to be the first child node of a
                     * <details> element. In practice, it appears the first child <summary> element of a
                     * <detials> element is enlisted as the functional <summary> element and displayed as
                     * though it were the first child. For our purposes, we will do that explicitly.
                     * Additionaly, If a <summary> element does not exist, a default toggle is provided.
                     */
                    summaryElem = detailsElem.getElementsByTagName('summary')[0];
                    if (!summaryElem) {
                        summaryElem = doc.createElement('summary');
                        summaryElem.appendChild(doc.createTextNode('Details'));
                        detailsElem.insertBefore(summaryElem, detailsElem.firstChild);
                    } else if (summaryElem !== detailsElem.firstChild) {
                        detailsElem.removeChild(summaryElem);
                        detailsElem.insertBefore(summaryElem, detailsElem.firstChild);
                    }
                    height = summaryElem.offsetHeight;
                    addRule(detailStyleTag, 'details.' + detailsID + ' { height: ' + height + 'px; }\n' +
                        'details.' + detailsID + '[open] { height: auto; }');
                    //Text nodes are killing me here. Thanks to @Remy for the solve.
                    // Weighing the pros and cons of using a standard element like <span> or <b> vs a non-standard
                    // but more semantically meaninfull <text> element, I think <text> wins, though not without some
                    // regret.
                    for (j = 0; j < detailsElem.childNodes.length; j++) {
                        if (detailsElem.childNodes[j].nodeName === '#text' && (detailsElem.childNodes[j].nodeValue || '').replace(/\s/g, '').length) {
                            textWrapper = document.createElement('text');
                            textWrapper.appendChild(detailsElem.childNodes[j]);
                            detailsElem.insertBefore(textWrapper, detailsElem.childNodes[j]);
                        }
                    }
                }
            }
        };
    /*
     * The inserted stylesheet needs to be first so as to have a minimal cascading coeffecient.
     * It also needs to be added to the DOM before IE can access it's properties.
     * The polyfill only adds default or necessary styling and should not interfere with other style rules.
     */
    headElem.insertBefore(detailStyleTag, headElem.firstChild);
    init();
    addRule(detailStyleTag, rules);
    addEvent(bodyElem, 'click', toggle);
    addEvent(bodyElem, 'DOMSubtreeModified', init);
}(document, undefined));
