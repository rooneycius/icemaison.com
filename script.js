document.addEventListener("DOMContentLoaded", () => {
  const watches = [
    {
      name: "Diamond Rolex Watch",
      image: "https://cdn.shopify.com/s/files/1/0022/0962/products/rolex.jpg",
      price: 11000 * 1.1
    },
    {
      name: "Gold AP Watch",
      image: "https://cdn.shopify.com/s/files/1/0022/0962/products/apwatch.jpg",
      price: 22000 * 1.1
    }
  ];

  const rings = [
    {
      name: "Iced Out Ring",
      image: "https://cdn.shopify.com/s/files/1/0022/0962/products/icyring.jpg",
      price: 2500 * 1.1
    },
    {
      name: "Gold Lion Ring",
      image: "https://cdn.shopify.com/s/files/1/0022/0962/products/lionring.jpg",
      price: 4000 * 1.1
    }
  ];

  function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button>Buy Now</button>
      `;
      container.appendChild(div);
    });
  }

  renderProducts(watches, "watches-grid");
  renderProducts(rings, "rings-grid");
});
