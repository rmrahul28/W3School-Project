let icon = document.getElementById("icon");
let menus = document.getElementsByClassName("menus");

let flag = true;
icon.addEventListener("click", function () {
  for (let i = 1; i < menus[0].childElementCount; i++) {
    if (flag) {
      menus[0].children[i].style.display = "block";
      menus[0].style.width = "100%";
    } else {
      menus[0].children[i].style.display = "none";
      menus[0].style.width = "auto";
    }
  }
  flag = !flag;
});