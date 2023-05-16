let tab = document.getElementsByClassName("tab");
let tablink = document.getElementsByClassName("tablink");
let tabContent = document.getElementsByClassName("tabContent");
// tablink[0].style.backgroundColor = '#ccc'
tabContent[0].style.display = "block";
tablink[0].style.backgroundColor = "#f44336";
tablink[0].style.color = "white";
let colors = ["#f44336", "#04aa6d", "#2196f3", "#ff5722"];

tab[0].addEventListener("click", function (event) {
  console.log(event.target.innerHTML);

  let tabName = event.target;
  for (let j = 0; j < tabContent.length; j++) {
    let tabContentName = tabContent[j].children[0].innerHTML;
    if (tabName.innerHTML === tabContentName) {
      tabContent[j].style.display = "block";
      tabName.style.backgroundColor = colors[j];
      tabName.style.color = "white";
    } else {
      tabContent[j].style.display = "none";
      tablink[j].style.backgroundColor = "#fff";
      tablink[j].style.color = "black";
    }
  }
  // console.log(tabName, tabContentName);
});