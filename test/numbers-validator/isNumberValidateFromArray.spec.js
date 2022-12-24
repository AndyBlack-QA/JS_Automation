import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('validationArrayFuncions', () => {
  let validator;
  beforeEach(() =>{
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });


  it('should return only Even numbers from array ', ()=>{
    const arrayOfNumbers = [4, 6, 15, 25, 30];
    const validationResults = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(validationResults).to.be.eql([4, 6, 30]);
  });
  it('should return error when arr containt non num value', () => {
    const testArray =['5', 12, 24];
    expect(() => {
      validator.getEvenNumbersFromArray(testArray);
    }).to.throw('[5,12,24] is not an array of "Numbers"');
  });
});
