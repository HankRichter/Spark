const ranQuote = "https://type.fit/api/quotes";

// Simple placeholder to get input (until we get something fancier)

let searchWord = window.prompt("Type the name of something relaxing: ");
console.log(searchWord);

/*
pixabay still does what we want if 'searchWord' is null

Small Problem Though: pixabay will return an object with 0 images if
the string is too long or too weird (like "the smallest whale in the world" or "%%%")
I made an if statement (commented out at the bottom)
that I think will make sure the object is not empty in the end
(idk the name of the relevant object, but otherwise it tested out fine)

(....I think(?) this is a better solution than making sure the user input
is good when we first get it, so that we only have to fetch(ranImage) once)
*/

const ranImage = "https://pixabay.com/api/?key=34479748-2413c4632ab392d08bfdd4ef5&q=" + searchWord + "&image_type=photo";

function imageFetch(){
fetch(ranImage)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
}

function quoteFetch(){
fetch(ranQuote)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
}

imageFetch();
quoteFetch();


/*
if objectFromPixabayWithUnknownName.length = 0{  // idk how to find out the actual name of that object (nor how to identify it so we can name it ourselves)
var someSereneWords = [
  "pottery",
  "bakery",
  "squirrel",
  "cloud",
  "raindrops",
  "highland"
]
sereendex = Math.floor(Math.random() * someSereneWords.length);  // get it!? It's an eeendex of serene stuff! XD
searchWord = someSereneWords[sereendex];
console.log(someSereneWords);
console.log(searchWord);
  imageFetch();
}
*/