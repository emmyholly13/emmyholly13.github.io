const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.8339&lon=-104.8214&appid=7f0d84b192d7b06436b826401d169039";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('high-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;



});