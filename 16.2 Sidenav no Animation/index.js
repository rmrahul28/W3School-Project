let sidenav = document.getElementById("mySidenav");
let open = document.getElementById("open");
let close = document.getElementById("closebtn");
open.addEventListener("click", function(){
    sidenav.style.display = "block";
});
close.addEventListener("click", function(){
    sidenav.style.display = "none";
});