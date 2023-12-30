'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLinks = document.querySelector('.nav__links');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

// ! Implementing Smooth Scrolling

btnScrollTo.addEventListener('click', function (e) {
  console.log(e);
  const curSection = section1.getBoundingClientRect();
  console.log(curSection);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y', window.pageXOffset, pageYOffset);

  section1.scrollIntoView({ behavior: 'smooth' });
});

// ! PAGE NAVIGATION

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ! Building a tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;
  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content ares
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
