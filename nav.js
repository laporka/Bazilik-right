const items = document.querySelectorAll(".nav-bar li");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector("li.active").classList.remove("active");
        item.classList.add("active");
      });
    });


// COLORS
const colors = document.querySelectorAll(".choose-color li");
colors.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active-color").classList.remove("active-color");
    item.classList.add("active-color");
  });
});


let quantity = 1;   // Змінна для збереження кількості товару (початкове значення 1)

function increaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updateTotalPrice(index);
}

function decreaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateTotalPrice(index);
    }
}






var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slide-number");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("inside-radio", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " inside-radio";
}

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slide-number");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("inside-radio", "");
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " inside-radio";
  setTimeout(carousel, 6000); // Change image every 2 seconds
}




function goBack() {
    sessionStorage.setItem('previousPage', window.location.href);
    history.back();
}

document.addEventListener('DOMContentLoaded', function () {
    const previousPage = sessionStorage.getItem('previousPage');

    if (previousPage && previousPage !== window.location.href) {
        sessionStorage.removeItem('previousPage');

        window.location.href = previousPage;
    }
});











