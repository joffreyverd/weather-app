const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = encodeURIComponent(process.argv[2]);
if (!address) {
    return console.log('Please provide an adress');
}

geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
        return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        const { temperature } = forecastData.current;
        console.log('It is currently ' + temperature + ' degrees out in ' + location);
    })
});
