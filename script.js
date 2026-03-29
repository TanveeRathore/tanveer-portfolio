// ═══════════════════════════════════════════════
//   TANVEER RATHORE PORTFOLIO — SCRIPT
// ═══════════════════════════════════════════════

// ── CURSOR GLOW ──────────────────────────────
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ── LOADER ───────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    setTimeout(() => document.getElementById('loader').remove(), 700);
  }, 2400);
});

// ── NAVBAR SCROLL ────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE MENU ──────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.innerHTML = mobileMenu.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
}

// ── TYPEWRITER EFFECT ────────────────────────
const texts = [
  'Premium Websites. ✨',
  'E-Commerce Stores. 🛒',
  'Dark UI Designs. 💎',
  'WhatsApp Solutions. 📱',
  'Mobile-First Apps. 🚀',
];
let textIdx = 0, charIdx = 0, isDeleting = false;
const dynamicEl = document.getElementById('dynamic-text');

function typeWriter() {
  const current = texts[textIdx];
  if (isDeleting) {
    dynamicEl.textContent = current.substring(0, charIdx--);
    if (charIdx < 0) { isDeleting = false; textIdx = (textIdx + 1) % texts.length; setTimeout(typeWriter, 400); return; }
  } else {
    dynamicEl.textContent = current.substring(0, charIdx++);
    if (charIdx > current.length) { isDeleting = true; setTimeout(typeWriter, 1800); return; }
  }
  setTimeout(typeWriter, isDeleting ? 50 : 80);
}
setTimeout(typeWriter, 2800);

// ── FLOATING CODE PARTICLES ──────────────────
const codeSymbols = ['<div>', '</>', '{...}', 'function()', 'const', '=> {}', 'return', '.html', '.css', '.js', '#', '&&', '||', '==='];
const particlesContainer = document.getElementById('particles');
function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  p.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (12 + Math.random() * 15) + 's';
  p.style.animationDelay = (Math.random() * 5) + 's';
  p.style.fontSize = (.6 + Math.random() * .5) + 'rem';
  particlesContainer.appendChild(p);
  setTimeout(() => p.remove(), 27000);
}
setInterval(createParticle, 1500);
for (let i = 0; i < 5; i++) setTimeout(createParticle, i * 600);

// ── SCROLL ANIMATIONS ────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Skill bars
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const w = bar.dataset.width;
        setTimeout(() => bar.style.width = w + '%', 200);
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(el => observer.observe(el));

// ── SMOOTH SCROLL FOR NAV ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── CONTACT FORM (WhatsApp) ──────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const email = document.getElementById('cf-email').value;
  const type = document.getElementById('cf-type').value;
  const msg = document.getElementById('cf-msg').value;
  const wa = `Hello Tanveer! 👋\n\nMera naam *${name}* hai.\nEmail: ${email}\nProject: ${type || 'General'}\n\nMessage:\n${msg}\n\nContact karo mujhe please!`;
  window.open(`https://wa.me/919461555827?text=${encodeURIComponent(wa)}`, '_blank');
}
