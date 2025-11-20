const servicios = [
  {
    tipo: "E",
    titulo: "Autorización de Viaje – Interior",
    icon: "fa-solid fa-plane-departure",
    img: "viajes.jpg",
    req: [
      "Presencia de cualquiera de los padres.",
      "Completar los datos en la solicitud.",
      "DNI del padre solicitante, vigente y sin multas electorales.",
      "DNI del menor o copia certificada de la Partida de nacimiento (máx. 30 días de antigüedad).",
      "Si la Partida fue expedida en provincia, debe estar visada por RENIEC.",
      "Si interviene apoderado: Vigencia de poder emitida por SUNARP (máx. 15 días)."
    ]
  },
  {
    tipo: "E",
    titulo: "Autorización de Viaje – Exterior",
    icon: "fa-solid fa-plane",
    img: "viajes.jpg",
    req: [
      "Presencia de ambos padres.",
      "Completar los datos en la solicitud.",
      "DNI de ambos padres, vigentes y sin multas electorales.",
      "DNI del menor.",
      "Copia certificada de la Partida de nacimiento (máx. 30 días de antigüedad).",
      "Si la Partida fue expedida en provincia, debe estar visada por RENIEC.",
      "Si interviene apoderado: Vigencia de poder emitida por SUNARP (máx. 15 días)."
    ]
  },
  {
    tipo: "P",
    titulo: "Testamento",
    icon: "fa-solid fa-scroll",
    img: "testamento.jpg",
    req: [
      "Dos testigos mayores de edad, no familiares entre sí. DNI vigente del testador y testigos.",
      "Copia literal actualizada de Partida Registral de inmuebles.",
      "Boleta informativa de vehículos.",
      "Idealmente DNI o datos de los herederos.",
      "La notaría puede solicitar documentos adicionales."
    ]
  },
  {
    tipo: "P",
    titulo: "Matrimonio",
    icon: "fa-solid fa-ring",
    img: "matrimonio.jpg",
    req: [
      "Copia de DNI de los contrayentes y testigos, vigentes y sin multas electorales.",
      "Copia certificada de Partidas de nacimiento (máx. 30 días).",
      "Si fue expedida en provincia, visada por RENIEC.",
      "Certificado domiciliario (máx. 30 días).",
      "Certificado médico prenupcial (máx. 30 días).",
      "Dos testigos mayores de edad, conocedores por más de 3 años.",
      "Declaración jurada de no impedimento matrimonial.",
      "Certificado Negativo de Matrimonio (RENIEC).",
      "Certificado Negativo de Unión de Hecho (SUNARP)."
    ]
  },
  {
    tipo: "P",
    titulo: "Compraventa",
    icon: "fa-solid fa-house-chimney",
    img: "compra.jpg",
    req: [
      "Minuta firmada y autorizada por abogado.",
      "Copia Literal actualizada de la Partida Registral del inmueble.",
      "Copia de DNI de los otorgantes.",
      "Si hay apoderado: Vigencia de poder SUNARP.",
      "Hojas HR y PU del autovalúo municipal (año vigente).",
      "Constancia de no adeudo del impuesto predial del vendedor.",
      "Pago de Impuesto a la Renta y/o Alcabala si corresponde.",
      "Medio de pago bancarizado si el monto supera 1 UIT."
    ]
  },
  {
    tipo: "P",
    titulo: "Separación de Patrimonio",
    icon: "fa-solid fa-heart-crack",
    img: "separacion.jpg",
    req: [
      "Minuta firmada por ambos cónyuges y autorizada por abogado.",
      "Copia de DNI de ambos cónyuges.",
      "Si existen bienes: Tarjeta de propiedad."
    ]
  },
  {
    tipo: "P",
    titulo: "Divorcio",
    icon: "fa-solid fa-file-contract",
    img: "divorico.jpeg",
    req: [
      "Solicitud firmada por ambos cónyuges o apoderado.",
      "Copias de DNI de los intervinientes.",
      "Vigencia de poder si aplica.",
      "Copia certificada de la Partida de matrimonio.",
      "Declaración jurada del último domicilio conyugal.",
      "Si hay hijos menores: Partidas de nacimiento y acuerdo de patria potestad/tenencia.",
      "Si hijos mayores con incapacidad: acreditar condición médica."
    ]
  },
  {
    tipo: "P",
    titulo: "Patrimonio Familiar",
    icon: "fa-solid fa-people-roof",
    img: "certificaciones.jpg",
    req: [
      "Minuta firmada y autorizada por abogado.",
      "Copia de DNI de los contratantes.",
      "Copia literal de la partida registral del inmueble.",
      "Certificado negativo de gravamen.",
      "PU y HR y/o constancia de no adeudo municipal.",
      "Partida de matrimonio y/o partidas de nacimiento de hijos."
    ]
  },
  {
    tipo: "P",
    titulo: "Reconocimiento de Unión de Hecho",
    icon: "fa-solid fa-people-arrows",
    img: "union.jpg",
    req: [
      "Minuta firmada por ambas partes.",
      "Reconocimiento expreso de convivencia mínima de 2 años.",
      "Declaración de no impedimento matrimonial.",
      "Declaración jurada de domicilio.",
      "Certificado negativo de unión de hecho SUNARP.",
      "Declaración de dos testigos.",
      "Documentos que acrediten convivencia (contratos, servicios, pólizas, etc.)."
    ]
  },
  {
    tipo: "P",
    titulo: "Rectificación de Partidas",
    icon: "fa-solid fa-eraser",
    img: "rectificacion.jpg",
    req: [
      "Comparecencia del solicitante con DNI.",
      "Si interviene apoderado: Vigencia de poder SUNARP (máx. 30 días).",
      "Adjuntar partida a rectificar y señalar errores.",
      "Partida de nacimiento o bautismo del padre/madre si corresponde.",
      "Verificación biométrica o migraciones.",
      "Elaboración y firma de minuta notarial.",
      "Publicación del trámite correspondiente."
    ]
  },
  {
    tipo: "P",
    titulo: "Constitución de Personas Jurídicas",
    icon: "fa-solid fa-building",
    img: "constitucion.jpg",
    req: [
      "Reserva de nombre (SUNARP).",
      "Copia del DNI de los intervinientes.",
      "Aporte en bienes muebles: Informe de valorización.",
      "Aporte en inmueble: Copia literal + PU/HR + predial + impuestos.",
      "Aporte en dinero: Depósito bancario a favor de la empresa."
    ]
  },
  {
    tipo: "P",
    titulo: "Prescipción Adquisitiva de Inmueble",
    icon: "fa-solid fa-file-signature",
    img: "tramites.jpeg",
    req: [
      "Solicitud firmada por el interesado y los testigos propuestos, autorizada por abogado.",
      "Copia literal del inmueble o certificado de búsqueda catastral, expedidos por los Registros Públicos.",
      "Todos los documentos que acrediten posesión continua del inmueble por 10 años.",
      "Copia simple de documento de identidad del solicitante.",
      "Recibos pagados de luz, agua y teléfono de los últimos diez (10) años.",
      "Certificación municipal de la persona que figura en sus registros como propietaria o poseedora del bien o los originales de los recibos de autoavalúo pagados de los últimos diez (10) años que sustentan la ocupación del inmueble.",
      "Declaración testimonial de no menos de 3 ni más de 6 personas, mayores de 25 años de edad, preferentemente vecinos u ocupantes de los inmuebles colindantes del predio."
    ]
  },
  {
    tipo: "P",
    titulo: "Donación",
    icon: "fa-solid fa-gift",
    img: "donacion.jpg",
    req: [
      "Minuta firmada y autorizada por abogado.",
      "Copia literal actualizada de la partida del inmueble.",
      "Copia de DNI de los otorgantes.",
      "Si interviene apoderado: Vigencia de poder SUNARP.",
      "Hojas HR y PU del autovalúo.",
      "Constancia de No Adeudo del impuesto predial del donante.",
      "Liquidación y pago del Impuesto de Alcabala del donatario si corresponde."
    ]
  },
  {
    tipo: "E",
    titulo: "Copias Certificadas",
    icon: "fa-solid fa-file-circle-check",
    img: "certificaciones.jpg",
    req: [
      "Copia literal actual.",
      "Libro aperturado.",
      "Copia del libro.",
      "Constancia de convocatoria o quórum si aplica.",
      "Ficha RUC."
    ]
  },
  {
    tipo: "P",
    titulo: "Transferencia Vehicular",
    icon: "fa-solid fa-car",
    img: "trasnferencia.jpg",
    req: [
      "DNI del vendedor y comprador.",
      "Tarjeta de propiedad.",
      "SOAT vigente.",
      "Pago de impuesto vehicular si aplica.",
      "Medio de pago bancarizado.",
      "Boleta informativa (SUNARP)."
    ]
  },
  {
    tipo: "P",
    titulo: "Otros",
    icon: "fa-solid fa-ellipsis",
    img: "trasnferencia.jpg",
    req: [
      "DNI del vendedor y comprador.",
      "Tarjeta de propiedad.",
      "SOAT vigente.",
      "Pago de impuesto vehicular si aplica.",
      "Medio de pago bancarizado.",
      "Boleta informativa (SUNARP)."
    ]
  },
  {
    tipo: "E",
    titulo: "Otros",
    icon: "fa-solid fa-ellipsis",
    img: "trasnferencia.jpg",
    req: [
      "DNI del vendedor y comprador.",
      "Tarjeta de propiedad.",
      "SOAT vigente.",
      "Pago de impuesto vehicular si aplica.",
      "Medio de pago bancarizado.",
      "Boleta informativa (SUNARP)."
    ]
  }
];

