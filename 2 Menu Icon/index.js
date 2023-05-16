
let _2nd = document.getElementById("_2nd");
_2nd.addEventListener("click", inClick);
let bar1 = document.getElementById('first2');
let bar2 = document.getElementById('second2');
let bar3 = document.getElementById('third2');

let flag = true;
function inClick() {
  if(flag){
    bar1.style.transform = "rotate(-45deg)";
    bar1.style.marginTop = "40px";
    bar3.style.transform = "rotate(45deg)";
    bar3.style.marginTop = "-35px";
    bar2.style.display = "none";
    flag = !flag;
  } else{
    bar1.style.transform = "rotate(0deg)";
    bar1.style.marginTop = "0px";
    bar3.style.transform = "rotate(0deg)";
    bar3.style.marginTop = "0px";
    bar2.style.display = "block";
    flag = !flag;
  }
 
  // console.log('cheak');
}