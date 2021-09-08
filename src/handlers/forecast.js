const get = require('../http');

const forecast = (latitude, longitude, callback) => {
    const token = '3e393cd7b2fa88e4af1d323ec1444019';
    const route = 'http://api.weatherstack.com/current?access_key='
        + token + '&query=' + latitude + ',' + longitude;
    get(route, (error, data) => {
        if (error || !data) {
            return callback('Unable to find location', {});
        }
        return callback(error, data);
    })
}

module.exports = forecast
