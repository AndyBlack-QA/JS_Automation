import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('thirdPartTests', () => {
  let validator;
  beforeEach(() =>{
    validator=new NumbersValidator();
  });
  afterEach(() =>{
    validator = null;
  });

  it('return true if it is array of numbers', () =>{
    const testArr = [5, 12, 15];
    const res = validator.isAllNumbers(testArr);
    expect(res).to.be.true;
  });
  it('return error if arr not with numbers', () =>{
    const arr = '15';
    expect(() => {
      validator.isAllNumbers(arr);
    }).to.throw('[15] is not an array');
  });
});

