/* ============================================
   NENI'S APP — Main JavaScript
   Parallax, Scroll Animations, Counter, i18n
   ============================================ */

// ---- i18n Translations ----
const translations = {
  es: {
    'nav.features': 'Funciones',
    'nav.pricing': 'Precios',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.cta': 'Descargar',
    'hero.badge': 'Tu negocio en la palma de tu mano',
    'hero.title': 'Lleva tu negocio de <span class="accent">neni</span> al siguiente nivel',
    'hero.subtitle': 'Organiza pedidos, clientas, entregas, tandas, rifas, proveedores y finanzas. Todo desde una sola app diseñada para ti, emprendedora.',
    'hero.cta': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Descarga la App',
    'hero.cta2': '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> Ver Funciones',
    'hero.coming': 'Próximamente',
    'hero.note': 'Disponible pronto para iOS y Android',
    'hero.float1': '+15 pedidos hoy',
    'hero.float2': '$3,250 en ventas',
    'hero.float3': '8 clientas nuevas',
    'hero.scroll': 'Desliza para explorar',
    'partners.label': 'Diseñada para emprendedoras de',
    'features.badge': '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> Todo lo que necesitas',
    'features.title': 'Herramientas para <span class="accent">emprendedoras</span> como tú',
    'features.subtitle': 'Cada función fue diseñada pensando en las necesidades reales de las nenis que venden por redes sociales.',
    'features.orders.title': 'Captura de Pedidos',
    'features.orders.desc': 'Registra cada pedido al instante desde tu live o grupo. Producto, cantidad, precio y estado en un solo tap.',
    'features.clients.title': 'Gestión de Clientas',
    'features.clients.desc': 'Identifica a tus clientas nuevas y frecuentes. Historial de compras, preferencias y datos de contacto organizados.',
    'features.delivery.title': 'Días de Entrega',
    'features.delivery.desc': 'Planifica y organiza tus rutas de entrega. Agenda fechas, horarios y puntos de encuentro sin perder detalle.',
    'features.tandas.title': 'Tandas Ilimitadas',
    'features.tandas.desc': 'Administra todas tus tandas sin límite. Controla pagos, turnos, participantes y cobros desde un solo lugar.',
    'features.rifas.title': 'Rifas',
    'features.rifas.desc': 'Crea rifas para tus seguidoras. Define boletos, premios, participantes y sorteo automático. ¡Más engagement!',
    'features.finance.title': 'Finanzas Completas',
    'features.finance.desc': 'Controla ingresos, gastos, ganancias y proveedores. Reportes claros para saber exactamente cómo va tu negocio.',
    'highlight.badge': '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 23c-3.6 0-8-2.9-8-9 0-3.4 2.5-6.4 4-7.6.6-.5 1.5-.1 1.6.7l.2 2c0 .3.3.5.5.4.8-.3 2.1-1.2 3-3.5.3-.7 1.2-.8 1.7-.3C17.5 8.4 20 12.1 20 14c0 6.1-4.4 9-8 9z"/></svg> Más que una app',
    'highlight.title': 'No solo una app, tu <span class="accent">socia</span> de negocios',
    'highlight.desc': "Neni's App fue creada por emprendedoras, para emprendedoras. Sabemos lo que es vender en lives, contestar 100 mensajes y llevar todo en la libreta. Ahora todo está en un solo lugar.",
    'highlight.stat1': 'Pedidos gestionados',
    'highlight.stat2': 'Emprendedoras',
    'highlight.stat3': 'Satisfacción',
    'pricing.badge': '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12l4 8-10 10L2 11l4-8zm6 14.5L18.5 11 16 5H8L5.5 11 12 17.5z"/></svg> Planes accesibles',
    'pricing.title': 'Elige el plan <span class="accent">perfecto</span> para ti',
    'pricing.subtitle': 'Invierte en tu negocio. Todos los planes incluyen tandas ilimitadas y actualizaciones constantes.',
    'pricing.period': '/ mes',
    'pricing.popular': '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Más Popular',
    'pricing.cta': 'Empezar Ahora',
    'pricing.entrada.name': 'Entrada',
    'pricing.entrada.f1': 'Captura de pedidos básica',
    'pricing.entrada.f2': 'Hasta 50 clientas',
    'pricing.entrada.f3': 'Tandas ilimitadas',
    'pricing.entrada.f4': 'Calendario de entregas',
    'pricing.entrada.f5': 'Soporte por chat',
    'pricing.entrada.f6': 'Rifas',
    'pricing.entrada.f7': 'Reportes avanzados',
    'pricing.entrada.f8': 'Multi-negocio',
    'pricing.pro.name': 'Pro',
    'pricing.pro.f1': 'Pedidos ilimitados',
    'pricing.pro.f2': 'Clientas ilimitadas',
    'pricing.pro.f3': 'Tandas ilimitadas',
    'pricing.pro.f4': 'Rifas y sorteos',
    'pricing.pro.f5': 'Gestión de proveedores',
    'pricing.pro.f6': 'Reportes financieros',
    'pricing.pro.f7': 'Soporte prioritario',
    'pricing.pro.f8': 'Multi-negocio',
    'pricing.elite.name': 'Elite',
    'pricing.elite.f1': 'Todo del plan Pro',
    'pricing.elite.f2': 'Multi-negocio (hasta 5)',
    'pricing.elite.f3': 'Tandas ilimitadas',
    'pricing.elite.f4': 'Exportar a Excel / PDF',
    'pricing.elite.f5': 'API para integraciones',
    'pricing.elite.f6': 'Soporte VIP 24/7',
    'pricing.elite.f7': 'Personalización de marca',
    'pricing.elite.f8': 'Acceso anticipado a novedades',
    'cta.title': 'Empieza a organizar tu negocio <span class="accent" style="color: #FFD6E8;">hoy</span>',
    'cta.subtitle': "Únete a miles de emprendedoras que ya confían en Neni's App para hacer crecer su negocio.",
    'footer.desc': 'La app que toda emprendedora merece. Organiza, vende y crece.',
    'footer.product': 'Producto',
    'footer.legal': 'Legal',
    'footer.contact': 'Contacto',
    'footer.terms': 'Términos de Uso',
    'footer.deletion': 'Eliminación de Datos',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.download': 'Download',
    'nav.privacy': 'Privacy',
    'nav.cta': 'Download',
    'hero.badge': 'Your business in the palm of your hand',
    'hero.title': 'Take your <span class="accent">neni</span> business to the next level',
    'hero.subtitle': 'Manage orders, clients, deliveries, savings groups, raffles, suppliers, and finances. All from one app designed for you, entrepreneur.',
    'hero.cta': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download App',
    'hero.cta2': '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> See Features',
    'hero.coming': 'Coming Soon',
    'hero.note': 'Available soon for iOS and Android',
    'hero.float1': '+15 orders today',
    'hero.float2': '$3,250 in sales',
    'hero.float3': '8 new clients',
    'hero.scroll': 'Scroll to explore',
    'partners.label': 'Designed for entrepreneurs on',
    'features.badge': '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> Everything you need',
    'features.title': 'Tools for <span class="accent">entrepreneurs</span> like you',
    'features.subtitle': 'Every feature was designed with the real needs of nenis who sell on social media in mind.',
    'features.orders.title': 'Order Tracking',
    'features.orders.desc': 'Capture every order instantly from your live or group. Product, quantity, price, and status in a single tap.',
    'features.clients.title': 'Client Management',
    'features.clients.desc': 'Identify new and frequent clients. Purchase history, preferences, and contact info organized.',
    'features.delivery.title': 'Delivery Days',
    'features.delivery.desc': 'Plan and organize your delivery routes. Schedule dates, times, and meeting points without missing a detail.',
    'features.tandas.title': 'Unlimited Savings Groups',
    'features.tandas.desc': 'Manage all your savings groups without limits. Track payments, turns, participants, and collections from one place.',
    'features.rifas.title': 'Raffles',
    'features.rifas.desc': 'Create raffles for your followers. Set tickets, prizes, participants, and automatic draws. More engagement!',
    'features.finance.title': 'Complete Finances',
    'features.finance.desc': 'Track income, expenses, profits, and suppliers. Clear reports to know exactly how your business is doing.',
    'highlight.badge': '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 23c-3.6 0-8-2.9-8-9 0-3.4 2.5-6.4 4-7.6.6-.5 1.5-.1 1.6.7l.2 2c0 .3.3.5.5.4.8-.3 2.1-1.2 3-3.5.3-.7 1.2-.8 1.7-.3C17.5 8.4 20 12.1 20 14c0 6.1-4.4 9-8 9z"/></svg> More than an app',
    'highlight.title': 'Not just an app, your business <span class="accent">partner</span>',
    'highlight.desc': "Neni's App was created by entrepreneurs, for entrepreneurs. We know what it's like to sell on lives, answer 100 messages, and keep everything in a notebook. Now it's all in one place.",
    'highlight.stat1': 'Orders managed',
    'highlight.stat2': 'Entrepreneurs',
    'highlight.stat3': 'Satisfaction',
    'pricing.badge': '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12l4 8-10 10L2 11l4-8zm6 14.5L18.5 11 16 5H8L5.5 11 12 17.5z"/></svg> Affordable plans',
    'pricing.title': 'Choose the <span class="accent">perfect</span> plan for you',
    'pricing.subtitle': 'Invest in your business. All plans include unlimited savings groups and constant updates.',
    'pricing.period': '/ month',
    'pricing.popular': '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Most Popular',
    'pricing.cta': 'Get Started',
    'pricing.entrada.name': 'Starter',
    'pricing.entrada.f1': 'Basic order tracking',
    'pricing.entrada.f2': 'Up to 50 clients',
    'pricing.entrada.f3': 'Unlimited savings groups',
    'pricing.entrada.f4': 'Delivery calendar',
    'pricing.entrada.f5': 'Chat support',
    'pricing.entrada.f6': 'Raffles',
    'pricing.entrada.f7': 'Advanced reports',
    'pricing.entrada.f8': 'Multi-business',
    'pricing.pro.name': 'Pro',
    'pricing.pro.f1': 'Unlimited orders',
    'pricing.pro.f2': 'Unlimited clients',
    'pricing.pro.f3': 'Unlimited savings groups',
    'pricing.pro.f4': 'Raffles & draws',
    'pricing.pro.f5': 'Supplier management',
    'pricing.pro.f6': 'Financial reports',
    'pricing.pro.f7': 'Priority support',
    'pricing.pro.f8': 'Multi-business',
    'pricing.elite.name': 'Elite',
    'pricing.elite.f1': 'Everything in Pro',
    'pricing.elite.f2': 'Multi-business (up to 5)',
    'pricing.elite.f3': 'Unlimited savings groups',
    'pricing.elite.f4': 'Export to Excel / PDF',
    'pricing.elite.f5': 'API for integrations',
    'pricing.elite.f6': 'VIP 24/7 support',
    'pricing.elite.f7': 'Brand customization',
    'pricing.elite.f8': 'Early access to new features',
    'cta.title': 'Start organizing your business <span class="accent" style="color: #FFD6E8;">today</span>',
    'cta.subtitle': "Join thousands of entrepreneurs who already trust Neni's App to grow their business.",
    'footer.desc': 'The app every entrepreneur deserves. Organize, sell, and grow.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms of Use',
    'footer.deletion': 'Data Deletion',
    'footer.rights': 'All rights reserved.',
  },
};

let currentLang = 'es';

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParallax();
  initScrollReveal();
  initCounters();
  initLanguageToggle();
  initSmoothScroll();
});

// ---- Navbar Scroll Effect ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  navMenu.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ---- Parallax Effect ----
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const offset = (centerY - windowCenter) * speed;

      el.style.transform = `translateY(${offset}px)`;
    });
  });
}

// ---- Scroll Reveal (Intersection Observer) ----
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve — keep observing for stagger effect
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ---- Animated Counters ----
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters(counters);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounters(counters) {
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.count, 10);
    const suffix = counter.textContent.replace(/[0-9]/g, '');
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      counter.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
}

// ---- Language Toggle ----
function initLanguageToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle__btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      currentLang = lang;

      // Update active button
      toggleBtns.forEach((b) => b.classList.remove('active'));
      // Activate all buttons with same data-lang (there might be multiple toggle groups)
      document.querySelectorAll(`.lang-toggle__btn[data-lang="${lang}"]`).forEach((b) => {
        b.classList.add('active');
      });

      // Update html lang attribute
      document.documentElement.lang = lang;

      // Translate all elements
      applyTranslations(lang);
    });
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}
