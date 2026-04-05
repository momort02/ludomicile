// ========== NAVIGATION & SMOOTH SCROLL ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('button a, .nav-link');

// Mobile Menu Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            if (navMenu) navMenu.classList.remove('active');
        }
    });
});

// ========== GALLERY FILTER (The Core Feature) ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const filterValue = e.target.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            // Reset animation
            item.style.animation = 'none';
            item.offsetHeight; // trigger reflow
            
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'fadeInGallery 0.5s ease-in-out forwards';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ========== CONTACT FORM SUBMISSION ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '⏳ Envoi en cours...';
        submitButton.disabled = true;

        // Simulate API Call
        setTimeout(() => {
            submitButton.textContent = '✓ Message envoyé !';
            submitButton.style.backgroundColor = '#10B981';
            this.reset();

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 4000);
        }, 1500);
    });
}

// ========== SCROLL ANIMATIONS (Intersection Observer) ==========
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Attach observer to sections
document.querySelectorAll('section, .gallery-item').forEach(el => {
    observer.observe(el);
});

// ========== DYNAMIC STYLES ==========
const styleElement = document.createElement('style');
styleElement.textContent = `
    .fade-in-visible {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    .hidden { display: none; }
    @keyframes fadeInGallery {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleElement);

console.log('%c🧱 LUDO MICILE - Maçonnerie Tergnier Active', 'font-weight: bold; color: #a04040;');