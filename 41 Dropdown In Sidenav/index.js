let dropdown = document.getElementsByClassName("dropbtn");
let up = document.getElementById("up");
let down = document.getElementById("down");
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        down.style.display = "block";
        up.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
        down.style.display = "none";
        up.style.display = "block";
      }
    });
  }
