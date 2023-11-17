const navLinkEls = document.querySelectorAll(".nav_links");
const sectionEls = document.querySelectorAll(".section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - 150) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinkEl.classList.add("active");
    }
  });
});

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
