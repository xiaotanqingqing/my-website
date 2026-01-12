// 导航栏滚动变色
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("bg-white", "shadow");
    header.classList.remove("bg-transparent");
    header.querySelectorAll("nav a").forEach(a => a.classList.add("text-gray-800"));
  } else {
    header.classList.remove("bg-white", "shadow");
    header.classList.add("bg-transparent");
    header.querySelectorAll("nav a").forEach(a => a.classList.remove("text-gray-800"));
  }
});

// 咨询弹窗
function openConsult() {
  document.getElementById("consultModal").style.display = "block";
}
function closeConsult() {
  document.getElementById("consultModal").style.display = "none";
}

// FAQ 手风琴
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// 中英双语切换（示例）
function setLang(lang) {
  if (lang === "en") {
    document.getElementById("title").innerText = "Korea No.1 Aesthetic Clinic";
    document.getElementById("subtitle").innerText = "Natural results · Safe · Personalized plan";
    document.getElementById("priceTitle").innerText = "Popular Treatments Price List";
    document.getElementById("faqTitle").innerText = "Frequently Asked Questions";
    document.getElementById("projectsTitle").innerText = "Facial Aesthetic Treatments";
  } else {
    document.getElementById("title").innerText = "韩国 No.1 轻医美中心";
    document.getElementById("subtitle").innerText = "专注自然效果 · 安全正规 · 一对一专属方案";
    document.getElementById("priceTitle").innerText = "热门项目价格表";
    document.getElementById("faqTitle").innerText = "常见疑问与解答";
    document.getElementById("projectsTitle").innerText = "面部精致管理项目";
  }
}

// Swiper 初始化
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".myCasesSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });
});
