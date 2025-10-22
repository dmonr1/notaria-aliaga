document.addEventListener("DOMContentLoaded", () => {
  // ======== SCROLL ENTRE SECCIONES ========
  const links = document.querySelectorAll('.nav-item, .btn-conocenos');
  const scrollContainer = document.querySelector(".scroll-container");
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  let isScrolling = false;

  // --- Navegación por clic ---
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


  
  // --- Navegación con flechas ---
  document.addEventListener("keydown", (e) => {
    if (isScrolling) return;
    if (e.key === "ArrowDown") scrollToSection(++currentIndex);
    if (e.key === "ArrowUp") scrollToSection(--currentIndex);
  });

  // ======== ANIMACIÓN SECCIÓN SOMOS ========
  const sectionSomos = document.querySelector("#somos");
  if (sectionSomos) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        sectionSomos.classList.toggle("somos-animar", entry.isIntersecting);
      });
    }, { threshold: 0.4 });
    observer.observe(sectionSomos);
  }

  // ======== ACTIVAR NAV ITEM CONTACTO ========
  const contactoSection = document.querySelector('#contacto');
  const allNavLinks = document.querySelectorAll('.nav-item');
  if (contactoSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        allNavLinks.forEach(link => {
          link.classList.toggle('contacto-activo', entry.isIntersecting);
        });
      });
    }, { root: scrollContainer, threshold: 0.5 });
    observer.observe(contactoSection);
  }

  const carruselContenedor = document.querySelector(".carrusel-contenedor");
  const indicadores = document.querySelectorAll(".indicador");
  const total = indicadores.length;
  let indice = 0;
  let intervalo;

  function mostrarImagen(n) {
    indice = (n + total) % total;
    carruselContenedor.style.transform = `translateX(-${indice * 100}%)`;

    indicadores.forEach((el, i) =>
      el.classList.toggle("activo", i === indice)
    );
  }

  // Cambio automático cada 5 segundos
  function iniciarAutoSlide() {
    intervalo = setInterval(() => {
      mostrarImagen(indice + 1);
    }, 5000);
  }

  // Al hacer clic en los indicadores
  indicadores.forEach((el, i) => {
    el.addEventListener("click", () => {
      mostrarImagen(i);
      clearInterval(intervalo);
      iniciarAutoSlide();
    });
  });

  iniciarAutoSlide();

  // ======== MODAL SERVICIOS ========
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
          resumen: `<strong>Requisitos:</strong><br>
            1) Todos los documentos que acrediten posesión continua del inmueble por 10 años.<br>
            2) Copia simple de documento de identidad del solicitante.<br>
            3) Recibos pagados de luz, agua y teléfono de los últimos diez (10) años.<br>
            4) Certificación municipal de la persona que figura en sus registros como propietaria o poseedora del bien o los originales de los recibos de autoavalúo pagados de los últimos diez (10) años que sustentan la ocupación del inmueble.<br>
            5) Declaración testimonial de no menos de 3 ni más de 6 personas, mayores de 25 años de edad, preferentemente vecinos u ocupantes de los inmuebles colindantes del predio.`
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
          resumen: string = `<strong>Requisitos:</strong><br>
            1) Presencia de cualquiera de los padres.<br>
            2) Completar los datos en la solicitud.<br>
            3) DNI del padre solicitante y del acompañante (original y copia).<br>
            4) DNI del menor y copia certificada de la Partida de nacimiento (máx. 30 días de antigüedad).<br>
            5) Si la Partida de nacimiento es expedida por municipalidad en provincias, debe estar visada por RENIEC.<br>
            6) Si interviene un apoderado: vigencia de poder emitida por SUNARP (máx. 15 días de antigüedad).`
        },
        {
          titulo: "Viaje al Exterior",
          resumen: `<strong>Requisitos:</strong><br>
            1) Presencia de ambos padres.<br>
            2) Completar los datos en la solicitud.<br>
            3) DNI de ambos padres, vigentes y sin multas electorales.<br>
            4) DNI del menor.<br>
            5) Copia certificada de la Partida de nacimiento (máx. 30 días de antigüedad).<br>
            6) Si la Partida de nacimiento es expedida por municipalidad en provincias, debe estar visada por RENIEC.<br>
            7) Si interviene un apoderado: vigencia de poder emitida por SUNARP (máx. 15 días de antigüedad).`
        }
      ]
    },

    "Testamentos": {
      img: "../images/servicios/cartanotarial.jpg",
      descripcion: "Redacción y formalización de testamentos conforme a ley, asegurando la voluntad del testador.",
      subtipos: [
        {
          titulo: "Testamentos",
          resumen: `<strong>Documentos:</strong><br>
            1) Presencia de ambos padres.<br>
            2) Completar los datos en la solicitud.<br>
            3) DNI de ambos padres, vigentes y sin multas electorales.<br>
            4) DNI del menor.<br>
            5) Copia certificada de la Partida de nacimiento (máx. 30 días de antigüedad).<br>
            6) Si la Partida de nacimiento es expedida por municipalidad en provincias, debe estar visada por RENIEC.<br>
            7) Si interviene un apoderado: vigencia de poder emitida por SUNARP (máx. 15 días de antigüedad).`
        },
      ]
    },

    "Transferencias Vehiculares": {
      img: "../images/servicios/garantia.jpg",
      descripcion: "Trámites notariales relacionados con la transferencia y formalización de vehículos.",
      subtipos: [
        {
          titulo: "Transferencia Vehicular",
          resumen: `<strong>Requisitos:</strong><br>
            1) DNI del vendedor y comprador (original y copia)<br>
            2) Tarjeta de propiedad (original y copia).<br>
            3) SOAT vigente.<br>
            4) Si el auto es del año 2022 al 2025, traer pago del impuesto vehicular.<br>
            5) Acreditar el medio de pago de manera bancarizada mediante un voucher o transferencia (Traerlo impreso) <br>
            6) Boleta informativa (Registros públicos)`
        },
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
          resumen: `<strong>Requisitos:</strong><br>
            1) Comparecencia del solicitante, portando su D.N.I. o documento oficial de identidad en caso de extranjeros, adjuntando fotocopia de dichos documentos.<br>
            2) En caso de actuar a través de apoderado, adjuntar certificado de vigencia de poder actualizado expedido por SUNARP, dicho certificado no podrá tener una antigüedad mayor a 30 días naturales.<br>
            3) Adjuntar partida que se desea rectificar, precisando los errores u omisiones de la partida. No puede invocarse el trámite para cambio de prenombres o apellidos.<br>
            4) Adjuntar partida de nacimiento (o de bautismo si ésta es anterior al 14 de noviembre de 1936) del padre o de la madre con los datos a rectificar.<br>
            5) En algunos casos, adjuntar partida de bautizo.<br>
	    <strong>Trámite:</strong>:<br>
            6) Verificación biométrica de identidad de los solicitantes nacionales, o, según el caso, verificación de identidad con la base de datos de migraciones para los extranjeros.<br>
            7) Elaboración y firma de minuta, autorizada por abogado. Minuta se hace en la Notaría. <br>
            8) Publicación del procedimiento no contencioso.`

        },
        {
          titulo: "Sucesión intestada",
          resumen: "Declaración notarial de herederos legales cuando una persona fallece sin testamento."
        },
        {
          titulo: "Patrimonio familiar",
          resumen: `<strong>Requisitos:</strong>:<br>
            1) Minuta firmada por los contratantes y autorizada por abogado.<br>
            2) Copia de documento de identidad de los contratantes.<br>
            3) Vigencia de poder original y actualizado, en caso se actué por representación.<br>
            4) CRI o Copia Literal de la Partida Registral del inmueble, original y actualizada. (Este inmueble debe ser: <br>
              <strong>La casa habitación de la familia, Un predio destinado a la agricultura, la artesanía, la industria o el comercio.</strong>)<br>
            5) Certificado Negativo de Gravamen del inmueble.<br>
            6) Formularios Municipales (PU y HR)  y recibo de pago del Impuesto Predial del año respectivo o Constancia de no Adeudo, emitida por la Municipalidad correspondiente, donde se consigne los datos exactos del inmueble.<br>
            7) Partida de matrimonio y/o partida de nacimiento de los hijos, original y actualizado.`
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
          resumen: `<strong>Requisitos:</strong><br>
            1) Minuta firmada por los otorgantes y autorizada por un abogado.<br>
            2) Copia Literal actualizada de la Partida registral del inmueble emitida por SUNARP.<br>
            3) Copia de DNI de los otorgantes.<br>
            4) Si alguna parte actúa mediante un apoderado, este debe presentar Vigencia de poder actualizada, emitida por SUNARP.<br>
            5) Hojas HR y PU del autovalúo municipal de este año.<br>
            6) Constancia de No Adeudo del Impuesto Predial de El Vendedor.<br>
            7) Liquidación y pago del Impuesto a la Renta de El Vendedor, de corresponder. Liquidación y pago del Impuesto de Alcabala de El Comprador, de corresponder.<br>
            8) Medio de pago bancario siempre que el valor de venta supere 01 U.I.T.<br>
            <strong>*Consultar requisitos específicos en caso de Anticipo de Herencia y Donación.</strong>`
        },
        {
          titulo: "Hipoteca y Anticresis",
          resumen: "Constitución de derechos reales de garantía sobre bienes inmuebles."
        },
        {
          titulo: "Donación",
          resumen: `<strong>Requisitos:</strong>:<br>
            1) Minuta firmada por los otorgantes y autorizada por un abogado.<br>
            2) Copia Literal actualizada de la Partida.<br>
            3) Copia de DNI de los otorgantes.<br>
            4) Si alguna parte actúa mediante un apoderado, este debe presentar Vigencia de poder actualizada, emitida por SUNARP.<br>
            5) Hojas HR y PU del autovalúo municipal de este año.<br>
            6) Constancia de No Adeudo del Impuesto Predial de El DONANTE.<br>
            7) Liquidación y pago del Impuesto de Alcabala de El Donatario, de corresponder.`
        },
        {
          titulo: "Anticipo de legítima",
          resumen: `<strong>Requisitos:</strong>:<br>
            1) Minuta firmada por los otorgantes y autorizada por un abogado.<br>
            2) Copia Literal actualizada de la Partida.<br>
            3) Copia de DNI de los otorgantes.<br>
            4) Si alguna parte actúa mediante un apoderado, este debe presentar Vigencia de poder actualizada, emitida por SUNARP.<br>
            5) Hojas HR y PU del autovalúo municipal de este año.<br>
            6) Constancia de No Adeudo del Impuesto Predial de El ANTICIPANTE.<br>
            7) Copia certificada de la partida de nacimiento del anticipado.`
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
          resumen: `<strong>Requisitos:</strong><br>
            1) Copia de DNI de los contrayentes y de sus testigos, vigentes y sin multas electorales.<br>
            2) Copia certificada de Partida de nacimiento de los contrayentes (máx. 30 días de antigüedad).<br>
            3) Si la Partida es expedida por municipalidad en provincias, debe estar visada por RENIEC.<br>
            4) Certificado domiciliario de los contrayentes (máx. 30 días de antigüedad).<br>
            5) Certificado médico de los contrayentes de no tener impedimento para contraer Matrimonio (máx. 30 días de antigüedad).<br>
            6) Dos testigos mayores de edad, que no sean parientes con los contrayentes y que los conozcan por más de tres años.<br>
            7) Declaración Jurada de los testigos manifestando que los contrayentes no tienen impedimento de contraer matrimonio.<br>
            8) Certificado Negativo de Matrimonio expedido por RENIEC por cada contrayente (máx. 30 días de antigüedad).<br>
            9) Certificado Negativo de Unión de Hecho expedido por SUNARP por cada contrayente (máx. 30 días de antigüedad).`
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
          resumen: `<strong>Requisitos:</strong>:<br>
            1) Copia literal de la empresa o asociación.<br>
            2) Ficha RUC de la empresa o asociación.<br>
            3) Libro Anterior (en caso se tenga).<br>
            4) Libro Nuevo.<br>
            5) DNI del solicitante (físico y copia).`

        },
        {
          titulo: "Apertura de libros de contabilidad y otros",
          resumen: `<strong>Requisitos:</strong>:<br>
            1) Copia literal de la empresa o asociación.<br>
            2) Ficha RUC de la empresa o asociación.<br>
            3) Libro Anterior (en caso se tenga).<br>
            4) Libro Nuevo.<br>
            5) DNI del solicitante (físico y copia).`

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
  // ======== SIDEBAR ========
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");
  const cerrarSidebar = document.getElementById("cerrar-sidebar");

  menuIcon.addEventListener("click", () => sidebar.classList.add("activo"));
  cerrarSidebar.addEventListener("click", () => sidebar.classList.remove("activo"));
  document.querySelectorAll(".nav-item").forEach(link =>
    link.addEventListener("click", () => sidebar.classList.remove("activo"))
  );

  // ======== OCULTAR HEADER DESPUÉS DEL INICIO ========
  const header = document.querySelector(".main-header");
  const inicioSection = document.querySelector("#inicio");
  const scrollContainerEl = document.querySelector(".scroll-container");

  scrollContainerEl.addEventListener("scroll", () => {
    const rect = inicioSection.getBoundingClientRect();
    const headerShouldHide = rect.bottom <= 50;
    header.classList.toggle("oculto", headerShouldHide);
  });

});
