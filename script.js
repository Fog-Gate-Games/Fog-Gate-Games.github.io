const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.nav a')];

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 28);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
  revealObserver.observe(element);
});

const sectionMap = { seiran: 'games' };
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = sectionMap[entry.target.id] || entry.target.id;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  });
}, { rootMargin: '-38% 0px -52% 0px', threshold: 0 });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
