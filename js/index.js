//swiper
let swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 17,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const fqaQuestion = document.querySelectorAll('p.fqa__question');
const contactUsButton = document.querySelector('.contact-us__button');
const formContainer = document.querySelector('.form-container');
const formClose = document.querySelector('.form-close');
const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');

//fqa accordion
for (let i = 0; i < fqaQuestion.length; i++) {
  fqaQuestion[i].addEventListener('click', showAnswer);
}
function showAnswer(e) {
  e.target.parentElement.classList.toggle('open');
}

//form
contactUsButton.addEventListener('click', function (e) {
  formContainer.classList.add('form-open');
});
formClose.addEventListener('click', function (e) {
  formContainer.classList.remove('form-open');
});

//mobile menu
burger.addEventListener('click', burgerHandler);
function burgerHandler(e) {
  popup.classList.toggle('open');
  burger.classList.toggle('active');
}
