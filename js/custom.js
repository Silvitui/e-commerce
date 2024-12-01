const updateCartCounter = () => {
    const counter = document.getElementById("count_product");
    const totalProducts = cart.reduce((total, product) => total + product.quantity, 0);
    counter.textContent = totalProducts;
  }
  