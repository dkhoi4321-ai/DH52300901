function initSlideshow() {
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.banner-dot');
  const prevBtn = document.querySelector('.banner-prev');
  const nextBtn = document.querySelector('.banner-next');
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    if (slides[index]) {
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      current = index;
      showSlide(current);
    });
  });

  if (slides.length > 0) {
    setInterval(nextSlide, 4000);
  }
}

const coursesData = [
  {
    id: 1,
    name: 'Toán cơ bản lớp 10',
    subject: 'toan',
    icon: '📐',
    shortDesc: 'Đại số, hình học, lượng giác nền tảng',
    fullDesc: 'Khóa học Toán cơ bản lớp 10 cung cấp nền tảng toàn diện về đại số, hình học và lượng giác. Khóa học được thiết kế để giúp học sinh nắm vững các khái niệm cơ bản và áp dụng chúng vào các bài tập thực tế. Giảng viên sẽ hướng dẫn từng bước, từ dễ đến khó, giúp học sinh xây dựng sự tự tin trong việc giải quyết các bài toán.',
    instructor: 'Nguyễn Văn A',
    instructorBio: 'Giáo viên Toán có 12 năm kinh nghiệm, từng đạt giải nhất Olympic Toán quốc gia.',
    price: 500000,
    duration: 40,
    lessons: 48,
    level: 'Cơ bản',
    badge: 'HOT 🔥',
    image: 'jpg/giaovien_toan.png',
    skills: [
      'Nắm vững các phép tính đại số',
      'Hiểu rõ hình học không gian',
      'Ứng dụng lượng giác vào thực tế',
      'Giải phương trình bậc nhất và bậc hai',
      'Vận dụng định lý và công thức',
      'Kỹ năng giải quyết vấn đề toán học'
    ]
  },
  {
    id: 2,
    name: 'Ngữ văn lớp 10',
    subject: 'van',
    icon: '📖',
    shortDesc: 'Nghị luận xã hội, phân tích tác phẩm',
    fullDesc: 'Khóa học Ngữ văn lớp 10 giúp học sinh phát triển kỹ năng đọc hiểu, phân tích tác phẩm văn học và viết các bài nghị luận xã hội. Chúng tôi sẽ hướng dẫn cách xây dựng ý tưởng, tổ chức bài viết và trình bày một cách rõ ràng, thuyết phục.',
    instructor: 'Trần Thị B',
    instructorBio: 'Giáo viên Văn giàu kinh nghiệm, chuyên gia về phân tích tác phẩm văn học cổ điển.',
    price: 500000,
    duration: 35,
    lessons: 40,
    level: 'Cơ bản',
    badge: 'MỚI ✨',
    image: 'jpg/giaovien-Van.jpg',
    skills: [
      'Phân tích văn bản văn học',
      'Viết bài nghị luận xã hội',
      'Kỹ năng đọc hiểu sâu',
      'Hiểu biết về các dòng văn học',
      'Viết tóm tắt và bình luận',
      'Phát triển kỹ năng biểu đạt'
    ]
  },
  {
    id: 3,
    name: 'Tiếng Anh giao tiếp',
    subject: 'anh',
    icon: '🌍',
    shortDesc: 'Nghe, nói, đọc, viết – luyện thi THPT',
    fullDesc: 'Khóa học Tiếng Anh giao tiếp toàn diện, bao gồm các kỹ năng nghe, nói, đọc, viết. Khóa học được thiết kế để chuẩn bị cho các kỳ thi THPT Quốc gia và các kỳ thi quốc tế. Chúng tôi sử dụng phương pháp dạy tương tác, giúp học sinh không chỉ nắm vững ngữ pháp mà còn biết cách sử dụng tiếng Anh trong các tình huống thực tế.',
    instructor: 'Lê Minh C',
    instructorBio: 'Giảng viên Anh ngữ bản xứ, có chứng chỉ TOEFL và IELTS.',
    price: 500000,
    duration: 45,
    lessons: 52,
    level: 'Trung cấp',
    badge: 'PHỔ BIẾN 👍',
    image: 'jpg/giaovien_Anh.png',
    skills: [
      'Giao tiếp tiếng Anh hàng ngày',
      'Kỹ năng nghe hiểu chuẩn xác',
      'Phát âm chuẩn Mỹ và Anh',
      'Viết các loại bài luận tiếng Anh',
      'Vốn từ vựng kỹ thuật',
      'Tự tin tham gia các kỳ thi quốc tế'
    ]
  },
  {
    id: 4,
    name: 'Vật lý đại cương',
    subject: 'ly',
    icon: '⚡',
    shortDesc: 'Cơ học, điện học, quang học cơ bản',
    fullDesc: 'Khóa học Vật lý đại cương giúp học sinh hiểu rõ các nguyên lý cơ bản của vật lý, từ cơ học cơ bản đến điện học và quang học. Chúng tôi nhấn mạnh sự liên kết giữa lý thuyết và thực hành, giúp học sinh không chỉ giải được bài tập mà còn hiểu được bản chất của các hiện tượng vật lý.',
    instructor: 'Phạm Quốc D',
    instructorBio: 'Tiến sĩ Vật lý, giáo viên có kinh nghiệm dạy Vật lý ở các trường chuyên.',
    price: 500000,
    duration: 42,
    lessons: 45,
    level: 'Cơ bản',
    badge: '',
    image: 'jpg/giaovien_Ly.png',
    skills: [
      'Hiểu nguyên lý cơ học',
      'Giải bài tập điện xoay chiều',
      'Phân tích hiện tượng quang học',
      'Áp dụng công thức vật lý',
      'Sử dụng dụng cụ đo lường',
      'Tư duy phản biện khoa học'
    ]
  },
  {
    id: 5,
    name: 'Hóa học lớp 10',
    subject: 'hoa',
    icon: '🧪',
    shortDesc: 'Hóa vô cơ, hữu cơ, phương trình phản ứng',
    fullDesc: 'Khóa học Hóa học lớp 10 cung cấp kiến thức toàn diện về hóa vô cơ, hóa hữu cơ, và cách viết phương trình hóa học. Chúng tôi sử dụng hình ảnh trực quan và thí nghiệm để giúp học sinh hiểu rõ các khái niệm, từ đó có thể vận dụng vào giải quyết các bài tập phức tạp.',
    instructor: 'Võ Thanh E',
    instructorBio: 'Giáo viên Hóa với 10 năm kinh nghiệm, chuyên gia về hóa vô cơ và hữu cơ.',
    price: 500000,
    duration: 40,
    lessons: 44,
    level: 'Cơ bản',
    badge: '',
    image: 'jpg/giaovien_Hoa.png',
    skills: [
      'Viết phương trình hóa học chuẩn',
      'Phân loại các loại hóa chất',
      'Tính toán nồng độ dung dịch',
      'Hiểu phản ứng oxi hóa khử',
      'Kiến thức về liên kết hóa học',
      'Ứng dụng hóa học trong đời sống'
    ]
  }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(courseName) {
  const course = coursesData.find(c => c.name === courseName);
  if (course && !cart.find(c => c.id === course.id)) {
    cart.push(course);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    alert(`✅ Đã thêm "${courseName}" vào giỏ hàng!`);
  }
}

function removeFromCart(courseId) {
  cart = cart.filter(c => c.id !== courseId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function openCart() {
  const overlay = document.getElementById('cart-overlay');
  const modal = document.getElementById('cart-modal');
  overlay.classList.add('show');
  modal.classList.add('show');
  renderCart();
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const modal = document.getElementById('cart-modal');
  overlay.classList.remove('show');
  modal.classList.remove('show');
}

function renderCart() {
  const cartBody = document.getElementById('cart-modal-body');
  const totalPrice = document.getElementById('total-price');

  if (cart.length === 0) {
    cartBody.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
    totalPrice.textContent = '0đ';
    return;
  }

  cartBody.innerHTML = cart.map(course => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${course.name}</h4>
        <div class="cart-item-price">${course.price.toLocaleString('vi-VN')}đ</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${course.id})">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, c) => sum + c.price, 0);
  totalPrice.textContent = total.toLocaleString('vi-VN') + 'đ';
}

function checkout() {
  if (cart.length === 0) {
    alert('Giỏ hàng trống!');
    return;
  }
  alert('Cảm ơn bạn đã mua hàng! 🎉\nChúng tôi sẽ sớm liên hệ với bạn.');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  closeCart();
}


function renderCourses(filter = 'all') {
  const grid = document.getElementById('courses-grid');
  
  const filtered = filter === 'all' 
    ? coursesData 
    : coursesData.filter(c => c.subject === filter);

  grid.innerHTML = filtered.map(course => `
    <div class="course-card" data-mon="${course.subject}">
      <div class="course-img-wrap">
        <img class="course-img" src="${course.image}" alt="${course.name}" />
        ${course.badge ? `<span class="course-badge">${course.badge}</span>` : ''}
      </div>
      <div class="course-body">
        <span class="course-tag">${course.icon} ${course.subject.toUpperCase()}</span>
        <div class="course-name">${course.name}</div>
        <div class="course-desc">${course.shortDesc}</div>
        <div class="course-price">
          <span class="price-amount">${course.price.toLocaleString('vi-VN')}đ</span>
          <span class="price-unit">/ tháng</span>
        </div>
        <div class="card-actions">
          <button class="btn-detail" onclick="viewDetail(${course.id})">Xem chi tiết</button>
          <button class="btn-add" onclick="addToCart('${course.name}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
            Thêm giỏ
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const cards = document.querySelectorAll('.course-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `slideUp 0.6s ease both ${index * 0.1}s`;
  });
}

function filterCourses(filter, element) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  element.classList.add('active');

  renderCourses(filter);
}

function viewDetail(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (course) {
    localStorage.setItem('selectedCourse', JSON.stringify(course));
    window.location.href = 'course-detail.html';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleMobileNav() {
  const overlay = document.getElementById('mobile-nav-overlay');
  const nav = document.getElementById('mobile-nav');
  overlay.classList.add('show');
  nav.classList.add('open');
}

function closeMobileNav() {
  const overlay = document.getElementById('mobile-nav-overlay');
  const nav = document.getElementById('mobile-nav');
  overlay.classList.remove('show');
  nav.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
  initSlideshow();
  renderCourses('all');
  updateCartCount();
});
