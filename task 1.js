//var lot = parseInt(prompt("Введите количество элементов в массиве ", 10));
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question("Введите количество элементов в массиве ", (lot) => {
      var arr = (lot);
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        for (var i=0; i<lot; i++) {
            arr[i] = getRandomInt(1, 100);
        }
    })*/
var arr = [5, 90, 12, 3, 7, 22, 18, 86, 51]
console.log("Полученный массив: ", arr);
function getMinValue (array) {
    var min = array[0];
    for (var i=0; i<array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}
function getMaxValue (array) {
    var max = array[0];
    for (var i=0; i<array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}
console.log("Минимальный элемент массива: ", getMinValue(arr));
console.log("Максимальный элемент массива: ", getMaxValue(arr));