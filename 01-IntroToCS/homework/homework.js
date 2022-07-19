'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*
  let numDecimal = parseInt(num, 2);
  return numDecimal;
  */
  var numDecimal = 0;
  var pos = 0;
  for (var i = num.length - 1; i >= 0; i--) {
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
  var numBinario = "";
  while (num > 0) {
    //numBinario += decimal % 2; 
    numBinario = num % 2 + numBinario;
    num = Math.floor(num / 2);
  }
  return numBinario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}