// Shared script for every page

// Mobile menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Publication filters (publications page)
const filters = document.querySelectorAll('.filter');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.pub').forEach(p => {
      p.classList.toggle('hidden', f !== 'all' && p.dataset.type !== f);
    });
    // hide a year heading when none of its papers are visible
    document.querySelectorAll('.year-group').forEach(g => {
      g.classList.toggle('hidden', !g.querySelector('.pub:not(.hidden)'));
    });
  });
});

// Contact form -> opens the visitor's email app (contact page)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = id => document.getElementById(id).value.trim();
    const subject = v('cSubject') || 'Message from your website';
    const body = `${v('cMsg')}\n\n— ${v('cName')} (${v('cEmail')})`;
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// Profile photo fallback: show initials if profile.jpg is missing
const photo = document.querySelector('.avatar img');
if (photo) {
  const fail = () => { photo.remove(); document.querySelector('.avatar').classList.add('no-img'); };
  if (photo.complete && photo.naturalWidth === 0) fail();
  else photo.addEventListener('error', fail);
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
