//TEST


const sum = require('../utils/suma');

test ('adds 1 + 2 to equal 3', () =>{
    expect(sum(1,2)).toBe(3);
});

test('sumar dos numerors negativos', () => { 
    expect(sum(-2,-2)).toBe(-4) 
});



 
