import 'mocha';
import { assert, expect } from "chai";
import { modelIndex } from '../../../interface/model/model-index';

describe('Testing Modeling of the Route /', () => {
    it('1st: Should Return a Object', () => {
        const indexModel = new modelIndex('Wellcome the Protocol System.');
        assert.isObject(indexModel);        
    });
    it('2st: Should Return Wellcome the Protocol System.', () => {
        const indexModel = new modelIndex('Wellcome the Protocol System.');
        const indexRoute = {
            message: 'Wellcome the Protocol System.'
        }
        expect(indexModel).to.deep.equal(indexRoute);
    });
});