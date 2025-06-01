/*Esto asegura que el código se ejecute solo cuando el HTML esté completamente cargado y
 listo para ser manipulado.*/
document.addEventListener("DOMContentLoaded", function () {
  // Datos de cada carrusel
  const carruseles = [
    {
      bloque: document.querySelector(".bloque1"),
      datos: [
        { tipo: "categoria", titulo: "Salón y sala de estar" },
        {
          tipo: "mueble",
          subtitulo: "Sofás modernos",
          descripcion: "Sofás cómodos y agradables para tu espalda.",
          imagen: "./img/sofa.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Sillones de diseño",
          descripcion: "Sillones cómodos hechos de madera artesanal.",
          imagen: "./img/sillon.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Mesas de centro",
          descripcion: "Mesas prácticas y elegantes para tu sala.",
          imagen: "./img/mesa de centro.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Estanterías o libreros",
          descripcion: "Almacenaje con estilo para tus libros y objetos.",
          imagen: "./img/estanterias.jpg",
        },
      ],
      pasoActual: 0,
    },
    {
      bloque: document.querySelector(".bloque2"),
      datos: [
        { tipo: "categoria", titulo: "Comedor" },
        {
          tipo: "mueble",
          subtitulo: "Mesas de comedor",
          descripcion:
            "Mesas elegantes y funcionales para compartir grandes momentos.",
          imagen: "./img/mesa de comedor.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Sillas de comedor",
          descripcion: "Sillas cómodas y modernas para tu mesa.",
          imagen: "./img/sillas comedor.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Vitrinas",
          descripcion: "Almacenaje y exposición con estilo.",
          imagen: "./img/vitrinas.jpg",
        },
      ],
      pasoActual: 0,
    },
    {
      bloque: document.querySelector(".bloque3"),
      datos: [
        { tipo: "categoria", titulo: "Dormitorio" },
        {
          tipo: "mueble",
          subtitulo: "Camas",
          descripcion: "Descanso y diseño en tu dormitorio.",
          imagen: "./img/cama.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "mesitas de noche",
          descripcion: "Comodidad y funcionalidad junto a tu cama.",
          imagen: "./img/mesita de noche.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "tocadores",
          descripcion: "Organiza y decora tu espacio personal.",
          imagen: "./img/tocadores.jpg",
        },
      ],
      pasoActual: 0,
    },
    {
      bloque: document.querySelector(".bloque4"),
      datos: [
        { tipo: "categoria", titulo: "Oficina Estudio" },
        {
          tipo: "mueble",
          subtitulo: "Escritorio",
          descripcion: "Trabaja cómodo y con estilo.",
          imagen: "./img/escritorio.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "sillas de oficina",
          descripcion: "Confort para largas jornadas.",
          imagen: "./img/silla oficina.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Estanterias Modulares",
          descripcion: "Orden y flexibilidad para tu estudio.",
          imagen: "./img/estanterias.jpg",
        },
      ],
      pasoActual: 0,
    },
    {
      bloque: document.querySelector(".bloque5"),
      datos: [
        { tipo: "categoria", titulo: "Almacenaje y auxiliares" },
        {
          tipo: "mueble",
          subtitulo: "Zapateros",
          descripcion: "Tus zapatos siempre organizados.",
          imagen: "./img/zapatero.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Consolas de entrada",
          descripcion: "Bienvenida práctica y elegante",
          imagen: "./img/mueble de entrada.jpg",
        },
      ],
      pasoActual: 0,
    },
    {
      bloque: document.querySelector(".bloque6"),
      datos: [
        { tipo: "categoria", titulo: "Muebles destacados" },
        {
          tipo: "mueble",
          subtitulo: "Ediciones limitadas",
          descripcion: "Piezas únicas para tu hogar.",
          imagen: "./img/mueble antiguo.jpg",
        },
        {
          tipo: "mueble",
          subtitulo: "Piezas artesanales o personalizables",
          descripcion: "Diseño exclusivo, hecho a medida.",
          imagen: "./img/mueble personalizable antiguo.jpg",
        },
      ],
      pasoActual: 0,
    },
  ];
  //////////////////////////////////////
  /*
bloque: Referencia al elemento HTML (div) que contiene el carrusel.
datos: Array de objetos con información (categoría o mueble).
pasoActual: Indica el índice del elemento actualmente mostrado.
*/
  ////////////////////////////////////////////
  /*
¿Qué hace?
Extrae el bloque, datos y paso actual del carrusel.
Obtiene los elementos del DOM: título, subtítulo, descripción.
Si el paso actual es una categoría:
Muestra el título y oculta subtítulo y descripción.
Quita la imagen de fondo.
Si el paso actual es un mueble:
Oculta el título.
Muestra subtítulo y descripción.
Establece la imagen de fondo con la imagen del mueble
 */
  ////////////////////////////
  // Función para actualizar un carrusel concreto
  function actualizarCarrousel(carrusel) {
    const { bloque, datos, pasoActual } = carrusel;
    const titulo = bloque.querySelector(".carrusel-titulo");
    const subtitulo = bloque.querySelector(".carrusel-subtitulo");
    const descripcion = bloque.querySelector(".carrusel-descripcion");
    const paso = datos[pasoActual];

    if (paso.tipo === "categoria") {
      titulo.style.display = "";
      titulo.textContent = paso.titulo;
      subtitulo.style.display = "none";
      descripcion.style.display = "none";
      bloque.style.backgroundImage = "";
    } else {
      titulo.style.display = "none";
      subtitulo.style.display = "";
      subtitulo.textContent = paso.subtitulo;
      descripcion.style.display = "";
      descripcion.textContent = paso.descripcion;
      bloque.style.backgroundImage = `url('${paso.imagen}')`;
      bloque.style.backgroundSize = "cover";
      bloque.style.backgroundPosition = "center";
    }
  }

  // Inicializar y añadir eventos a cada carrusel
  carruseles.forEach((carrusel) => {
    const flechaIzq = carrusel.bloque.querySelector(".flecha-izq");
    const flechaDer = carrusel.bloque.querySelector(".flecha-der");

    flechaIzq.addEventListener("click", () => {
      carrusel.pasoActual =
        (carrusel.pasoActual - 1 + carrusel.datos.length) %
        carrusel.datos.length;
      actualizarCarrousel(carrusel);
    });
    flechaDer.addEventListener("click", () => {
      carrusel.pasoActual = (carrusel.pasoActual + 1) % carrusel.datos.length;
      actualizarCarrousel(carrusel);
    });

    // Inicializar el carrusel
    actualizarCarrousel(carrusel);
  });
});
/*
Obtiene las flechas de navegación (izquierda y derecha).
Añade eventos click a las flechas para cambiar el paso actual.
Flecha izquierda: retrocede en el array de datos (usando módulo para dar la vuelta).
Flecha derecha: avanza en el array de datos.
Llama a actualizarCarrousel para mostrar el primer elemento al inicio.
 */
//////////////////
/*
Funcionamiento:
Cada carrusel tiene un bloque HTML, datos (categorías y muebles), y un índice de paso actual.
Al hacer clic en las flechas, se actualiza el contenido mostrado (título, subtítulo, descripción, imagen de fondo).
La función actualizarCarrousel controla qué elementos se muestran y ocultan según el tipo de dato (categoría o mueble).
 */
