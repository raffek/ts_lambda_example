import * as chai from 'chai';
import { hello } from '../main/handler';
import { ResponseModel } from '../main/model/response.model';

const expect = chai.expect;
describe('my lambda handler', () => {
    it('should produce response', () => {
        hello(null, null, (error: any, result: ResponseModel) => {
            expect(error).to.be.null;
            expect(result.statusCode).to.be.eq(200);
            console.log(result.body);
        });
    });
});
