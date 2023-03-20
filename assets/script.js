const pixabayAPIKey = "34479748-2413c4632ab392d08bfdd4ef5"

function imageFetch() { // this is called by the getUserInput function
  const ranImage = "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=" + searchWord + "&image_type=photo";
  fetch(ranImage)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(searchWord);
      console.log(data);
    })
}

function quoteFetch() { // this is called by the getUserInput function
  const quoteArray = "https://type.fit/api/quotes";
  fetch(quoteArray)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(quoteNumber);
      console.log(data);
      console.log(data[quoteNumber]);
      console.log(data[quoteNumber]["text"]);
      console.log(data[quoteNumber]["author"]);

      document.getElementById("quote").innerHTML = ( // this makes the fetched quote display on the page
        "\"" +
        data[quoteNumber]["text"] +
        "\" -" +
        data[quoteNumber]["author"]);
    })
}

function getUserInput() { // this is called when the user clicks the button
  globalThis.searchWord = document.getElementById("imagetext").value;
  globalThis.quoteNumber = document.getElementById("numbertext").value;
  if (isNaN(quoteNumber) || quoteNumber > 1643 || quoteNumber < 0) { quoteNumber = Math.floor(Math.random() * 1643); } // picks a random quote number if the user input is unusable
  imageFetch();
  quoteFetch();
}

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