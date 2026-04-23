// Sticky header removed as requested

// Simple intersection observer for fading in elements
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.mission-card, .section-title, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// Cinematic Quote Rotator
const quotes = [
    { text: '"Plutopia is disrupting story telling with AI"', author: '- Lauren Diamont, VP of Triller' },
    { text: '"Dope AF"', author: '- Snoop Dogg' },
    { text: '"Plutopia is the indie Pixar"', author: '- Jon Henson, VP of Doing Things' },
    { text: '"Plutopia Studios is one of the leading forces in AI filmmaking"', author: '- Jesse Wellens, Founder of Deathrow AI' },
    { text: '"Plutopia Bridges the gap between traditional creation and AI"', author: '- Josh Cohen, Paradigm Talent Agency' },
    { text: '"Going crazy with the AI!"', author: '- Sway Lee' }
];

let currentQuoteIdx = 0;
const quoteContainer = document.querySelector('.hero-quote-container');
const quoteText = document.getElementById('dynamic-quote');
const quoteAuthor = document.getElementById('dynamic-author');

if (quoteContainer && quoteText && quoteAuthor) {
    setInterval(() => {
        // Fade out
        quoteContainer.classList.add('fade-out');
        
        // Wait for CSS transition, swap text, fade back in
        setTimeout(() => {
            currentQuoteIdx = (currentQuoteIdx + 1) % quotes.length;
            quoteText.textContent = quotes[currentQuoteIdx].text;
            quoteAuthor.textContent = quotes[currentQuoteIdx].author;
            quoteContainer.classList.remove('fade-out');
        }, 600); 
    }, 4500); // Rotate every 4.5 seconds
}

// Mobile Hamburger Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
