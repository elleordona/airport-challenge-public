// Weather Class

class Weather { 

    getWeather() {
        return Math.floor((Math.random() * 50) + 1); // generates a random whole number between 1 and 50
    }
}

module.exports = Weather;
