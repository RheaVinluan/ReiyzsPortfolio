const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu-right");

burger?.addEventListener("click", () => {
  navMenu?.classList.toggle("active");
});