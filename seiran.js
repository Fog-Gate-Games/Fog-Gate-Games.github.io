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
