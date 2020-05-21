/*jslint browser:true */
'use strict';

var mykey = config.MY_KEY;

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&appid=' + mykey + '&units=metric', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML=cObj.name;
        document.getElementById('weather').innerHTML=cObj.weather[0].description;
        document.getElementById('temperature').innerHTML=cObj.main.temp;

    } //end if
}; //end function










// GET THE FORECARST
//weatherForecast.open('', '', true);
//weatherForecast.responseType = 'text'; 
//weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	
} //end if
}; //end function


