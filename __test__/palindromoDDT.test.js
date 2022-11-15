// TEST

const palindromo = require('../utils/palindromo');

describe('palindromo ', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${fran}    | ${fran}     | ${narf}
   
      
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(palindromo(firstValue, secondValue)).toBe(expectedResult);
    });
  });