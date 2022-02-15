let $navMobile;
let $navBtn;
let $footerYear;
let $navLink;

const prepareDOMElements = () => {
  $navMobile = document.querySelector(".nav-mobile");
  $navBtn = document.querySelector(".hamburger");
  $footerYear = document.querySelector(".footer__year");
  $navLink = document.querySelector(".nav__link");
};

const prepareDOMEvents = () => {
  const handleNav = () => {
    $navBtn.classList.toggle("is-active");
    $navMobile.classList.toggle("nav-mobile--active");
  };

  const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    $footerYear.innerText = year;
  };

  handleCurrentYear();
  $navBtn.addEventListener("click", handleNav);
};

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

document.addEventListener("DOMContentLoaded", main);
