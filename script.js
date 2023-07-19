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

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4500);    
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


// ДЛЯ СПЕНА
// function totalClick(click){
//   const totalClicks = document.getElementById('totalClicks');
//   const sumvalue = parseInt(totalClicks.innerHTML) + click;
//   totalClicks.innerHTML = sumvalue;
// }

// FIRST CARD
function increment() {
  document.getElementById('totalClicks').stepUp();
  var getKilkist1 = document.getElementById('totalClicks').value;
  document.getElementById('firstKilkist').innerHTML = getKilkist1;


  // let test = document.getElementById('firstoutputSuma').innerHTML + document.getElementById('firstoutputSuma').innerHTML;
  // document.getElementById('firstoutputSuma').innerHTML = test 
  // console.log(test);

}

function decrement() {
  document.getElementById('totalClicks').stepDown();
  var getKilkist1 = document.getElementById('totalClicks').value;
  document.getElementById('firstKilkist').innerHTML = getKilkist1;
}


// SECOND CARD
function incrementSecond() {
  document.getElementById('totalClicks2').stepUp();
  var getKilkist1 = document.getElementById('totalClicks2').value;
  document.getElementById('secondKilkist').innerHTML = getKilkist1;
}

function decrementSecond() {
  document.getElementById('totalClicks2').stepDown();
  var getKilkist1 = document.getElementById('totalClicks2').value;
  document.getElementById('secondKilkist').innerHTML = getKilkist1;
}


// Third CARD
function incrementThird() {
  document.getElementById('totalClicks3').stepUp();
  var getKilkist1 = document.getElementById('totalClicks3').value;
  document.getElementById('thirdKilkist').innerHTML = getKilkist1;
}

function decrementThird() {
  document.getElementById('totalClicks3').stepDown();
  var getKilkist1 = document.getElementById('totalClicks3').value;
  document.getElementById('thirdKilkist').innerHTML = getKilkist1;
}


// Fourth CARD
function incrementFourth() {
  document.getElementById('totalClicks4').stepUp();
  var getKilkist1 = document.getElementById('totalClicks4').value;
  document.getElementById('fourthKilkist').innerHTML = getKilkist1;
}

function decrementFourth() {
  document.getElementById('totalClicks4').stepDown();
  var getKilkist1 = document.getElementById('totalClicks4').value;
  document.getElementById('fourthKilkist').innerHTML = getKilkist1;
}


// Fourth CARD
function incrementFive() {
  document.getElementById('totalClicks5').stepUp();
  var getKilkist1 = document.getElementById('totalClicks5').value;
  document.getElementById('fiveKilkist').innerHTML = getKilkist1;
}

function decrementFive() {
  document.getElementById('totalClicks5').stepDown();
  var getKilkist1 = document.getElementById('totalClicks5').value;
  document.getElementById('fiveKilkist').innerHTML = getKilkist1;
}



AOS.init();




