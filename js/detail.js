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
    image: 'jpg/giaovien_toan.png',
    skills: [
      'Nắm vững các phép tính đại số',
      'Hiểu rõ hình học không gian',
      'Ứng dụng lượng giác vào thực tế',
      'Giải phương trình bậc nhất và bậc hai',
      'Vận dụng định lý và công thức',
      'Kỹ năng giải quyết vấn đề toán học'
    ],
    chapters: [
      {
        title: 'Chương 1: Hàm số bậc nhất',
        lessons: ['Bài 1: Khái niệm hàm số', 'Bài 2: Hàm số bậc nhất', 'Bài 3: Đồ thị hàm số', 'Bài 4: Bài tập vận dụng', 'Bài 5: Ôn tập chương']
      },
      {
        title: 'Chương 2: Hàm số bậc hai',
        lessons: ['Bài 1: Hàm số bậc hai', 'Bài 2: Tính chất parabol', 'Bài 3: Phương trình bậc hai', 'Bài 4: Bài tập thực hành', 'Bài 5: Ôn tập chương']
      },
      {
        title: 'Chương 3: Lượng giác',
        lessons: ['Bài 1: Giới thiệu lượng giác', 'Bài 2: Sin, cos, tan', 'Bài 3: Công thức lượng giác', 'Bài 4: Giải phương trình lượng giác', 'Bài 5: Ôn tập chương']
      }
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
    image: 'jpg/giaovien-Van.jpg',
    skills: [
      'Phân tích văn bản văn học',
      'Viết bài nghị luận xã hội',
      'Kỹ năng đọc hiểu sâu',
      'Hiểu biết về các dòng văn học',
      'Viết tóm tắt và bình luận',
      'Phát triển kỹ năng biểu đạt'
    ],
    chapters: [
      {
        title: 'Chương 1: Đọc hiểu',
        lessons: ['Bài 1: Kỹ năng đọc', 'Bài 2: Phân tích nội dung', 'Bài 3: Tiếp nhận tác phẩm', 'Bài 4: Bài tập đọc hiểu', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 2: Viết luận',
        lessons: ['Bài 1: Viết tóm tắt', 'Bài 2: Viết bình luận', 'Bài 3: Viết nghị luận', 'Bài 4: Cấu trúc bài viết', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 3: Tiếp nhận tác phẩm',
        lessons: ['Bài 1: Phương pháp phân tích', 'Bài 2: Yếu tố hình thức', 'Bài 3: Yếu tố nội dung', 'Bài 4: Đánh giá tác phẩm', 'Bài 5: Ôn tập']
      }
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
    image: 'jpg/giaovien_Anh.png',
    skills: [
      'Giao tiếp tiếng Anh hàng ngày',
      'Kỹ năng nghe hiểu chuẩn xác',
      'Phát âm chuẩn Mỹ và Anh',
      'Viết các loại bài luận tiếng Anh',
      'Vốn từ vựng kỹ thuật',
      'Tự tin tham gia các kỳ thi quốc tế'
    ],
    chapters: [
      {
        title: 'Chương 1: Nền tảng',
        lessons: ['Bài 1: Phát âm', 'Bài 2: Ngữ pháp cơ bản', 'Bài 3: Từ vựng', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 2: Giao tiếp',
        lessons: ['Bài 1: Lời chào hỏi', 'Bài 2: Cuộc hội thoại', 'Bài 3: Diễn đạt ý tưởng', 'Bài 4: Thực hành', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 3: Thi cử',
        lessons: ['Bài 1: Kỹ năng nghe', 'Bài 2: Kỹ năng đọc', 'Bài 3: Kỹ năng viết', 'Bài 4: Kỹ năng nói', 'Bài 5: Luyện thi']
      }
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
    image: 'jpg/giaovien_Ly.png',
    skills: [
      'Hiểu nguyên lý cơ học',
      'Giải bài tập điện xoay chiều',
      'Phân tích hiện tượng quang học',
      'Áp dụng công thức vật lý',
      'Sử dụng dụng cụ đo lường',
      'Tư duy phản biện khoa học'
    ],
    chapters: [
      {
        title: 'Chương 1: Cơ học',
        lessons: ['Bài 1: Chuyển động', 'Bài 2: Lực', 'Bài 3: Công và năng lượng', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 2: Điện học',
        lessons: ['Bài 1: Điện trường', 'Bài 2: Dòng điện', 'Bài 3: Thế điện', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 3: Quang học',
        lessons: ['Bài 1: Sóng ánh sáng', 'Bài 2: Phản xạ và khúc xạ', 'Bài 3: Thấu kính', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      }
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
    image: 'jpg/giaovien_Hoa.png',
    skills: [
      'Viết phương trình hóa học chuẩn',
      'Phân loại các loại hóa chất',
      'Tính toán nồng độ dung dịch',
      'Hiểu phản ứng oxi hóa khử',
      'Kiến thức về liên kết hóa học',
      'Ứng dụng hóa học trong đời sống'
    ],
    chapters: [
      {
        title: 'Chương 1: Hóa vô cơ',
        lessons: ['Bài 1: Nguyên tử và phân tử', 'Bài 2: Hóa trị', 'Bài 3: Phương trình hóa học', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 2: Dung dịch',
        lessons: ['Bài 1: Dung dịch', 'Bài 2: Nồng độ', 'Bài 3: Tính toán', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      },
      {
        title: 'Chương 3: Hóa hữu cơ',
        lessons: ['Bài 1: Cấu trúc hữu cơ', 'Bài 2: Hydrocarbon', 'Bài 3: Hợp chất khác', 'Bài 4: Bài tập', 'Bài 5: Ôn tập']
      }
    ]
  }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart() {
  const course = JSON.parse(localStorage.getItem('selectedCourse'));
  if (course && !cart.find(c => c.id === course.id)) {
    cart.push(course);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`✅ Đã thêm "${course.name}" vào giỏ hàng!`);
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

function buyNow() {
  const course = JSON.parse(localStorage.getItem('selectedCourse'));
  if (course && !cart.find(c => c.id === course.id)) {
    cart.push(course);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    openCart();
  }
}

function displayCourseDetail() {
  try {
    let course = JSON.parse(localStorage.getItem('selectedCourse'));
    
    if (!course) {
      course = coursesData[0];
    }

    console.log('Course data:', course);

    if (document.getElementById('course-title')) {
      document.getElementById('course-title').textContent = course.name;
    }
    if (document.getElementById('course-tag')) {
      document.getElementById('course-tag').textContent = `${course.icon} ${course.subject.toUpperCase()}`;
    }
    if (document.querySelector('.banner-img')) {
      document.querySelector('.banner-img').src = course.image;
    }

    if (document.getElementById('lessons-count')) {
      document.getElementById('lessons-count').textContent = `${course.lessons} bài`;
    }
    if (document.getElementById('duration')) {
      document.getElementById('duration').textContent = `${course.duration} giờ`;
    }
    if (document.getElementById('level')) {
      document.getElementById('level').textContent = course.level;
    }
    if (document.getElementById('instructor')) {
      document.getElementById('instructor').textContent = course.instructor;
    }

    if (document.getElementById('course-description')) {
      document.getElementById('course-description').textContent = course.fullDesc;
    }

    if (document.getElementById('learn-list') && course.skills) {
      document.getElementById('learn-list').innerHTML = course.skills.map(skill => 
        `<li>${skill}</li>`
      ).join('');
    }

    if (document.getElementById('chapters-list') && course.chapters) {
      document.getElementById('chapters-list').innerHTML = course.chapters.map(chapter => `
        <div class="chapter-item">
          <div class="chapter-header">
            <h3>${chapter.title}</h3>
            <span class="lesson-count">${chapter.lessons.length} bài</span>
          </div>
          <ul class="lesson-list">
            ${chapter.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    if (document.getElementById('price-amount')) {
      document.getElementById('price-amount').textContent = course.price.toLocaleString('vi-VN') + 'đ';
    }

    if (document.getElementById('instructor-name')) {
      document.getElementById('instructor-name').textContent = course.instructor;
    }
    if (document.getElementById('instructor-bio')) {
      document.getElementById('instructor-bio').textContent = course.instructorBio;
    }
  } catch (error) {
    console.error('Lỗi khi hiển thị chi tiết khóa học:', error);
  }
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
  displayCourseDetail();
  updateCartCount();
});
