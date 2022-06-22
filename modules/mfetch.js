
import { idtitle } from './pelis.js';
window.idtitle = idtitle;
// export function getInfoOMDB() {
//     var apiUrl = "https://www.omdbapi.com/?apikey=9ea1ceee&i="+ `${idtitle}`;
    
//     fetch(`${apiUrl}`)
//     .then(response => response.json())
//     .then((movies) => {
//         imag.src = movies.Poster;
//         tit_card.innerHTML = movies.Title;
//         txt_card.innerHTML = movies.Plot;
//         li1.innerHTML = `Released Date: ${movies.Year}`;
//         li2.innerHTML =  `IMDB: ${movies.imdbRating}`;
//         tit_card2.innerHTML = " See it on";
//         console.log(movies);
//     });
// };


export async function getInfoOMDB() {
    var apiUrl = "https://www.omdbapi.com/?apikey=9ea1ceee&i="+ `${idtitle}`;
    console.log(idtitle);
    let response = await fetch(`${apiUrl}`)
     return await response.json();
};

