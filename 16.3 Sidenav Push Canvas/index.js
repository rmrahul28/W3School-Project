let sidenav = document.getElementById("mySidenav");
let open = document.getElementById("open");
let close = document.getElementById("closebtn");
let main = document.getElementById("main");

open.addEventListener("click", function(){
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
});
close.addEventListener("click", function(){
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
});