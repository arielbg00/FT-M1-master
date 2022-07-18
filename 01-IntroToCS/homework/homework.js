'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*
  let numDecimal = parseInt(num, 2);
  return numDecimal;
  */
  var numToString = num.toString();
  var numDecimal = 0;
  var pos = 0;
  for (var i = numToString.length - 1; i >= 0; i--) {
    numDecimal += parseInt(num[i]) * (2 ** pos);
    pos++;
  }
  return numDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  /*
  let numBinario = num.toString(2);
  return numBinario;
  */
  var numBinario = [];
  var decimal = num;
  while (decimal > 0) {
    numBinario.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return numBinario.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}