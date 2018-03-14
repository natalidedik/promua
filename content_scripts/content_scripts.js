'use strict';


function removeAds() {
    var matches = document.querySelectorAll('.js-productad');
    for (var i = 0; i < matches.length; i++)
        matches[i].parentElement.removeChild(matches[i]);
}

removeAds();

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg === 'hashchanged') {
        window.setInterval(function () {
            removeAds();
        }, 100);
    }
});

