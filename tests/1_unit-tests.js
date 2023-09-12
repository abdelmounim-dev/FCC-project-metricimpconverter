const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Whole number input', function(){
        assert.equal(convertHandler.getNum('5kg'), 5)
    })
    test('Decimal Input', function(){
        assert.equal(convertHandler.getNum('5.5kg'), 5.5)
    })
    test('Fractional Input', function(){
        assert.equal(convertHandler.getNum('5/2kg'), 2.5)
    })
    test('Fractional Input w/ Decimal', function(){
        assert.equal(convertHandler.getNum('5.5/2kg'), 2.75)
    })
    test('Double Fraction', function(){
        assert.equal(convertHandler.getNum('5/2/2kg'), -1)
    })
    test('No Numerical Input', function(){
        assert.equal(convertHandler.getNum('kg'), 1)
    })
    test('unit input', function(){
        assert.equal(convertHandler.getUnit('5kg'), 'kg')
    }
    )
    test('invalid unit input', function(){
        assert.equal(convertHandler.getUnit('5kgs'), -1)
    })
    test('return unit', function(){
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
    })
    test('spell out unit', function(){
        assert.equal(convertHandler.spellOutUnit('KG'), 'kg')
    })
    test('convert gal to L', function(){
        assert.equal(convertHandler.getReturnUnit('gal'), 'L')
    })
    test('convert L to gal', function(){
        assert.equal(convertHandler.getReturnUnit('L'), 'gal')
    })
    test('convert mi to km', function(){
        assert.equal(convertHandler.getReturnUnit('mi'), 'km')
    })
    test('convert km to mi', function(){
        assert.equal(convertHandler.getReturnUnit('km'), 'mi')
    })
    test('convert lbs to kg', function(){
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg')
    })
    test('convert kg to lbs', function(){
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
    })
    
});