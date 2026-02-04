/**
 * Header scroll effect
 *
 * @package ElevateQCS
 */

(function() {
    'use strict';

    const header = document.querySelector('.site-header');
    
    if (!header) {
        return;
    }

    let lastScrollY = 0;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    updateHeader();
})();
