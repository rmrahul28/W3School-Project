let imgArr = [
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_lights_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg'
  ];

let img = document.getElementById('img');
let rightArr = document.getElementById('right');
let leftArr = document.getElementById('left');
let imgNum = document.getElementById('imgNum');
let btns = document.getElementsByClassName('btns'); // arr

let num =0;
img.src = imgArr[num];
imgNum.innerHTML = (num+1) + '/4';
btns[0].children[num].style.backgroundColor = 'grey';

rightArr.addEventListener("click", ()=> {
    if(num==3) {
        num = 0;
    } else{
        num++;
    }
    img.src = imgArr[num];
    imgNum.innerHTML = (num+1) + "/4";

    for(let i=0; i<btns[0].childElementCount; i++) {
        if(i == num) {
          btns[0].children[i].style.backgroundColor = 'grey';
        } else {
          btns[0].children[i].style.backgroundColor = 'transparent';
        }
      }
    });

    leftArr.addEventListener('click', ()=> {
        if(num == 0) {
          num = 3;
        } else {
          num--;
        }
        img.src = imgArr[num];
        imgNum.innerHTML = (num+1) + '/4';
      
        for(let i=0; i<btns[0].childElementCount; i++) {
          if(i == num) {
            btns[0].children[i].style.backgroundColor = 'grey';
          } else {
            btns[0].children[i].style.backgroundColor = 'transparent';
          }
        }
      });

      let btnChildren = btns[0].children;

btns[0].addEventListener('click', (event)=> {
  let currTarget = event.target;
  for(let i=0; i<btns[0].childElementCount; i++) {
    if(btns[0].children[i] == currTarget) {
      num = i;
      img.src = imgArr[num];
      imgNum.innerHTML = (num+1) + '/4';
      
      for(let i=0; i<btns[0].childElementCount; i++) {
        if(i == num) {
          btns[0].children[i].style.backgroundColor = 'grey';
        } else {
          btns[0].children[i].style.backgroundColor = 'transparent';
        }
      }
    }
  }
});