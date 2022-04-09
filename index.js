
    
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)
const API = { 
        key: "e4df0be6080b46679100abb40ef4b713",
        // base:"http://api.openweathermap.org/geo/1.0/zip?zip="
    };
    
function setQuery(evt) { 
    if (evt.keyCode == 13) { 
        getResults(searchbox.value);
      
function getResults (zip) {
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API.key}`)
        .then((response) => response.json())
        .then((json) => {
            let lat = json.lat;
            let lon = json.lon;
            console.log(lat, ' ', lon);
            
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API.key}&units=imperial`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                let high = Math.round(json.daily[0].temp.max)
                let low = Math.round(json.daily[0].temp.min)
                let humidity = json.hourly[0].humidity
                let highLow = `${high}°F / ${low}°F`
                

                document.querySelector('#poop').innerHTML = highLow
        })})}
    }}












