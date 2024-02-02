//replace with where to insert
const p = document.querySelector('#fact');
const img = document.querySelector('#main-image');
const apiKey_Thecatapi = "live_lu84yq93RYo14uTkB0E6v8sUCAVLkUuGhJ42BQJ9o4gEr1gBOa6nYPsks0QBPsXn";
const url_Thecatapi = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`;
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": apiKey_Thecatapi
});
//request settings
var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};
//functions for fact
//function that inserts a fact about a cat into HTML tag p
function updateHTML_RandomCatFact(fact) {
  p.textContent = fact;
}
//getting a fact about a cat using API
function getRandomCatFact() {
  fetch(url_Thecatapi, requestOptions)
    .then(response => response.json())
    .then(result => updateHTML_RandomCatFact(result[0].breeds[0].description))
    .catch(error => console.log('error', error));
}
//functions for pictures
//function that inserts a cat image into HTML
function updateHTML_RandomCatImage(linkImage) {
  img.src = linkImage;
  img.alt = "cat";
  img.width = 250;
}
//getting image a cat using API
function getRandomCatImage() {
  fetch(url_Thecatapi, requestOptions)
    .then(response => response.json())
    .then(result => updateHTML_RandomCatImage(result[0].url))
    .catch(error => console.log('error', error));
}
getRandomCatImage()
getRandomCatFact()