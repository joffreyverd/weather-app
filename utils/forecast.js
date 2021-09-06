const get = require('../http');

const forecast = (options, callback) => {
    const weatherstackToken = '3e393cd7b2fa88e4af1d323ec1444019';
    const url = 'http://api.weatherstack.com/current?access_key='
        + weatherstackToken + options;
    get(url, (error, data) => {
        callback(error, data);
    })
}

module.exports = forecast
