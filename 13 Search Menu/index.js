let input = document.getElementById("searchBar");
let menu = document.getElementsByClassName("menus");
let notFound = document.getElementById("notFound");
let text = "";
menu[0].childElementCount;

input.addEventListener("keyup", function (event) {
  if (event.key === "Backspace") {
    text = text.slice(0, -1);
  } else {
    text += event.key.toUpperCase();
  }
  let exit = false;
  for (let i = 0; i < menu[0].childElementCount - 1; i++) {
    if (menu[0].children[i].innerHTML.toLocaleUpperCase().indexOf(text) > -1) {
      menu[0].children[i].style.display = "block";
      notFound.innerHTML = "";
      exit = true;
    } else {
      menu[0].children[i].style.display = "none";
    }
  }
  if (!exit) {
    notFound.innerHTML = "Not Found!";
  }
});