export function getInfoUtelly() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1bc5f3f2afmsh9231d9e05a33f93p186234jsncf2a625cd4d7',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };



    var apiUrl2 = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id="+ `${idtitle}`+"&source=imdb&country=ar,options" ;
    
    fetch(`${apiUrl2}`)
    .then(res => res.json())
    .then((info) => {
        console.log(info);
        console.log(options);
    });
};