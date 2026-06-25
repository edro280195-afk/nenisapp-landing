/* ============================================
   NENI'S APP — Terms Page JavaScript
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
  const termsEs = document.getElementById('terms-es');
  const termsEn = document.getElementById('terms-en');

  const termsTranslations = {
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

      // Toggle terms content visibility
      if (lang === 'en') {
        termsEs.style.display = 'none';
        termsEn.style.display = 'block';
      } else {
        termsEs.style.display = 'block';
        termsEn.style.display = 'none';
      }

      // Translate nav elements
      const t = termsTranslations[lang];
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    });
  });
}
