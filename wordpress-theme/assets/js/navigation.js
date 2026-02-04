/**
 * Navigation functionality
 *
 * @package ElevateQCS
 */

(function() {
    'use strict';

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!mobileMenuToggle || !mainNav) {
        return;
    }

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('is-open');
        
        // Update button icon
        const icon = this.querySelector('svg');
        if (!isExpanded) {
            icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
        } else {
            icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
        }
    });

    // Close mobile menu on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
            mobileMenuToggle.click();
        }
    });

    // Dropdown keyboard navigation
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(function(dropdown) {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        const menu = dropdown.querySelector('.nav-dropdown-menu');
        const items = menu.querySelectorAll('.dropdown-item');
        
        // Toggle dropdown on click for touch devices
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('is-open');
        });
        
        // Keyboard navigation within dropdown
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdown.classList.toggle('is-open');
                if (dropdown.classList.contains('is-open') && items.length > 0) {
                    items[0].focus();
                }
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                dropdown.classList.add('is-open');
                if (items.length > 0) {
                    items[0].focus();
                }
            }
        });
        
        items.forEach(function(item, index) {
            item.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (index < items.length - 1) {
                        items[index + 1].focus();
                    }
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (index > 0) {
                        items[index - 1].focus();
                    } else {
                        toggle.focus();
                    }
                }
                if (e.key === 'Escape') {
                    dropdown.classList.remove('is-open');
                    toggle.focus();
                }
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('is-open');
            }
        });
    });
})();
