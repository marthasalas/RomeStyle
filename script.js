const productos = [
  {
    nombre: "Tenis Carolina Herrera",
    precio: "120.000",
    imagen: "../RomeStyle/Imagenes/CH.JPEG",
    descripcion: "Confort y estilo para tus carreras. Materiales premium."
  },
  {
    nombre: "Tenis Boss",
    precio: "140.000",
    imagen: "../RomeStyle/Imagenes/BOSS.JPEG",
    descripcion: "El tenis ideal para dia casual."
  },
  {
    nombre: "Calvin Klein",
    precio: "150.000",
    imagen: "../RomeStyle/Imagenes/CK.JPEG",
    descripcion: "Diseño moderno para uso diario, cómodo y versátil."
  },
  {
    nombre: "Tommy",
    precio: "180.000",
    imagen: "../RomeStyle/Imagenes/TOMMY.JPEG",
    descripcion: "Optimiza tu rendimiento con tecnología avanzada."
  },
  {
    nombre: "Louis Vuitton",
    precio: "135.000",
    imagen: "../RomeStyle/Imagenes/VL.JPEG",
    descripcion: "Estilo urbano con comodidad para el día a día."
  },
  {
    nombre: "luis Vuitton Deportivos",
    precio: "160.000",
    imagen: "../RomeStyle/Imagenes/LV2.JPEG",
    descripcion: "Diseño innovador para un rendimiento superior."
  },
  {
    nombre: "Adidas",
    precio: "130.000",
    imagen: "../RomeStyle/Imagenes/zapatos1.jpg",
    descripcion: "Comodidad y estilo para cualquier ocasión."
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
