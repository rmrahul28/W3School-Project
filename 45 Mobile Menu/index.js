let icon = document.getElementsByClassName("icon")[0];
let links = document.getElementById("myLinks");
icon.addEventListener("click", ()=>{
    console.log('cheak');
    if(links.style.display === 'block'){
        console.log('cheak2');
        links.style.display = 'none';
    } else{
        links.style.display = 'block';
    }
})