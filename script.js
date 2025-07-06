
// script.js 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form?.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (!email.includes('@')) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    alert('¡Mensaje enviado correctamente!');
    form.reset();
  });
});
