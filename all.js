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



function detectCardType() {
  const cardNumberInput = document.getElementById('card-number');
  const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Видаляємо пробіли з номера картки
  const cardIconContainer = document.getElementById('card-icon-container');

  let cardType = 'Unknown';
  if (cardNumber.length >= 1) {
    const firstTwoDigits = cardNumber.substr(0, 2);
    if (firstTwoDigits === '40' || firstTwoDigits === '41' || firstTwoDigits === '42' || firstTwoDigits === '43' || firstTwoDigits === '44' || firstTwoDigits === '45') {
      cardType = 'Visa';
    } else if (firstTwoDigits === '51' || firstTwoDigits === '52' || firstTwoDigits === '53' || firstTwoDigits === '54' || firstTwoDigits === '55') {
      cardType = 'MasterCard';
    }
  }

  while (cardIconContainer.firstChild) {
    cardIconContainer.removeChild(cardIconContainer.firstChild);
  }

  if (cardType === 'Visa') {
    const visaIcon = document.createElement('img');
    visaIcon.src = './img/visa.svg';
    visaIcon.alt = 'Visa';
    cardIconContainer.appendChild(visaIcon);
  } else if (cardType === 'MasterCard') {
    const mastercardIcon = document.createElement('img');
    mastercardIcon.src = './img/mastercard.svg';
    cardIconContainer.appendChild(mastercardIcon);
  }
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


const radioInput = document.getElementById('zarazoplata');
const divElement = document.querySelector('.oplata-zaraz');
const contentElement = document.querySelector('.container-oplata');

// Функція для встановлення стилів діва та контенту при зміні стану радіо-кнопки
function setDivStyles() {
  if (radioInput.checked) {
    divElement.style.border = '1px solid #CBC9C4';
    divElement.style.padding = '16px';
    contentElement.style.display = 'block';
  } else {
    divElement.style.border = 'none';
    divElement.style.padding = '0';
    contentElement.style.display = 'none';
  }
}

setDivStyles();

// Додаємо обробник події change до радіо-кнопки
radioInput.addEventListener('change', setDivStyles);




const radioInputukr = document.getElementById('ukrpost');
const divElementukr = document.querySelector('.container-Ukrpost');
const contentElementukr = document.querySelector('.Ukrpost-content');

// Функція для встановлення стилів діва та контенту при зміні стану радіо-кнопки
function setDivStylesukr() {
  if (radioInputukr.checked) {
    divElementukr.style.border = '1px solid #CBC9C4';
    divElementukr.style.padding = '16px';
    contentElementukr.style.display = 'block';
  } else {
    divElementukr.style.border = 'none';
    divElementukr.style.padding = '0';
    contentElementukr.style.display = 'none';
  }
}

setDivStylesukr();

// Додаємо обробник події change до радіо-кнопки
radioInputukr.addEventListener('change', setDivStylesukr);


// NOVAPOST
const radioInputnova = document.getElementById('newpost');
const divElementnova = document.querySelector('.container-Newpost');
const contentElementnova = document.querySelector('.Newpost-content');

// Функція для встановлення стилів діва та контенту при зміні стану радіо-кнопки
function setDivStylesnova() {
  if (radioInputnova.checked) {
    divElementnova.style.border = '1px solid #CBC9C4';
    divElementnova.style.padding = '16px';
    contentElementnova.style.display = 'block';
  } else {
    divElementnova.style.border = 'none';
    divElementnova.style.padding = '0';
    contentElementnova.style.display = 'none';
  }
}

setDivStylesnova();

// Додаємо обробник події change до радіо-кнопки
radioInputnova.addEventListener('change', setDivStylesnova);




function moveToNextInput(event, nextInputId) {
  const currentInput = event.target;
  const nextInput = document.getElementById(nextInputId);
  if (nextInput && nextInput.tagName === 'INPUT') {
      if (currentInput.value.length >= currentInput.maxLength) {
          nextInput.focus();
      }
  }
}