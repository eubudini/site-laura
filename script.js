/* ================================================
   LAURA CAMPONOGARA — JAVASCRIPT
   ================================================
   Funcionalidades: Header, Menu, Scroll Reveal (Motion),
   Formulário WhatsApp, Count Up, Instagram Carrossel,
   Active Nav, Animações Premium
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------
     ACESSIBILIDADE — REDUCED MOTION
     ------------------------------------------------ */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------
     1. HEADER SCROLL SHADOW
     ------------------------------------------------ */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ------------------------------------------------
     2. MOBILE MENU
     ------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  /* ------------------------------------------------
     3. FORMULÁRIO — ENVIO PARA WHATSAPP
     ------------------------------------------------ */
  const form = document.getElementById('contatoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const nome = formData.get('nome');

      let mensagem = `Olá Laura! Meu nome é ${nome}.`;
      const servico = formData.get('servico');
      if (servico) {
        const servicoTexto = {
          'estrategia': 'Estratégia de Conteúdo',
          'gestao': 'Gestão de Redes Sociais',
          'captacao': 'Captação de Conteúdo',
          'evento': 'Cobertura de Evento',
          'posicionamento': 'Posicionamento Digital',
          'outro': 'Outro'
        };
        mensagem += ` Tenho interesse em: ${servicoTexto[servico] || servico}.`;
      }
      const msg = formData.get('mensagem');
      if (msg) {
        mensagem += ` ${msg}`;
      }

      const whatsappUrl = `https://wa.me/5551985309613?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
      form.reset();
    });
  }

  /* ------------------------------------------------
     4. COUNT UP ANIMATION
     ------------------------------------------------ */
  const countElements = document.querySelectorAll('.metricas__number');
  let countStarted = false;

  const formatNumber = (num, separator) => {
    if (!separator) return num.toString();
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const separator = el.dataset.separator || '';
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = prefix + formatNumber(Math.floor(current), separator) + suffix;
    }, stepTime);
  };

  const checkCountUp = () => {
    if (countStarted) return;
    const metricasSection = document.querySelector('.metricas');
    if (!metricasSection) return;
    const rect = metricasSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      countStarted = true;
      countElements.forEach(el => animateCount(el));
    }
  };

  window.addEventListener('scroll', checkCountUp);
  checkCountUp();

  /* ------------------------------------------------
     5. INSTAGRAM CARROSSEL
     ------------------------------------------------ */
  const INSTAGRAM_POSTS = [
    { shortcode: 'DGdLFfcJIBv', profile: '@zaira.nara', initials: 'ZN', label: 'Zaira Nara' },
    { shortcode: 'DFrLrPlJcCi', profile: '@zaira.nara', initials: 'ZN', label: 'Zaira Nara' },
    { shortcode: 'DGNIXNipCcf', profile: '@zaira.nara', initials: 'ZN', label: 'Zaira Nara' },
    { shortcode: 'DRryhE8AFZq', profile: '@marinaciconet', initials: 'MC', label: 'Marina Ciconet' },
    { shortcode: 'DU6TwxCkuop', profile: '@marinaciconet', initials: 'MC', label: 'Marina Ciconet' },
    { shortcode: 'DTnm5hREZr6', profile: '@marinaciconet', initials: 'MC', label: 'Marina Ciconet' },
    { shortcode: 'DTOSXslElxf', profile: '@marinaciconet', initials: 'MC', label: 'Marina Ciconet' },
    { shortcode: 'DS0NrjLkfDI', profile: '@marinaciconet', initials: 'MC', label: 'Marina Ciconet' },
    { shortcode: 'DSQCWsDkcAF', profile: '@marinaciconet', initials: 'MC', label: 'Marina Ciconet' },
    { shortcode: 'DGFrjAIpPlp', profile: '@marianapenteado', initials: 'MP', label: 'Mariana Penteado' },
    { shortcode: 'DFdWjOUp_X0', profile: '@marianapenteado', initials: 'MP', label: 'Mariana Penteado' },
    { shortcode: 'DGK5gVvJFrW', profile: '@marianapenteado', initials: 'MP', label: 'Mariana Penteado' },
    { shortcode: 'DFhjzPIJapn', profile: '@a.mar.joseignacio', initials: 'AM', label: 'A.Mar Jose Ignacio' },
    { shortcode: 'DGBkVQ2pJcf', profile: '@a.mar.joseignacio', initials: 'AM', label: 'A.Mar Jose Ignacio' },
    { shortcode: 'DF_UWKjJ9pk', profile: '@a.mar.joseignacio', initials: 'AM', label: 'A.Mar Jose Ignacio' },
  ];

  const carouselTrack = document.getElementById('igCarouselTrack');
  if (carouselTrack) {
    INSTAGRAM_POSTS.forEach((post, i) => {
      const card = document.createElement('div');
      card.className = 'ig-carousel__card';

      const postUrl = `https://www.instagram.com/p/${post.shortcode}/`;
      const embedUrl = `https://www.instagram.com/p/${post.shortcode}/embed/`;

      card.innerHTML = `
        <div class="ig-carousel__card-placeholder" data-embed-url="${embedUrl}" data-index="${i}">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>Carregando...</span>
        </div>
        <div class="ig-carousel__card-footer">
          <div class="ig-carousel__card-avatar">${post.initials}</div>
          <div class="ig-carousel__card-info">
            <span class="ig-carousel__card-user">${post.profile}</span>
            <span class="ig-carousel__card-label">${post.label}</span>
          </div>
          <a href="${postUrl}" target="_blank" rel="noopener noreferrer" class="ig-carousel__card-link" aria-label="Abrir no Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      `;

      carouselTrack.appendChild(card);
    });

    // Lazy load iframes
    const placeholders = carouselTrack.querySelectorAll('.ig-carousel__card-placeholder');
    const loadEmbed = (placeholder) => {
      const embedUrl = placeholder.dataset.embedUrl;
      if (!embedUrl) return;
      const iframe = document.createElement('iframe');
      iframe.src = embedUrl;
      iframe.className = 'ig-carousel__card-embed';
      iframe.loading = 'lazy';
      iframe.setAttribute('allowtransparency', 'true');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      iframe.onload = () => iframe.classList.add('loaded');
      placeholder.replaceWith(iframe);
    };

    if ('IntersectionObserver' in window) {
      const embedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadEmbed(entry.target);
            embedObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '200px' });
      placeholders.forEach(p => embedObserver.observe(p));
    } else {
      placeholders.forEach(loadEmbed);
    }

    // Drag to scroll
    let isDragging = false;
    let startX, scrollLeft;

    carouselTrack.addEventListener('mousedown', (e) => {
      isDragging = true;
      carouselTrack.classList.add('grabbing');
      startX = e.pageX - carouselTrack.offsetLeft;
      scrollLeft = carouselTrack.scrollLeft;
    });

    carouselTrack.addEventListener('mouseleave', () => {
      isDragging = false;
      carouselTrack.classList.remove('grabbing');
    });

    carouselTrack.addEventListener('mouseup', () => {
      isDragging = false;
      carouselTrack.classList.remove('grabbing');
    });

    carouselTrack.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carouselTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      carouselTrack.scrollLeft = scrollLeft - walk;
    });

    // Botoes prev/next
    const prevBtn = document.querySelector('.ig-carousel__btn--prev');
    const nextBtn = document.querySelector('.ig-carousel__btn--next');
    const scrollAmount = 320;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  }

  /* ------------------------------------------------
     6. BASTIDORES CARROSSEL
     ------------------------------------------------ */
  const bastidoresTrack = document.getElementById('bastidoresTrack');
  if (bastidoresTrack) {
    let bDragging = false;
    let bStartX, bScrollLeft;

    bastidoresTrack.addEventListener('mousedown', (e) => {
      bDragging = true;
      bastidoresTrack.classList.add('grabbing');
      bStartX = e.pageX - bastidoresTrack.offsetLeft;
      bScrollLeft = bastidoresTrack.scrollLeft;
    });

    bastidoresTrack.addEventListener('mouseleave', () => {
      bDragging = false;
      bastidoresTrack.classList.remove('grabbing');
    });

    bastidoresTrack.addEventListener('mouseup', () => {
      bDragging = false;
      bastidoresTrack.classList.remove('grabbing');
    });

    bastidoresTrack.addEventListener('mousemove', (e) => {
      if (!bDragging) return;
      e.preventDefault();
      const x = e.pageX - bastidoresTrack.offsetLeft;
      const walk = (x - bStartX) * 1.5;
      bastidoresTrack.scrollLeft = bScrollLeft - walk;
    });

    const bPrev = document.querySelector('.bastidores__btn--prev');
    const bNext = document.querySelector('.bastidores__btn--next');
    const bScroll = 300;

    if (bPrev) {
      bPrev.addEventListener('click', () => {
        bastidoresTrack.scrollBy({ left: -bScroll, behavior: 'smooth' });
      });
    }
    if (bNext) {
      bNext.addEventListener('click', () => {
        bastidoresTrack.scrollBy({ left: bScroll, behavior: 'smooth' });
      });
    }

    bastidoresTrack.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        window.scrollBy({ top: e.deltaY, behavior: 'auto' });
        e.preventDefault();
      }
    }, { passive: false });
  }

  /* ------------------------------------------------
     7. ACTIVE NAV LINK ON SCROLL
     ------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);


  /* ================================================
     MOTION ANIMATIONS
     ================================================
     Todas as animacoes usam Motion vanilla JS.
     Respeitam prefers-reduced-motion.
     ================================================ */

  if (prefersReducedMotion || typeof Motion === 'undefined') {
    // Sem animacoes: garantir que .reveal fique visivel
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
    return;
  }

  const { animate, inView, scroll } = Motion;

  /* ------------------------------------------------
     7. SCROLL PROGRESS BAR
     ------------------------------------------------ */
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1C1C1C;
    transform-origin: left;
    transform: scaleX(0);
    z-index: 10001;
    pointer-events: none;
  `;
  document.body.appendChild(progressBar);

  scroll(
    animate(progressBar, { transform: ['scaleX(0)', 'scaleX(1)'] }, { duration: 0.1, easing: 'linear' })
  );

  /* ------------------------------------------------
     8. HERO — REVEAL POR PALAVRAS
     ------------------------------------------------ */
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    const text = heroTitle.textContent.trim();
    const words = text.split(/\s+/);
    heroTitle.innerHTML = '';
    heroTitle.style.visibility = 'visible';

    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + (i < words.length - 1 ? '\u00A0' : '');
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      heroTitle.appendChild(span);
    });

    const wordSpans = heroTitle.querySelectorAll('span');
    setTimeout(() => {
      wordSpans.forEach((span, i) => {
        animate(
          span,
          { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
          { duration: 0.5, delay: i * 0.08, easing: [0.25, 0.46, 0.45, 0.94] }
        );
      });
    }, 300);
  }

  /* ------------------------------------------------
     9. HERO — ELEMENTOS FADE IN SEQUENCIAL
     ------------------------------------------------ */
  const heroElements = [
    '.hero__name',
    '.hero__label',
    '.hero__subtitle',
    '.hero__support',
    '.hero__buttons',
    '.hero__location'
  ];

  heroElements.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      animate(
        el,
        { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0)'] },
        { duration: 0.6, delay: 0.5 + i * 0.1, easing: [0.25, 0.46, 0.45, 0.94] }
      );
    }
  });

  /* ------------------------------------------------
     10. HERO — PARALLAX SUTIL NA FOTO
     ------------------------------------------------ */
  const heroPhoto = document.querySelector('.hero__photo');
  if (heroPhoto) {
    scroll(
      animate(heroPhoto, { transform: ['translateY(0px)', 'translateY(-60px)'] }, { easing: 'linear' }),
      { target: document.querySelector('.hero'), offset: ['start start', 'end start'] }
    );
  }

  /* ------------------------------------------------
     11. SCROLL REVEAL GLOBAL — via Motion inView
     ------------------------------------------------ */
  const isMobile = window.innerWidth <= 768;
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    // No mobile, deixa o internacional sempre visível (iOS Safari compat)
    if (isMobile && (
      el.classList.contains('internacional__photos') ||
      el.closest('.internacional__photos') ||
      el.classList.contains('internacional__photo--top') ||
      el.classList.contains('internacional__photo--main')
    )) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('active');
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';

    inView(el, () => {
      animate(
        el,
        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },
        { duration: 0.7, easing: [0.25, 0.46, 0.45, 0.94] }
      );
      el.classList.add('active');
    }, { amount: 0.15 });
  });

  /* ------------------------------------------------
     12. STAGGER EM GRUPOS DE CARDS
     ------------------------------------------------ */
  const staggerGroups = [
    { container: '.sobre__cards', items: '.sobre__card', delay: 0.12 },
    { container: '.clientes__grid', items: '.clientes__card', delay: 0.15 },
    { container: '.servicos__grid', items: '.servicos__card', delay: 0.12 },
    { container: '.planos__grid', items: '.planos__card', delay: 0.15 },
    { container: '.processo__grid', items: '.processo__step', delay: 0.12 },
    { container: '.metricas__grid', items: '.metricas__card', delay: 0.1 },
  ];

  staggerGroups.forEach(({ container, items, delay }) => {
    const containerEl = document.querySelector(container);
    if (!containerEl) return;

    const children = containerEl.querySelectorAll(items);
    if (!children.length) return;

    children.forEach(child => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px) scale(0.97)';
    });

    inView(containerEl, () => {
      children.forEach((child, i) => {
        animate(
          child,
          {
            opacity: [0, 1],
            transform: ['translateY(30px) scale(0.97)', 'translateY(0) scale(1)']
          },
          {
            duration: 0.6,
            delay: i * delay,
            easing: [0.25, 0.46, 0.45, 0.94]
          }
        );
      });
    }, { amount: 0.1 });
  });

  /* ------------------------------------------------
     13. HOVER NOS CARDS — ELEVACAO + SOMBRA
     ------------------------------------------------ */
  const hoverableCards = document.querySelectorAll(
    '.clientes__card, .servicos__card, .planos__card, .metricas__card, .processo__step'
  );

  hoverableCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(card, {
        transform: 'translateY(-6px)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)'
      }, {
        duration: 0.3,
        easing: [0.25, 0.46, 0.45, 0.94]
      });
    });

    card.addEventListener('mouseleave', () => {
      animate(card, {
        transform: 'translateY(0px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }, {
        duration: 0.4,
        easing: [0.25, 0.46, 0.45, 0.94]
      });
    });
  });

  /* ------------------------------------------------
     14. BOTOES COM SPRING
     ------------------------------------------------ */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      animate(btn, { transform: 'scale(1.03)' }, {
        type: 'spring', stiffness: 400, damping: 15
      });
    });

    btn.addEventListener('mouseleave', () => {
      animate(btn, { transform: 'scale(1)' }, {
        type: 'spring', stiffness: 400, damping: 15
      });
    });

    btn.addEventListener('mousedown', () => {
      animate(btn, { transform: 'scale(0.97)' }, { duration: 0.1 });
    });

    btn.addEventListener('mouseup', () => {
      animate(btn, { transform: 'scale(1.03)' }, {
        type: 'spring', stiffness: 400, damping: 15
      });
    });
  });

  /* ------------------------------------------------
     15. SOBRE — FOTOS COM REVEAL DIFERENCIADO
     ------------------------------------------------ */
  const sobrePhoto1 = document.querySelector('.sobre__photo--1');
  const sobrePhoto2 = document.querySelector('.sobre__photo--2');

  if (sobrePhoto1) {
    sobrePhoto1.style.opacity = '0';
    sobrePhoto1.style.transform = 'translateX(-40px)';

    inView(sobrePhoto1, () => {
      animate(sobrePhoto1, {
        opacity: [0, 1],
        transform: ['translateX(-40px)', 'translateX(0)']
      }, { duration: 0.8, easing: [0.25, 0.46, 0.45, 0.94] });
    }, { amount: 0.2 });
  }

  if (sobrePhoto2) {
    sobrePhoto2.style.opacity = '0';
    sobrePhoto2.style.transform = 'translateX(40px)';

    inView(sobrePhoto2, () => {
      animate(sobrePhoto2, {
        opacity: [0, 1],
        transform: ['translateX(40px)', 'translateX(0)']
      }, { duration: 0.8, delay: 0.15, easing: [0.25, 0.46, 0.45, 0.94] });
    }, { amount: 0.2 });
  }

  /* ------------------------------------------------
     16. HERO IMAGE — REVEAL COM SCALE
     ------------------------------------------------ */
  const heroImage = document.querySelector('.hero__image');
  if (heroImage) {
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'scale(0.95)';
    animate(heroImage, {
      opacity: [0, 1],
      transform: ['scale(0.95)', 'scale(1)']
    }, { duration: 0.8, delay: 0.2, easing: [0.25, 0.46, 0.45, 0.94] });
  }

  /* ------------------------------------------------
     17. SECTION TITLES — FADE IN ON SCROLL
     ------------------------------------------------ */
  document.querySelectorAll('.section-title').forEach(title => {
    if (title.closest('.hero')) return; // pular hero
    title.style.opacity = '0';
    title.style.transform = 'translateY(24px)';

    inView(title, () => {
      animate(title, {
        opacity: [0, 1],
        transform: ['translateY(24px)', 'translateY(0)']
      }, { duration: 0.7, easing: [0.25, 0.46, 0.45, 0.94] });
    }, { amount: 0.3 });
  });

});
