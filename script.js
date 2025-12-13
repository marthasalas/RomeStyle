const productos = [
  {
    nombre: "Tenis Running X",
    precio: "150.000",
    imagen: "../RomeStyle/Imagenes/zapatos 1.jpg",
    descripcion: "Confort y estilo para tus carreras. Materiales premium."
  },
  {
    nombre: "Tenis Sport 5000",
    precio: "150.000",
    imagen: "../RomeStyle/Imagenes/tenis2.jpg",
    descripcion: "El tenis ideal para entrenamientos con alto desempeño."
  },
  {
    nombre: "Tenis Urban Style",
    precio: "150.000",
    imagen: "../RomeStyle/Imagenes/tenis3.jpg",
    descripcion: "Diseño moderno para uso diario, cómodo y versátil."
  },
  {
    nombre: "Tenis Performance",
    precio: "150.000",
    imagen: "../RomeStyle/Imagenes/tenis4.jpg",
    descripcion: "Optimiza tu rendimiento con tecnología avanzada."
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
