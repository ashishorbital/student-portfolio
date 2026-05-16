// Hamburger menu toggle
(function () {
  const btn = document.querySelector('.navbar__hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll('.navbar__nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    });
  });
})();
