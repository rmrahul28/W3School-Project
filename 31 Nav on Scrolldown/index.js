let navbar = document.getElementById("nav");

window.onscroll = function (){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navbar.style.top = '0';
    } else{
        navbar.style.top = '-50px';
    }
}