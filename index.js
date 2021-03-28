var searchBtn = document.getElementById("search-btn");
var inputValue = document.querySelector(".inputValue");
var city = document.querySelector("#city");
var temp = document.querySelector(".temp");
var humd = document.querySelector(".humd");
var wind = document.querySelector(".wind");
var uvi = document.querySelector(".uvi");
var fiveDay = document.querySelector(".fiveDay");
console.log(city)

/* button.addEventListener('click', function(){
    
}) */

searchBtn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&units=imperial&appid=f4999e3994aac81dbcc90828f0872343"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name)  
      var nameValue = data.name;
      var tempValue = Math.floor(data["main"]["temp"]);
      var humdValue = data["main"]["humidity"];
      var windValue = Math.floor(data["wind"]["speed"]);
      //var uvi = data[][];
      //var fiveDay = data[][];

      city.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      humd.innerHTML = humdValue;
      wind.innerHTML = windValue;
      //uvi.innerHTML = uviValue;
      //fiveDay = fiveDayValue;
    })
    .catch((err) => console.log(err));
});
