document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-item, .btn-conocenos');
  const scrollContainer = document.querySelector(".scroll-container");
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  let isScrolling = false;

  /* 🔹 Scroll suave con clic */
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      currentIndex = Array.from(sections).indexOf(target);
      scrollToSection(currentIndex);
    });
  });

  /* 🔹 Función para moverse a una sección */
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

  /* 🔹 Scroll con rueda (entre secciones) */
  scrollContainer.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey) return; // permite zoom
      if (isScrolling) return;

      const target = e.target.closest(".servicios-cards");
      if (target) {
        const atTop = target.scrollTop === 0;
        const atBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1;
        if (!(e.deltaY < 0 && atTop) && !(e.deltaY > 0 && atBottom)) return;
      }

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

  /* 🔹 Navegación con flechas */
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

  /* 🔹 Animación “Somos” */
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

  /* 🔹 En Contacto: cambia color de todo el menú */
  const allNavLinks = document.querySelectorAll('.nav-item');
  const contactoSection = document.querySelector('#contacto');
  if (contactoSection) {
    const observerOptions = {
      root: scrollContainer,
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        allNavLinks.forEach(link => {
          if (entry.isIntersecting) {
            link.classList.add('contacto-activo');
          } else {
            link.classList.remove('contacto-activo');
          }
        });
      });
    }, observerOptions);

    observer.observe(contactoSection);
  }

  /* 🔹 Bloquea zoom con Ctrl + scroll */
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  /* 🧩 NUEVO: Recentrar sección al cambiar tamaño o zoom */
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      scrollToSection(currentIndex); // 🔸 Recentrar sección actual
    }, 300);
  });
});
