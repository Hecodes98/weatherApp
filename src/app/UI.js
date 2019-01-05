export class UI{

    constructor(){
        this.location = document.getElementById("weather-location")
        this.desc = document.getElementById("weather-desciption")
        this.string = document.getElementById("weather-string")
        this.humiidty = document.getElementById("weather-humidity")
        this.wind = document.getElementById("weather-wind")
    }

    render(weather){
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + ' C';
        this.humiidty.textContent = "Humidity: " + weather.main.humidity + "%"
        this.wind.textContent = "wind" + weather.wind.speed + "m/S"
    }
}