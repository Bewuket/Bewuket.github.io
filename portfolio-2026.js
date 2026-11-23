(() => {
  const nav = document.querySelector('#main-nav');
  const menu = document.querySelector('.menu-button');
  if (nav && menu) {
    const close = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation menu'); };
    menu.addEventListener('click', () => {
      const next = !nav.classList.contains('open');
      nav.classList.toggle('open', next);
      menu.setAttribute('aria-expanded', String(next));
      menu.setAttribute('aria-label', next ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('.project-card[data-tags]')];
  for (const filter of filters) {
    filter.addEventListener('click', () => {
      const selected = filter.dataset.filter;
      filters.forEach(button => {
        const active = button === filter;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      projects.forEach(card => {
        card.hidden = selected !== 'all' && !card.dataset.tags.split(' ').includes(selected);
      });
    });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
