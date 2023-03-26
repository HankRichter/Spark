const pixabayAPIKey = "34479748-2413c4632ab392d08bfdd4ef5";
const btn = document.getElementById("btn");
const LSBtn = document.getElementById("LSBtn");
const searchWord = document.getElementById("imagetext");
const quoteNumber = document.getElementById("numbertext");
const quoteImage = document.querySelector(".quote-image");
const hero = document.querySelector(".hero");
const quote1 = document.getElementById("quote");
const image = document.getElementById("image");
const save = document.getElementById("save");
const goBack = document.getElementById("goback");
const oneDeeTwenty = [Math.floor(Math.random() * 20)];
const quoteArray = "https://type.fit/api/quotes";
let favoriteCombinations =
  JSON.parse(localStorage.getItem("picture-quote")) || [];

const pictureQuote = {
  chosenImage: null,
  chosenQuote: null,
};

function postToLocalStorage() {
  for (let i = 0; i < favoriteCombinations.length; i++) {
    const LSBtn = document.createElement("button");
  }
  if (favoriteCombinations) {
    favoriteCombinations.push(pictureQuote);
    localStorage.setItem("picture-quote", JSON.stringify(favoriteCombinations));
  } else {
    favoriteCombinations = [];
    favoriteCombinations.push(pictureQuote);
    localStorage.setItem("picture-quote", JSON.stringify(favoriteCombinations));
  }
}

function imageFetch() {
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
      const chosenImageURL = data.hits[oneDeeTwenty].largeImageURL;
      pictureQuote.chosenImage = chosenImageURL;
      console.log(pictureQuote.chosenImage);
      image.src = chosenImageURL;
    });
}

function quoteFetch() {
  fetch(quoteArray)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      hero.style.display = "none";
      quoteImage.style.display = "block";
      const quote =
        '"' +
        data[quoteNumber.value].text +
        '" -' +
        data[quoteNumber.value].author;
      pictureQuote.chosenQuote = quote;
      console.log(pictureQuote.chosenQuote);
      quote1.innerHTML = quote;
    });
}

btn.addEventListener("click", function () {
  quoteFetch();
  imageFetch();
});

save.addEventListener("click", postToLocalStorage);

goBack.addEventListener("click", function () {
  hero.style.display = "block";
  quoteImage.style.display = "none";
});
