const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

const links = document.querySelectorAll('.main-nav a');
links.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});
