/* ==========================================================================
   PORTFOLIO JAVASCRIPT - DYNAMIC CYBER SYSTEM ENGINE
   Thiết kế bởi: Antigravity - Senior UI/UX & Frontend Developer
   Chủ sở hữu: Nguyễn Thành Danh - UET - MSSV: 25020058
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dynamic Lightmode Portfolio Engine Initialized.');

  // ================= 1. DYNAMIC TYPING / CHANGER EFFECT =================
  // Hiệu ứng chữ chạy tự động thay đổi các định hướng chuyên sâu của chủ sở hữu
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
        // Xóa chữ
        typingTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50; // Tốc độ xóa nhanh hơn
      } else {
        // Gõ chữ
        typingTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100; // Tốc độ gõ tiêu chuẩn
      }
      
      // Kiểm tra trạng thái hoàn thành gõ một cụm từ
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingDelay = 2000; // Dừng lại 2 giây để người dùng kịp đọc
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingDelay = 500; // Dừng một chút trước khi gõ từ tiếp theo
      }
      
      setTimeout(typeEffect, typingDelay);
    }
    
    // Khởi động hiệu ứng gõ chữ
    setTimeout(typeEffect, 1000);
  }

  // ================= 2. MOBILE MENU NAVIGATION =================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // Xoay và thay đổi hình dáng icon menu động
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        menuIcon.classList.remove('rotate-90');
      } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        menuIcon.classList.add('rotate-90');
      }
    });

    // Tự động đóng menu khi nhấp vào link điều hướng di động
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
  // Thay đổi độ mờ kính cường lực và bóng đổ của thanh header khi cuộn màn hình
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('bg-white/85', 'shadow-lg', 'shadow-slate-100/60', 'border-slate-300/40');
        header.classList.remove('bg-slate-50/70', 'border-slate-200/80');
      } else {
        header.classList.remove('bg-white/85', 'shadow-lg', 'shadow-slate-100/60', 'border-slate-300/40');
        header.classList.add('bg-slate-50/70', 'border-slate-200/80');
      }
    }
  });

  // ================= 4. SMOOTH SCROLL FOR ANCHOR LINKS =================
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

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ================= 5. REVEAL-ON-SCROLL ANIMATION ENGINE =================
  // Sử dụng Intersection Observer để phát hiện cuộn trang và kích hoạt hiệu ứng động
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Dừng theo dõi sau khi kích hoạt thành công
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Trình duyệt cũ fallback tự động kích hoạt
    revealElements.forEach(element => element.classList.add('active'));
  }

  // ================= 6. INTERACTIVE FILE TREE & METADATA PANEL =================
  // Dữ liệu Metadata Lightmode cho cấu trúc cây thư mục Bài 1
  const fileMetadata = {
    'root-portfolio': {
      name: 'root-portfolio/',
      type: 'Thư mục gốc',
      path: './root-portfolio',
      size: '12.0 MB',
      date: '29/05/2026',
      items: '6 thư mục con',
      desc: 'Thư mục quản lý toàn bộ các bài tập thực hành môn học Công nghệ số & Ứng dụng AI.'
    },
    'folder-01': {
      name: '01_quan_ly_tep_tin/',
      type: 'Thư mục dự án',
      path: './root-portfolio/01_quan_ly_tep_tin',
      size: '1.24 MB',
      date: '28/05/2026',
      items: '2 tệp tin',
      desc: 'Module thực hành về quản lý, sắp xếp tệp tin và thiết lập sơ đồ thư mục khoa học.'
    },
    'file-01-pdf': {
      name: '20260528_BT1.pdf',
      type: 'Tài liệu PDF',
      path: '.../01_quan_ly_tep_tin/20260528_BT1.pdf',
      size: '412 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Bản in PDF minh họa cho kết quả thực nghiệm bài tập 1, sẵn sàng để đồng bộ hóa.'
    },
    'file-01-doc': {
      name: 'Bao_cao_Bai1.docx',
      type: 'Tài liệu Word',
      path: '.../01_quan_ly_tep_tin/Bao_cao_Bai1.docx',
      size: '863 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Tệp báo cáo Word chi tiết bài thực hành quản lý tệp tin. Có thể tải xuống trực tiếp ở liên kết tải báo cáo cục bộ.'
    },
    'folder-02': {
      name: '02_khai_thac_thong_tin/',
      type: 'Thư mục dự án',
      path: './root-portfolio/02_khai_thac_thong_tin',
      size: '24.6 KB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Chứa tài liệu học tập và nghiên cứu trích xuất dữ liệu khoa học từ các thư viện học thuật uy tín.'
    },
    'file-02-doc': {
      name: 'Bao_cao_Bai2.docx',
      type: 'Tài liệu Word',
      path: '.../02_khai_thac_thong_tin/Bao_cao_Bai2.docx',
      size: '24.6 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo về phương pháp tìm kiếm nâng cao (Google Advanced Operators) và bộ tiêu chí kiểm chứng nguồn tin học thuật.'
    },
    'folder-03': {
      name: '03_prompt_eng/',
      type: 'Thư mục dự án',
      path: './root-portfolio/03_prompt_engineering',
      size: '27.1 KB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Module chứa nghiên cứu và thực hành kỹ thuật Prompt Engineering nâng cao (Few-shot, Chain-of-Thought).'
    },
    'file-03-doc': {
      name: 'Bao_cao_Bai3.docx',
      type: 'Tài liệu Word',
      path: '.../03_prompt_engineering/Bao_cao_Bai3.docx',
      size: '27.1 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo Word phân tích chi tiết hiệu quả của Prompt Engineering. So sánh trực quan câu lệnh gốc và câu lệnh cải tiến.'
    },
    'folder-04': {
      name: '04_hop_tac_tt/',
      type: 'Thư mục dự án',
      path: './root-portfolio/04_hop_tac_truc_tuyen',
      size: '2.12 MB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Lưu trữ các kịch bản làm việc nhóm trực tuyến, sơ đồ Kanban phân công tác vụ thời gian thực.'
    },
    'file-04-doc': {
      name: 'Bao_cao_Bai4.docx',
      type: 'Tài liệu Word',
      path: '.../04_hop_tac_truc_tuyen/Bao_cao_Bai4.docx',
      size: '2.12 MB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo tổng hợp quy trình làm việc nhóm từ xa, phân vai và tích hợp Notion/Trello Workspaces.'
    },
    'folder-05': {
      name: '05_sang_tao_nd/',
      type: 'Thư mục dự án',
      path: './root-portfolio/05_sang_tao_noi_dung',
      size: '5.85 MB',
      date: '28/05/2026',
      items: '2 tệp tin',
      desc: 'Chứa các tư liệu truyền thông đa phương tiện được đồng sáng tạo cùng AI tạo sinh nghệ thuật.'
    },
    'file-05-doc': {
      name: 'Bao_cao_Bai5.docx',
      type: 'Tài liệu Word',
      path: '.../05_sang_tao_noi_dung/Bao_cao_Bai5.docx',
      size: '5.78 MB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo về quy trình phối hợp nhân-máy trong sáng tạo kịch bản và thiết kế hình ảnh truyền thông đa phương tiện.'
    },
    'file-05-img': {
      name: '1.jpg',
      type: 'Hình ảnh JPG',
      path: '.../05_sang_tao_noi_dung/1.jpg',
      size: '75.1 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Ảnh chân dung cá nhân của Nguyễn Thành Danh. Được tối ưu kỹ thuật và hiển thị sắc nét toàn diện.'
    },
    'folder-06': {
      name: '06_an_toan_lc/',
      type: 'Thư mục dự án',
      path: './root-portfolio/06_an_toan_liem_chinh',
      size: '2.84 MB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Lưu trữ các văn bản, báo cáo cam kết tuân thủ Đạo đức và Liêm chính học thuật trong thời đại số.'
    },
    'file-06-doc': {
      name: 'Bao_cao_Bai6.docx',
      type: 'Tài liệu Word',
      path: '.../06_an_toan_liem_chinh/Bao_cao_Bai6.docx',
      size: '2.84 MB',
      date: '28/05/2026',
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
      
      // Phối màu sắc siêu rõ nét cho các tag trong bảng panel ở Lightmode
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

  // Khởi tạo hiển thị root ban đầu
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

    item.addEventListener('mouseleave', () => {
      updateMetadataPanel(activeSelectedKey);
    });
  });
});
