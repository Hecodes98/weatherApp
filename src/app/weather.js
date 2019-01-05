export class Weather {
    constructor(city, countryCode) {
        this.apiKey = "86280b1c7d5133664ccef2d9ea38168e"
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`
        const response = await fetch(URI);
        const data = await response.json()
        return data
    }

    changeLocation(city, countryCode){
        this.city = city
        this.countryCode = countryCode
    }
}