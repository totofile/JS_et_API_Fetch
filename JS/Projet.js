const img = document.createElement("img");
const img2 = document.createElement("img");
innerHTML = "<p> New paragraphe </p>";


const nombre = Math.floor(Math.random() * 1000) // numéro aléatoire 
console.log(nombre)

fetch('https://api.jikan.moe/v4/anime')
.then(reponse => reponse.json())
.then(reponse => console.log(reponse.data));

btn.onclick = () => {
    const nombre = Math.floor(Math.random() * 1000)
    fetch('https://api.jikan.moe/v4/anime/'+nombre+'/full') // nombre aléatoire dans l'url reqete pour obtenir les infos d'un al=nimé aléatoire 
.then(reponse => reponse.json())
.then(affiche => {
    title.textContent = `Titre : ${affiche.data.title} `;
    date.textContent = `Date de sortie : ${affiche.data.aired.string}`
    episode.textContent =`Nombre d'épisodes  : ${affiche.data.episodes}`;
    time.textContent =`Durée de l'épisode : ${affiche.data.duration}`;
    genre.textContent =`Genre : ${affiche.data.genres[0].name}`;
    rate.textContent =`score /10 : ${affiche.data.score}`;
    img.src = affiche.data.images.jpg.image_url;
    output.appendChild(img);
})
};

btn2.onclick = () => {
    fetch('https://api.jikan.moe/v4/anime/'+champ.value+'/full') // malheureusement l'API utilisé accède a un item seulement avec un nombre 
.then(reponse => reponse.json())                                    // il m'est donc impossible de faire en sorte que l'utilisateur fasse une recherche de l'animé avec son nom 
.then(affiche => {
    title2.textContent = `Titre : ${affiche.data.title} `;
    date2.textContent = `Date de sortie : ${affiche.data.aired.string}`
    episode2.textContent =`Nombre d'épisodes  : ${affiche.data.episodes}`;
    time2.textContent =`Durée de l'épisode : ${affiche.data.duration}`;
    genre2.textContent =`Genre : ${affiche.data.genres[0].name}`;
    rate2.textContent =`score /10 : ${affiche.data.score}`;
    img2.src = affiche.data.images.jpg.image_url;
    output2.appendChild(img2);
})
}


