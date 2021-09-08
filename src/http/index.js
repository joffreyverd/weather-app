const request = require('postman-request');

const get = (route, callback) => {
    request(route, (error, response, body) => {
        if (error) {
            callback('error: ', error, '');
        }
        const { statusCode } = response;
        if (statusCode >= 203) {
            callback(statusCode, '');
        }
        if (response && statusCode === 200) {
            callback(null, JSON.parse(body))
        }
    }
    );
}

module.exports = get;
