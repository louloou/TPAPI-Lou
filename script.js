// ---------- PRODUCTOS ----------
const productContainer = document.querySelector('.products .box-container');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    const filtered = data.filter(item =>
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );

    const primerosQuince = filtered.slice(0, 15);

    productContainer.innerHTML = '';

    primerosQuince.forEach(product => {
      const box = document.createElement('div');
      box.classList.add('box');

      box.innerHTML = `
        <span class="discount">-${Math.floor(Math.random() * 30)}%</span>
        <div class="image">
          <img src="${product.image}" alt="${product.title}">
          <div class="icons">
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="cart-btn">add to cart</a>
            <a href="#" class="fas fa-share"></a>
          </div>
        </div>
        <div class="content">
          <h3>${product.title}</h3>
          <div class="price">$${product.price}</div>
        </div>
      `;

      productContainer.appendChild(box);
    });
  })
  .catch(error => console.error('Error al cargar productos:', error));


async function loadReviews() {
  const container = document.getElementById('reviews-container');

  try {
    // Pedimos 6 usuarias mujeres de distintas nacionalidades
    const response = await fetch('https://randomuser.me/api/?results=6&gender=female&nat=us,es,fr,gb,br,mx');
    const data = await response.json();
    const users = data.results;

    container.innerHTML = '';

    users.forEach(user => {
      const box = document.createElement('div');
      box.classList.add('box');

      // Generamos entre 4 y 5 estrellas aleatorias
      const rating = Math.floor(Math.random() * 2) + 4;
      let starsHTML = '';
      for (let i = 0; i < 5; i++) {
        starsHTML += `<i class="fas fa-star${i < rating ? '' : '-half-alt'}"></i>`;
      }

      // Reseñas cortas y naturales escritas como si fueran clientas reales
      const reviews = [
        "Me encantó el producto, llegó rapidísimo y con un empaque hermoso 💕",
        "Excelente calidad, superó mis expectativas. Lo recomiendo totalmente.",
        "Todo perfecto, atención muy amable y productos hermosos.",
        "Muy satisfecha con mi compra, sin dudas volveré a comprar.",
        "Hermoso todo, el color y la textura son tal cual las fotos.",
        "Estoy encantada, llegó antes de lo esperado y en perfecto estado."
      ];

      const randomReview = reviews[Math.floor(Math.random() * reviews.length)];

      box.innerHTML = `
        <div class="starts">${starsHTML}</div>
        <p>${randomReview}</p>
        <div class="user">
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="user-info">
            <h3>${user.name.first} ${user.name.last}</h3>
            <span>${user.location.country}</span>
          </div>
        </div>
        <span class="fas fa-quote-right"></span>
      `;

      container.appendChild(box);
    });

  } catch (error) {
    console.error('Error cargando las reviews:', error);
    container.innerHTML = '<p>No se pudieron cargar las opiniones 😢</p>';
  }
}

// Cargar reseñas al iniciar
document.addEventListener('DOMContentLoaded', loadReviews);