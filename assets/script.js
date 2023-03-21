const pixabayAPIKey = "34479748-2413c4632ab392d08bfdd4ef5";
const btn = document.querySelector(".btn");
const searchWord = document.getElementById("imagetext").value;
const quoteNumber = document.getElementById("numbertext").value;
const quoteImage = document.querySelector(".quote-image");
const hero = document.querySelector('.hero')

function imageFetch() { // this is called by the getUserInput function
  const ranImage = "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=" + searchWord + "&image_type=photo";
  fetch(ranImage)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var oneDeeTwenty = [Math.floor(Math.random() * 20)];
      globalThis.chosenImageURL = data.hits[oneDeeTwenty].largeImageURL; // only works if the data returns > 19 hits! (the globalThis part is unused atm)
      document.getElementById("image").src = chosenImageURL; 

      console.log(searchWord);
      console.log(data);
      console.log(chosenImageURL);
    })
}


function quoteFetch() { // this is called by the getUserInput function
  const quoteArray = "https://type.fit/api/quotes";
  fetch(quoteArray)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    const quote =  "\"" + data[quoteNumber]["text"] + "\" -" + data[quoteNumber].author;
      document.getElementById("quote").innerHTML = quote;
        console.log(quoteNumber);
        console.log(data[quoteNumber]);
        console.log(data[quoteNumber]["text"]);
        console.log(data[quoteNumber]["author"]);
    })
  }

function getUserInput() { // this is called when the user clicks the button
  quoteImage.style.display = "block";
  hero.style.display = "none";
  if (isNaN(quoteNumber) || quoteNumber > 1643 || quoteNumber < 0) { quoteNumber = Math.floor(Math.random() * 1643); } // picks a random quote number if the user input is unusable
  imageFetch();
  quoteFetch();
}

btn.addEventListener("click", getUserInput);
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