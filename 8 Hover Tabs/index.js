let tab = document.getElementsByClassName('tab');
let tablink = document.getElementsByClassName('tablink');
let tabContent = document.getElementsByClassName('tabContent')
// tablink[0].style.backgroundColor = '#ccc'
tabContent[0].style.display = 'block';

tab[0].addEventListener('mouseover', function(event) {
  console.log(event.target.innerHTML)

  let tabName = event.target.innerHTML;
  for(let j=0; j<tabContent.length; j++) {
    let tabContentName = tabContent[j].children[0].innerHTML;
    if(tabName === tabContentName) {
      tabContent[j].style.display = 'block'
    } else {
      tabContent[j].style.display = 'none'
    }
  }
  // console.log(tabName, tabContentName);
});