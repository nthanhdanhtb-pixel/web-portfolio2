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
// 6-LAYER CANVAS BACKGROUND ENGINE — PRESTIGE PASTEL EDITION
// ==========================================================================
// Rebuilt to align with background.png color palette and depth style.
//
// Layer 1: Volumetric Aurora washes & Ambient lighting
// Layer 2: Curved Data Streams (Cubic Bezier trajectories)
// Layer 3: AI Network Nodes (Pulsing nodes with glowing halos)
// Layer 4: Signal Transmission Pulses (Traveling energy packets along networks)
// Layer 5: Holographic HUD Ornaments (Targeting reticles, scanning sweeps, coordinates)
// Layer 6: Parallax Depth & Interactive mouse forces
// ==========================================================================
(function() {
  const canvas = document.getElementById('interactive-grid-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let dpr = window.devicePixelRatio || 1;
  let isMobile = window.innerWidth <= 768;
  let W = window.innerWidth;
  let H = window.innerHeight;

  // ─── DESIGN THEME & CONFIGURATION ───
  const THEME = {
    colors: {
      lavender: { r: 192, g: 132, b: 252 },  // #c084fc (dominant pastel purple)
      cyan:     { r: 6,   g: 182, b: 212 },  // #06b6d4 (pastel tech cyan)
      peach:    { r: 254, g: 215, b: 170 },  // #ffd7a8 (champagne/peach gold)
      pink:     { r: 244, g: 114, b: 182 },  // #f472b6 (accent pink)
      white:    { r: 255, g: 255, b: 255 },  // core lighting glow
    },
    // Particle count by depth plane (0=bg, 1=mid, 2=fg)
    nodeCounts:       isMobile ? [12, 18, 5] : [35, 55, 12],
    streamCounts:     isMobile ? [40, 60, 0] : [100, 180, 20],
    
    maxConnectionDist: [95, 155, 230], // connection ranges per depth
    parallax:          [0.012, 0.028, 0.055], // parallax offsets per depth
  };

  const palette = [THEME.colors.lavender, THEME.colors.cyan, THEME.colors.peach, THEME.colors.pink];

  function randomColor() {
    return palette[Math.floor(Math.random() * palette.length)];
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // ─── SYSTEM STATE ───
  let nodes = [];
  let streams = [];
  let signalPulses = [];
  let HUDAnchors = [];
  let mouse = { x: null, y: null };
  let parallaxMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let animFrameId = null;
  let time = 0;
  let laserScanY = 0;

  // ─── CANVAS RESIZE ───
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

    // Keep it light but highly immersive
    canvas.style.opacity = isMobile ? '0.45' : '0.9';

    initVolumetricSystem();
  }

  // Edge-biased spawning keeps the center clean and highlights left/right spaces
  function spawnX() {
    const zoneW = W * 0.28;
    if (Math.random() < 0.70) {
      return Math.random() < 0.5 ? Math.random() * zoneW : W - Math.random() * zoneW;
    }
    return Math.random() * W;
  }

  // ─── TRAJECTORY SYSTEM: CUBIC BEZIER CONSTRUCTOR ───
  function createBezierCurve(depth) {
    const startX = spawnX();
    const startY = Math.random() * (H + 100) - 50;
    const endX = spawnX();
    const endY = Math.random() * (H + 100) - 50;

    // Control points curve elegantly around the canvas
    const cp1x = startX + (Math.random() - 0.5) * W * 0.35;
    const cp1y = startY + (Math.random() - 0.5) * H * 0.35;
    const cp2x = endX + (Math.random() - 0.5) * W * 0.35;
    const cp2y = endY + (Math.random() - 0.5) * H * 0.35;

    return {
      t: Math.random(),
      speed: 0.0012 + Math.random() * 0.0022,
      startX, startY,
      cp1x, cp1y,
      cp2x, cp2y,
      endX, endY,
      depth: depth,
      color: randomColor(),
      radius: depth === 0 ? 0.55 : (depth === 1 ? 1.2 : 2.8),
      opacity: depth === 0 ? 0.12 : (depth === 1 ? 0.28 : 0.45),
    };
  }

  // Compute points along cubic bezier paths
  function getBezierPoint(b) {
    const t = b.t;
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;

    const x = mt3 * b.startX + 3 * mt2 * t * b.cp1x + 3 * mt * t2 * b.cp2x + t3 * b.endX;
    const y = mt3 * b.startY + 3 * mt2 * t * b.cp1y + 3 * mt * t2 * b.cp2y + t3 * b.endY;
    return { x, y };
  }

  // ─── INITIALIZE VOLUMETRIC SYSTEM ───
  function initVolumetricSystem() {
    nodes = [];
    streams = [];
    signalPulses = [];
    HUDAnchors = [];

    // Spawning Nodes across three depth zones
    for (let depth = 0; depth < 3; depth++) {
      const count = THEME.nodeCounts[depth];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: spawnX(),
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.14,
          depth: depth,
          radius: depth === 0 ? 1.2 : (depth === 1 ? 2.6 : 5.5),
          opacity: depth === 0 ? 0.14 : (depth === 1 ? 0.32 : 0.52),
          color: randomColor(),
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.012,
          glowAmp: depth === 2 ? 6 : 0,
        });
      }
    }

    // Spawning Curved Data Streams
    for (let depth = 0; depth < 3; depth++) {
      const count = THEME.streamCounts[depth];
      for (let i = 0; i < count; i++) {
        streams.push(createBezierCurve(depth));
      }
    }

    // Spawning Static Holographic HUD Anchors
    if (!isMobile) {
      HUDAnchors = [
        { x: W * 0.15, y: H * 0.35, size: 80, speed: 0.004, color: THEME.colors.cyan },
        { x: W * 0.82, y: H * 0.65, size: 110, speed: -0.002, color: THEME.colors.lavender }
      ];
    }
  }

  // ─── LAYER 1: AMBIENT LIGHT & SUBTLE GRID ───
  function drawBackgroundGrid() {
    ctx.strokeStyle = `rgba(148, 163, 184, 0.016)`;
    ctx.lineWidth = 0.5;

    const gridSize = 45;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }

  // ─── LAYER 2: CURVED DATA STREAMS ───
  function drawDataStreams(px, py) {
    streams.forEach(b => {
      b.t += b.speed;
      if (b.t >= 1) {
        // Recycle curve once it completes
        const fresh = createBezierCurve(b.depth);
        Object.assign(b, fresh);
        b.t = 0;
      }

      const p = getBezierPoint(b);
      // Apply volumetric parallax coordinate offset
      const drawX = p.x + px * THEME.parallax[b.depth] * W;
      const drawY = p.y + py * THEME.parallax[b.depth] * H;

      // Mouse attraction force bends data streams slightly
      let mx = 0, my = 0;
      if (mouse.x !== null) {
        const dx = drawX - mouse.x;
        const dy = drawY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          mx = -(dx / dist) * force * 15;
          my = -(dy / dist) * force * 15;
        }
      }

      ctx.fillStyle = `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, ${b.opacity})`;
      ctx.beginPath();
      ctx.arc(drawX + mx, drawY + my, b.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // ─── LAYER 3 & 4: AI NETWORK & SIGNAL PULSES ───
  function drawAINetwork(px, py) {
    // 1. Update and draw nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;

      // Wall rebounds
      if (n.x < -30)    n.x = W + 30;
      if (n.x > W + 30) n.x = -30;
      if (n.y < -30)    n.y = H + 30;
      if (n.y > H + 30) n.y = -30;

      const drawX = n.x + px * THEME.parallax[n.depth] * W;
      const drawY = n.y + py * THEME.parallax[n.depth] * H;

      n.pulsePhase += n.pulseSpeed;
      const wave = Math.sin(n.pulsePhase);
      const drawRadius = n.radius * (1 + wave * 0.15);

      // Brighten nodes when cursor is nearby
      let hoverGlow = 0;
      if (mouse.x !== null) {
        const dx = drawX - mouse.x;
        const dy = drawY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          hoverGlow = (150 - dist) / 150;
        }
      }

      // Dynamic Node Glow halo (Volumetric Lighting)
      if (n.depth === 2 || hoverGlow > 0) {
        const glowRad = drawRadius * (hoverGlow > 0 ? (2 + hoverGlow * 3) : 3.5);
        const glowAlpha = n.opacity * (0.18 + hoverGlow * 0.45);
        const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, glowRad);
        grad.addColorStop(0, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${glowAlpha})`);
        grad.addColorStop(1, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, 0)`);
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(drawX, drawY, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node core
      ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${n.opacity + hoverGlow * 0.35})`;
      ctx.beginPath();
      ctx.arc(drawX, drawY, drawRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    // 2. Establish connections (glowing connection lines)
    const maxDist = THEME.maxConnectionDist;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];

        // Connect only if they reside in the identical depth plane to preserve clean volumetric depth layering
        if (n1.depth !== n2.depth) continue;

        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const distSq = dx * dx + dy * dy;
        const range = maxDist[n1.depth];

        if (distSq < range * range) {
          const dist = Math.sqrt(distSq);
          let alpha = (1 - dist / range) * (n1.depth === 0 ? 0.05 : (n1.depth === 1 ? 0.12 : 0.22));

          const x1 = n1.x + px * THEME.parallax[n1.depth] * W;
          const y1 = n1.y + py * THEME.parallax[n1.depth] * H;
          const x2 = n2.x + px * THEME.parallax[n2.depth] * W;
          const y2 = n2.y + py * THEME.parallax[n2.depth] * H;

          // Increase intensity near mouse
          if (mouse.x !== null) {
            const mx = (x1 + x2) / 2;
            const my = (y1 + y2) / 2;
            const mdx = mx - mouse.x;
            const mdy = my - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 140) {
              alpha += (1 - mdist / 140) * 0.25;
            }
          }

          const grad = ctx.createLinearGradient(x1, y1, x2, y2);
          grad.addColorStop(0, `rgba(${n1.color.r}, ${n1.color.g}, ${n1.color.b}, ${alpha})`);
          grad.addColorStop(1, `rgba(${n2.color.r}, ${n2.color.g}, ${n2.color.b}, ${alpha})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = n1.depth === 0 ? 0.45 : (n1.depth === 1 ? 0.8 : 1.3);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();

          // Chance to trigger dynamic Signal Transmission Pulse (Layer 4)
          if (time % 80 === 0 && Math.random() < 0.015 && signalPulses.length < 24) {
            signalPulses.push({
              n1: n1,
              n2: n2,
              progress: 0,
              speed: 0.008 + Math.random() * 0.012,
              color: THEME.colors.peach,
            });
          }
        }
      }
    }

    // 3. Render traveling network energy pulses
    for (let i = signalPulses.length - 1; i >= 0; i--) {
      const pulse = signalPulses[i];
      pulse.progress += pulse.speed;

      if (pulse.progress >= 1) {
        signalPulses.splice(i, 1);
        continue;
      }

      const x1 = pulse.n1.x + px * THEME.parallax[pulse.n1.depth] * W;
      const y1 = pulse.n1.y + py * THEME.parallax[pulse.n1.depth] * H;
      const x2 = pulse.n2.x + px * THEME.parallax[pulse.n2.depth] * W;
      const y2 = pulse.n2.y + py * THEME.parallax[pulse.n2.depth] * H;

      const pxPos = lerp(x1, x2, pulse.progress);
      const pyPos = lerp(y1, y2, pulse.progress);
      const drawSize = pulse.n1.depth === 0 ? 2 : (pulse.n1.depth === 1 ? 3.5 : 5);

      // Pulse Glow halo
      const pulseGrad = ctx.createRadialGradient(pxPos, pyPos, 0, pxPos, pyPos, drawSize * 2.8);
      pulseGrad.addColorStop(0, `rgba(${pulse.color.r}, ${pulse.color.g}, ${pulse.color.b}, 0.7)`);
      pulseGrad.addColorStop(1, `rgba(${pulse.color.r}, ${pulse.color.g}, ${pulse.color.b}, 0)`);

      ctx.fillStyle = pulseGrad;
      ctx.beginPath();
      ctx.arc(pxPos, pyPos, drawSize * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Core signal node
      ctx.fillStyle = `rgba(${THEME.colors.white.r}, ${THEME.colors.white.g}, ${THEME.colors.white.b}, 0.95)`;
      ctx.beginPath();
      ctx.arc(pxPos, pyPos, drawSize * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ─── LAYER 5: HOLOGRAPHIC TECH HUDS ───
  function drawHolographicHUDs(px, py) {
    if (isMobile) return;

    // 1. Rotating concentric structural circles
    HUDAnchors.forEach(a => {
      const drawX = a.x + px * 0.035 * W;
      const drawY = a.y + px * 0.035 * H;
      a.speed = a.speed;
      const angle = time * a.speed;

      ctx.strokeStyle = `rgba(${a.color.r}, ${a.color.g}, ${a.color.b}, 0.08)`;
      ctx.lineWidth = 0.5;

      // Outer dashed circle
      ctx.save();
      ctx.translate(drawX, drawY);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.arc(0, 0, a.size, 0, Math.PI * 2);
      ctx.setLineDash([4, 12]);
      ctx.stroke();
      ctx.restore();

      // Inner thin solid ring
      ctx.beginPath();
      ctx.arc(drawX, drawY, a.size * 0.75, 0, Math.PI * 2);
      ctx.stroke();

      // Center crosshair sights
      ctx.beginPath();
      ctx.moveTo(drawX - 6, drawY); ctx.lineTo(drawX + 6, drawY);
      ctx.moveTo(drawX, drawY - 6); ctx.lineTo(drawX, drawY + 6);
      ctx.stroke();
    });

    // 2. Continuous horizontal scanning laser sweep
    laserScanY += 0.85;
    if (laserScanY > H) laserScanY = 0;

    const grad = ctx.createLinearGradient(0, laserScanY - 15, 0, laserScanY + 1);
    grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
    grad.addColorStop(0.8, 'rgba(6, 182, 212, 0.015)');
    grad.addColorStop(1, 'rgba(6, 182, 212, 0.06)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, laserScanY - 15, W, 16);

    // 3. Mouse active targeting corner HUD sights
    if (mouse.x !== null) {
      const mx = mouse.x;
      const my = mouse.y;
      
      ctx.strokeStyle = `rgba(${THEME.colors.cyan.r}, ${THEME.colors.cyan.g}, ${THEME.colors.cyan.b}, 0.28)`;
      ctx.lineWidth = 0.8;
      
      // Top-Left corner bracket
      ctx.beginPath();
      ctx.moveTo(mx - 18, my - 10);
      ctx.lineTo(mx - 18, my - 18);
      ctx.lineTo(mx - 10, my - 18);
      ctx.stroke();

      // Bottom-Right corner bracket
      ctx.beginPath();
      ctx.moveTo(mx + 10, my + 18);
      ctx.lineTo(mx + 18, my + 18);
      ctx.lineTo(mx + 18, my + 10);
      ctx.stroke();

      // Tech coordinates read-out
      ctx.fillStyle = `rgba(${THEME.colors.cyan.r}, ${THEME.colors.cyan.g}, ${THEME.colors.cyan.b}, 0.4)`;
      ctx.font = '8px JetBrains Mono, monospace';
      ctx.fillText(`LOC: [X:${mx.toFixed(0)}, Y:${my.toFixed(0)}]`, mx + 22, my - 8);
      ctx.fillText(`STATE: ACTIVE_SYS`, mx + 22, my + 2);
    }
  }

  // ─── DEBOUNCED RESIZE ───
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 200);
  });

  // ─── MOUSE BINDINGS ───
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

  // ─── MAIN ANIMATION LOOP ───
  function renderFrame() {
    time++;
    ctx.clearRect(0, 0, W, H);

    // Apply volumetric parallax smoothing via linear interpolation (lerp)
    parallaxMouse.x = lerp(parallaxMouse.x, parallaxMouse.targetX, 0.025);
    parallaxMouse.y = lerp(parallaxMouse.y, parallaxMouse.targetY, 0.025);
    const px = parallaxMouse.x;
    const py = parallaxMouse.y;

    // Render multi-layer canvas elements back-to-front
    drawBackgroundGrid();                     // Layer 1 Grid
    drawDataStreams(px, py);                  // Layer 2 Curved Streams
    drawAINetwork(px, py);                    // Layer 3 + 4 AI Connections & energy signals
    drawHolographicHUDs(px, py);              // Layer 5 Holographic tech indicators

    animFrameId = requestAnimationFrame(renderFrame);
  }

  // ─── INIT & START ───
  resizeCanvas();
  renderFrame();

  // Cleanup
  window.addEventListener('beforeunload', () => {
    if (animFrameId) cancelAnimationFrame(animFrameId);
  });
})();


