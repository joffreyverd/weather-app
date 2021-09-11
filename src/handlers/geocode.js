const get = require('../http');

const geocode = (location) => {
    const token = 'pk.eyJ1IjoiZmw0ayIsImEiOiJja3Q4YXM1d3YwNDR4Mm9vOWNwdGc4ZXo2In0.8wbGiIdQtSGASlnYqkXnSA';
    const route = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + location + '.json?access_token=' + token + '&limit=1';

    return new Promise((resolve, reject) => {
        get(route).then((data) => {
            const { center, place_name: location } = data.features[0];
            resolve({
                latitude: center[1],
                longitude: center[0],
                location,
            });
        }).catch((e) => {
            reject(e);
        });
    });
}


module.exports = geocode;
