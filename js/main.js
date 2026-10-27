document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.site-menu, .mobile-menu-btn');
  const menu = document.querySelector('.site-links, .nav-links');
  if (menuButton && menu) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });
});
