document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-item, .btn-conocenos');
  const scrollContainer = document.querySelector(".scroll-container");
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  let isScrolling = false;

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
      if (e.ctrlKey) return;
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

  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      scrollToSection(currentIndex);
    }, 300);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-servicio");
  const cerrarModal = document.getElementById("cerrar-modal");
  const modalImg = document.getElementById("modal-imagen");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDesc = document.getElementById("modal-descripcion");
  const modalSubtipos = document.getElementById("modal-subtipos");

  const servicios = {
    "Cartas Notariales": {
      img: "../images/servicios/cartanotarial.jpg",
      descripcion: "Redacción y legalización de cartas notariales y documentos oficiales.",
      subtipos: [
        {
          titulo: "Otros",
          resumen: "Redacción y legalización de documentos adicionales relacionados con comunicaciones formales."
        },
        {
          titulo: "Sorteo entrega de premios",
          resumen: "Supervisión y legalización de sorteos o concursos garantizando la transparencia del proceso."
        },
        {
          titulo: "Licitaciones, Asambleas, juntas de accionistas, etc.",
          resumen: "Autenticación y certificación de actos corporativos y administrativos conforme a ley."
        }
      ]
    },

    "Ley N°27157": {
      img: "../images/servicios/inmueble.jpg",
      descripcion: "Supervisión y certificación de trámites relacionados con la formalización de inmuebles.",
      subtipos: [
        {
          titulo: "Inmatriculación de inmuebles",
          resumen: "Registro de propiedades no inscritas en Registros Públicos, otorgando validez legal al inmueble."
        },
        {
          titulo: "Prescripción adquisitiva de dominio",
          resumen: "Reconocimiento legal de la propiedad de un inmueble tras su posesión continua y pública durante un periodo determinado."
        },
        {
          titulo: "Regularización de edificaciones en general",
          resumen: "Formalización de construcciones realizadas sin licencia o con modificaciones no declaradas."
        },
        {
          titulo: "Declaraciones de Fábrica",
          resumen: "Registro notarial de edificaciones existentes que otorga reconocimiento legal ante Registros Públicos."
        }
      ]
    },

    "Autorización de viajes de menores de edad": {
      img: "../images/servicios/testamento.jpg",
      descripcion: "Gestión de permisos y autorizaciones notariales para viajes de menores de edad.",
      subtipos: [
        {
          titulo: "Viaje al Interior del país",
          resumen: "Autorización notarial para que un menor viaje dentro del territorio nacional acompañado o sin sus padres."
        },
        {
          titulo: "Viaje al Exterior",
          resumen: "Documento notarial que permite a un menor viajar fuera del país con uno o ambos padres, o con un tercero autorizado."
        }
      ]
    },

    "Testamentos": {
      img: "../images/servicios/cartanotarial.jpg",
      descripcion: "Redacción y formalización de testamentos conforme a ley, asegurando la voluntad del testador.",
      subtipos: [
        {
          titulo: "Testamentos",
          resumen: "Documento legal que especifica los deseos de una persona sobre sus bienes, herencia y el cuidado de sus hijos después de su muerte"
        },
      ]
    },

    "Transferencias Vehiculares": {
      img: "../images/servicios/garantia.jpg",
      descripcion: "Trámites notariales relacionados con la transferencia y formalización de vehículos.",
      subtipos: [
        {
          titulo: "Cambio de características",
          resumen: "Trámite notarial que formaliza las modificaciones técnicas realizadas a un vehículo."
        },
        {
          titulo: "Garantías Mobiliarias",
          resumen: "Constitución o levantamiento de garantías sobre bienes muebles como respaldo de obligaciones."
        },
        {
          titulo: "Inscripciones y levantamientos",
          resumen: "Registro o eliminación de cargas o gravámenes sobre vehículos en Registros Públicos."
        }
      ]
    },

    "Poderes": {
      img: "../images/servicios/tramites.jpeg",
      descripcion: "Otorgamiento de poderes notariales para diferentes trámites personales o institucionales.",
      subtipos: [
        {
          titulo: "Trámites ante Telefónica del Perú S.A.C.",
          resumen: "Poder para realizar gestiones o representaciones ante la empresa Telefónica del Perú S.A.C."
        },
        {
          titulo: "Trámites en la O.N.P.",
          resumen: "Autorización notarial para actuar en nombre de otra persona ante la Oficina de Normalización Previsional."
        },
        {
          titulo: "Trámites en ESSALUD",
          resumen: "Otorgamiento de poderes para realizar gestiones médicas o administrativas ante ESSALUD."
        }
      ]
    },

    "Asuntos No contenciosos": {
      img: "../images/servicios/rectificacion.jpg",
      descripcion: "Procesos notariales sin conflicto entre partes, realizados con celeridad y seguridad jurídica.",
      subtipos: [
        {
          titulo: "Rectificación de partidas",
          resumen: "Corrección de errores u omisiones en actas o partidas de nacimiento, matrimonio o defunción."
        },
        {
          titulo: "Sucesión intestada",
          resumen: "Declaración notarial de herederos legales cuando una persona fallece sin testamento."
        },
        {
          titulo: "Patrimonio familiar",
          resumen: "Constitución de un patrimonio destinado a proteger la vivienda familiar."
        },
        {
          titulo: "Inventarios",
          resumen: "Formalización notarial de la relación de bienes pertenecientes a una persona o sucesión."
        },
        {
          titulo: "Adopción de personas capaces",
          resumen: "Trámite notarial mediante el cual se adopta a una persona mayor de edad conforme a ley."
        },
        {
          titulo: "Comprobación de testamentos",
          resumen: "Verificación notarial de la existencia y validez de un testamento cerrado o abierto."
        }
      ]
    },

    "Certificados Notariales": {
      img: "../images/servicios/domiciliario.jpeg",
      descripcion: "Emisión de certificados notariales que acreditan hechos o situaciones jurídicas con valor legal.",
      subtipos: [
        {
          titulo: "Certificado de Supervivencia",
          resumen: "Documento que acredita que una persona se encuentra con vida a la fecha de su expedición."
        },
        {
          titulo: "Certificado Domiciliario",
          resumen: "Certificación del domicilio real de una persona, verificado mediante declaración o visita domiciliaria."
        }
      ]
    },

    "Escrituras Públicas": {
      img: "../images/servicios/constitucion.jpg",
      descripcion: "Formalización de actos y contratos ante notario, otorgando fe pública y validez jurídica.",
      subtipos: [
        {
          titulo: "Compraventa y/o adjudicación",
          resumen: "Formalización notarial de la transferencia de propiedad de bienes inmuebles o muebles."
        },
        {
          titulo: "Hipoteca y Anticresis",
          resumen: "Constitución de derechos reales de garantía sobre bienes inmuebles."
        },
        {
          titulo: "Donación",
          resumen: "Acto jurídico mediante el cual una persona transfiere gratuitamente la propiedad de un bien."
        },
        {
          titulo: "Anticipo de legítima",
          resumen: "Adelanto de parte de la herencia a los herederos forzosos en vida del otorgante."
        },
        {
          titulo: "Constitución de empresas o sociedades y sus modificaciones",
          resumen: "Formalización de la creación o modificación de empresas ante notario."
        },
        {
          titulo: "Constitución de asociaciones",
          resumen: "Registro de entidades sin fines de lucro con reconocimiento legal y estatutos propios."
        },
        {
          titulo: "Poder",
          resumen: "Escritura mediante la cual se otorga representación legal o administrativa a otra persona."
        },
        {
          titulo: "Matrimonios",
          resumen: "Acto civil que formaliza el vínculo matrimonial ante notario público conforme a ley."
        },
        {
          titulo: "Contratos en general",
          resumen: "Formalización de acuerdos privados con validez pública mediante escritura notarial."
        }
      ]
    },

    "Legalizaciones": {
      img: "../images/servicios/certificaciones.jpg",
      descripcion: "Autenticación notarial de documentos y firmas para darles validez oficial.",
      subtipos: [
        {
          titulo: "Apertura de libros y actas",
          resumen: "Legalización de los libros societarios o de actas para su uso formal."
        },
        {
          titulo: "Apertura de libros de contabilidad y otros",
          resumen: "Autenticación notarial previa a la utilización de libros contables obligatorios."
        },
        {
          titulo: "Firmas",
          resumen: "Certificación de autenticidad de la firma de una persona en un documento."
        },
        {
          titulo: "Copias y reproducciones",
          resumen: "Legalización de copias fieles de documentos originales con validez oficial."
        },
        {
          titulo: "Certificaciones",
          resumen: "Constancia notarial que certifica hechos, documentos o situaciones verificadas."
        }
      ]
    }
  };

  document.querySelectorAll(".servicio-card").forEach(card => {
    card.querySelector(".servicio-icono").addEventListener("click", () => {
      const titulo = card.querySelector("h4").innerText;
      const data = servicios[titulo];

      modal.classList.add("activo");
      modalImg.src = data?.img || card.querySelector("img").src;
      modalTitulo.textContent = titulo;
      modalDesc.textContent = data?.descripcion || card.querySelector("p").innerText;

      if (data && data.subtipos && data.subtipos.length) {
        modalSubtipos.innerHTML = data.subtipos
          .map(
            s => `
            <li class="subtipo-item">
              <div class="subtipo-titulo">
                <span>${s.titulo}</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div class="subtipo-resumen">${s.resumen || "Próximamente..."}</div>
            </li>`
          )
          .join("");

        modalSubtipos.querySelectorAll(".subtipo-titulo").forEach(tituloEl => {
          tituloEl.addEventListener("click", () => {
            const item = tituloEl.parentElement;
            item.classList.toggle("activo");
          });
        });
      } else {
        modalSubtipos.innerHTML = "<li>Información próximamente</li>";
      }
    });
  });

  cerrarModal.addEventListener("click", () => modal.classList.remove("activo"));

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("activo");
  });
});
