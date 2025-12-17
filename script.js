const productos = [
  {
    nombre: "CH",
    precio: "120.000",
    imagen: "../ROMESTYLE/Imagenes/CH.JPEG",
    descripcion: "Confort y estilo para tus carreras. Materiales premium."
  },
  {
    nombre: "Tenis Boss",
    precio: "140.000",
    imagen: "../ROMESTYLE/Imagenes/BOSS.JPEG",
    descripcion: "El tenis ideal para dia casual."
  },
  {
    nombre: "Calvin Klain",
    precio: "150.000",
    imagen: "../ROMESTYLE/Imagenes/CK.JPEG",
    descripcion: "Diseño moderno para uso diario, cómodo y versátil."
  },
  {
    nombre: "Tommy",
    precio: "180.000",
    imagen: "../ROMESTYLE/Imagenes/TOMMY.JPEG",
    descripcion: "Optimiza tu rendimiento con tecnología avanzada."
  },
  {
    nombre: "Louis Vuitton",
    precio: "135.000",
    imagen: "../ROMESTYLE/Imagenes/VL.JPEG",
    descripcion: "Estilo urbano con comodidad para el día a día."
  },
  {
    nombre: "luis Vuitton Deportivos",
    precio: "160.000",
    imagen: "../ROMESTYLE/Imagenes/LV2.JPEG",
    descripcion: "Diseño innovador para un rendimiento superior."
  }
];

const track = document.getElementById("productos-container");

// Crear tarjetas
productos.forEach(p => {
  track.innerHTML += `
    <section class="product-card">
      <img src="${p.imagen}" alt="${p.nombre}">
      <h2>${p.nombre}</h2>
      <p class="price">$${p.precio} COP</p>
      <p class="description">${p.descripcion}</p>
      <a class="btn" href="#ordenar">Comprar Ahora</a>
    </section>
  `;
});

// -------- CARRUSEL --------
let index = 0;
const cardWidth = 320; // ancho tarjeta + margen

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", () => {
  index++;
  if (index > productos.length - 1) index = 0;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = productos.length - 1;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});
