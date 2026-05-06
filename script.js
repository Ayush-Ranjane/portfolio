const feather = (() => {
      const attrs = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
      const paths = {
        activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
        award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
        'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
        'bar-chart-2': '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
        briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
        check: '<polyline points="20 6 9 17 4 12"/>',
        'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
        clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
        code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
        coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>',
        download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
        'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
        feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',
        folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
        github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
        'git-merge': '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
        info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
        layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
        layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
        mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22 6 12 13 2 6"/>',
        'map-pin': '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
        monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
        send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
        server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
        sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
        'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
      };
      const toSvg = (name, options = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ${attrs} class="${options.class || ''}" aria-hidden="true">${paths[name] || paths.info}</svg>`;
      const icons = Object.fromEntries(Object.keys(paths).map(name => [name, { toSvg: options => toSvg(name, options) }]));
      return {
        icons,
        replace() {
          document.querySelectorAll('[data-feather]').forEach(el => {
            el.outerHTML = toSvg(el.getAttribute('data-feather'), { class: el.getAttribute('class') || '' });
          });
        }
      };
    })();



    window.addEventListener('DOMContentLoaded', () => {
      feather.replace();

      const CONTACT_EMAIL = 'ayushranjane@gmail.com';

      const els = {
        brandName: document.getElementById('brandName'),
        heroAvatar: document.getElementById('heroAvatar'),
        navAvatar: document.getElementById('navAvatar'),
        roleRotator: document.getElementById('roleRotator'),
        repos: document.getElementById('repos'),
        pageLoader: document.getElementById('pageLoader'),
        cursorGlow: document.getElementById('cursorGlow'),
        buildGrid: document.getElementById('buildGrid'),
        skillsGrid: document.getElementById('skillsGrid'),
        projectsGrid: document.getElementById('projectsGrid'),
        impactGrid: document.getElementById('impactGrid'),
        workflowGrid: document.getElementById('workflowGrid'),
        stackGrid: document.getElementById('stackGrid'),
        co2Input: document.getElementById('co2Input'),
        pmInput: document.getElementById('pmInput'),
        co2Value: document.getElementById('co2Value'),
        pmValue: document.getElementById('pmValue'),
        riskLabel: document.getElementById('riskLabel'),
        riskFill: document.getElementById('riskFill'),
        riskScore: document.getElementById('riskScore'),
        projectModal: document.getElementById('projectModal'),
        modalClose: document.getElementById('modalClose'),
        modalTitle: document.getElementById('modalTitle'),
        modalSummary: document.getElementById('modalSummary'),
        modalArchitectureDiagram: document.getElementById('modalArchitectureDiagram'),
        modalProblem: document.getElementById('modalProblem'),
        modalApproach: document.getElementById('modalApproach'),
        modalDataFlow: document.getElementById('modalDataFlow'),
        modalModel: document.getElementById('modalModel'),
        modalMetrics: document.getElementById('modalMetrics'),
        modalChallenges: document.getElementById('modalChallenges'),
        modalFuture: document.getElementById('modalFuture'),
        modalTechStack: document.getElementById('modalTechStack'),
        modalActions: document.getElementById('modalActions'),
        footerName: document.getElementById('footerName'),
        emailLabel: document.getElementById('emailLabel'),
        copyEmail: document.getElementById('copyEmail'),
        githubLink: document.getElementById('githubLink'),
        mobileGithubLink: document.getElementById('mobileGithubLink'),
        menuToggle: document.getElementById('menuToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        year: document.getElementById('year'),
        resumeBtn: document.getElementById('resumeBtn')
      };

      els.year.textContent = new Date().getFullYear();

      // Set hardcoded email
      els.emailLabel.textContent = CONTACT_EMAIL;
      els.emailLabel.dataset.email = CONTACT_EMAIL;

      // Mobile menu
      function setMenu(open) {
        if (!els.menuToggle || !els.mobileMenu) return;
        els.menuToggle.classList.toggle('open', open);
        els.mobileMenu.classList.toggle('open', open);
        els.menuToggle.setAttribute('aria-expanded', String(open));
      }

      els.menuToggle?.addEventListener('click', () => {
        setMenu(!els.mobileMenu.classList.contains('open'));
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenu(false);
      });

      window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 768px)').matches) setMenu(false);
      });

      requestAnimationFrame(() => {
        window.setTimeout(() => {
          els.pageLoader?.classList.add('is-hidden');
          document.body.classList.remove('is-loading');
        }, 420);
      });

      // Cursor and background glow
      const canUseFinePointer = window.matchMedia('(pointer: fine)').matches;
      if (canUseFinePointer) {
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 3;
        let glowX = pointerX;
        let glowY = pointerY;
        window.addEventListener('pointermove', (e) => {
          pointerX = e.clientX;
          pointerY = e.clientY;
          document.documentElement.style.setProperty('--mx', `${pointerX}px`);
          document.documentElement.style.setProperty('--my', `${pointerY}px`);
        }, { passive: true });
        function animateGlow() {
          glowX += (pointerX - glowX) * .16;
          glowY += (pointerY - glowY) * .16;
          if (els.cursorGlow) els.cursorGlow.style.transform = `translate3d(${glowX - 11}px, ${glowY - 11}px, 0)`;
          requestAnimationFrame(animateGlow);
        }
        animateGlow();
      }

      // Hero typewriter
      const roles = ['Data Scientist', 'System Builder', 'AI Engineer'];
      if (els.roleRotator) {
        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;
        function typeRole() {
          const current = roles[roleIndex];
          els.roleRotator.textContent = current.slice(0, charIndex);
          let delay = deleting ? 42 : 78 + Math.random() * 46;

          if (!deleting && charIndex === current.length) {
            deleting = true;
            delay = 1250;
          } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 360;
          } else {
            charIndex += deleting ? -1 : 1;
          }

          window.setTimeout(typeRole, delay);
        }
        typeRole();
      }

      // Scroll reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            if (e.target.dataset.counter) animateCounter(e.target);
          }
        });
      }, { threshold: 0.16, rootMargin: '0px 0px -40px' });

      function observeReveals(scope = document) {
        scope.querySelectorAll('.reveal').forEach((el, index) => {
          if (!el.style.getPropertyValue('--delay')) el.style.setProperty('--delay', `${Math.min(index * 70, 360)}ms`);
          io.observe(el);
        });
      }

      function animateCounter(el) {
        if (el.dataset.done) return;
        el.dataset.done = 'true';
        const target = Number(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.textContent = `${prefix}${value}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      // Contact form -> mailto
      document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const [name, email, message] = [...e.target.querySelectorAll('input, textarea')].map(i => i.value);
        const subject = encodeURIComponent('Portfolio contact');
        const body = encodeURIComponent(`Hi,\n\nMy name is ${name} (${email}).\n\n${message}\n\n\u2014 Sent from your portfolio`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      });

      // Copy email
      els.copyEmail.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(CONTACT_EMAIL);
        } catch {
          prompt("Copy this email:", CONTACT_EMAIL);
        }
      });

      // Hardcoded skills
      const skillCategories = [
        { title: 'Core Expertise', icon: 'cpu', skills: ['Machine Learning', 'Time-Series Forecasting', 'Anomaly Detection'] },
        { title: 'Technologies', icon: 'code', skills: ['Python (Advanced)', 'FastAPI', 'PostgreSQL', 'React'] },
        { title: 'Data Tools', icon: 'database', skills: ['Pandas', 'NumPy', 'Power BI'] }
      ];

      const aiBuilds = [
        { title: 'Predictive Systems', icon: 'trending-up', text: 'Forecasting workflows that turn historical and live signals into decision-ready predictions.' },
        { title: 'Anomaly Detection Engines', icon: 'activity', text: 'Isolation Forest-style detection layers for spotting abnormal industrial and environmental behavior.' },
        { title: 'Real-Time AI APIs', icon: 'server', text: 'FastAPI-style inference endpoints designed for low-latency product experiences and dashboards.' },
        { title: 'Data Intelligence Pipelines', icon: 'database', text: 'Clean ingestion, validation, feature engineering, and analytics paths for model-ready data.' }
      ];

      const impactMetrics = [
        { value: 50, suffix: '10K+', label: 'Data points modeled', detail: 'Designed workflows for high-volume environmental and tabular datasets.' },
        { value: 3, suffix: '03', label: 'End-to-end AI systems', detail: 'From data preparation and modeling to APIs, dashboards, and deployment-ready UX.' },
        { value: 250, prefix: '<', suffix: '185ms', label: 'Interactive UI response', detail: 'Client-side portfolio interactions avoid network blocking and layout jank.' },
        { value: 100, suffix: '90%', label: 'Manual project control', detail: 'No GitHub auto-fetching; recruiters see curated case studies only.' }
      ];

      const workflowSteps = [
        { title: 'Data understanding', icon: 'database', text: 'Define the signal, schema, missingness patterns, and validation rules before modeling.' },
        { title: 'Feature engineering', icon: 'git-merge', text: 'Transform raw readings into time-window, pollutant, behavior, and decision features.' },
        { title: 'Model building', icon: 'bar-chart-2', text: 'Benchmark interpretable baselines, anomaly detectors, and forecasting models before polishing.' },
        { title: 'API deployment', icon: 'server', text: 'Expose predictions through FastAPI-style endpoints with predictable request and response contracts.' }
      ];

      const portfolioStack = [
        { title: 'HTML + Tailwind', icon: 'layout', text: 'Single-page build with responsive utilities and a production CSS compile path noted.' },
        { title: 'Vanilla JavaScript', icon: 'code', text: 'No framework overhead; cards, modal, nav, and demo are rendered with focused functions.' },
        { title: 'Feather Icons', icon: 'feather', text: 'Lightweight icon system kept consistent across navigation, cards, and controls.' },
        { title: 'Performance UX', icon: 'zap', text: 'Deferred icon script, lazy images, reduced-motion handling, and zero GitHub API dependency.' }
      ];

      els.skillsGrid.innerHTML = skillCategories.map(cat => `
      <div class="reveal glass rounded-2xl p-5 sm:p-6 border card card-tilt min-w-0">
        <div class="flex min-w-0 items-center gap-4 mb-5">
          <div class="h-10 w-10 rounded-xl bg-accent-500/15 flex items-center justify-center shrink-0">
            ${feather.icons[cat.icon] ? feather.icons[cat.icon].toSvg({ class: 'w-5 h-5 text-accent-400' }) : ''}
          </div>
          <h3 class="min-w-0 break-words font-display font-bold text-white text-lg">${cat.title}</h3>
        </div>
        <ul class="space-y-3">
          ${cat.skills.map(s => `
            <li class="flex min-w-0 items-center gap-3 text-sm text-white/80">
              <span class="h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0 shadow-[0_0_8px_rgba(255,122,0,0.6)]"></span>
              <span class="min-w-0 break-words">${s}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');

      function renderInfoCard(item) {
        return `
        <article class="reveal signal-card glass rounded-2xl p-5 sm:p-6 border card card-tilt min-w-0">
          <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15">
            ${feather.icons[item.icon] ? feather.icons[item.icon].toSvg({ class: 'w-5 h-5 text-accent-400' }) : ''}
          </div>
          <h3 class="font-display font-bold text-white">${item.title}</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/70">${item.text}</p>
        </article>
      `;
      }

      els.buildGrid.innerHTML = aiBuilds.map(renderInfoCard).join('');

      els.impactGrid.innerHTML = impactMetrics.map(metric => `
      <article class="reveal metric-card glass rounded-2xl p-5 sm:p-6 border card card-tilt min-w-0">
        <div class="relative z-10">
          <div class="stat-value font-display text-3xl font-extrabold text-accent-300" data-counter="${metric.value}" data-prefix="${metric.prefix || ''}" data-suffix="${metric.suffix || ''}">${metric.suffix || ''}</div>
          <h3 class="mt-2 font-semibold text-white">${metric.label}</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/60">${metric.detail}</p>
        </div>
      </article>
    `).join('');

      els.workflowGrid.innerHTML = workflowSteps.map(renderInfoCard).join('');
      els.stackGrid.innerHTML = portfolioStack.map(renderInfoCard).join('');

      // Featured projects
      const manualProjects = [
        {
          name: 'GreenCO2 - Industrial AI Compliance System',
          description: `
          <ul class="space-y-1.5 text-white/70">
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Real-time CO2 monitoring using time-series data</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Built anomaly detection pipeline using Isolation Forest</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Designed role-based dashboard for compliance tracking</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Integrated PostgreSQL for scalable data storage</span></li>
          </ul>`,
          tech: ['Python', 'PostgreSQL', 'FastAPI', 'React', 'Machine Learning'],
          image: 'images/greeenco2.jpg',
          overlay: 'Industrial CO2 intelligence: anomaly alerts, compliance workflow, and dashboard-ready analytics.',
          featured: true,
          source: 'https://github.com/Ayush-Ranjane/GreenCO2.git',
          live: 'https://green-co-2.vercel.app/'

        },
        {
          name: 'AQI Prediction System',
          description: `
          <ul class="space-y-1.5 text-white/70">
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Built ML model for air quality forecasting</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Performed feature engineering on environmental data</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Generated real-time predictions</span></li>
          </ul>`,
          tech: ['Python', 'ML Models'],
          image: 'images/AQI Prediction System.jpg',
          overlay: 'Environmental forecasting interface for pollutant-driven AQI prediction and readable risk signals.',
          featured: true,
          source: 'https://github.com/Ayush-Ranjane/AQI-Prediction-Analysis-System.git',
          live: 'https://aqi-prediction-analysis-system.onrender.com/'
        },
        {
          name: 'Titanic Survival Prediction',
          description: `
          <ul class="space-y-1.5 text-white/70">
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Built classification model using Scikit-learn</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Applied feature selection and preprocessing</span></li>
            <li class="flex items-start gap-2"><span>&bull;</span> <span>Developed interactive prediction interface</span></li>
          </ul>`,
          tech: ['Scikit-learn'],
          image: 'images/Titanic Survival Prediction.jpg',
          overlay: 'Classification baseline with clean preprocessing, feature selection, and interactive inference.',
          featured: true,
          source: 'https://github.com/Ayush-Ranjane/Titanic-Survival-Prediction.git',
          live: 'https://titanic-survival-prediction-ayush.netlify.app/'
        }
      ];

      const projectDetails = [
        {
          summary: 'Production-style industrial CO2 monitoring system with anomaly detection, analytics, and compliance dashboards.',
          problem: 'Industrial CO2 data is difficult to monitor continuously, and compliance teams need fast anomaly visibility.',
          solution: 'Built a real-time pipeline with Isolation Forest anomaly detection, FastAPI services, PostgreSQL storage, and a role-based dashboard.',
          approach: 'Start with sensor schema validation, normalize time-series readings, run anomaly scoring, then expose insights through API-first dashboard flows.',
          result: 'Converted raw time-series readings into compliance-ready alerts and operational insights for sustainability tracking.',
          architecture: ['Fuel used/day', 'Stored Data', 'Feature engineering', 'Isolation Forest', 'Prophet', 'Alert system', 'Dashboard','report generation'],
          dataFlow: ['Capture CO2 readings from industrial sources', 'Validate timestamps, ranges, and missing values', 'Generate rolling-window features', 'Score anomalies and compliance state', 'Store history and serve dashboard analytics'],
          model: 'Isolation Forest for unsupervised anomaly detection on time-series environmental readings.',
          metrics: 'Designed for real-time interaction, compliance visibility, and high-volume environmental data paths.',
          challenges: ['Noisy environmental readings', 'Separating real anomalies from sensor spikes', 'Making model output understandable to non-ML users'],
          future: ['Add drift monitoring', 'Introduce alert severity tuning', 'Add explainability panels for each anomaly']
        },
        {
          summary: 'Air quality forecasting workflow built around environmental data preparation, feature engineering, and model prediction.',
          problem: 'Air quality readings are noisy and hard to interpret without prediction context.',
          solution: 'Engineered environmental features and trained ML models to estimate AQI trends from pollutant inputs.',
          approach: 'Transform pollutant values into normalized model inputs, compare prediction behavior, and present the output as a readable risk signal.',
          result: 'Created a forecasting workflow that turns pollutant data into readable air-quality risk signals.',
          architecture: ['Pollutant Inputs', 'Cleaning', 'Feature Engineering', 'ML Prediction', 'Risk UI'],
          dataFlow: ['Collect pollutant and weather-related inputs', 'Clean outliers and incomplete rows', 'Create pollutant interaction features', 'Run AQI prediction', 'Map prediction to health-oriented status'],
          model: 'Supervised machine learning regression/classification workflow for AQI estimation.',
          metrics: 'Optimized for interpretable prediction flow and immediate user feedback in the live demo.',
          challenges: ['Pollutant feature correlation', 'Outlier handling', 'Keeping the interface simple while preserving model context'],
          future: ['Add model confidence ranges', 'Connect live city-level data', 'Compare multiple forecast horizons']
        },
        {
          summary: 'Classic classification project focused on clean preprocessing, feature selection, and interpretable prediction.',
          problem: 'Passenger survival prediction requires useful features from incomplete tabular data.',
          solution: 'Applied preprocessing, feature selection, and Scikit-learn classification to produce survival predictions.',
          approach: 'Clean missing values, encode categorical signals, train a classifier, then expose inference through a simple user-facing interface.',
          result: 'Built an interpretable ML baseline that demonstrates classification fundamentals and UI-ready inference.',
          architecture: ['CSV Dataset', 'Preprocessing', 'Feature Selection', 'Scikit-learn', 'Prediction UI'],
          dataFlow: ['Load passenger records', 'Impute missing values', 'Encode categorical fields', 'Train and evaluate classifier', 'Serve survival prediction in the UI'],
          model: 'Scikit-learn classification model with preprocessing and feature selection.',
          metrics: 'Focused on baseline classification quality, explainability, and repeatable inference.',
          challenges: ['Incomplete tabular data', 'Avoiding feature leakage', 'Balancing simplicity with model quality'],
          future: ['Add probability explanations', 'Compare tree and linear models', 'Publish a compact model card']
        }
      ];

      function badge(topic) {
        return `<span class="max-w-full break-words px-2.5 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-[11px] font-medium text-accent-200">${topic}</span>`;
      }

      function renderManualCard(p, index) {
        const details = projectDetails[index];
        const sourceDisabled = !p.source;
        const liveDisabled = !p.live;
        const sourceAttrs = sourceDisabled ? 'href="#" aria-disabled="true" tabindex="-1"' : `href="${p.source}" target="_blank" rel="noreferrer"`;
        const liveAttrs = liveDisabled ? 'href="#" aria-disabled="true" tabindex="-1"' : `href="${p.live}" target="_blank" rel="noreferrer"`;
        const disabledClass = 'opacity-60 cursor-not-allowed pointer-events-none';
        return `
        <article class="reveal project-card glass rounded-3xl p-4 sm:p-5 border card card-tilt flex min-w-0 flex-col border-accent-500/20">
          <div class="project-media mb-5">
            <img src="${p.image}" alt="${p.name} project preview" loading="lazy" decoding="async">
            <div class="project-overlay">
              <p class="text-sm leading-relaxed text-white/85">${p.overlay}</p>
            </div>
          </div>
          <div class="flex min-w-0 items-center gap-2 mb-4">
            <span class="px-2 py-0.5 rounded-full bg-accent-500/20 text-[10px] font-bold uppercase tracking-widest text-accent-300">Featured System</span>
          </div>
          <h3 class="break-words font-display font-bold text-white text-lg sm:text-xl leading-tight">${p.name}</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/60">${details.summary}</p>
          <div class="mt-5 mb-6 grid gap-4 text-sm leading-relaxed">
            <div>
              <div class="mb-1 text-[10px] font-bold uppercase tracking-widest text-accent-300">Problem</div>
              <p class="text-white/70">${details.problem}</p>
            </div>
            <div>
              <div class="mb-1 text-[10px] font-bold uppercase tracking-widest text-accent-300">Solution</div>
              <p class="text-white/70">${details.solution}</p>
            </div>
            <div>
              <div class="mb-1 text-[10px] font-bold uppercase tracking-widest text-accent-300">Result</div>
              <p class="text-white/70">${details.result}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">${p.tech.map(badge).join('')}</div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row">
            <a ${liveAttrs} class="btn btn-primary !py-2 !text-xs flex-1 justify-center ${liveDisabled ? disabledClass : ''}"><i data-feather="external-link" class="w-4 h-4"></i> Live Demo</a>
            <a ${sourceAttrs} class="btn btn-ghost !py-2 !text-xs flex-1 justify-center ${sourceDisabled ? disabledClass : ''}"><i data-feather="github" class="w-4 h-4"></i> Source Code</a>
          </div>
          <button type="button" data-project-index="${index}" class="project-details btn btn-ghost !mt-3 !py-2 !text-xs">
            <i data-feather="info" class="w-4 h-4"></i> View Details
          </button>
        </article>
      `;
      }

      function actionButton(label, href, iconName, primary = false) {
        const disabled = !href;
        const attrs = disabled ? 'href="#" aria-disabled="true" tabindex="-1"' : `href="${href}" target="_blank" rel="noreferrer"`;
        return `<a ${attrs} class="btn ${primary ? 'btn-primary' : 'btn-ghost'} !py-2 !text-xs flex-1 ${disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}">
        <i data-feather="${iconName}" class="w-4 h-4"></i> ${label}
      </a>`;
      }

      function listItem(text) {
        return `<li class="flex gap-2"><span class="text-accent-400">&bull;</span><span>${text}</span></li>`;
      }

      function openProjectModal(index) {
        const project = manualProjects[index];
        const details = projectDetails[index];
        if (!project || !details || !els.projectModal) return;

        els.modalTitle.textContent = project.name;
        els.modalSummary.textContent = details.summary;
        els.modalProblem.textContent = details.problem;
        els.modalApproach.textContent = details.approach;
        els.modalModel.textContent = details.model;
        els.modalMetrics.textContent = `Results / Metrics: ${details.metrics}`;
        els.modalArchitectureDiagram.innerHTML = details.architecture.map((item, step) => `
          <div class="architecture-node">
            <span class="architecture-index">${step + 1}</span>
            <span>${item}</span>
          </div>
        `).join('');
        els.modalDataFlow.innerHTML = details.dataFlow.map(item => listItem(item)).join('');
        els.modalChallenges.innerHTML = details.challenges.map(item => listItem(item)).join('');
        els.modalFuture.innerHTML = details.future.map(item => listItem(item)).join('');
        els.modalTechStack.innerHTML = project.tech.map(badge).join('');
        els.modalActions.innerHTML = [
          actionButton('Source Code', project.source, 'github'),
          actionButton('Live Demo', project.live, 'external-link', true)
        ].join('');

        els.projectModal.classList.add('open');
        els.projectModal.removeAttribute('inert');
        els.projectModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overflow-hidden');
        els.modalClose?.focus();
        feather.replace();
      }

      function closeProjectModal() {
        els.projectModal?.classList.remove('open');
        els.projectModal?.setAttribute('inert', '');
        els.projectModal?.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('overflow-hidden');
      }

      function bindProjectDetails() {
        document.querySelectorAll('.project-details').forEach(button => {
          button.addEventListener('click', () => openProjectModal(Number(button.dataset.projectIndex)));
        });
      }

      function initTiltCards() {
        if (!window.matchMedia('(pointer: fine)').matches) return;
        document.querySelectorAll('.card-tilt').forEach(card => {
          let frame = 0;
          card.addEventListener('pointermove', (event) => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
              const rect = card.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - .5;
              const y = (event.clientY - rect.top) / rect.height - .5;
              card.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
              card.style.setProperty('--ry', `${(x * 5).toFixed(2)}deg`);
              card.style.setProperty('--lift', '-4px');
              frame = 0;
            });
          }, { passive: true });
          card.addEventListener('pointerleave', () => {
            card.style.setProperty('--rx', '0deg');
            card.style.setProperty('--ry', '0deg');
            card.style.setProperty('--lift', '0');
          });
        });
      }

      function updateRiskDemo() {
        if (!els.co2Input || !els.pmInput) return;
        const co2 = Number(els.co2Input.value);
        const pm = Number(els.pmInput.value);
        const co2Score = Math.min(100, Math.max(0, ((co2 - 350) / 1650) * 100));
        const pmScore = Math.min(100, Math.max(0, ((pm - 5) / 245) * 100));
        const score = Math.round((co2Score * .52) + (pmScore * .48));
        const label = score > 68 ? 'High Risk' : score > 38 ? 'Watch' : 'Healthy';

        els.co2Value.textContent = co2;
        els.pmValue.textContent = pm;
        els.riskLabel.textContent = label;
        els.riskFill.style.width = `${score}%`;
        els.riskScore.textContent = `${score}% risk score`;
        els.riskLabel.className = `mt-1 font-display text-2xl font-bold ${score > 68 ? 'text-red-300' : score > 38 ? 'text-accent-300' : 'text-emerald-300'}`;
      }

      function init() {
        els.heroAvatar.src = 'images/gitprofil.jpeg';
        els.navAvatar.src = 'images/chill.jpeg';
        els.brandName.textContent = 'Ayush Ranjane';

        if (els.repos) {
          els.repos.innerHTML = `${feather.icons.folder.toSvg({ class: 'w-4 h-4' })} ${manualProjects.length} Projects`;
        }

        els.projectsGrid.innerHTML = manualProjects.map(renderManualCard).join('');
        bindProjectDetails();
        observeReveals();
        initTiltCards();
        updateRiskDemo();
        els.co2Input?.addEventListener('input', updateRiskDemo);
        els.pmInput?.addEventListener('input', updateRiskDemo);
        els.modalClose?.addEventListener('click', closeProjectModal);
        els.projectModal?.addEventListener('click', (e) => {
          if (e.target === els.projectModal) closeProjectModal();
        });
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeProjectModal();
        });
        feather.replace();
      }

      init();
    });

