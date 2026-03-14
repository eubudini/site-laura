/* ================================================
   LAURA CAMPONOGARA — JAVASCRIPT
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- HEADER SCROLL SHADOW ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // --- MOBILE MENU ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // --- SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Verificar elementos já visíveis

  // --- FORMULÁRIO (PREVENIR SUBMIT + FEEDBACK) ---
  const form = document.getElementById('contatoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const nome = formData.get('nome');

      // Construir mensagem para WhatsApp como fallback
      let mensagem = `Olá Laura! Meu nome é ${nome}.`;
      const servico = formData.get('servico');
      if (servico) {
        const servicoTexto = {
          'gestao': 'Gestão de Redes Sociais',
          'captacao': 'Captação de Conteúdo',
          'evento': 'Cobertura de Evento',
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

  // --- COUNT UP ANIMATION ---
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

  // --- INSTAGRAM CARROSSEL ---
  // ╔═══════════════════════════════════════════════════════════╗
  // ║  CONFIGURAÇÃO: Adicione/remova posts editando este array ║
  // ║  shortcode = o código após /p/ na URL do Instagram       ║
  // ║  profile = @ do perfil | initials = sigla do avatar      ║
  // ║  label = descrição curta                                 ║
  // ╚═══════════════════════════════════════════════════════════╝
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
    { shortcode: 'DFhjzPIJapn', profile: '@a.mar.joseignacio', initials: 'AM', label: 'A.Mar José Ignácio' },
    { shortcode: 'DGBkVQ2pJcf', profile: '@a.mar.joseignacio', initials: 'AM', label: 'A.Mar José Ignácio' },
    { shortcode: 'DF_UWKjJ9pk', profile: '@a.mar.joseignacio', initials: 'AM', label: 'A.Mar José Ignácio' },
  ];

  const carouselTrack = document.getElementById('igCarouselTrack');
  if (carouselTrack) {
    // Construir cards
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

    // Lazy load iframes com IntersectionObserver
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

    // Botões prev/next
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

  // --- ACTIVE NAV LINK ON SCROLL ---
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
});
