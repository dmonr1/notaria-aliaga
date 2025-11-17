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
    titulo: "Matrimonio Civil",
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
    titulo: "Transferencia de Posesión",
    icon: "fa-solid fa-file-signature",
    img: "trasnferencia.jpg",
    req: [
      "Contrato de transferencia o traspaso.",
      "Copia de DNI de los otorgantes.",
      "Hojas HR y PU del autovalúo municipal (año vigente).",
      "Constancia de posesión municipal o de junta directiva.",
      "Medio de pago bancario si supera 1 UIT."
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
    titulo: "Divorcio Notarial",
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
    titulo: "Unión de Hecho",
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
    titulo: "Poder por Escritura Pública",
    icon: "fa-solid fa-user-pen",
    img: "escritura.jpeg",
    req: [
      "DNI del poderdante.",
      "DNI del apoderado.",
      "Copia literal o partida registral (máx. 30 días)."
    ]
  },
  {
    tipo: "E",
    titulo: "Apertura de Libros",
    icon: "fa-solid fa-book",
    img: "apertura_libros.jpg",
    req: [
      "Copia literal de la empresa o asociación.",
      "Ficha RUC.",
      "Libro anterior (si existe).",
      "Libro nuevo.",
      "DNI del solicitante."
    ]
  },
  {
    tipo: "E",
    titulo: "Apertura de Hojas Sueltas",
    icon: "fa-solid fa-book-open",
    img: "suelta.jpg",
    req: [
      "Ficha RUC.",
      "Libro asociado.",
      "Copia literal o vigencia de poder.",
      "DNI del representante."
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
    titulo: "Prescripción Adquisitiva de Inmueble",
    icon: "fa-solid fa-file-shield",
    img: "inmueble.jpg",
    req: [
      "Solicitud firmada por el interesado y testigos.",
      "Copia literal del inmueble o búsqueda catastral.",
      "Documentos que acrediten posesión continua por 10 años.",
      "DNI del solicitante.",
      "Recibos de servicios de 10 años.",
      "Certificación municipal de posesión.",
      "Declaración testimonial de 3 a 6 testigos."
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
    titulo: "Cambio de E.I.R.L a S.A.C.",
    icon: "fa-solid fa-building-circle-check",
    img: "cambio.jpg",
    req: [
      "DNI del titular y nuevos socios.",
      "Libro de actas.",
      "Ficha RUC.",
      "Copia literal de la partida registral.",
      "Balance general suscrito por CPC.",
      "Publicación en diarios (3 veces).",
      "Minuta suscrita y acta de decisión del titular."
    ]
  }
];

function cargarServicios() {
  const contP = document.getElementById("lista-protocolares");
  const contE = document.getElementById("lista-extras");

  servicios.forEach(s => {
    const li = document.createElement("li");
    li.className = "serv-item";
    li.innerHTML = `<i class="${s.icon}"></i> ${s.titulo}`;
    li.addEventListener("click", () => abrirModal(s));

    if (s.tipo === "P") contP.appendChild(li);
    else contE.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", cargarServicios);


const modal = document.getElementById("modal-servicio");
const btnCerrar = document.getElementById("cerrar-modal");

function abrirModal(s) {
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
  if (window.scrollY > 300) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("activo");
});

document.querySelectorAll(".nav-links .nav-item").forEach(item => {
  item.addEventListener("click", () => {
    sidebar.classList.remove("activo");
  });
});