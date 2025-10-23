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


  document.addEventListener("keydown", (e) => {
    if (isScrolling) return;
    if (e.key === "ArrowDown") scrollToSection(++currentIndex);
    if (e.key === "ArrowUp") scrollToSection(--currentIndex);
  });

  const sectionSomos = document.querySelector("#somos");
  if (sectionSomos) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        sectionSomos.classList.toggle("somos-animar", entry.isIntersecting);
      });
    }, { threshold: 0.4 });
    observer.observe(sectionSomos);
  }

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

  function iniciarAutoSlide() {
    intervalo = setInterval(() => {
      mostrarImagen(indice + 1);
    }, 5000);
  }

  indicadores.forEach((el, i) => {
    el.addEventListener("click", () => {
      mostrarImagen(i);
      clearInterval(intervalo);
      iniciarAutoSlide();
    });
  });

  iniciarAutoSlide();

  const modal = document.getElementById("modal-servicio");
  const cerrarModal = document.getElementById("cerrar-modal");
  const modalImg = document.getElementById("modal-imagen");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDesc = document.getElementById("modal-descripcion");

  const servicios = {
    "Autorización de viaje de menor": {
      img: "../images/servicios/viajes.jpg",
      descripcion: `
      <strong>REQUISITOS (VIAJE AL INTERIOR)</strong><br>
      1. Presencia de cualquiera de los padres.<br>
      2. Completar los datos en la solicitud.<br>
      3. DNI del padre solicitante y del acompañante (original y copia).<br>
      4. DNI del menor y copia certificada de la Partida de nacimiento (máx. 30 días).<br>
      5. Si la Partida es expedida por municipalidad en provincias, debe estar visada por RENIEC.<br>
      6. Si interviene un apoderado: vigencia de poder emitida por SUNARP (máx. 15 días).<br><br>
      <strong>REQUISITOS (VIAJE AL EXTERIOR)</strong><br>
      1. Presencia de ambos padres.<br>
      2. Completar los datos en la solicitud.<br>
      3. DNI de ambos padres, vigentes y sin multas electorales.<br>
      4. DNI del menor.<br>
      5. Copia certificada de la Partida de nacimiento (máx. 30 días).<br>
      6. Si la Partida es expedida por municipalidad en provincias, debe estar visada por RENIEC.<br>
      7. Si interviene un apoderado: vigencia de poder emitida por SUNARP (máx. 15 días).<br><br>
    `
    },

    "Testamento": {
      img: "../images/servicios/testamento.jpg",
      descripcion: `
      <strong>DOCUMENTOS:</strong><br>
      1. Dos testigos mayores de edad, no familiares ni esposos entre sí.<br>
      2. Copia de DNI del testador y de los dos testigos, vigentes y sin multas.<br>
      3. Copia literal actualizada de la Partida registral de sus inmuebles.<br>
      4. Boleta informativa actualizada de los vehículos.<br>
      5. Idealmente copia de DNI de sus herederos o datos completos.<br>
      6. La notaría puede solicitar documentos adicionales.<br><br>
    `
    },

    "Matrimonio": {
      img: "../images/servicios/matrimonio.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Copia de DNI de contrayentes y testigos, vigentes y sin multas.<br>
      2. Copia certificada de Partida de nacimiento (máx. 30 días).<br>
      3. Si es emitida en provincias, debe estar visada por RENIEC.<br>
      4. Certificado domiciliario (máx. 30 días).<br>
      5. Certificado médico de no impedimento para casarse.<br>
      6. Dos testigos mayores de edad (no parientes).<br>
      7. Declaración jurada de los testigos.<br>
      8. Certificados negativos de matrimonio y unión de hecho (RENIEC y SUNARP).<br><br>
    `
    },

    "Compraventa": {
      img: "../images/servicios/tramites.jpeg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Minuta firmada por los otorgantes y autorizada por abogado.<br>
      2. Copia literal actualizada de la Partida registral del inmueble (SUNARP).<br>
      3. Copia de DNI de los otorgantes.<br>
      4. Vigencia de poder actualizada si hay apoderado.<br>
      5. Hojas HR y PU del autovalúo municipal.<br>
      6. Constancia de No Adeudo del Impuesto Predial del vendedor.<br>
      7. Liquidación y pago de impuestos (Renta y Alcabala) si corresponde.<br>
      8. Medio de pago bancario si el valor supera 1 UIT.<br><br>
    `
    },

    "Separación de Patrimonio": {
      img: "../images/servicios/separacion.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Elaboración de minuta firmada por abogado y ambos cónyuges.<br>
      2. Copia de DNI de ambos cónyuges.<br>
      3. Con bienes: Tarjeta de propiedad.<br>
      4. Sin bienes: solo los documentos anteriores.<br><br>
    `
    },

    "Divorcio": {
      img: "../images/servicios/divorico.jpeg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Solicitud firmada por ambos cónyuges o apoderado.<br>
      2. Copia de documento de identidad de los intervinientes.<br>
      3. Vigencia de poder actualizado si aplica.<br>
      4. Copia certificada de la partida de matrimonio.<br>
      5. Declaración jurada del último domicilio conyugal.<br>
      6. Si hay hijos menores: partidas de nacimiento y acta de conciliación o sentencia.<br>
      7. Si hay hijos mayores con incapacidad: partidas de nacimiento.<br><br>
    `
    },

    "Patrimonio Familiar": {
      img: "../images/servicios/inmueble.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Minuta firmada por los contratantes y autorizada por abogado.<br>
      2. Copia de documento de identidad de los contratantes.<br>
      3. Vigencia de poder actualizado si aplica.<br>
      4. CRI o copia literal de la Partida Registral.<br>
      5. Certificado Negativo de Gravamen.<br>
      6. Formularios municipales (PU y HR) y recibo de pago del impuesto predial.<br>
      7. Partida de matrimonio y/o nacimiento de hijos.<br><br>
    `
    },

    "Reconocimiento de Unión de Hecho": {
      img: "../images/servicios/union.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Minuta firmada por ambas partes y autorizada por abogado.<br>
      2. Reconocimiento expreso de convivencia ≥ 2 años.<br>
      3. Declaración de no impedimento matrimonial.<br>
      4. Declaración jurada de domicilio.<br>
      5. Certificado negativo de unión de hecho (SUNARP).<br>
      6. Declaración de dos testigos (no familiares).<br>
      7. Documentos que acrediten convivencia ≥ 2 años.<br><br>
    `
    },

    "Rectificación de Partidas": {
      img: "../images/servicios/rectificacion.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Comparecencia del solicitante con DNI.<br>
      2. Certificado de vigencia de poder actualizado si aplica.<br>
      3. Adjuntar partida a rectificar.<br>
      4. Adjuntar partida de nacimiento o bautismo si aplica.<br>
      5. Verificación biométrica de identidad.<br>
      6. Elaboración y firma de minuta.<br>
      7. Publicación del procedimiento no contencioso.<br><br>
    `
    },

    "Constitución de Personas Jurídicas": {
      img: "../images/servicios/constitucion.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Reserva de nombre expedida por Registros Públicos.<br>
      2. Copia de documento de identidad de los contratantes.<br>
      3. Bien inmueble: copia literal + formularios municipales + pagos de impuestos.<br>
      4. Bien mueble: informe de valorización con marca, modelo y número de serie.<br>
      5. Dinero: depósito bancario original a favor de la empresa.<br><br>
    `
    },

    "Prescripción Adquisitiva de Inmueble": {
      img: "../images/servicios/garantia.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Documentos que acrediten posesión continua ≥ 10 años.<br>
      2. Copia simple del DNI del solicitante.<br>
      3. Recibos de luz, agua y teléfono últimos 10 años.<br>
      4. Certificación municipal o recibos de autoavalúo.<br>
      5. Declaración testimonial de 3-6 personas mayores de 25 años.<br><br>
    `
    },

    "Transferencia Vehicular": {
      img: "../images/servicios/trasnferencia.jpg",
      descripcion: `
      REQUISITOS:<br>
      1. DNI del vendedor y comprador (original y copia).<br>
      2. Tarjeta de propiedad (original y copia).<br>
      3. SOAT vigente.<br>
      4. Pago del impuesto vehicular si auto 2022-2025.<br>
      5. Medio de pago bancarizado (voucher o transferencia).<br>
      6. Boleta informativa (Registros Públicos).<br><br>
    `
    },

    "Donación": {
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Minuta firmada por los otorgantes y autorizada por abogado.<br>
      2. Copia literal actualizada de la Partida registral del inmueble (SUNARP).<br>
      3. Copia de DNI de los otorgantes.<br>
      4. Vigencia de poder actualizada si aplica.<br>
      5. Hojas HR y PU del autovalúo municipal del año.<br>
      6. Constancia de No Adeudo del Impuesto Predial del donante.<br>
      7. Liquidación y pago del Impuesto de Alcabala del donatario.<br><br>
    `
    },

    "Anticipo de Legítima": {
      img: "../images/servicios/anticipo.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Minuta firmada por los otorgantes y autorizada por abogado.<br>
      2. Copia literal actualizada de la Partida registral del inmueble (SUNARP).<br>
      3. Copia de DNI de los otorgantes.<br>
      4. Vigencia de poder actualizada si aplica.<br>
      5. Hojas HR y PU del autovalúo municipal del año.<br>
      6. Constancia de No Adeudo del Impuesto Predial del anticipante.<br>
      7. Copia certificada de la partida de nacimiento del anticipado.<br><br>
    `
    },

    "Poder por Escritura Pública": {
      img: "../images/servicios/domiciliario.jpeg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. DNI del poder dante.<br>
      2. DNI del apoderado.<br>
      3. Copia literal o partida registral (Máx. 30 días de antigüedad).
    `
    },

    "Apertura de Libros": {
      img: "../images/servicios/apertura_libros.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Copia literal de la empresa o asociación.<br>
      2. Ficha RUC de la empresa o asociación.<br>
      3. Libro Anterior (en caso se tenga).<br>
      4. Libro Nuevo.<br>
      5. DNI del solicitante (físico y copia).

    `
    },

    "Copias Certificadas": {
      img: "../images/servicios/certificaciones.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Copia literal actual.<br>
      2. Libro aperturado.<br>
      3. Copia del libro.<br>
      4. Constancias de convocatoria y/o QUORUM debidamente redactadas.<br>
      5. Ficha RUC.
    `
    },

    "Cambio de E.I.R.L a S.A.C": {
      img: "../images/servicios/cambio.jpg",
      descripcion: `
      <strong>REQUISITOS:</strong><br>
      1. Copia del documento de identidad del titular y su cónyuge (DNI, carné de extranjería) en el caso de ser casado, así como de los nuevos socios.<br>
      2. Copia del documento de identidad de el/los socios/s ingresante/s y su/s cónyuge/s (DNI, carné de extranjería) Libro de actas de decisión de titular eril.<br>
      3. Ficha ruc.<br>
      4. Copia literal completa de la partida registral de la empresa.<br>
      5. Copia simple del testimonio de constitución y modificaciones.<br>
      6. Balance general suscrito por contador público colegiado al día anterior de la expedición de la escritura pública.<br>
      7. Monto y forma de aporte de los nuevos socios (certificado de depósito – informe de valorización - otros).<br>
      8. PUBLICACIÓNES EN DIARIOS: 3 veces con intervalo de 5 días. Luego de 30 días se expedirá la escritura pública. <br>
      9. Minuta suscrita por abogado y por la persona autorizada en acta.<br>
      10. Acta de decisión de titular donde decide transformar la empresa de EIRL a S.A.C inserta en el libro de actas.
    `
    },
  };

  document.querySelectorAll(".servicio-mini button").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".servicio-mini");
      const titulo = card.querySelector("h4").innerText.trim();

      const data = servicios[titulo] || null;

      modal.classList.add("activo");
      modalImg.src = data?.img || card.querySelector("img").src;
      modalTitulo.textContent = titulo;
      modalDesc.innerHTML = data?.descripcion || "Información próximamente disponible.";
    });
  });

  cerrarModal.addEventListener("click", () => modal.classList.remove("activo"));
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("activo");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("activo");
  });
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");
  const cerrarSidebar = document.getElementById("cerrar-sidebar");

  menuIcon.addEventListener("click", () => sidebar.classList.add("activo"));
  cerrarSidebar.addEventListener("click", () => sidebar.classList.remove("activo"));
  document.querySelectorAll(".nav-item").forEach(link =>
    link.addEventListener("click", () => sidebar.classList.remove("activo"))
  );

  const header = document.querySelector(".main-header");
  const inicioSection = document.querySelector("#inicio");
  const scrollContainerEl = document.querySelector(".scroll-container");

  scrollContainerEl.addEventListener("scroll", () => {
    const rect = inicioSection.getBoundingClientRect();
    const headerShouldHide = rect.bottom <= 50;
    header.classList.toggle("oculto", headerShouldHide);
  });

});

const inputBuscar = document.getElementById("buscarServicio");
const serviciosCards = document.querySelectorAll(".servicio-mini");

inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase().trim();
  serviciosCards.forEach(card => {
    const titulo = card.querySelector("h4").textContent.toLowerCase();
    card.style.display = titulo.includes(texto) ? "flex" : "none";
  });
});

const btnSubir = document.getElementById("btn-subir");
const scrollContainerBtn = document.querySelector(".scroll-container");
const seccionInicio = document.getElementById("inicio");

if (btnSubir && scrollContainerBtn && seccionInicio) {
  scrollContainerBtn.addEventListener("scroll", () => {
    const scrollTop = scrollContainerBtn.scrollTop;
    const limite = seccionInicio.offsetHeight * 0.7;

    if (scrollTop > limite) {
      btnSubir.classList.add("mostrar");
    } else {
      btnSubir.classList.remove("mostrar");
    }
  });

  btnSubir.addEventListener("click", () => {
    scrollContainerBtn.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
