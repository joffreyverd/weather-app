const get = require('../http');

const geocode = (location, callback) => {
    const token = 'pk.eyJ1IjoiZmw0ayIsImEiOiJja3Q4YXM1d3YwNDR4Mm9vOWNwdGc4ZXo2In0.8wbGiIdQtSGASlnYqkXnSA';
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + location + '.json?access_token=' + token + '&limit=1';
    get(url, (error, data) => {
        callback(error, {
            latitude: data.features[0].center[1],
            longitude: data.features[0].center[0],
            adress: data.features[0].place_name,
        });
    })
}


module.exports = geocode;
