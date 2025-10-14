document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-item, .btn-conocenos');

  // Scroll animado SOLO al hacer clic
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        // Añadimos clase para efecto suave temporal
        target.classList.add('scrolling-target');

        // Desliza con animación suave
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

        // Quitamos la clase después de 1s (cuando termina el scroll)
        setTimeout(() => target.classList.remove('scrolling-target'), 1000);
      }
    });
  });
});
