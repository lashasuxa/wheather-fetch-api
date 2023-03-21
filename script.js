const tempNumber = document.querySelector(".temp_number");
const comment = document.querySelector(".comment");
const card_weather = document.querySelector(".card_weather");

const access_key = "af940ea001ed52d40e32309e128d59f2";
const query = "New York";

fetch(
  `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    tempNumber.innerText = data.currentConditions.temp.c;
    comment.innerText = data.currentConditions.comment;
    card_weather.style.backgroundImage = `url(${data.currentConditions.iconURL})`;
    // Use the data returned from the API here
  });
