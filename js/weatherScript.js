var key = "2bdf0e8bf493bd7aa767695aef77c052";
var umea = 602150;

function weatherBalloon(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)  
    .then(function(resp) { 
        return resp.json();
    })
    .then(function(data) {
      drawWeather(data);
    });
}

function drawWeather(weatherData) {
	var celcius = Math.round(parseFloat(weatherData.main.temp)-273.15);
  var description = weatherData.weather[0].description;
	
	document.getElementById('description').innerHTML = formatString(description);
  document.getElementById('temp').innerHTML = celcius + '&deg;';
}

function formatString(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
}

setInterval(100, weatherBalloon(umea));