// ====================================
// LISTAS FIJAS PARA "OTROS"
// ====================================
const otrosP = [
  "Rectificación de Partidas",
  "Cambio de E.I.R.L. a S.A.C.",
  "Prescripción Adquisitiva de Dominio",
  "Poder por Escritura Pública",
  "Separación de Patrimonio",
  "Transferencia de Posesión",
  "Donación",
  "Constitución de Personas Jurídicas"
];

const otrosE = [
  "Apertura de Hojas Sueltas",
  "Apertura de Libros",
  "Copia Certificada",
  "Constatación Domiciliaria",
  "Autorizaciones y Certificaciones",
  "Vigencia de Poderes",
  "Otros trámites simples"
];


function cargarServicios() {
  const contP = document.getElementById("lista-protocolares");
  const contE = document.getElementById("lista-extras");

  servicios.forEach(s => {
    const li = document.createElement("li");
    li.className = "serv-item";
    li.innerHTML = `<i class="${s.icon}"></i> ${s.titulo}`;
    li.addEventListener("click", () => abrirServicio(s));

    if (s.tipo === "P") contP.appendChild(li);
    else contE.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", cargarServicios);


function abrirServicio(serv) {
  if (serv.titulo.toLowerCase() === "otros") {
    abrirModalOtros(serv.tipo); 
  } else {
    abrirModalNormal(serv);
  }
}

const modalOtros = document.getElementById("modal-otros");
const cerrarOtros = modalOtros.querySelector(".close-modal");

function abrirModalOtros(tipo) {
  const titulo = document.getElementById("otros-titulo");
  const cont = document.getElementById("otros-lista-contenedor");

  if (tipo === "P") {
    titulo.textContent = "Otros Servicios";
    cont.innerHTML = `
      <div class="modal-list-title">PROTOCOLARES</div>
      <ul>${otrosP.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
  }

  if (tipo === "E") {
    titulo.textContent = "Otros Servicios";
    cont.innerHTML = `
      <div class="modal-list-title">EXTRAPROTOCOLARES</div>
      <ul>${otrosE.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
  }

  modalOtros.style.display = "block";
}

cerrarOtros.addEventListener("click", () => modalOtros.style.display = "none");

modalOtros.addEventListener("click", e => {
  if (e.target === modalOtros) modalOtros.style.display = "none";
});


const modal = document.getElementById("modal-servicio");
const btnCerrar = document.getElementById("cerrar-modal");

function abrirModalNormal(s) {
  const img = document.getElementById("modal-imagen");

  if (s.img && s.img.trim() !== "") {
    img.src = "../images/servicios/" + s.img;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  document.getElementById("modal-titulo").textContent = s.titulo;
  document.getElementById("modal-descripcion").innerHTML =
    s.req.map(r => `<li>${r}</li>`).join("");

  modal.classList.add("activo");
}

btnCerrar.addEventListener("click", () => modal.classList.remove("activo"));

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("activo");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.remove("activo");
});

const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  btnTop.classList.toggle("show", window.scrollY > 300);
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("activo");
});

document.querySelectorAll(".nav-links .nav-item").forEach(item => {
  item.addEventListener("click", () => sidebar.classList.remove("activo"));
});
