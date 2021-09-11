const request = require('postman-request');

const get = (route) => {
    return new Promise((resolve, reject) => {
        request(route, (error, response, body) => {
            if (error) {
                reject(error);
            }
            const { statusCode } = response;
            if (statusCode >= 203) {
                reject(statusCode);
            }
            if (response && statusCode === 200) {
                resolve(JSON.parse(body))
            }
        });
    });
};

module.exports = get;
