let dropbtn = document.getElementsByClassName("dropbtn")[0];
let content = document.getElementsByClassName("dropdown-content")[0];
let up = document.getElementById("up");
let down = document.getElementById("down");
let flag = true;
dropbtn.addEventListener("click", ()=>{
    if(flag){
        content.style.display = 'block';
        down.style.display = 'none';
        up.style.display = 'block';
        flag = !flag;
    } else{
        content.style.display = 'none';
        down.style.display = 'block';
        up.style.display = 'none';
        flag = !flag;
    }
})