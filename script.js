// Shared script for every page

// Mobile menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.navbar')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Reveal on scroll
const rev = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => rev.observe(el));

// Publication filters (publications page)
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.pub').forEach(p => {
      p.classList.toggle('hidden', f !== 'all' && p.dataset.type !== f);
    });
  });
});

// Contact form → opens the visitor's email app (contact page)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const subject = document.getElementById('cSubject').value.trim() || 'Message from your website';
    const msg = document.getElementById('cMsg').value.trim();
    const body = `${msg}\n\n— ${name} (${email})`;
    const to = form.dataset.email; // set on the <form> tag in contact.html
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Profile photo fallback (home page)
const photo = document.querySelector('.portrait img');
if (photo) {
  const fail = () => { photo.remove(); document.querySelector('.portrait').classList.add('no-img'); };
  if (photo.complete && photo.naturalWidth === 0) fail();
  else photo.addEventListener('error', fail);
}
