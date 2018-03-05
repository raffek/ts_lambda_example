"use strict";
exports.__esModule = true;
exports.hello = function (event, context, cb) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event
        })
    };
    cb(null, response);
};
//# sourceMappingURL=handler.js.map