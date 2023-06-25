var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
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
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

// document.getElementById('min').addEventListener('input', () =>{
//   let getmin = document.getElementById('min').value;
//   document.getElementById('getMin').innerHTML = getmin;
// });

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