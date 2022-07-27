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

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
