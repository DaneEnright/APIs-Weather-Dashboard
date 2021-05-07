const APIKey = "f0b02cd8747443fca3ffe2268d51a251";
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

$("#search-btn").on("click", function () {
  var city = $("#search-input").val();
  console.log(city);



  fetch("http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=f0b02cd8747443fca3ffe2268d51a251")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderer(data);
      });
  });

  fetch("http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=imperial&appid=f0b02cd8747443fca3ffe2268d51a251")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderer(data);
    });


function renderer(data) {
  $("h1").val(data.title);
}



// AJAX call requires a third party library, jQuery
$.ajax({
  url: requestUrl,
  method: "GET",
}).then(function (response) {
  console.log("Ajax Reponse \n-------------");
  console.log(response);
});

// temp - main.temp
// humidity - main.humidity
// wind - wind.speed
// UV index -
// weather icon - weather.icon

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// User form to input location for city
// Local Storage to add to search history
// jQuery to display current weather contitions
// jQuery to display future weather conditons
// OpenWeather One Call API

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
