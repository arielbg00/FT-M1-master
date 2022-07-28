'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = Math.floor(Math.random() * array.length);
  let leftArray = [];
  let rightArray = [];
  let pivotArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[pivot]) {
      leftArray.push(array[i]);
    } else if (array[i] > array[pivot]) {
      rightArray.push(array[i]);
    } else {
      pivotArray.push(array[i]);
    }
  }

  return quickSort(leftArray).concat(pivotArray).concat(quickSort(rightArray));
}

function mergeArray(leftArray, rightArray) {
  let leftI = 0;
  let rightI = 0;
  let newArray = [];
  
  // leftArray = [ 0,  5,  6];
  //                          leftI
  // rightArray = [ 1,  3,  4,  7,  8,  9,  10];
  //                          rightI
  // newArray = [0, 1, 3, 4, 5, 6]

  while (leftI < leftArray.length && rightI < rightArray.length) {
    if (leftArray[leftI] < rightArray[rightI]) {
      newArray.push(leftArray[leftI]);
      leftI++;      
    } else {
      newArray.push(rightArray[rightI]);
      rightI++;
    }
  }
  // leftArray.slice(leftI) = [];
  // rightArray.slice(rightI) = [7, 8, 9, 10];
  return newArray.concat(leftArray.slice(leftI)).concat(rightArray.slice(rightI));
  // newArray = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;

  let half = Math.floor(array.length / 2);
  let leftArray = array.slice(0, half);
  let rightArray = array.slice(half);

  return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
