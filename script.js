const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu-right");

burger?.addEventListener("click", () => {
  navMenu?.classList.toggle("active");
});

//vercel analytics

import { inject } from '@vercel/analytics';

inject();