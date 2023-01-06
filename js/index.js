var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const fqaSectionQuestionsWrapper = document.querySelector(
  '.fqa__section-questions-wrapper'
);
const fqaQuestionWrapper = document.querySelectorAll(
  'div.fqa__question-wrapper'
);

fqaSectionQuestionsWrapper.addEventListener('click', showAnswer);
function showAnswer(e) {
  let dotsCurrent = e.target;
  if (e.target.matches('.fqa__question-wrapper')) {
    for (let i = 0; i < fqaQuestionWrapper.length; i++) {
      dotsCurrent.classList.toggle('open');
    }
  }
}
