/* ==========================================================================
   PORTFOLIO JAVASCRIPT — AI PREMIUM 6-LAYER ENGINE
   Thiết kế bởi: Antigravity — Senior UI/UX & Creative Developer
   Chủ sở hữu: Nguyễn Thành Danh — UET — MSSV: 25020058
   
   Architecture:
   ─ Layer 1: Aurora Gradient Animation (Canvas radial gradients)
   ─ Layer 2: Floating Blur Orbs (Canvas pre-rendered textures)
   ─ Layer 3: AI Particle System (Canvas circles, 80–150 particles)
   ─ Layer 4: Neural Network Lines (Canvas connecting lines)
   ─ Layer 5: Mouse Interaction (Attraction + Ripple)
   ─ Layer 6: Parallax Depth (Mouse-based coordinate offsets)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('AI Premium 6-Layer Engine v2.0 — Initialized.');

  // ================= 1. DYNAMIC TYPING EFFECT =================
  const typingTarget = document.getElementById('dynamic-typing-text');
  const phrases = [
    "Tích hợp Trí tuệ Nhân tạo",
    "Tối ưu hóa Hệ thống",
    "Nâng cao Năng lực Số"
  ];

  if (typingTarget) {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
      } else {
        typingTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingDelay = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingDelay = 500;
      }

      setTimeout(typeEffect, typingDelay);
    }

    setTimeout(typeEffect, 1000);
  }

  // ================= 2. MOBILE MENU =================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');

      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        menuIcon.classList.remove('rotate-90');
      } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        menuIcon.classList.add('rotate-90');
      }
    });

    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        menuIcon.classList.remove('rotate-90');
      });
    });
  }

  // ================= 3. HEADER SCROLL INTERACTION =================
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('bg-white/85', 'shadow-lg', 'shadow-slate-100/60', 'border-slate-300/40');
        header.classList.remove('bg-white/70', 'border-slate-200/80');
      } else {
        header.classList.remove('bg-white/85', 'shadow-lg', 'shadow-slate-100/60', 'border-slate-300/40');
        header.classList.add('bg-white/70', 'border-slate-200/80');
      }
    }
  });

  // ================= 4. SMOOTH SCROLL =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // ================= 5. REVEAL-ON-SCROLL =================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // ================= 6. INTERACTIVE FILE TREE & METADATA PANEL =================
  const fileMetadata = {
    'root-portfolio': {
      name: 'root-portfolio/', type: 'Thư mục gốc',
      path: './root-portfolio', size: '12.0 MB', date: '29/05/2026',
      items: '6 thư mục con',
      desc: 'Thư mục quản lý toàn bộ các bài tập thực hành môn học Công nghệ số & Ứng dụng AI.'
    },
    'folder-01': {
      name: '01_quan_ly_tep_tin/', type: 'Thư mục dự án',
      path: './root-portfolio/01_quan_ly_tep_tin', size: '1.24 MB', date: '28/05/2026',
      items: '2 tệp tin',
      desc: 'Module thực hành về quản lý, sắp xếp tệp tin và thiết lập sơ đồ thư mục khoa học.'
    },
    'file-01-pdf': {
      name: '20260528_BT1.pdf', type: 'Tài liệu PDF',
      path: '.../01_quan_ly_tep_tin/20260528_BT1.pdf', size: '412 KB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Bản in PDF minh họa cho kết quả thực nghiệm bài tập 1, sẵn sàng để đồng bộ hóa.'
    },
    'file-01-doc': {
      name: 'Bao_cao_Bai1.docx', type: 'Tài liệu Word',
      path: '.../01_quan_ly_tep_tin/Bao_cao_Bai1.docx', size: '863 KB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Tệp báo cáo Word chi tiết bài thực hành quản lý tệp tin. Có thể tải xuống trực tiếp ở liên kết tải báo cáo cục bộ.'
    },
    'folder-02': {
      name: '02_khai_thac_thong_tin/', type: 'Thư mục dự án',
      path: './root-portfolio/02_khai_thac_thong_tin', size: '24.6 KB', date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Chứa tài liệu học tập và nghiên cứu trích xuất dữ liệu khoa học từ các thư viện học thuật uy tín.'
    },
    'file-02-doc': {
      name: 'Bao_cao_Bai2.docx', type: 'Tài liệu Word',
      path: '.../02_khai_thac_thong_tin/Bao_cao_Bai2.docx', size: '24.6 KB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo về phương pháp tìm kiếm nâng cao (Google Advanced Operators) và bộ tiêu chí kiểm chứng nguồn tin học thuật.'
    },
    'folder-03': {
      name: '03_prompt_eng/', type: 'Thư mục dự án',
      path: './root-portfolio/03_prompt_engineering', size: '27.1 KB', date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Module chứa nghiên cứu và thực hành kỹ thuật Prompt Engineering nâng cao (Few-shot, Chain-of-Thought).'
    },
    'file-03-doc': {
      name: 'Bao_cao_Bai3.docx', type: 'Tài liệu Word',
      path: '.../03_prompt_engineering/Bao_cao_Bai3.docx', size: '27.1 KB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo Word phân tích chi tiết hiệu quả của Prompt Engineering. So sánh trực quan câu lệnh gốc và câu lệnh cải tiến.'
    },
    'folder-04': {
      name: '04_hop_tac_tt/', type: 'Thư mục dự án',
      path: './root-portfolio/04_hop_tac_truc_tuyen', size: '2.12 MB', date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Lưu trữ các kịch bản làm việc nhóm trực tuyến, sơ đồ Kanban phân công tác vụ thời gian thực.'
    },
    'file-04-doc': {
      name: 'Bao_cao_Bai4.docx', type: 'Tài liệu Word',
      path: '.../04_hop_tac_truc_tuyen/Bao_cao_Bai4.docx', size: '2.12 MB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo tổng hợp quy trình làm việc nhóm từ xa, phân vai và tích hợp Notion/Trello Workspaces.'
    },
    'folder-05': {
      name: '05_sang_tao_nd/', type: 'Thư mục dự án',
      path: './root-portfolio/05_sang_tao_noi_dung', size: '5.85 MB', date: '28/05/2026',
      items: '2 tệp tin',
      desc: 'Chứa các tư liệu truyền thông đa phương tiện được đồng sáng tạo cùng AI tạo sinh nghệ thuật.'
    },
    'file-05-doc': {
      name: 'Bao_cao_Bai5.docx', type: 'Tài liệu Word',
      path: '.../05_sang_tao_noi_dung/Bao_cao_Bai5.docx', size: '5.78 MB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo về quy trình phối hợp nhân-máy trong sáng tạo kịch bản và thiết kế hình ảnh truyền thông đa phương tiện.'
    },
    'file-05-img': {
      name: '1.jpg', type: 'Hình ảnh JPG',
      path: '.../05_sang_tao_noi_dung/1.jpg', size: '75.1 KB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Ảnh chân dung cá nhân của Nguyễn Thành Danh. Được tối ưu kỹ thuật và hiển thị sắc nét toàn diện.'
    },
    'folder-06': {
      name: '06_an_toan_lc/', type: 'Thư mục dự án',
      path: './root-portfolio/06_an_toan_liem_chinh', size: '2.84 MB', date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Lưu trữ các văn bản, báo cáo cam kết tuân thủ Đạo đức và Liêm chính học thuật trong thời đại số.'
    },
    'file-06-doc': {
      name: 'Bao_cao_Bai6.docx', type: 'Tài liệu Word',
      path: '.../06_an_toan_liem_chinh/Bao_cao_Bai6.docx', size: '2.84 MB', date: '28/05/2026',
      items: 'N/A',
      desc: 'Bản báo cáo chi tiết về Bộ quy tắc ứng xử chuẩn mực, an toàn dữ liệu cá nhân và cam kết liêm chính học thuật số.'
    }
  };

  const treeItems = document.querySelectorAll('.tree-item');
  const metaName = document.getElementById('meta-name');
  const metaType = document.getElementById('meta-type');
  const metaPath = document.getElementById('meta-path');
  const metaSize = document.getElementById('meta-size');
  const metaDate = document.getElementById('meta-date');
  const metaItems = document.getElementById('meta-items');
  const metaDesc = document.getElementById('meta-desc');

  let activeSelectedKey = 'root-portfolio';

  function updateMetadataPanel(key) {
    const data = fileMetadata[key];
    if (!data) return;

    if (metaName) metaName.textContent = data.name;
    if (metaType) {
      metaType.textContent = data.type;
      metaType.className = 'text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ';

      if (data.type.includes('Thư mục')) {
        metaType.classList.add('bg-blue-50', 'text-blue-600', 'border', 'border-blue-200');
      } else if (data.type.includes('Word')) {
        metaType.classList.add('bg-indigo-50', 'text-indigo-600', 'border', 'border-indigo-200');
      } else if (data.type.includes('PDF')) {
        metaType.classList.add('bg-rose-50', 'text-rose-600', 'border', 'border-rose-200');
      } else {
        metaType.classList.add('bg-amber-50', 'text-amber-600', 'border', 'border-amber-200');
      }
    }
    if (metaPath) metaPath.textContent = data.path;
    if (metaSize) metaSize.textContent = data.size;
    if (metaDate) metaDate.textContent = data.date;

    const metaItemsRow = document.getElementById('meta-items-row');
    if (metaItemsRow) {
      if (data.items === 'N/A') {
        metaItemsRow.style.display = 'none';
      } else {
        metaItemsRow.style.display = 'flex';
        if (metaItems) metaItems.textContent = data.items;
      }
    }
    if (metaDesc) metaDesc.textContent = data.desc;
  }

  updateMetadataPanel('root-portfolio');

  treeItems.forEach(item => {
    const key = item.getAttribute('data-tree-key');

    item.addEventListener('click', (e) => {
      const node = item.closest('.tree-node-parent');
      if (node && (e.target.closest('.tree-toggle-icon') || e.target.classList.contains('tree-toggle-icon'))) {
        node.classList.toggle('folder-collapsed');
        e.stopPropagation();
        return;
      }

      if (node && !item.getAttribute('data-tree-key').includes('file')) {
        node.classList.toggle('folder-collapsed');
      }

      treeItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      activeSelectedKey = key;
      updateMetadataPanel(key);
    });

    item.addEventListener('mouseenter', () => {
      updateMetadataPanel(key);
    });
  });

  // ================= 7. CSS PARALLAX ON MOUSE MOVE (Layer 6) =================
  // Apply subtle parallax transforms to the CSS aurora blobs based on mouse position.
  const parallaxLayers = document.querySelectorAll('.aurora-blob-container, .aurora-base-layer');
  let targetPX = 0, targetPY = 0;
  let currentPX = 0, currentPY = 0;

  window.addEventListener('mousemove', (e) => {
    const cx = (e.clientX / window.innerWidth  - 0.5) * 2; // -1 to 1
    const cy = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
    targetPX = cx;
    targetPY = cy;
  });

  function updateParallax() {
    // Smooth interpolation
    currentPX += (targetPX - currentPX) * 0.03;
    currentPY += (targetPY - currentPY) * 0.03;

    parallaxLayers.forEach((layer, i) => {
      const depth = (i + 1) * 8; // Each layer moves differently
      const tx = currentPX * depth;
      const ty = currentPY * depth;
      layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });

    requestAnimationFrame(updateParallax);
  }

  if (window.innerWidth > 768) {
    updateParallax();
  }

  // ================= 8. ACTIVE NAV LINK HIGHLIGHT =================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});


// ==========================================================================
// 6-LAYER CANVAS BACKGROUND ENGINE
// ==========================================================================
// Renders on a single <canvas> with position:fixed behind all content.
//
// Layer 1: Aurora Gradients — Large, slow-moving radial color washes
// Layer 2: Floating Orbs    — Medium blurred circles (pre-rendered textures)
// Layer 3: AI Particles     — 80–150 small moving dots
// Layer 4: Neural Network   — Lines connecting nearby particles
// Layer 5: Mouse Interaction — Attraction force + ripple rings
// Layer 6: Parallax Depth   — Mouse-based coordinate offsets per layer
//
// Performance targets: 60 FPS, no heavy libraries, requestAnimationFrame.
// ==========================================================================
(function() {
  const canvas = document.getElementById('interactive-grid-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let dpr = window.devicePixelRatio || 1;
  let isMobile = window.innerWidth <= 768;
  let W = window.innerWidth;
  let H = window.innerHeight;

  // ─── CONFIGURATION ───
  const CONFIG = {
    // Layer 3: Particle count (adaptive)
    get particleCount() { return isMobile ? 25 : 120; },
    particleSpeed: 0.35,
    edgeBias: 0.65,          // 65% of particles on left/right edges
    edgeZoneWidth: 0.28,     // Edge zone = 28% of screen width

    // Layer 4: Neural network
    maxConnectionDist: 150,
    get lineOpacityMax() { return isMobile ? 0.03 : 0.08; },

    // Layer 5: Mouse interaction
    mouseRadius: 200,
    mouseForce: 0.10,
    attractMode: true,       // true = attract, false = repel

    // Layer 1: Aurora count
    auroraCount: 3,

    // Layer 2: Orb count
    get orbCount() { return isMobile ? 3 : 6; },

    // Layer 6: Parallax depths (multipliers)
    parallax: {
      aurora: 0.015,
      orbs: 0.03,
      particles: 0.05,
    },

    // Color palette
    colors: {
      teal:   { r: 0,   g: 198, b: 255 },
      blue:   { r: 0,   g: 114, b: 255 },
      purple: { r: 138, g: 35,  b: 135 },
    },

    // Opacity ranges
    get particleOpacityRange() { return isMobile ? [0.02, 0.06] : [0.06, 0.25]; },

    // Grid
    gridSize: 50,
    gridOpacity: 0.018,
  };

  // ─── STATE ───
  let particles = [];
  let auroras = [];
  let orbs = [];
  let ripples = [];
  let mouse = { x: null, y: null };
  let parallaxMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let animFrameId = null;
  let orbTextures = {};
  let time = 0;

  // ─── UTILITIES ───
  const palette = [CONFIG.colors.teal, CONFIG.colors.blue, CONFIG.colors.purple];

  function randomColor() {
    return palette[Math.floor(Math.random() * palette.length)];
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // ─── CANVAS RESIZE (DPI-aware) ───
  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    isMobile = window.innerWidth <= 768;
    W = window.innerWidth;
    H = window.innerHeight;

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    canvas.style.opacity = isMobile ? '0.4' : '0.9';

    initAuroras();
    initOrbs();
    initParticles();
  }

  // ─── LAYER 1: AURORA GRADIENTS ───
  // Large radial gradients that drift slowly across the canvas.
  // Rendered using createRadialGradient (no blur filter needed).

  function initAuroras() {
    auroras = [];
    const positions = [
      { x: W * 0.15, y: H * 0.25 },
      { x: W * 0.85, y: H * 0.20 },
      { x: W * 0.50, y: H * 0.75 },
    ];
    const colors = [CONFIG.colors.teal, CONFIG.colors.purple, CONFIG.colors.blue];
    const radii = [Math.min(W, H) * 0.35, Math.min(W, H) * 0.30, Math.min(W, H) * 0.28];

    for (let i = 0; i < CONFIG.auroraCount; i++) {
      auroras.push({
        baseX: positions[i].x,
        baseY: positions[i].y,
        x: positions[i].x,
        y: positions[i].y,
        radius: radii[i],
        color: colors[i],
        phase: (Math.PI * 2 / CONFIG.auroraCount) * i,
        speed: 0.0008 + Math.random() * 0.0005,
        driftX: 40 + Math.random() * 30,
        driftY: 30 + Math.random() * 25,
        opacity: isMobile ? 0.03 : 0.06,
      });
    }
  }

  function drawAuroras(px, py) {
    auroras.forEach(a => {
      // Slow orbital drift
      a.x = a.baseX + Math.sin(time * a.speed) * a.driftX + px * CONFIG.parallax.aurora * W;
      a.y = a.baseY + Math.cos(time * a.speed * 0.7) * a.driftY + py * CONFIG.parallax.aurora * H;

      const grad = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.radius);
      grad.addColorStop(0, `rgba(${a.color.r}, ${a.color.g}, ${a.color.b}, ${a.opacity})`);
      grad.addColorStop(0.5, `rgba(${a.color.r}, ${a.color.g}, ${a.color.b}, ${a.opacity * 0.4})`);
      grad.addColorStop(1, `rgba(${a.color.r}, ${a.color.g}, ${a.color.b}, 0)`);

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    });
  }

  // ─── LAYER 2: FLOATING BLUR ORBS ───
  // Pre-rendered blurred circle textures drawn as images for performance.

  function createOrbTexture(radius, color, alpha) {
    const padding = radius * 0.5;
    const size = (radius + padding) * 2;
    const offscreen = document.createElement('canvas');
    offscreen.width = size;
    offscreen.height = size;
    const octx = offscreen.getContext('2d');

    // Draw a soft radial gradient (simulates blur without filter)
    const grad = octx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, radius);
    grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`);
    grad.addColorStop(0.4, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.5})`);
    grad.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.15})`);
    grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

    octx.fillStyle = grad;
    octx.beginPath();
    octx.arc(size / 2, size / 2, radius + padding, 0, Math.PI * 2);
    octx.fill();

    return { canvas: offscreen, size: size };
  }

  function initOrbs() {
    orbs = [];
    for (let i = 0; i < CONFIG.orbCount; i++) {
      const col = randomColor();
      const radius = 60 + Math.random() * 80;
      const alpha = isMobile ? 0.04 : 0.08 + Math.random() * 0.06;
      const tex = createOrbTexture(radius, col, alpha);

      orbs.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.12,
        radius: radius,
        texture: tex,
        phase: Math.random() * Math.PI * 2,
        floatSpeed: 0.002 + Math.random() * 0.003,
        floatAmpX: 30 + Math.random() * 40,
        floatAmpY: 25 + Math.random() * 35,
        baseX: Math.random() * W,
        baseY: Math.random() * H,
      });
    }
  }

  function drawOrbs(px, py) {
    orbs.forEach(o => {
      // Gentle floating motion
      o.x = o.baseX + Math.sin(time * o.floatSpeed + o.phase) * o.floatAmpX + px * CONFIG.parallax.orbs * W;
      o.y = o.baseY + Math.cos(time * o.floatSpeed * 0.8 + o.phase) * o.floatAmpY + py * CONFIG.parallax.orbs * H;

      // Soft wrap around edges
      if (o.x < -o.texture.size) o.baseX += W + o.texture.size;
      if (o.x > W + o.texture.size) o.baseX -= W + o.texture.size;
      if (o.y < -o.texture.size) o.baseY += H + o.texture.size;
      if (o.y > H + o.texture.size) o.baseY -= H + o.texture.size;

      ctx.drawImage(o.texture.canvas, o.x - o.texture.size / 2, o.y - o.texture.size / 2);
    });
  }

  // ─── LAYER 3: AI PARTICLE SYSTEM ───
  // 80–150 particles of varying size, opacity, and color.
  // Edge-biased distribution fills the left/right empty spaces.

  function spawnX() {
    const edgeW = W * CONFIG.edgeZoneWidth;
    if (Math.random() < CONFIG.edgeBias) {
      return Math.random() < 0.5
        ? Math.random() * edgeW
        : W - Math.random() * edgeW;
    }
    return Math.random() * W;
  }

  function initParticles() {
    particles = [];
    const count = CONFIG.particleCount;
    const [opMin, opMax] = CONFIG.particleOpacityRange;

    for (let i = 0; i < count; i++) {
      const col = randomColor();
      const isNode = Math.random() < 0.2;
      const opacity = opMin + Math.random() * (opMax - opMin);

      particles.push({
        x: spawnX(),
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
        vy: (Math.random() - 0.5) * CONFIG.particleSpeed,
        radius: isNode ? (2 + Math.random() * 2.5) : (0.5 + Math.random() * 1.5),
        color: col,
        opacity: opacity,
        isNode: isNode,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
      });
    }
  }

  function updateAndDrawParticles(px, py) {
    particles.forEach(p => {
      // Apply parallax offset (Layer 6)
      const drawX = p.x + px * CONFIG.parallax.particles * W;
      const drawY = p.y + py * CONFIG.parallax.particles * H;

      // Drift motion
      p.x += p.vx;
      p.y += p.vy;

      // Soft edge wrap
      if (p.x < -30)    p.x = W + 30;
      if (p.x > W + 30) p.x = -30;
      if (p.y < -30)    p.y = H + 30;
      if (p.y > H + 30) p.y = -30;

      // Layer 5: Mouse interaction (attraction + glow boost)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const radiusSq = CONFIG.mouseRadius * CONFIG.mouseRadius;

        if (distSq < radiusSq) {
          const dist = Math.sqrt(distSq) || 1;
          const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;

          if (CONFIG.attractMode) {
            // Gentle attraction toward cursor
            p.x -= (dx / dist) * force * CONFIG.mouseForce * 8;
            p.y -= (dy / dist) * force * CONFIG.mouseForce * 8;
          } else {
            // Repulsion away from cursor
            p.x += (dx / dist) * force * CONFIG.mouseForce * 12;
            p.y += (dy / dist) * force * CONFIG.mouseForce * 12;
          }
        }
      }

      // Pulse for node-type particles
      let drawRadius = p.radius;
      if (p.isNode) {
        p.pulsePhase += p.pulseSpeed;
        drawRadius = p.radius * (1 + Math.sin(p.pulsePhase) * 0.25);
      }

      const { r, g, b } = p.color;

      // Draw glow halo for nodes
      if (p.isNode && !isMobile) {
        const glowGrad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, drawRadius * 4);
        glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.15})`);
        glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(drawX, drawY, drawRadius * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw particle core
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(drawX, drawY, drawRadius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // ─── LAYER 4: NEURAL NETWORK CONNECTIONS ───
  // Draw lines between particles that are close enough.
  // Line opacity fades with distance. Uses gradient coloring.

  function drawNeuralNetwork(px, py) {
    const maxDist = CONFIG.maxConnectionDist;
    const maxDistSq = maxDist * maxDist;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * CONFIG.lineOpacityMax;

          // Apply parallax offsets
          const x1 = p1.x + px * CONFIG.parallax.particles * W;
          const y1 = p1.y + py * CONFIG.parallax.particles * H;
          const x2 = p2.x + px * CONFIG.parallax.particles * W;
          const y2 = p2.y + py * CONFIG.parallax.particles * H;

          // Gradient line between two particle colors
          const grad = ctx.createLinearGradient(x1, y1, x2, y2);
          grad.addColorStop(0, `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${alpha})`);
          grad.addColorStop(1, `rgba(${p2.color.r}, ${p2.color.g}, ${p2.color.b}, ${alpha})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    }

    // Layer 5: Mouse synaptic connections (lines from cursor to nearby particles)
    if (mouse.x !== null && mouse.y !== null && !isMobile) {
      particles.forEach(p => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseRadius) {
          const alpha = (1 - dist / CONFIG.mouseRadius) * 0.12;
          const { r, g, b } = p.color;
          const px2 = p.x + px * CONFIG.parallax.particles * W;
          const py2 = p.y + py * CONFIG.parallax.particles * H;

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(px2, py2);
          ctx.stroke();
        }
      });
    }
  }

  // ─── LAYER 5 (continued): MOUSE RIPPLE EFFECT ───
  // Expanding, fading concentric rings at the mouse position.

  function addRipple(x, y) {
    if (ripples.length > 3) return; // Limit active ripples
    ripples.push({
      x: x,
      y: y,
      radius: 5,
      maxRadius: 80 + Math.random() * 40,
      opacity: 0.15,
      speed: 1.2 + Math.random() * 0.5,
      color: randomColor(),
    });
  }

  let lastRippleTime = 0;
  let lastMouseX = 0, lastMouseY = 0;

  function maybeAddRipple() {
    if (mouse.x === null || isMobile) return;

    const now = Date.now();
    const dx = mouse.x - lastMouseX;
    const dy = mouse.y - lastMouseY;
    const speed = Math.sqrt(dx * dx + dy * dy);

    // Only create ripple when mouse moves fast enough, with cooldown
    if (speed > 50 && now - lastRippleTime > 300) {
      addRipple(mouse.x, mouse.y);
      lastRippleTime = now;
    }

    lastMouseX = mouse.x;
    lastMouseY = mouse.y;
  }

  function updateAndDrawRipples() {
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += r.speed;
      r.opacity *= 0.96; // Fade out

      if (r.radius >= r.maxRadius || r.opacity < 0.005) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.strokeStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, ${r.opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // ─── SUBTLE BACKGROUND GRID ───
  function drawGrid() {
    ctx.strokeStyle = `rgba(148, 163, 184, ${CONFIG.gridOpacity})`;
    ctx.lineWidth = 0.5;

    for (let x = 0; x < W; x += CONFIG.gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += CONFIG.gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }

  // ─── MOUSE TRACKING ───
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    parallaxMouse.targetX = (e.clientX / W - 0.5) * 2;
    parallaxMouse.targetY = (e.clientY / H - 0.5) * 2;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
    parallaxMouse.targetX = 0;
    parallaxMouse.targetY = 0;
  });

  // Debounced resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 200);
  });

  // ─── MAIN RENDER LOOP ───
  function animate() {
    time++;
    W = window.innerWidth;
    H = window.innerHeight;

    ctx.clearRect(0, 0, W, H);

    // Layer 6: Smooth parallax interpolation
    parallaxMouse.x = lerp(parallaxMouse.x, parallaxMouse.targetX, 0.025);
    parallaxMouse.y = lerp(parallaxMouse.y, parallaxMouse.targetY, 0.025);
    const px = parallaxMouse.x;
    const py = parallaxMouse.y;

    // ─── Render order (back to front) ───

    // Layer 1: Aurora gradient washes
    drawAuroras(px, py);

    // Subtle grid overlay
    drawGrid();

    // Layer 2: Floating blur orbs
    drawOrbs(px, py);

    // Layer 3 + 6: AI Particles with parallax
    updateAndDrawParticles(px, py);

    // Layer 4 + 5 + 6: Neural network + mouse connections + parallax
    drawNeuralNetwork(px, py);

    // Layer 5: Ripple effect
    maybeAddRipple();
    updateAndDrawRipples();

    animFrameId = requestAnimationFrame(animate);
  }

  // ─── INIT & START ───
  resizeCanvas();
  animate();

  // Cleanup
  window.addEventListener('beforeunload', () => {
    if (animFrameId) cancelAnimationFrame(animFrameId);
  });
})();
