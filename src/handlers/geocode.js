const get = require('../http');

const geocode = (location, callback) => {
    const token = 'pk.eyJ1IjoiZmw0ayIsImEiOiJja3Q4YXM1d3YwNDR4Mm9vOWNwdGc4ZXo2In0.8wbGiIdQtSGASlnYqkXnSA';
    const route = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + location + '.json?access_token=' + token + '&limit=1';
    get(route, (error, data) => {
        if (error || data.features.length === 0) {
            return callback('Unable to connect to location services!', {
                latitude: null,
                longitude: null,
                location: null,
            });
        }
        const { center, place_name: location } = data.features[0];
        return callback(error, {
            latitude: center[1],
            longitude: center[0],
            location,
        });
    })
}


module.exports = geocode;
