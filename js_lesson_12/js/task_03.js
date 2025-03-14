"use strict";

//Задача 3.  Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів
// та порівнянь чисел під час сортування включеннями.
if (confirm("Почати тестування?")) {
  function createArr(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      let num = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(num);
    }
    return arr;
  }

  function getInsertionSortArrCountExchangesCountComparisonsNum(arr) {
    let countExchanges = 0;
    let countComparisons = 0;
    for (let i = 1; i < arr.length; i++) {
      let k = i - 1;
      let key = arr[i];
      while (k >= 0 && arr[k] > key) {
        arr[k + 1] = arr[k];
        k--;
        countExchanges++;
        countComparisons++;
      }
      countComparisons++;
      arr[k + 1] = key;
    }
    return [arr, countExchanges, countComparisons];
  }
  const myArr = createArr(30, 1, 10);
  document.write(`${myArr}<br>`);

  const [arrSort, countExchanges, countComparisons] =
    getInsertionSortArrCountExchangesCountComparisonsNum(myArr);
 document.write(
   `${arrSort}<br>Кількість обмінів: ${countExchanges}<br>Кількість порівнянь: ${countComparisons} `
 );
}
