export const initializeMenu = () => {
  const menuButton = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');
  const menuBackdrop = document.querySelector('.menu-backdrop');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const mobileNavigation = document.querySelector('.mobile-nav-list');

  const toggleMenu = () => {
    menu.classList.toggle('active');
    menuBackdrop.classList.toggle('active');
    menuButton.classList.toggle('active');
  };

  menuButton.addEventListener('click', toggleMenu);
  menuBackdrop.addEventListener('click', toggleMenu);
  closeMenuButton.addEventListener('click', toggleMenu);
  mobileNavigation.addEventListener('click', toggleMenu);
};

export const initializeNavigationLinks = () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const isActiveLink = linkPath => linkPath === currentPath;

  links.forEach(link => {
    if (isActiveLink(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
};
