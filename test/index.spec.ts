import 'mocha';
import chai, { assert, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp)

describe('Testing project startup', () => {
    it('1st: Sent method GET Should Return a Object', (done) => {
        chai.request(app)
        .get('/')
        .end((error, response) =>{
            assert.isObject(response);
            done();
        });
    });
    it('2st: Sent Method GET Should Return Status 200', (done) => {
        chai.request(app)
        .get('/')
        .end((error, response) => {
            expect(response).to.have.status(200);
            done();
        });
    });
    it('3st: Sent Method Get Not Should Return Error', (done) =>{
        chai.request(app)
        .get('/')
        // eslint-disable-next-line no-unused-vars
        .end((error, response) => {
            expect(error).to.be.equal(null);
            done();
        });
    });
    it('4st: Sent Method Get Not Should Return Welcome to the Protocol System.', (done) =>{
        chai.request(app)
        .get('/')
        // eslint-disable-next-line no-unused-vars
        .end((error, response) => {            
            expect(response.text).to.be.equal('{"message":"Welcome to the Protocol System."}');
            done();
        });
    });
});
