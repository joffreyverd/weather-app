const request = require('postman-request');

const get = (url, callback) => {
    request(url, (error, response, body) => {
        if (error) {
            callback('error: ', error, '');
        }
        if (response.statusCode >= 203) {
            callback(response.statusCode, '');
        }
        if (response && response.statusCode === 200) {
            callback(null, JSON.parse(body))
        }
    }
    );
}

module.exports = get;
