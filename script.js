document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('section, .video-card, .glass-panel, .gallery-item');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Mouse Tracking for Parallax
    document.addEventListener('mousemove', (e) => {
        // Update Parallax Globs
        const xPct = e.clientX / window.innerWidth;
        const yPct = e.clientY / window.innerHeight;

        const globs = document.querySelectorAll('.background-glob');
        globs.forEach((glob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (0.5 - xPct) * speed;
            const yOffset = (0.5 - yPct) * speed;
            glob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});
