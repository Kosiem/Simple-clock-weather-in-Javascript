
// link to api 
var link = "https://api.openweathermap.org/data/2.5/weather?q=Wladyslawowo&appid=ae43437ed6f9cb6eb3206fab05aa3552&units=metric";
// create new request
const database = new XMLHttpRequest();

const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".icon");
const wind = document.querySelector(".wind")
const pres = document.querySelector(".pres");
const searchIcon = document.querySelector(".searchIcon");

// search for a certain city, (default one is my city, Władysławowo, Poland)
searchIcon.addEventListener("click",()=>{
    console.log(document.querySelector(".newCity").value)
        if(document.querySelector(".newCity").value != ""){
            link = "https://api.openweathermap.org/data/2.5/weather?q="+  document.querySelector(".newCity").value + "&appid=ae43437ed6f9cb6eb3206fab05aa3552&units=metric";
            document.querySelector(".cityName").innerHTML =  document.querySelector(".newCity").value
            weather();
        } else {
            document.querySelector(".cityName").innerHTML = "Error, please enter full name of city";
            console.log("test");
        }

});

// Get data from api

function weather(){
// open connection, and set method 'get'
database.open('GET',link,true);
// get values from api, every time when page is loading
database.onload = function(){
    // parse json file
    const data = JSON.parse(this.response);
    desc.innerHTML = data.weather[0].description;
    temperature = parseInt(data.main.temp);
    temp.innerHTML = " " + temperature +  " °C ";
    icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    wind.innerHTML = " " + data.wind.speed + " km/h";
    pres.innerHTML =" " + data.main.pressure + " hPa";

}
// if page is active, the weater will refresh
setInterval(weather, 600000);
database.send();

}
weather();

