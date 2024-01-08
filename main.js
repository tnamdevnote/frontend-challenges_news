const mobileNavBtn = document.querySelector('.mobile__nav__button');
const IconOpen = document.querySelector('.mobile__nav__open');
const IconClose = document.querySelector('.mobile__nav__close');
const mobileNav = document.querySelector('.mobile__nav');
const mobileNavOverlay = document.querySelector('.mobile__nav__overlay');
const mobileNavMenu = document.querySelector('.mobile__nav__menu');

mobileNavBtn.addEventListener('click', (e) => {
  mobileNav.classList.toggle('expanded');
  mobileNavOverlay.classList.toggle('expanded');
  toggleIcon();
});

mobileNavMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mobileNav.classList.toggle('expanded');
    mobileNavOverlay.classList.toggle('expanded');
    toggleIcon();
  }
});

function toggleIcon() {
  if (mobileNav.classList.contains('expanded')) {
    IconOpen.style.display = 'none';
    IconClose.style.display = 'block';
  } else {
    IconOpen.style.display = 'block';
    IconClose.style.display = 'none';
  }
}
