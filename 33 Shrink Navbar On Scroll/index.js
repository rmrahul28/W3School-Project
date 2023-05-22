let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    navbar.style.padding = '30px 10px';
    logo.style.fontSize = '25px';
  } else{
    navbar.style.padding = '80px 10px';
    logo.style.fontSize = '35px';
  }
}