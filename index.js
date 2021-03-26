var searchBtn = document.getElementById('search-btn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var humd = document.querySelector('.humd');
var uvi = document.querySelector('.uvi');
var fiveDay = document.querySelector('.fiveDay');

/* button.addEventListener('click', function(){
    
}) */


searchBtn.addEventListener('click',  function() { 
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=f4999e3994aac81dbcc90828f0872343')
    .then(response => response.json())
    .then(data => { 
        var name = data['name'];
        var temp = data['main']['temp'];
        var humd = data['main']['humidity'];
        //var uvi = data[][];
        //var fiveDay = data[][];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humd.innerHTML = humdValue;
        //uvi.innerHTML = uviValue;
        //fiveDay = fiveDayValue;

    })
.catch(err => alert("Wrong City Name!"))
})