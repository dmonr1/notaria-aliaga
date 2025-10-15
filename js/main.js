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


document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const sections = document.querySelectorAll(".section");

  let currentIndex = 0;
  let isScrolling = false;

  // Función que centra una sección
  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;

    isScrolling = true;
    const targetSection = sections[index];
    const scrollTop =
      targetSection.offsetTop -
      (scrollContainer.clientHeight - targetSection.offsetHeight) / 2;

    scrollContainer.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });

    setTimeout(() => (isScrolling = false), 900); 
  };

  scrollContainer.addEventListener(
    "wheel",
    (e) => {
      if (isScrolling) return;
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
});

const sectionSomos = document.querySelector("#somos");

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
  {
    threshold: 0.4, 
  }
);

if (sectionSomos) observer.observe(sectionSomos);