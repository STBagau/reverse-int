const { src } = require("semver");

module.exports = function reverse (n) {
    
    let i = 1;
    let result = '';
    let numberAbs = Math.abs(n);
    let number = String(numberAbs);
    
    while (i <= number.length) {
        result = `${result}${number[number.length - i]}`
        i = i + 1
    };

    resultNumber = Number(result);

    return resultNumber;



}

