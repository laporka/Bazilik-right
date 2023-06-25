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

// function show() {
//   var x = document.getElementById("mainFrameTwo");
//   if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";
//   } else {
//     x.style.visibility = "hidden";
//   }
// }

// function show() { 
// 	document.getElementById("mainFrameOne").style.visibility="hidden"; 
// 	document.getElementById("mainFrameTwo").style.visibility="visible"; 
// }

// function show(){
//   if(document.getElementById(mainFrameTwo).style.display == 'none')
//     document.getElementById(mainFrameTwo).style.display = 'block';
//   else
//     document.getElementById(mainFrameTwo).style.display = 'none';
// }