const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

function closeMenu() {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

toggle.addEventListener('click', () => {
  const open = !menu.classList.contains('open');
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Consulta de cupo — Pasitos y Saltos');
  const body = encodeURIComponent(
    `Hola, soy ${data.get('nombre')}.\n\n` +
    `Teléfono: ${data.get('telefono')}\n` +
    `Edad del niño/a: ${data.get('edad')}\n` +
    `Horario: ${data.get('horario')}\n` +
    `Mensaje: ${data.get('mensaje') || 'Sin mensaje adicional'}\n\n` +
    'Quisiera recibir información sobre disponibilidad y costos.'
  );
  document.getElementById('form-status').textContent = 'Abrimos tu aplicación de correo con la consulta preparada.';
  // Agregá el correo comercial después de "mailto:" cuando esté confirmado.
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
