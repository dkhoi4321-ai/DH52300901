let cartItems = []; 
function addToCart(courseName) {
    cartItems.push(courseName);
    const countBadge = document.getElementById("cart-count");
    if (countBadge) {
        countBadge.innerText = cartItems.length;
    }
    alert("Đã thêm " + courseName + " vào giỏ hàng thành công!");
}

function openCart() {
    const modal = document.getElementById("cart-modal");
    const list = document.getElementById("cart-items-list");
    console.log("Danh sách hiện tại:", cartItems);  
    list.innerHTML = ""; 
    if (cartItems.length === 0) {
        list.innerHTML = "<div style='text-align:center; padding:30px; color:#94a3b8;'><div style='font-size:48px; margin-bottom:16px;'>🛒</div><div style='font-size:15px; font-weight:600;'>Giỏ hàng chưa có gì</div><div style='font-size:13px; margin-top:6px;'>Hãy chọn một khóa học nhé!</div></div>";
    } else {
        let htmlContent = "";
        cartItems.forEach((name, index) => {
            htmlContent += `
                <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid #f1f5f9;">
                    <span style="font-weight:600; color:#0f172a;">${index + 1}. ${name}</span>
                    <span style="color:#10b981; font-size:18px;">✓</span>
                </div>
            `;
        });
        list.innerHTML = htmlContent;
    }
    modal.style.display = "block";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("cart-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".banner-slide");
    const dots = document.querySelectorAll(".banner-dot");
    const prevBtn = document.querySelector(".banner-prev");
    const nextBtn = document.querySelector(".banner-next");
    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        if (slides[index]) {
            slides[index].classList.add("active");
            dots[index].classList.add("active");
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

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            current = index;
            showSlide(current);
        });
    });

    if (slides.length > 0) {
        setInterval(nextSlide, 4000);
    }
    const categoryCards = document.querySelectorAll(".category-card");
    
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const type = card.dataset.type;
            const courses = document.querySelectorAll(".course-card");
            
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));

            courses.forEach(course => {
                const mon = course.dataset.mon;
                const isTuNhien = ["toan", "ly", "hoa"].includes(mon);
                const isXaHoi = ["van", "anh", "toan"].includes(mon);

                if (type === "tu-nhien") {
                    course.style.display = isTuNhien ? "block" : "none";
                } else if (type === "xa-hoi") {
                    course.style.display = isXaHoi ? "block" : "none";
                }
            });
            
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        });
    });
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Đã gửi ý kiến thành công! Chúng tôi sẽ phản hồi sớm.");
            this.reset();
        });
    }

    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.course-card, .why-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s, border-color 0.25s';
        observer.observe(card);
    });
});

function filterCourses(mon, btn) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(button => button.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const cards = document.querySelectorAll(".course-card");
    cards.forEach(card => {
        if (mon === "all" || card.dataset.mon === mon) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function openCourse(detailId) {
    const detailDiv = document.getElementById(detailId);
    if (detailDiv) {
        const isCurrentlyVisible = detailDiv.style.display === "block";
        detailDiv.style.display = isCurrentlyVisible ? "none" : "block";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileNav() {
    const nav = document.getElementById("mobile-nav");
    const overlay = document.getElementById("mobile-nav-overlay");
    if (nav) {
        nav.classList.toggle("open");
        if (overlay) {
            overlay.style.display = nav.classList.contains("open") ? "block" : "none";
        }
    }
}

function closeMobileNav() {
    const nav = document.getElementById("mobile-nav");
    const overlay = document.getElementById("mobile-nav-overlay");
    if (nav) nav.classList.remove("open");
    if (overlay) overlay.style.display = "none";
}
