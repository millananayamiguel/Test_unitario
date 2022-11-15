//TEST


const isUpperCase = require ('../utils/esmayuscula');

test ('The string HELLO should is true', () => {
    const result = isUpperCase ('HELLO');
    expect (result).toBe (true);
});
test ('The string ADIOS should is true', () => {
    const result = isUpperCase ('ADIOS');
    expect (result).toBe (true);
})
test('The string COCO should is true', () => { 
    const result = isUpperCase ('COCO');
    expect (result).toBe (true); })