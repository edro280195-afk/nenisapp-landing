/* ============================================
   NENI'S APP — Deletion Instructions Page JavaScript
   Navbar + Language Toggle
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguageToggle();
});

// ---- Navbar ----
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ---- Language Toggle ----
function initLanguageToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle__btn');
  const deletionEs = document.getElementById('deletion-es');
  const deletionEn = document.getElementById('deletion-en');

  const deletionTranslations = {
    es: {
      'nav.features': 'Funciones',
      'nav.pricing': 'Precios',
      'nav.download': 'Descargar',
      'nav.privacy': 'Privacidad',
      'nav.cta': 'Descargar',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.back': '← Volver al inicio',
    },
    en: {
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.download': 'Download',
      'nav.privacy': 'Privacy',
      'nav.cta': 'Download',
      'footer.rights': 'All rights reserved.',
      'footer.back': '← Back to Home',
    },
  };

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;

      toggleBtns.forEach((b) => b.classList.remove('active'));
      document.querySelectorAll(`.lang-toggle__btn[data-lang="${lang}"]`).forEach((b) => {
        b.classList.add('active');
      });

      document.documentElement.lang = lang;

      // Toggle deletion content visibility
      if (lang === 'en') {
        deletionEs.style.display = 'none';
        deletionEn.style.display = 'block';
      } else {
        deletionEs.style.display = 'block';
        deletionEn.style.display = 'none';
      }

      // Translate nav elements
      const t = deletionTranslations[lang];
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    });
  });
}
