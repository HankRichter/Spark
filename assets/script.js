const pixabayAPIKey = "34479748-2413c4632ab392d08bfdd4ef5";
const btn = document.getElementById("btn");
const searchWord = document.getElementById("imagetext");
const quoteNumber = document.getElementById("numbertext");
const quoteImage = document.querySelector(".quote-image");
const hero = document.querySelector(".hero");
const quote1 = document.getElementById("quote");
const image = document.getElementById("image");
const oneDeeTwenty = [Math.floor(Math.random() * 20)];
const quoteArray = "https://type.fit/api/quotes";

function imageFetch() {
  // this is called by the getUserInput function
  const ranImage =
    "https://pixabay.com/api/?key=" +
    pixabayAPIKey +
    "&q=" +
    searchWord.value +
    "&image_type=photo";
  fetch(ranImage)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(searchWord.value);
      const chosenImageURL = data.hits[oneDeeTwenty].largeImageURL; // only works if the data returns > 19 hits! (the globalThis part is unused atm)
      console.log(chosenImageURL);
      console.log(oneDeeTwenty);
      image.src = chosenImageURL;
    });
}

function quoteFetch() {
  // this is called by the getUserInput function
  fetch(quoteArray)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      hero.style.display = "none";
      quoteImage.style.display = "block";
      const quote =
        data[quoteNumber.value].text + data[quoteNumber.value].author;
      quote1.innerHTML = quote;
    });
}

btn.addEventListener("click", function () {
  quoteFetch();
  imageFetch();
});
/*
    work-around, for in case searchWord doesn't get any search results from pixabay.
    it worked before, but I'm not sure if it works anymore, now that variable declarations have moved around

if objectFromPixabayWithUnknownName.length = 0 {  // idk how to find out the actual name of that object (nor how to identify it so we can name it ourselves)
var someSereneWords = [
  "pottery",
  "bakery",
  "squirrel",
  "cloud",
  "raindrops",
  "highland"
]
sereendex = Math.floor(Math.random() * someSereneWords.length);  // get it!? It's an eeendex of serene stuff! XD
globalThis.searchWord = someSereneWords[sereendex];
console.log(someSereneWords);
console.log(searchWord);
  imageFetch();
}
*/
