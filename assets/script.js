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
const goBack = document.querySelector(".goback");
const oneDeeTwenty = [Math.floor(Math.random() * 20)];
const quoteArray = "https://type.fit/api/quotes";
let favoriteCombinations =
  JSON.parse(localStorage.getItem("picture-quote")) || [];
const quoteImageLS = document.querySelector(".quote-image-LS");

const pictureQuote = {
  chosenImage: null,
  chosenQuote: null,
};

function favorites() {
  hero.style.display = "none";
  quoteImageLS.style.display = "block";
  favoriteCombinations.forEach((element) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const div2 = document.createElement("div");
    const ptag = document.createElement("p");
    const div3 = document.createElement("div");
    const button = document.createElement("button");
    div.classList.add("relative");
    img.classList.add(
      "relative",
      "isolate",
      "overflow-hidden",
      "bg-gray-900",
      "py-24",
      "sm:py-32",
      "h-screen",
      "w-screen",
      "object-contain"
    );
    div2.classList.add(
      "flex",
      "flex-col",
      "justify-center",
      "m-auto",
      "w-full",
      "absolute",
      "sm:bottom-[80px]",
      "bottom-[120px]"
    );
    ptag.classList.add(
      "flex",
      "justify-center",
      "m-auto",
      "w-full",
      "text-white"
    );
    div3.classList.add(
      "flex",
      "justify-center",
      "m-auto",
      "w-full",
      "text-sm",
      "sm:text-base"
    );
    button.classList.add("btn");
    quoteImageLS.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(ptag);
    div2.appendChild(div3);
    div3.appendChild(button);
    img.src = element.chosenImage;
    ptag.textContent = element.chosenQuote;
    button.textContent = "Go Back!";
    button.addEventListener("click", function () {
      hero.style.display = "block";
      quoteImageLS.style.display = "none";
    });
  });
}

function postToLocalStorage() {
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

LSBtn.addEventListener("click", favorites);
