// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }

// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 4000); // Change image every 2 seconds
// }


function show() { 
	document.getElementById("mainFrameOne").style.display="none"; 
	document.getElementById("mainFrameTwo").style.display="block"; 
}
function showBack() { 
	document.getElementById("mainFrameOne").style.display="block"; 
	document.getElementById("mainFrameTwo").style.display="none"; 
}

function confirmm() {
  document.getElementById("mainFrameOne").style.display="block"; 
  document.getElementById("mainFrameTwo").style.display="none"; 

  // SECONDNAME
  var getSecond = document.getElementById('getSecondName').value;
  document.getElementById('secondName').innerHTML = getSecond;

  // MALEFEMALE
  var getMalefemale = document.getElementById('getMaleFemale').value;
  document.getElementById('MaleFemale').innerHTML = getMalefemale;

  // NAME
  var getIname = document.getElementById('getName').value;
  document.getElementById('Name').innerHTML = getIname;

  // FATHERNAME
  var getFathername = document.getElementById('getFatherName').value;
  document.getElementById('FatherName').innerHTML = getFathername;

  // DATE
  var getdate = document.getElementById('getBirthsday').value;
  document.getElementById('Date').innerHTML = getdate;

  // LANGUAGE
  var getlanguage = document.getElementById('getLanguage').value;
  document.getElementById('Language').innerHTML = getlanguage;
}

function EmailConfirm() {
  document.getElementById('LoginPopupConfirm').style.visibility="visible";
}
function hideConfirmPopup() {
  document.getElementById('LoginPopupConfirm').style.visibility="hidden";
}


// function Enable() {
//   let btnEnable = document.getElementById('btnConfirm-personal');

//   btnEnable.removeAttribute('disabled');
// }


AOS.init();
