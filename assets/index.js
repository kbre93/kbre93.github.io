var slideIndex = 1;
var str1 = "kbre93";
var str2 = "@";
var str3 = "gma";
var str4 = "il.com";
var str5 = str1 + str2 + str3 + str4;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gallery-image");
  var dots = document.getElementsByClassName("gallery-indicator");
  if (x.length > 0) {
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].style.background = "transparent";
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].style.background = "white";
  }
}

function dropDownMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready( function() {
  showDivs(slideIndex);

  if (document.getElementById('contact-email') != null) {
    document.getElementById("contact-email").innerHTML = "<a href=" + "mail" + "to:" + str1 + str2 + str3 + str4 + " class='link'>" + str5 + "</a>"
  }
  document.getElementById("email-img").href="mail" + "to:" + str1 + str2 + str3 + str4; 
});