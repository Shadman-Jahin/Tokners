// * ==========
// * LENIS
// * ==========

// 1. Initialize Lenis
function initializeLenis() {
    const lenis = new Lenis({
        duration: 1.5, // Duration of the smooth scroll animation in seconds
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smoothWheel: true, // Enables smooth scrolling for mouse wheel
        wheelMultiplier: 1.5, // Adjust scroll speed for mouse wheel
        smoothTouch: false, // Disables smooth scrolling for touch devices (often better for mobile performance)
        touchMultiplier: 2, // Adjust scroll speed for touch
        infinite: false, // Enables infinite scroll
        autoRaf: true, // Automatically calls lenis.raf(time) using requestAnimationFrame
        // lerp: 0.01, // Lenis uses `duration` for smooth transition, but `lerp` is also an option for interpolation.
        // If you set `duration`, `lerp` will be derived.
        // A lower `lerp` value means a smoother, more "laggy" feel, but Lenis's `duration` handles this better.
    });
}

// Ensure Lenis initializes after the DOM is ready
document.addEventListener('DOMContentLoaded', initializeLenis);

// * ====================
// * AOS INITIALIZE
// * ====================
AOS.init({
    duration: 1000
});

// * ======================
// * COOKIES
// * ======================

const offcanvas = document.querySelector("#custom-cookies");
window.addEventListener("load", () => {
    setTimeout(() => {
        if (offcanvas) {
            const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
            bsOffcanvas.show();
        }
    }, 10000); // 10 seconds
});