//import { showidtitle } from "../modules/idtitle.js";
var idtitle = "";
export function randomMovies(){
    const pelis = ["tt0111161", "tt0088763", "tt0276751","tt0816692","tt0110357","tt0125659","tt0120663","tt0246578","tt0986264","tt2380307","tt0418455","tt0114814","tt0877057","tt1606375","tt2442560"]
    let rndom = Math.floor(Math.random() * pelis.length);
    console.log(pelis[rndom]);
     idtitle = pelis[rndom];
}

export {idtitle};

