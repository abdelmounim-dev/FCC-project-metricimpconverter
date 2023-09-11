const { units, conversionRate, unitMapping } = require("../utils/constants");
function ConvertHandler() {
  
  this.getNum = function(input) {
    let invalid = -1;
    const alpha = /[a-zA-Z]/
    const index = input.split('').findIndex(char => alpha.test(char))

    if (index === 0) return 1;

    let quantity = index > 0 ? input.slice(0, index): input.slice(0)

    if(Number(quantity) < 0) return invalid

    let quantityArray = quantity.split('/')

    if(quantityArray.length === 1) {
      const q = quantityArray[0]
      if(q === '') return invalid
      return isNaN(+q) ? invalid : +q
    }

    if(quantityArray.length === 2) {
      if( quantityArray.some(num => isNaN(+num) || num === '')) return invalid
      return  quantityArray[0] / quantityArray[1]
    }

    
    return invalid;
  };
  
  this.getUnit = function(input) {
    let invalid = -1;
    const alpha = /[a-zA-Z]/
    const index = input.split('').findIndex(char => alpha.test(char))

    if (index < 0) return invalid;
    let unit = input.slice(index)
    return this.spellOutUnit(unit)
  };
  
  this.getReturnUnit = function(initUnit) {
    
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    if (unit === "L" || unit === "l") return "L";
    if (units.hasOwnProperty(unit.toLowerCase())) {
      return unit.toLowerCase();
    }
    return -1;
  };
  
  this.convert = function(initNum, initUnit) {
    let result =  initNum * conversionRate[initUnit]
    return [Number(result.toFixed(5)), this.getReturnUnit(initUnit)]
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${unitMapping[initUnit]} converts to ${returnNum} ${unitMapping[returnUnit]}`
   
  };
  
}

module.exports = ConvertHandler;
