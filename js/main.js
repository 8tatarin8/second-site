// !script для click по бургер-меню
const menuBtn = document.querySelector(".header-mob-menu-btn-burger");
const menuMobile = document.querySelector(".header-menu--list");
// відслідковуємо подію
menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-open");
});
