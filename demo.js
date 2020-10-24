const baseURL = 'https://ghibliapi.herokuapp.com/species';

// const app = document.getElementById('root');
// const logo = document.createElement('img');

// const container = document.createElement('div');
// container.setAttribute('class', 'container');
const section = document.querySelector('section');

// app.appendChild(logo);
// app.appendChild(container);

fetch(baseURL)
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    displayResults(data);
  })

function displayResults(data) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
    // endpoint aka start of the array
  let species = data;
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement('div')
    let current = data[4].people;
    card.textContent = current.people;
    section.appendChild(card);






    // card.setAttribute('class', 'card')
  
    // const header = document.createElement('h1')
    // header.textContent = cats.name;
  
    // const para = document.createElement('p')
    // para.textContent = `${cats.films}`
  
    // container.appendChild(card)
    // card.appendChild(header)
    // card.appendChild(para)
    }

      
}

