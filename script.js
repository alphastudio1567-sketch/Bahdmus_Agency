// Simple JavaScript for Bahdmus Agency Portfolio

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--bg-dark)';
            navLinks.style.padding = 'var(--space-md)';
            navLinks.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.style.display = 'none';
        }
    });
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Update copyright year
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
    yearSpan.textContent = yearSpan.textContent.replace('2024', new Date().getFullYear());
}

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Console greeting
console.log('%c🎨 Bahdmus Agency Portfolio', 'color: #ff3366; font-size: 18px; font-weight: bold;');
console.log('%cStrategic web development for artists and creators', 'color: #00d4ff;');
console.log('%cWhatsApp: +234 907 430 6279', 'color: #25D366;');
