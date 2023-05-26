 let tabs = document.getElementsByClassName("tabs")[0];
 let album = document.getElementsByClassName("album")[0];
 let btn = document.getElementsByClassName("btn");
 btn[0].classList.add("active");

let cardObj ={
    naturea: {
        img: 'https://www.w3schools.com/w3images/mountains.jpg',
        title: 'Mountains',
        desc: 'This is A Mountain'
    },
    natureb: {
        img: 'https://www.w3schools.com/w3images/lights.jpg',
        title: 'Lights',
        desc: 'This is Lights'
    },
    naturec: {
        img: 'https://www.w3schools.com/w3images/nature.jpg',
        title: 'Forest',
        desc: 'This is Forest'
    },
    carsa: {
        img: 'https://www.w3schools.com/w3images/cars1.jpg',
        title: 'Retro',
        desc: 'This is Retro'
    },
    carsb: {
        img: 'https://www.w3schools.com/w3images/cars2.jpg',
        title: 'Fast',
        desc: 'This is Fast'
    },
    carsc: {
        img: 'https://www.w3schools.com/w3images/cars3.jpg',
        title: 'Classic',
        desc: 'This is Classic'
    },
    peoplea: {
        img: 'https://www.w3schools.com/w3images/people1.jpg',
        title: 'Girl',
        desc: 'This is A Girl'
    },
    peopleb: {
        img: 'https://www.w3schools.com/w3images/people2.jpg',
        title: 'Man',
        desc: 'This is A Man'
    },
    peoplec: {
        img: 'https://www.w3schools.com/w3images/people3.jpg',
        title: 'Woman',
        desc: 'This is A Woman'
    },
}


 function showCard(img,title,desc){
    let card = document.createElement("div");
    card.setAttribute('class', 'card');
    let imgElem = document.createElement("img");
    let titleElem = document.createElement("h3");
    let descElem = document.createElement("p");

    imgElem.src = img;
    titleElem.innerHTML = title;
    descElem.innerHTML = desc;

    card.append(imgElem, titleElem, descElem);
    return card;
 };
 

 for(let key in cardObj){
    album.append(showCard(cardObj[key].img, cardObj[key].title, cardObj[key].desc))
 };

//  filter Feature
tabs.addEventListener('click', (event)=>{
    let index = 0;
    let targetBtn = event.target.innerHTML.substring(0, 4).toUpperCase();
    
    for(let key in cardObj){
        let category = key.substring(0, 4).toUpperCase();

        if(targetBtn == 'SHOW'){
            album.children[index].style.display = 'block';
            index++;
            console.log("done");
            continue;
        }

        if(targetBtn === category){
            album.children[index].style.display = 'block';
        } else{
            album.children[index].style.display = 'none';
        }
        console.log(targetBtn,index,category);
        index++;
    }

    let currBtn = event.target;
    for(let j=0; j<btn.length; j++){
        if(currBtn.innerHTML==btn[j].innerHTML){
            btn[j].classList.add('active')
            console.log(currBtn,btn[j])
        }else{
            btn[j].classList.remove('active')
        }
    }
});