// Animated hero bar
const heroAnim = document.querySelector('.hero-anim');
let hue = 180;
setInterval(() => {
  hue = (hue + 2) % 360;
  heroAnim.style.background = `linear-gradient(90deg, hsl(${hue},100%,50%), #8f00ff, hsl(${(hue+180)%360},100%,50%))`;
}, 60);

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .stagger-item');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

// Trigger initial animations for elements already in view
window.addEventListener('load', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .stagger-item');
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInView) {
      el.classList.add('visible');
    }
  });
});

const phrases = [
  "Computer Science Student ",
  "Web Developer ",
  "UI/UX Developer ",
  "Software Developer "
];

const el = document.getElementById("typed-text");

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    el.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    el.textContent = currentPhrase.substring(0, letterIndex++);
  }

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1200); // pause after complete word
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Project card hover effect (pulse)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.animate([
      { boxShadow: '0 4px 32px #0ff1, 0 1px 8px #8f00ff22' },
      { boxShadow: '0 8px 48px #8f00ff44, 0 2px 16px #0ff4' }
    ], { duration: 300, fill: 'forwards' });
  });
});

// Contact form alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
}); 
