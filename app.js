// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements with the animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Setup Observer options
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% visible
    };

    // Callback function when intersecting
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger CSS animation
                entry.target.classList.add('visible');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer
    const animationObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Attach observer to elements
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        }
    });
});
