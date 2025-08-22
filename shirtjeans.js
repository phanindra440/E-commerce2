let cart = [];
let cartCount = 0;
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  cartCount++;
  total += price;

  document.getElementById("cart-count").innerText = cartCount;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").innerText = total;
}

// Modal controls
document.getElementById("cart-btn").onclick = function () {
  document.getElementById("cart-modal").style.display = "block";
};

document.getElementById("close-cart").onclick = function () {
  document.getElementById("cart-modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("cart-modal")) {
    document.getElementById("cart-modal").style.display = "none";
  }
};
