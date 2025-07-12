
document.addEventListener("DOMContentLoaded", function () {
  const wilaya = document.getElementById("wilaya");
  for (let i = 1; i <= 58; i++) {
    const option = document.createElement("option");
    option.value = option.textContent = "Wilaya " + i;
    wilaya.appendChild(option);
  }

  const form = document.getElementById("orderForm");
  form.addEventListener("submit", function () {
    setTimeout(() => {
      document.getElementById("confirmation").style.display = "block";
    }, 800);
  });

  window.filterCategory = function(category) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const match = category === "all" || card.dataset.category === category;
      card.style.display = match ? "block" : "none";
    });
  };

  window.toggleLang = function() {
    alert("سيتم دعم اللغة العربية قريبًا 🌙");
  };
});

const cartItems = document.getElementById("cartItems");
const emptyCartMsg = document.getElementById("emptyCart");

document.querySelectorAll(".add-to-cart").forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const productName = btn.parentElement.querySelector("h3").innerText;
    const li = document.createElement("li");
    li.textContent = productName + " (1x)";
    cartItems.appendChild(li);
    emptyCartMsg.style.display = "none";
  });
});
