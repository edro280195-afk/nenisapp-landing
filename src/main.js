const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const screenButtons = document.querySelectorAll('[data-target-screen]');
const screens = document.querySelectorAll('[data-screen]');
const revealItems = document.querySelectorAll('.reveal');
const currentYear = document.querySelector('[data-current-year]');

function closeMenu() {
  document.body.classList.remove('menu-open');
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  document.body.classList.toggle('menu-open', !isOpen);
  nav?.classList.toggle('open', !isOpen);
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

screenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.targetScreen;

    screenButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
    screens.forEach((screen) => {
      screen.classList.toggle('active', screen.dataset.screen === target);
    });
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    closeMenu();
  }
});

updateHeader();

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
