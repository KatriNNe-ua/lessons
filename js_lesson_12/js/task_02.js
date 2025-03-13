"use strict";

//Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів
//та порівнянь чисел під час сортування змішуванням.
if (confirm("Почати тестування?")) {
  function createArr(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      let num = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(num);
    }
    return arr;
  }

  function getCocktailShakerSortArrCountExchangesCountComparisonsNum(arr) {
    let countExchanges = 0;
    let countComparisons = 0;
    let endInd = arr.length-1;
    let startInd = 0;

    while (startInd < endInd) {
      let change = false;

      for (let i = startInd + 1; i <= endInd; i++) {
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
      if (!change) break;

      change = false;
      for (let i = endInd; i > startInd; i--) {
        countComparisons++;
        if (arr[i - 1] > arr[i]) {
          const tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
          change = true;
          countExchanges++;
        }
      }

      startInd++;
      if (!change) break;
    }

    return [arr, countExchanges, countComparisons];
  }
  const myArr = createArr(30, 1, 10);
  document.write(`${myArr}<br>`);

  const res = getCocktailShakerSortArrCountExchangesCountComparisonsNum(myArr);
  document.write(
    `${res[0]}<br>Кількість обмінів: ${res[1]}<br>Кількість порівнянь: ${res[2]} `
  );
}
