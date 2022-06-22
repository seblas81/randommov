
import { idtitle } from './modules/pelis.js';
//window.idtitle = idtitle;
import { randomMovies } from './modules/pelis.js';
import { getInfoOMDB } from './modules/mfetch.js';
//import { getInfoUtelly } from './modules/utellyfetch.js';
//import { hello } from './modules/hello.js';



// Ingreso pelicula hardcode




// INICIO ESTRUCTURA
var div0 = document.createElement("div");
var div1 = document.createElement("div");
var imag = document.createElement("img");
var div2 = document.createElement("div");
var tit_card = document.createElement("h5");
var tit_card2 = document.createElement("h5");
var txt_card = document.createElement("p");
var div3 = document.createElement("div");
var ul1 = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
//var li3 = document.createElement("li");
var a1 = document.createElement("href");
var a2 = document.createElement("href");

div0.setAttribute("class","container-fluid");
div0.setAttribute("id","div0");
div0.setAttribute("align","center");
div0.setAttribute("style","background-color:red");
div1.setAttribute("class", "card");
div1.setAttribute("style", "width: 22rem;");
div1.setAttribute("id","div1");
div2.setAttribute("class","card-body");
div2.setAttribute("id","div2");
imag.setAttribute("class", "card-img-top");
tit_card.setAttribute("class", "card-title");
tit_card2.setAttribute("class", "card-title");
txt_card.setAttribute("class","card-text");
div3.setAttribute("class","card-body");
div3.setAttribute("id","div3");
ul1.setAttribute("class","list-group list-group-flush");
li1.setAttribute("class","list-group-item");
li2.setAttribute("class","list-group-item");
// li3.setAttribute("class","list-group-item");
a1.setAttribute("href","#");
a1.setAttribute("class","card-link");
a2.setAttribute("href","#");
a2.setAttribute("class","card-link");

div0.appendChild(div1);
div0.appendChild(div2);
div1.appendChild(imag);
div1.appendChild(div2);

div2.appendChild(tit_card);
div2.appendChild(txt_card);
div1.appendChild(ul1)
ul1.appendChild(li1);
ul1.appendChild(li2);
//ul1.appendChild(li3);
div1.appendChild(div3);

div3.appendChild(tit_card2);
div3.appendChild(a1);
div3.appendChild(a2);

// FIN ESTRUCTURA

// UTELLY BLOCK
 
// UTELLY BLOCK

// RENDER

randomMovies();
console.log(idtitle);
getInfoOMDB()
.then((movies) => {
             imag.src = movies.Poster;
             tit_card.innerHTML = movies.Title;
             txt_card.innerHTML = movies.Plot;
             li1.innerHTML = `Released Date: ${movies.Year}`;
             li2.innerHTML =  `IMDB: ${movies.imdbRating}`;
             tit_card2.innerHTML = " See it on";
});
//getInfoUtelly();



//showData();
document.body.appendChild(div0);
//FIN RENDER




