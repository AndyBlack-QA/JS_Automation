import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('Fourth part', () => {
  let validator;
  beforeEach(() =>{
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('return true if entered value is integer', () => {
    const value = 15;
    const res = validator.isInteger(value);
    expect(() =>{
      res.to.be.true;
    });
  });
  it('return false if entered value is float', () => {
    const value = 15.5;
    const res = validator.isInteger(value);
    expect(() =>{
      res.to.be.false;
    });
  });
  it('throw error if entered value is not a number', () => {
    const testValue = true;
    expect(() => {
      validator.isInteger(testValue);
    }).to.throw('[true] is not a number');
  });
});
