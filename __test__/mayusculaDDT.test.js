// TEST


const isUpperCase = require('../utils/esmayuscula');

describe('esmayuscula', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${HELLO}   | ${hello}    | ${HELLO}
  
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(isUpperCase(firstValue, secondValue)).toBe(expectedResult);
    });
  });