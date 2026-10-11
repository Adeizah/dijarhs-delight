document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const current = document.body.dataset.current;
document.querySelectorAll('.nav a[data-page]').forEach(a => { if (a.dataset.page === current) a.classList.add('active'); });
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰';
  }));
}
document.querySelectorAll('.category-nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.category-nav a').forEach(a => a.classList.remove('selected'));
  link.classList.add('selected');
}));