// Lightweight enhancements — the site works without a JavaScript build step.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const filters = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach(card => {
      const tags = (card.dataset.tags || '').split(' ');
      card.hidden = value !== 'all' && !tags.includes(value);
    });
  });
});
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
