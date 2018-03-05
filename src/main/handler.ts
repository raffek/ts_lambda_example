import { ResponseModel } from './model/response.model';
import { APIGatewayEvent, Callback, Context } from 'aws-lambda';

exports.hello = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const response = new ResponseModel(
        200, JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        })
    );
    cb(null, response);
};
