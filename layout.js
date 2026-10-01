/* =========================================================
   layout.js — the ONE place to edit the header and footer.
   Every page loads this file, so a change here updates all pages.
   ========================================================= */

const HEADER_HTML = `
<header class="site-header">
  <div class="container nav">
    <a href="index.html" class="brand" aria-label="Home">
      <span class="brand-photo"><img src="Sankaran_SV.jpg" alt="" onerror="this.parentNode.classList.add('no-img'); this.remove();"><span class="ini">SS</span></span>
      <span class="brand-text">
        <span class="brand-name">Sankaran SV</span>
        <span class="brand-sub">PhD Scholar</span>
      </span>
    </a>
    <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false"><svg class="i" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <nav aria-label="Main">
      <ul class="nav-links" id="navLinks">
        <li><a href="research.html"><svg class="i" viewBox="0 0 24 24"><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10"/></svg><span>Research Interests</span></a></li>
        <li><a href="publications.html"><svg class="i" viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13"/></svg><span>Publications</span></a></li>
        <li><a href="teaching.html"><svg class="i" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20l4-4 4 4M7 8h6M7 11h9"/></svg><span>Teaching</span></a></li>
        <li><a href="resources.html"><svg class="i" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></svg><span>Resources</span></a></li>
        <li><a href="education.html"><svg class="i" viewBox="0 0 24 24"><path d="M2 9l10-6 10 6-10 6z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6"/></svg><span>Education</span></a></li>
        <li><a href="contact.html"><svg class="i" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><span>Contact</span></a></li>
      </ul>
    </nav>
  </div>
</header>`;

const FOOTER_HTML = `
<footer>
  <div class="container foot">
    <span>© <span id="year">2026</span> Sankaran SV</span>
    <span>Department of Biotechnology, IIT Madras</span>
    <a href="index.html">Home</a>
    <a href="contact.html">Contact</a>
    <a href="cv.html">CV</a>
  </div>
</footer>`;

// Insert the header right where this script is placed (top of <body>)
document.currentScript.insertAdjacentHTML('afterend', HEADER_HTML);

// Insert the footer at the end of the page
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Highlight the menu item for the current page
(function () {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navLinks a').forEach(a => {
    if (a.getAttribute('href') === here) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();
