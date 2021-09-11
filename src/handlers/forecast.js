const get = require('../http');

const forecast = (latitude, longitude) => {
    const token = '3e393cd7b2fa88e4af1d323ec1444019';
    const route = 'http://api.weatherstack.com/current?access_key='
        + token + '&query=' + latitude + ',' + longitude;
    return new Promise((resolve, reject) => {
        get(route).then((data) => {
            resolve(data);
        }).catch((e) => {
            reject(e);
        });
    });
}

module.exports = forecast
