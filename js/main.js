// ======= CUSTOM CURSOR =======
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
  document.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, label, .blog-card, .feature-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorGlow.style.width = '60px';
      cursorGlow.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
      cursorGlow.style.width = '24px';
      cursorGlow.style.height = '24px';
    });
  });
}

// ======= TYPED TEXT =======
const typedEl = document.querySelector('.typed-text');
if (typedEl) {
  const words = [
    'Business Analyst',
    'Data Storyteller',
    'Process Architect',
    'Agile Practitioner',
    'Golf Enthusiast ⛳',
  
  ];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    if (!deleting) {
      typedEl.textContent = word.slice(0, ci++);
      if (ci > word.length) { deleting = true; setTimeout(type, 1600); return; }
    } else {
      typedEl.textContent = word.slice(0, ci--);
      if (ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}

// ======= SCROLL REVEAL =======
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));
// Trigger immediately for visible ones
document.querySelectorAll('.reveal').forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) el.classList.add('visible');
});

// ======= NAV SCROLL =======
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5,5,16,0.95)';
  } else {
    navbar.style.background = 'rgba(5,5,16,0.7)';
  }
});

// ======= HAMBURGER =======
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ======= ACTIVE NAV LINK =======
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
});
