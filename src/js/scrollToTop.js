import { debounce } from './utils';

export const initializeScrollToTopButton = () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.classList.remove('active');
    }
  };

  window.addEventListener('scroll', debounce(handleScroll, 200));
  scrollToTopBtn.addEventListener('click', scrollToTop);
};
