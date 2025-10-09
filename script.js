// Seleccionamos el contenedor donde van los productos
const productContainer = document.querySelector('.products .box-container');

// URL de la API
const apiURL = 'https://fakestoreapi.com/products';

// Pedimos los productos a la API
fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    // Filtramos solo ropa de mujer y accesorios
    const filtered = data.filter(item =>
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );

    // Tomamos solo los primeros 10 productos
    const firstTen = filtered.slice(0, 10);

    // Limpiamos el contenedor
    productContainer.innerHTML = '';

    // Creamos las tarjetas de producto
    firstTen.forEach(product => {
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
