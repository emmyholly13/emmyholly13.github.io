const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
//other methods to use to loop through the array: prophets.forEach(prophet => {})
});
//Elements
const prophets = jsonObject['prophets'];
for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    let birthDate = document.createElement('span');
    let birthPlace = document.createElement('span');
    let image = document.createElement('img');
//h2.innerHTML = '${prophet.name} ${prophet.lastname}';
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    birthDate.textContent = 'Birth Date: ' + prophets[i].birthdate;
    birthPlace.textContent = 'Birth Place: ' + prophets[i].birthplace;
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + prophets[i].order);

    p.appendChild(birthDate);
    p.appendChild(birthPlace);
    p.appendChild(image);



    card.appendChild(h2);
    card.appendChild(p);

    document.querySelector('div.cards').appendChild(card);
    //const utahfilter = prophets.filter(x => prophet.birthplace == "Utah")
    //utahfilter.forEach(utahprophet => {});
}
