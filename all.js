// CARD NUMBER
const inputElement = document.getElementById('card-number');

inputElement.addEventListener('input', formatCardNumber);

function formatCardNumber() {
let value = inputElement.value.replace(/\s/g, '');
let formattedValue = '';
const maxLength = 16;

value = value.replace(/\D/g, '').substring(0, maxLength);

for (let i = 0; i < value.length; i += 4) {
    formattedValue += value.substr(i, 4) + '  ';
}

inputElement.value = formattedValue.trim();
}



function updateQuantity(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    const quantity = parseInt(quantityInput.value);
    
    document.getElementById(`Kilkist${index}`).innerHTML = quantity;
}
function updateTotalPrice(index) {
    const priceElement = document.getElementById(`price${index}`);
    const quantityInput = document.getElementById(`quantity${index}`);
    const totalPriceElement = document.getElementById(`total-price${index}`);
  
    let price = parseInt(priceElement.innerText);
    let quantity = parseInt(quantityInput.value);
    let totalPrice = price * quantity;
    totalPriceElement.innerText = totalPrice.toFixed() + ' ₴';
  }
  
  function increaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updateTotalPrice(index);
    updateQuantity(index);
  }
  
  function increaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updateTotalPrice(index);
    updateQuantity(index); // Оновлюємо відображення кількості товару
}

function decreaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateTotalPrice(index);
        updateQuantity(index); // Оновлюємо відображення кількості товару
    }
}