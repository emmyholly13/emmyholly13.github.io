const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7f0d84b192d7b06436b826401d169039";

fetch(forecastURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    
    const forecast = jsObject["list"];
    const forecastfilter = forecast.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(forecastfilter);



    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; //note the concatenation
    const desc = jsObject.weather[0].description; //note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; //informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);







});