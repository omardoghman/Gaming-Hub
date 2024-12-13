// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adding animation to game cards
document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('mouseover', () => {
        game.style.transform = 'scale(1.1)';
        game.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
    });
    game.addEventListener('mouseout', () => {
        game.style.transform = 'scale(1)';
        game.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    });
});

// Dynamic hero section background animation
const heroSection = document.querySelector('.hero-section');
let gradientPosition = 0;
function animateBackground() {
    gradientPosition += 1;
    heroSection.style.background = `linear-gradient(${gradientPosition}deg, #5d4b8f, #3e2f5b)`;
    requestAnimationFrame(animateBackground);
}
animateBackground();

// Interactive form submission message
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});