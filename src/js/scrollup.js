const scrollToTopBtnLarge = document.getElementById('scrollToTopBtnLarge');
const scrollToTopBtnSmall = document.getElementById('scrollToTopBtnSmall');

// Показуємо кнопки при прокрутці вниз
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollToTopBtnLarge.classList.add('visible');
    scrollToTopBtnSmall.classList.add('visible');
  } else {
    scrollToTopBtnLarge.classList.remove('visible');
    scrollToTopBtnSmall.classList.remove('visible');
  }
};

// Добавляем плавную прокрутку при нажатии на каждую кнопку
scrollToTopBtnLarge.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

scrollToTopBtnSmall.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
