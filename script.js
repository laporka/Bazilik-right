var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}




function minG() {
  var rng=document.getElementById('min'); //range input min
  var i1=document.getElementById('getMin'); // input min
  i1.value=rng.value;
}

function maxG() {
  var rng1=document.getElementById('max'); //range input max
  var mini1=document.getElementById('getMax'); //input max
  mini1.value=rng1.value;
}

// Popup
function popupIn() {
  document.getElementById('popup').style.visibility="visible";
  document.getElementById('popup-up').style.visibility="hidden";
}
function popupUp() {
  document.getElementById('popup-up').style.visibility="visible";
  document.getElementById('popup').style.visibility="hidden";
}

function hidepopupIn() {
  document.getElementById('popup').style.visibility="hidden";
}
function hidepopupUp() {
  document.getElementById('popup-up').style.visibility="hidden";
}




function popupCart() {
  document.getElementById('popup-cart').style.visibility="visible";
}

function hidepopupCart() {
  document.getElementById('popup-cart').style.visibility="hidden";
}


function greatingsPopup() {
  document.getElementById('greatings').style.visibility="visible";
}

// ДЛЯ СПЕНА
// function totalClick(click){
//   const totalClicks = document.getElementById('totalClicks');
//   const sumvalue = parseInt(totalClicks.innerHTML) + click;
//   totalClicks.innerHTML = sumvalue;
// }


AOS.init();




