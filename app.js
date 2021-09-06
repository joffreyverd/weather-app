const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = encodeURIComponent(process.argv[2]);

geocode(address, (error, geocodeData) => {
    if (error) {
        return console.log(error);
    }
    const options = '&query='
        + geocodeData.latitude + ',' + geocodeData.longitude;
    forecast(options, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log('It is currently ' + forecastData.current.temperature
            + ' degrees out in ' + geocodeData.adress);
    })
});
