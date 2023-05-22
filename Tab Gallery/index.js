let tabs = document.getElementsByClassName("tabs")[0];
let bigimg = document.getElementsByClassName("bigimg")[0];
let mainimg = document.getElementById("mainimg");
let icon = document.getElementById("icon");
let span = document.getElementById("span");


tabs.addEventListener('click', (event)=>{
    bigimg.style.display = 'block';
    let imgURL = event.target.src;
    mainimg.src = imgURL;
    span.innerHTML = event.target.alt;
})
icon.addEventListener('click', ()=>{
    bigimg.style.display = 'none';
    let imgURL = event.target.src;
    mainimg.src = imgURL;
})