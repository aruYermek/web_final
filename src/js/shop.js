const cartAmount = document.querySelector(".cartAmount");
const plusButtons = document.querySelectorAll(".bi-plus-lg");
const minusButtons = document.querySelectorAll(".bi-dash-lg");
const quantityElements = document.querySelectorAll(".quantity");

let totalItems = 0;

//sound
function playSound() {
  const audio = new Audio('sound/cashier-quotka-chingquot-sound-effect-129698.mp3');
  audio.play();
}

//update the cart amount
const updateCartAmount = () => {
  totalItems = 0;
  quantityElements.forEach((quantityElement) => {
    totalItems += parseInt(quantityElement.innerText);
  });
  cartAmount.innerText = totalItems;
};

//plus buttons
plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityElements[index].innerText);
    quantityElements[index].innerText = (currentQuantity + 1).toString();
    updateCartAmount();
    playSound();
  });
});

//minus buttons
minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityElements[index].innerText);
    if (currentQuantity > 0) {
      quantityElements[index].innerText = (currentQuantity - 1).toString();
      updateCartAmount();
      playSound();
    }
  });
});

//cart icon
const cartIcon = document.querySelector(".cart .bi-cart2");
cartIcon.addEventListener("click", () => {
  updateCartAmount();
});

