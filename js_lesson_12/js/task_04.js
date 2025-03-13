"use strict";

//Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування
// шляхом виведення відповідних таблиць за зразком . Тобто кожного разу після обміну
//елементів вивести поточний стан масиву на екран
if (confirm("Почати тестування?")) {
  function createArr(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      let num = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(num);
    }
    return arr;
  }

  //Пузиркове сортування (Bubble Sort)
  function displayTableBubbleSortArr(arr) {
    let endInd = arr.length;
    let change;
    do {
      change = false;
      for (let i = 1; i < endInd; i++) {
        if (arr[i - 1] > arr[i]) {
          change = true;
          const tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
          document.write(`<p>[${arr.join(", ")}]</p>`);
        }
      }
      endInd--;
    } while (change);
    return arr;
  }
  //Шейкерне сортування (Cocktail Shaker Sort)
  function displayTableCocktailShakerSortArr(arr) {
    let endInd = arr.length-1;
    let startInd = 0;
    while (startInd < endInd) {
      let change = false;
      for (let i = startInd + 1; i <= endInd; i++) {
        if (arr[i - 1] > arr[i]) {
          change = true;
          const tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
          document.write(`<p>[${arr.join(", ")}]-></p>`);
        }
      }
      endInd--;
      if (!change) break;
      change = false;
      for (let i = endInd; i > startInd; i--) {
        if (arr[i - 1] > arr[i]) {
          change = true;
          const tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
          document.write(`<p>[${arr.join(", ")}]<-</p>`);
        }
      }
      startInd++;
      if (!change) break;
    }
    return arr;
  }
  //Сортування вибором (Selection Sort)
  function displayTableSelectionSortArr(arr) {
    const endInd = arr.length - 1;
    for (let i = 0; i < endInd; i++) {
      let minInd = i;
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[k] < arr[minInd]) {
          minInd = k;
        }
      }
      if (minInd !== i) {
        const tmp = arr[minInd];
        arr[minInd] = arr[i];
        arr[i] = tmp;
        document.write(`<p>[${arr.join(", ")}]</p>`);
      }
    }
    return arr;
  }
  //Сортування вставками/включенням (Insertion Sort)
  function displayTableInsertionSortArr(arr) {
    for (let i = 1; i < arr.length; i++) {
      let k = i - 1;
      let key = arr[i];
      while (k >= 0 && arr[k] > key) {
        arr[k + 1] = arr[k];
        k--;
        document.write(`<p>[${arr.join(", ")}]</p>`);
      }
      arr[k + 1] = key;
	   document.write(`<p>[${arr.join(", ")}] (Вставка: ${key})</p>`);
    }

    return arr;
  }

  const myArr = createArr(5, 1, 9);
  document.write(`Початковий масив: [${myArr}]<br>`);
  document.write("Пузиркове сортування (Bubble Sort):<br>");
  const myArr2 = [...myArr];
  displayTableBubbleSortArr(myArr2);
  document.write("Шейкерне сортування (Cocktail Shaker Sort):<br>");
  const myArr3 = [...myArr];
  displayTableCocktailShakerSortArr(myArr3);
  document.write("Сортування вибором (Selection Sort):<br>");
  const myArr4 = [...myArr];
  displayTableSelectionSortArr(myArr4);
  document.write("Сортування вставками/включенням (Insertion Sort):<br>");
  const myArr5 = [...myArr];
  displayTableInsertionSortArr(myArr5);
}
