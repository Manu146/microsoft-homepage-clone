let mobileBtn = document.querySelector("#mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle("show");
}
