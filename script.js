/* ============================================
   TELEGRAM COMMUNITY LANDING PAGE - MAIN SCRIPT
   ============================================ */

// ============================================
// CONFIGURATION - EDIT THIS SECTION ONLY
// ============================================

const CONFIG = {
    // Your Telegram link - EDIT THIS
    TELEGRAM_LINK: 'https://t.me/Love_O_P',

    // Your Telegram username - EDIT THIS
    TELEGRAM_USERNAME: '@Love_O_P',

    // Counter animation duration in milliseconds
    COUNTER_DURATION: 2000,

    // Scroll reveal offset
    REVEAL_OFFSET: 100
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    navbar: document.getElementById('navbar'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenu: document.getElementById('mobile-menu'),
    scrollProgress: document.getElementById('scroll-progress'),
    backToTop: document.getElementById('back-to-top'),
    stickyCta: document.getElementById('sticky-cta'),
    copyBtn: document.getElementById('copy-btn'),
    copyIcon: document.getElementById('copy-icon'),
    checkIcon: document.getElementById('check-icon'),
    counters: document.querySelectorAll('.counter'),
    scrollReveals: document.querySelectorAll('.scroll-reveal'),
    faqItems: document.querySelectorAll('.faq-item'),
    faqTriggers: document.querySelectorAll('.faq-trigger')
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initScrollEffects();
    initMobileMenu();
    initFAQ();
    initCounters();
    initCopyToClipboard();
    initBackToTop();
    initStickyCTA();
    replaceTelegramLinks();
    initSmoothScroll();
});

// ============================================
// LOADING SCREEN
// ============================================

function initLoadingScreen() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            elements.loadingScreen.style.opacity = '0';
            setTimeout(() => {
                elements.loadingScreen.style.display = 'none';
            }, 500);
        }, 800);
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================

function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        elements.navbar.classList.toggle('scrolled', scrolled);

        // Scroll progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled_percent = (winScroll / height) * 100;
        elements.scrollProgress.style.width = scrolled_percent + '%';

        // Back to top button
        if (window.scrollY > 500) {
            elements.backToTop.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            elements.backToTop.classList.add('opacity-0', 'pointer-events-none');
        }

        // Sticky CTA on mobile
        if (window.innerWidth < 768 && window.scrollY > 300) {
            elements.stickyCta.classList.remove('translate-y-full');
        } else {
            elements.stickyCta.classList.add('translate-y-full');
        }
    });

    // Scroll reveal animation
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: `0px 0px -${CONFIG.REVEAL_OFFSET}px 0px`
    });

    elements.scrollReveals.forEach(el => revealObserver.observe(el));
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileMenu.classList.toggle('hidden');
        const isExpanded = !elements.mobileMenu.classList.contains('hidden');
        elements.mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    elements.mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            elements.mobileMenu.classList.add('hidden');
            elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.navbar.contains(e.target)) {
            elements.mobileMenu.classList.add('hidden');
            elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
    elements.faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const isActive = item.classList.contains('active');

            // Close all other items
            elements.faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-content').classList.add('hidden');
                    otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            content.classList.toggle('hidden');
            trigger.setAttribute('aria-expanded', !isActive);
        });
    });
}

// ============================================
// ANIMATED COUNTERS
// ============================================

function initCounters() {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    elements.counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    const duration = CONFIG.COUNTER_DURATION;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(update);
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

function initCopyToClipboard() {
    elements.copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(CONFIG.TELEGRAM_USERNAME);

            // Show check icon
            elements.copyIcon.classList.add('hidden');
            elements.checkIcon.classList.remove('hidden');

            // Reset after 2 seconds
            setTimeout(() => {
                elements.copyIcon.classList.remove('hidden');
                elements.checkIcon.classList.add('hidden');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
}

// ============================================
// BACK TO TOP
// ============================================

function initBackToTop() {
    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// STICKY CTA
// ============================================

function initStickyCTA() {
    // Already handled in scroll effects
}

// ============================================
// REPLACE TELEGRAM LINKS
// ============================================

function replaceTelegramLinks() {
    document.querySelectorAll('a[href="TELEGRAM_LINK"]').forEach(link => {
        link.href = CONFIG.TELEGRAM_LINK;
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // Account for fixed navbar
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });
}
