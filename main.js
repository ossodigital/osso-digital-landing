// Smooth scroll e highlight simples
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // fechar menu mobile
      navLinks.classList.remove('show');
    }
  });
});

// Navbar mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('show'));

// Atualiza ano do footer
document.getElementById('year').textContent = new Date().getFullYear();

// Validação básica do email no hero
const emailHero = document.getElementById('emailHero');
emailHero?.addEventListener('invalid', () => {
  emailHero.setCustomValidity('Informe um e-mail válido');
});
emailHero?.addEventListener('input', () => emailHero.setCustomValidity(''));

// Marca o link ativo no menu
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (here === href || (here === 'index.html' && href.endsWith('index.html'))) {
      a.classList.add('active');
    }
  });
})();
