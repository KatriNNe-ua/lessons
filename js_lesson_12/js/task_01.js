"use strict";

//Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів
// та порівнянь чисел під час сортування бульбашкою
if (confirm("Почати тестування?")) {
  function createArr(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      let num = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(num);
    }
    return arr;
  }


function getBubbleSortArrCountExchangesCountComparisonsNum(arr){
 let countExchanges = 0;
 let countComparisons = 0;
 let change;
 let endInd = arr.length;
 do {
   change = false;
   for (let i = 1; i < endInd; i++) {
     countComparisons++;
     if (arr[i - 1] > arr[i]) {
       const tmp = arr[i - 1];
       arr[i - 1] = arr[i];
       arr[i] = tmp;
       change = true;
       countExchanges++;
     }
   }
   endInd--;
 } while (change);
 return [arr, countExchanges, countComparisons];
}
 const myArr = createArr(30, 1, 10);
 document.write(`${myArr}<br>`);
 
 const [arrSort, countExchanges, countComparisons] =
   getBubbleSortArrCountExchangesCountComparisonsNum(myArr);
  document.write(
    `${arrSort}<br>Кількість обмінів: ${countExchanges}<br>Кількість порівнянь: ${countComparisons} `
  );
}
