// functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exhanangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exhanangeRate);

console.log(currencyTwo);
