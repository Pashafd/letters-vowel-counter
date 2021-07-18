const hamburger = document.querySelector('.hamburger');
const wrapperNav = document.querySelector('.wrapper-nav');
const headerAcc = document.querySelector('.header-acc');

function showNav() {
  wrapperNav.classList.toggle('hidden');
  headerAcc.classList.toggle('hidden');
}

hamburger.addEventListener('click', showNav);
hamburger.addEventListener('touch', showNav);
