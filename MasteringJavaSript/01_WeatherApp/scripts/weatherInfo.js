const apiKey = "70a2d67f7eeb6d834da2e65ae938ddc7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const locationUrl = "https://api.myip.com/";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const searchField = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather__icon");

async function checkWeather(city) {
    // if(!city) {
    //     alert("Enter city name");
    //     return;
    // }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(!data.name){
        // alert("Enter valid city name");
        document.querySelector(".error").style.display = "block";
        return;
    }else{
        document.querySelector(".error").style.display = "none";
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity__value").innerHTML = data.main.humidity+"%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind_speed__value").innerHTML = data.wind.speed + " m/s";

    switch(data.weather[0].main){
        case "Clouds":
            weatherIcon.src = "images/clouds.png"
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png"
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png"
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png"
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png"
            break;
        default:
            weatherIcon.src = "images/mist.png";
    }
}

async function getCountry() {
    const locationUrl = 'https://api.myip.com/';
    const proxyUrl = 'https://corsproxy.io/?'; // Прокси-сервер
    const response = await fetch(proxyUrl + locationUrl);
    const userLocation = await response.json();
    console.log(userLocation.country);
    return String(userLocation.country);
}

getCountry().then(country => {
    // Теперь используем страну для получения данных о погоде
    checkWeather(country);
});

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

searchField.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});