const request = require('request-promise-native');

function sendRequest(opts) {
    const options = {
        uri: opts.uri,
        body: opts.body,
        method: opts.method,
        header: opts.header,
        json: true,
        resolveWithFullResponse: true
    };

    return request(options);
}

module.exports = sendRequest;
