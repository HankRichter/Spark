const ranQuote = "https://type.fit/api/quotes";

const ranImage = "https://pixabay.com/api/?key=34479748-2413c4632ab392d08bfdd4ef5&q=sunshine&image_type=photo";

fetch(ranImage, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })

    fetch(ranQuote, {
        cache: "reload",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        })

