let main = document.getElementById("main");
let flag = true;
main.addEventListener("click", function () {
  if (flag) {
    main.style.height = "auto";
    flag = !flag;
    console.log(flag);
  } else {
    main.style.height = "38px";
    flag = !flag;
    console.log(flag);
  }
});