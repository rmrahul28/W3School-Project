let open = document.getElementById("open");
let close = document.getElementById("closebtn")
open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }