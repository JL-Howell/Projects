const baseURL = 'https://ghibliapi.herokuapp.com/films';

const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');

// to wrap the logo inside the top container
app.appendChild(logo);
app.appendChild(container);

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
  data.forEach((movie) => {
    const card = document.createElement('div')
    const header = document.createElement('h1')
    const para = document.createElement('p')   
    card.setAttribute('class', 'card') 

    header.textContent = movie.title;
    // movie.description = movie.description.substring(0, 250);
    para.textContent = `${movie.description}`
    
    
    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(para)
    // 
  });
}

