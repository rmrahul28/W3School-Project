
let icon = document.getElementById("icon");

icon.addEventListener("click", myFunction)
    function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
      };