// ==UserScript==
// @name         YouTube (AD Remover)
// @namespace    http://tampermonkey.net/
// @version      2025-11-27
// @description  https://github.com/RaZoshi
// @author       razoshi
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const classes = ["style-scope ytd-in-feed-ad-layout-renderer"];
    const ids = ["rendering-content"];

    function removeAds() {
        classes.forEach(cls => {
            const ads = document.querySelectorAll(`.${cls.split(' ').join('.')}`);
            ads.forEach(ad => ad.remove());
        });

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });
    }

    removeAds();

    const observer = new MutationObserver(() => {
        removeAds();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
