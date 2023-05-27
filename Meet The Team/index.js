let container = document.getElementsByClassName("container")[0];

function createCard(imgSrc,nameUser,desigUser,descUser,emailUser){
    let card = document.createElement('div');
    let img = document.createElement('img');
    let text = document.createElement('div');
    let name = document.createElement('h2');
    let desig = document.createElement('h3');
    let desc = document.createElement('p');
    let email = document.createElement('p');
    let button = document.createElement('button');

    card.classList.add('card');
    text.classList.add('text');

    img.src = imgSrc;
    img.alt = "This is An Image";

    card.append(img);

    name.innerHTML = nameUser;
    desig.innerHTML = desigUser;
    desc.innerHTML = descUser;
    email.innerHTML = emailUser;
    button.innerHTML = "Contact";

    text.append(name);
    text.append(desig);
    text.append(desc);
    text.append(email);
    text.append(button);
 
    card.append(text);
    console.log(card);
    return card;

}

container.append(createCard('https://www.w3schools.com/w3images/team1.jpg', 'Anita', 'this is desig', 'this is desc', 'this is email'));
container.append(createCard('https://www.w3schools.com/w3images/team1.jpg', 'kumkum', 'this is desig', 'this is desc', 'this is email'));
container.append(createCard('https://www.w3schools.com/w3images/team1.jpg', 'Payal', 'this is desig', 'this is desc', 'this is email'));
container.append(createCard('https://www.w3schools.com/w3images/team1.jpg', 'Sabita', 'this is desig', 'this is desc', 'this is email'));