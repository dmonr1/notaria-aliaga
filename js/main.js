document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-item, .btn-conocenos');

  // Scroll suave con clic
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  const scrollContainer = document.querySelector(".scroll-container");
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  let isScrolling = false;

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;

    const targetSection = sections[index];
    scrollContainer.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });

    setTimeout(() => (isScrolling = false), 900);
  };

  scrollContainer.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey) return; // permite zoom
      if (isScrolling) return;

      const target = e.target.closest(".servicios-cards");

      // ⚡ SI el scroll está dentro del contenedor interno
      if (target) {
        const atTop = target.scrollTop === 0;
        const atBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1;

        // Si NO estamos en los límites, dejamos que el scroll normal funcione
        if (!(e.deltaY < 0 && atTop) && !(e.deltaY > 0 && atBottom)) {
          return; // 🔹 permite scroll normal dentro de .servicios-cards
        }
      }

      // Si no hay contenedor interno o ya está en los límites → cambia de sección
      e.preventDefault();

      if (e.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else if (e.deltaY < 0) {
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      scrollToSection(currentIndex);
    },
    { passive: false }
  );

  // Navegación con flechas
  document.addEventListener("keydown", (e) => {
    if (isScrolling) return;
    if (e.key === "ArrowDown") {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      scrollToSection(currentIndex);
    } else if (e.key === "ArrowUp") {
      currentIndex = Math.max(currentIndex - 1, 0);
      scrollToSection(currentIndex);
    }
  });

  // Animación "Somos"
  const sectionSomos = document.querySelector("#somos");
  if (sectionSomos) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionSomos.classList.add("somos-animar");
          } else {
            sectionSomos.classList.remove("somos-animar");
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(sectionSomos);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item");
  const contactoSection = document.querySelector("#contacto");

  window.addEventListener("scroll", () => {
    const contactoTop = contactoSection.offsetTop;
    const contactoHeight = contactoSection.offsetHeight;
    const scrollPos = window.scrollY + window.innerHeight / 2;

    // Si el scroll está dentro de la sección contacto
    if (scrollPos >= contactoTop && scrollPos <= contactoTop + contactoHeight) {
      document.querySelector('a[href="#contacto"]').classList.add("contacto-activo");
    } else {
      document.querySelector('a[href="#contacto"]').classList.remove("contacto-activo");
    }
  });
});