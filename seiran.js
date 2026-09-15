document.body.classList.add('locked');

window.addEventListener('load', () => {
  window.setTimeout(() => {
    document.querySelector('.entry-curtain')?.classList.add('open');
    document.body.classList.remove('locked');
  }, 650);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const dossier = document.querySelector('.dossier-experience');
const openDossier = document.querySelector('[data-open-dossier]');
const closeDossier = document.querySelector('.dossier-close');
const pages = [...document.querySelectorAll('.case-page')];
const dots = [...document.querySelectorAll('.case-progress span')];
const prevButton = document.querySelector('.case-prev');
const nextButton = document.querySelector('.case-next');
let currentPage = 0;
let touchStartX = 0;

const updateCasePage = (nextIndex, direction = 1) => {
  if (nextIndex < 0 || nextIndex >= pages.length || nextIndex === currentPage) return;
  const current = pages[currentPage];
  const next = pages[nextIndex];
  current.classList.add(direction > 0 ? 'exit-left' : 'enter-right');
  current.classList.remove('active');
  next.classList.add(direction > 0 ? 'enter-right' : 'exit-left');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    next.classList.remove('enter-right', 'exit-left');
    next.classList.add('active');
  }));
  window.setTimeout(() => current.classList.remove('exit-left', 'enter-right'), 700);
  currentPage = nextIndex;
  dots.forEach((dot, index) => dot.classList.toggle('active', index === currentPage));
  prevButton.disabled = currentPage === 0;
  nextButton.textContent = currentPage === pages.length - 1 ? 'Close file →' : 'Next file →';
};
const showDossier = () => {
  currentPage = 0;
  pages.forEach((page, index) => page.classList.toggle('active', index === 0));
  dots.forEach((dot, index) => dot.classList.toggle('active', index === 0));
  prevButton.disabled = true;
  nextButton.textContent = 'Next file →';
  dossier.classList.remove('closing');
  dossier.classList.add('open');
  dossier.setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  requestAnimationFrame(() => dossier.classList.add('opening'));
  window.setTimeout(() => dossier.classList.add('revealed'), 950);
};

const hideDossier = () => {
  dossier.classList.add('closing');
  window.setTimeout(() => {
    dossier.classList.remove('open', 'revealed', 'opening', 'closing');
    dossier.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
  }, 360);
};

openDossier?.addEventListener('click', (event) => { event.preventDefault(); showDossier(); });
closeDossier?.addEventListener('click', hideDossier);
prevButton?.addEventListener('click', () => updateCasePage(currentPage - 1, -1));
nextButton?.addEventListener('click', () => currentPage === pages.length - 1 ? hideDossier() : updateCasePage(currentPage + 1, 1));

document.addEventListener('keydown', (event) => {
  if (!dossier?.classList.contains('open')) return;
  if (event.key === 'Escape') hideDossier();
  if (event.key === 'ArrowRight' && currentPage < pages.length - 1) updateCasePage(currentPage + 1, 1);
  if (event.key === 'ArrowLeft' && currentPage > 0) updateCasePage(currentPage - 1, -1);
});
dossier?.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0]?.clientX ?? 0;
}, { passive: true });

dossier?.addEventListener('touchend', (event) => {
  const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
  const delta = touchEndX - touchStartX;
  if (Math.abs(delta) < 55) return;
  if (delta < 0 && currentPage < pages.length - 1) updateCasePage(currentPage + 1, 1);
  if (delta > 0 && currentPage > 0) updateCasePage(currentPage - 1, -1);
}, { passive: true });
