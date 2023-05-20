let share = document.getElementById("share");
let insta = document.getElementById("insta");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");
let snap = document.getElementById("snap");
let close = document.getElementById("close");

share.addEventListener("click", ()=>{
    close.style.zIndex = '1';
    insta.style.transform = "translate(-70px,0)"
    facebook.style.transform = "translate(70px,0)"
    snap.style.transform = "translate(0, -70px)"
    twitter.style.transform = "translate(0, 70px)"
})
close.addEventListener("click", ()=>{
    close.style.zIndex = '0';
    insta.style.transform = "translate(0)"
    facebook.style.transform = "translate(0)"
    snap.style.transform = "translate(0)"
    twitter.style.transform = "translate(0)"
})