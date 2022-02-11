// QUESTION 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=637d20fb82ae440f932a1c6ac2d0ee75"

const resultsContainer = document.querySelector(".gameResults")
const spinner = document.querySelector(".loader")
async function getGames() {
        
    try {
        const response = await fetch(url);
       
        const results = await response.json();
       
        const gamesResult = results.results;
        resultsContainer.innerHTML = "";

        for(let i = 0; i < gamesResult.length; i++) {
            console.log(gamesResult[i].name)
            
            if(i === 8) {
                break;
            }
        
            resultsContainer.innerHTML += `
            <div class="result">
            <ul>
                <li>Name: ${gamesResult[i].name}</li>
                <li>Rating: ${gamesResult[i].rating}</li>
                <li>Tags: ${gamesResult[i].tags.length}</li>
            </ul>
            </div>`;
        }      
    } catch(error) {
        resultsContainer.innerHTML = displayError("Error loading the content from the API")
        console.log(error);
    }
}

getGames();