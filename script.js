/* ==========================================================================
   PORTFOLIO JAVASCRIPT - CYBER SYSTEM ENGINE
   Thiết kế bởi: Antigravity - Senior UI/UX & Frontend Developer
   Chủ sở hữu: Nguyễn Thành Danh - UET - MSSV: 25020058
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Cyber Tech Portfolio initialized successfully.');

  // ================= 1. MOBILE MENU NAVIGATION =================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // Rotate and change icon paths dynamically
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        menuIcon.classList.remove('rotate-90');
      } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        menuIcon.classList.add('rotate-90');
      }
    });

    // Close menu when clicking mobile links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        menuIcon.classList.remove('rotate-90');
      });
    });
  }

  // ================= 2. HEADER INTERACTION ON SCROLL =================
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('bg-slate-950/90', 'shadow-2xl', 'shadow-violet-950/10', 'border-violet-500/20');
        header.classList.remove('bg-slate-950/70', 'border-slate-800/80');
      } else {
        header.classList.remove('bg-slate-950/90', 'shadow-2xl', 'shadow-violet-950/10', 'border-violet-500/20');
        header.classList.add('bg-slate-950/70', 'border-slate-800/80');
      }
    }
  });

  // ================= 3. SMOOTH SCROLL FOR NAVIGATION LINKS =================
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

  // ================= 4. REVEAL-ON-SCROLL ANIMATION ENGINE =================
  // Thiết lập Intersection Observer để tự động thêm class .active kích hoạt CSS transitions
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Tùy chọn: dừng theo dõi sau khi đã hiển thị để tối ưu hiệu năng
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12, // Kích hoạt khi 12% thành phần xuất hiện trong khung nhìn
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback nếu trình duyệt cũ không hỗ trợ Intersection Observer
    revealElements.forEach(element => element.classList.add('active'));
  }

  // ================= 5. INTERACTIVE FILE TREE & METADATA PANEL =================
  // Khai báo cơ sở dữ liệu Metadata cho các thư mục và tệp tin trong cấu trúc portfolio
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
      name: '20260528_CongNgheSo_BaiTap1_v1.0.pdf',
      type: 'Tài liệu PDF',
      path: '.../01_quan_ly_tep_tin/20260528_CongNgheSo_BaiTap1_v1.0.pdf',
      size: '412 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Bản in PDF minh họa cho kết quả thực nghiệm bài tập 1, sẵn sàng để đồng bộ hóa.'
    },
    'file-01-doc': {
      name: 'Bao_cao_NguyenThanhDanh_25020058_Bai1.docx',
      type: 'Tài liệu Word',
      path: '.../01_quan_ly_tep_tin/Bao_cao_NguyenThanhDanh_25020058_Bai1.docx',
      size: '863 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Tệp báo cáo Word chi tiết bài thực hành quản lý tệp tin. Có thể tải xuống trực tiếp ở panel liên kết bên cạnh.'
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
      name: 'Bao_cao_NguyenThanhDanh_25020058_Bai2.docx',
      type: 'Tài liệu Word',
      path: '.../02_khai_thac_thong_tin/Bao_cao_NguyenThanhDanh_25020058_Bai2.docx',
      size: '24.6 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo về phương pháp tìm kiếm nâng cao (Google Advanced Operators) và bộ tiêu chí kiểm chứng nguồn tin học thuật.'
    },
    'folder-03': {
      name: '03_prompt_engineering/',
      type: 'Thư mục dự án',
      path: './root-portfolio/03_prompt_engineering',
      size: '27.1 KB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Module chứa nghiên cứu và thực hành kỹ thuật Prompt Engineering nâng cao (Few-shot, Chain-of-Thought).'
    },
    'file-03-doc': {
      name: 'Bao_cao_NguyenThanhDanh_25020058_Bai3.docx',
      type: 'Tài liệu Word',
      path: '.../03_prompt_engineering/Bao_cao_NguyenThanhDanh_25020058_Bai3.docx',
      size: '27.1 KB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo Word phân tích chi tiết hiệu quả của Prompt Engineering. So sánh trực quan câu lệnh gốc và câu lệnh cải tiến.'
    },
    'folder-04': {
      name: '04_hop_tac_truc_tuyen/',
      type: 'Thư mục dự án',
      path: './root-portfolio/04_hop_tac_truc_tuyen',
      size: '2.12 MB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Lưu trữ các kịch bản làm việc nhóm trực tuyến, sơ đồ Kanban phân công tác vụ thời gian thực.'
    },
    'file-04-doc': {
      name: 'Bao_cao_NguyenThanhDanh_25020058_Bai4.docx',
      type: 'Tài liệu Word',
      path: '.../04_hop_tac_truc_tuyen/Bao_cao_NguyenThanhDanh_25020058_Bai4.docx',
      size: '2.12 MB',
      date: '28/05/2026',
      items: 'N/A',
      desc: 'Báo cáo tổng hợp quy trình làm việc nhóm từ xa, phân vai và tích hợp Notion/Trello Workspaces.'
    },
    'folder-05': {
      name: '05_sang_tao_noi_dung/',
      type: 'Thư mục dự án',
      path: './root-portfolio/05_sang_tao_noi_dung',
      size: '5.85 MB',
      date: '28/05/2026',
      items: '2 tệp tin',
      desc: 'Chứa các tư liệu truyền thông đa phương tiện được đồng sáng tạo cùng AI tạo sinh nghệ thuật.'
    },
    'file-05-doc': {
      name: 'Bao_cao_NguyenThanhDanh_25020058_Bai5.docx',
      type: 'Tài liệu Word',
      path: '.../05_sang_tao_noi_dung/Bao_cao_NguyenThanhDanh_25020058_Bai5.docx',
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
      name: '06_an_toan_liem_chinh/',
      type: 'Thư mục dự án',
      path: './root-portfolio/06_an_toan_liem_chinh',
      size: '2.84 MB',
      date: '28/05/2026',
      items: '1 tệp tin',
      desc: 'Lưu trữ các văn bản, báo cáo cam kết tuân thủ Đạo đức và Liêm chính học thuật trong thời đại số.'
    },
    'file-06-doc': {
      name: 'Bao_cao_NguyenThanhDanh_25020058_Bai6.docx',
      type: 'Tài liệu Word',
      path: '.../06_an_toan_liem_chinh/Bao_cao_NguyenThanhDanh_25020058_Bai6.docx',
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

  // Biến lưu phần tử đang được click chọn (lock)
  let activeSelectedKey = 'root-portfolio';

  // Hàm cập nhật giao diện Panel Metadata
  function updateMetadataPanel(key) {
    const data = fileMetadata[key];
    if (!data) return;

    if (metaName) metaName.textContent = data.name;
    if (metaType) {
      metaType.textContent = data.type;
      // Thêm màu sắc tương ứng với từng loại metadata
      metaType.className = 'text-xs px-2.5 py-0.5 rounded font-bold uppercase tracking-wider ';
      if (data.type.includes('Thư mục')) {
        metaType.classList.add('bg-cyan-950/60', 'text-cyan-400', 'border', 'border-cyan-800/50');
      } else if (data.type.includes('Word')) {
        metaType.classList.add('bg-blue-950/60', 'text-blue-400', 'border', 'border-blue-800/50');
      } else if (data.type.includes('PDF')) {
        metaType.classList.add('bg-red-950/60', 'text-red-400', 'border', 'border-red-800/50');
      } else {
        metaType.classList.add('bg-amber-950/60', 'text-amber-400', 'border', 'border-amber-800/50');
      }
    }
    if (metaPath) metaPath.textContent = data.path;
    if (metaSize) metaSize.textContent = data.size;
    if (metaDate) metaDate.textContent = data.date;
    
    // Tự động ẩn hiện dòng Items nếu là file
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

  // Khởi tạo panel hiển thị thư mục root ban đầu
  updateMetadataPanel('root-portfolio');

  treeItems.forEach(item => {
    const key = item.getAttribute('data-tree-key');

    // Sự kiện 1: Click để toggle expand/collapse (nếu là thư mục) và chọn (active)
    item.addEventListener('click', (e) => {
      // Tìm thư mục cha có khả năng collapse
      const node = item.closest('.tree-node-parent');
      if (node && e.target.closest('.tree-toggle-btn') || e.target.closest('.tree-toggle-icon')) {
        // Người dùng click đúng vào nút toggle mũi tên
        node.classList.toggle('folder-collapsed');
        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra item chính
        return;
      }
      
      // Nếu click vào vùng item nói chung
      if (node && !item.getAttribute('data-tree-key').includes('file')) {
        // Nhấn đúp hoặc click thư mục để đóng mở
        node.classList.toggle('folder-collapsed');
      }

      // Xóa class active cũ và kích hoạt active cho item hiện tại
      treeItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      activeSelectedKey = key;
      updateMetadataPanel(key);
    });

    // Sự kiện 2: Hover (mouseenter) để cập nhật thông tin nhanh
    item.addEventListener('mouseenter', () => {
      updateMetadataPanel(key);
    });

    // Sự kiện 3: Rời chuột (mouseleave) khôi phục về phần tử đang khóa chọn
    item.addEventListener('mouseleave', () => {
      updateMetadataPanel(activeSelectedKey);
    });
  });
});
