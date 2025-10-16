let contenedorProductos = document.querySelector(".products .box-container");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    let filtrados = data.filter(item =>
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );

    let primerosQuince = filtrados.slice(0, 15);

    contenedorProductos.innerHTML = "";

    for (let producto of primerosQuince) {
      let descuento = Math.floor(Math.random() * 30);

      contenedorProductos.innerHTML += `
        <div class="box">
          <span class="discount">-${descuento}%</span>
          <div class="image">
            <img src="${producto.image}" alt="${producto.title}">
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="cart-btn">add to cart</a>
              <a href="#" class="fas fa-share"></a>
            </div>
          </div>
          <div class="content">
            <h3>${producto.title}</h3>
            <div class="price">$${producto.price}</div>
          </div>
        </div>
      `;
    }
  })


  let reviewsContainer = document.querySelector("#reviews-container");
fetch("https://randomuser.me/api/?results=6&gender=female&nat=us,es,fr,gb,br,mx")
  .then(res => res.json())
  .then(data => {
    let users = data.results;

    reviewsContainer.innerHTML = "";
      users.forEach(user => {
      let box = document.createElement("div");
      box.classList.add("box");

      let rating = Math.floor(Math.random() * 2) + 4;
      let starsHTML = "";
      for (let i = 0; i < 5; i++) {
        starsHTML += `<i class="fas fa-star${i < rating ? '' : '-half-alt'}"></i>`;
      }

      let reviews = [
        "Me encantó el producto, llegó rapidísimo y con un empaque hermoso 💕",
        "Excelente calidad, superó mis expectativas. Lo recomiendo totalmente.",
        "Todo perfecto, atención muy amable y productos hermosos.",
        "Muy satisfecha con mi compra, sin dudas volveré a comprar.",
        "Hermoso todo, el color y la textura son tal cual las fotos.",
        "Estoy encantada, llegó antes de lo esperado y en perfecto estado."
      ];

      let randomReview = reviews[Math.floor(Math.random() * reviews.length)];
      
      box.innerHTML = `
        <div class="stars">${starsHTML}</div>
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

      reviewsContainer.appendChild(box);  //?
    });
  })