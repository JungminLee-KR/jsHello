const {exEven, exOdd, exEven2, exOdd2} = require('./test3_mod_var.js');
// must const?

function checkOddEven(num){
    if( num %2 ) {
        return exOdd;
    } else {
        return exEven;
    }
}

module.exports = checkOddEven;
//module.exports = checkOddEven2;

//exports.checkOddEven;
//exports.checkOddEven2;
// cant use exports for Function
// use only exports for Object