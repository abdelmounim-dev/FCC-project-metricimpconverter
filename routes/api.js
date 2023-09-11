'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    let {input} = req.query

    if(!input) return res.send('invalid input')
    
    const initNum= convertHandler.getNum(input)
    const initUnit= convertHandler.getUnit(input) 

    if (initNum === -1) {
      if(initUnit === -1)
        {return  res.send('invalid number and unit');}
      else {return res.send('invalid number');}
    }
    if(initUnit === -1)
    {return res.send('invalid unit');}

    let [returnNum, returnUnit] = convertHandler.convert(initNum, initUnit)
    let str = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    res.send({
      initNum, initUnit, returnNum, returnUnit, string: str
    })

  })

};
