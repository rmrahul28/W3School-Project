let sidenav = document.getElementById("mySidenav");
let open = document.getElementById("open");
let close = document.getElementById("closebtn");
open.addEventListener("click", function(){
    sidenav.style.width = "250px";
});
close.addEventListener("click", function(){
    sidenav.style.width = "0px";
});