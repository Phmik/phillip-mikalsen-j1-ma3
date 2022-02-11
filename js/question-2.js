// QUESTION 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=637d20fb82ae440f932a1c6ac2d0ee75"

async function getGames() {
    const response = await fetch(url)
    console.log(response);

    const results = response.json()
    console.log(results);

    const games = results.all;
    console.log(games);
}

getGames();

/* const resultsContainer = document.querySelector(".gameResults");

const spinner = document.querySelector(".loader");

function createHTML(results) {
    const games = results.all;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < games.length; i++) {
        
        if(i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">
    <ul>
        <li>${games[i].name}</li>
        <li>${games[i].rating}</li>
        <li>${games[i].tags}</li>
    </ul>
    </div>`;
    }

    
}

async function getGames() {
    
    try {
        const response = await fetch(url);

        const data = await response.json();
        
        const games = data.all;

        createHTML(games);
        
    } catch(error) {
        console.log(error);
    }
}

getGames(); */

