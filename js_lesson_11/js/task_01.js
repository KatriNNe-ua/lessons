"use strict";

//Задача 1.  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
//  1)номери рядків від 0 до половини, стовпці від 0 до половини
//  2)номери рядків від 0 до половини, стовпці від половини до кінця
// 3)номери рядків (від половини до кінця, стовпці від 0 до половини
// 4) номери рядків від половини до кінця , стовпці від половини до кінця
// 5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.

if (confirm("Почати тестування?")) {
  function createArr(length, max, min) {
    const newArr = [];
    for (let i = 0; i < length; i++) {
      const num = min + Math.floor(Math.random() * (max - min + 1));
      newArr.push(num);
    }
    return newArr;
  }
  function createTwoDimensionalArr(lengthRow, lengthColumn, max, min) {
    const newArr = [];
    for (let rowInd = 0; rowInd < lengthRow; rowInd++) {
      const row = createArr(lengthColumn, max, min);
      newArr.push(row);
    }
    return newArr;
  }
  const myArr = createTwoDimensionalArr(4, 4, 0, 5);
  document.write(`<p>${myArr.join("<br>")}</p>`);
  //=======================================================================================
  //1)номери рядків від 0 до половини, стовпці від 0 до половини
  function getSumfrom0ToHalfArr(arr) {
    const halfRow = Math.floor(arr.length / 2);
    let sum = 0;
    for (let rowInd = 0; rowInd < halfRow; rowInd++) {
      const halfColumn = Math.floor(arr[rowInd].length / 2);
      for (let columnInd = 0; columnInd < halfColumn; columnInd++) {
        sum += arr[rowInd][columnInd];
      }
    }
    return sum;
  }
  const sum1Half = getSumfrom0ToHalfArr(myArr);
  document.write(
    `<p>1) Hомери рядків від 0 до половини, стовпці від 0 до половини: ${sum1Half}</p>`
  );
  //=======================================================================================
  //2)номери рядків від 0 до половини, стовпці від половини до кінця
  function getSumArrRowfrom0ToHalfColumnsFromHalfToEnd(arr) {
    const halfRow = Math.floor(arr.length / 2);
    let sum = 0;
    for (let rowInd = 0; rowInd < halfRow; rowInd++) {
      const halfColumn = Math.floor(arr[rowInd].length / 2);
      for (
        let columnInd = halfColumn;
        columnInd < arr[rowInd].length;
        columnInd++
      ) {
        sum += arr[rowInd][columnInd];
      }
    }
    return sum;
  }
  const sum2Half = getSumArrRowfrom0ToHalfColumnsFromHalfToEnd(myArr);
  document.write(
    `<p>2) Hомери рядків від 0 до половини, стовпці від половини до кінця: ${sum2Half}</p>`
  );
  //=======================================================================================
  // 3)номери рядків (від половини до кінця, стовпці від 0 до половини)
  function getSumArrRowfromHalfToEndColumnsFrom0ToHalf(arr) {
    const halfRow = Math.floor(arr.length / 2);
    let sum = 0;
    for (let rowInd = halfRow; rowInd < arr.length; rowInd++) {
      const halfColumn = Math.floor(arr[rowInd].length / 2);
      for (let columnInd = 0; columnInd < halfColumn; columnInd++) {
        sum += arr[rowInd][columnInd];
      }
    }
    return sum;
  }
  const sum3Half = getSumArrRowfromHalfToEndColumnsFrom0ToHalf(myArr);
  document.write(
    `<p>3) Hомери рядків (від половини до кінця, стовпці від 0 до половини): ${sum3Half}</p>`
  );
  //=======================================================================================
  //4) номери рядків від половини до кінця , стовпці від половини до кінця
  function getSumArrRowfromHalfToEndColumnsfromHalfToEnd(arr) {
    const halfRow = Math.floor(arr.length / 2);
    let sum = 0;
    for (let rowInd = halfRow; rowInd < arr.length; rowInd++) {
      const halfColumn = Math.floor(arr[rowInd].length / 2);
      for (
        let columnInd = halfColumn;
        columnInd < arr[rowInd].length;
        columnInd++
      ) {
        sum += arr[rowInd][columnInd];
      }
    }
    return sum;
  }
  const sum4Half = getSumArrRowfromHalfToEndColumnsfromHalfToEnd(myArr);
  document.write(
    `<p>4) Hомери рядків від половини до кінця , стовпці від половини до кінця: ${sum4Half}</p>`
  );
  //=======================================================================================
  // 5) Суму парних рядків
  //-------1
  //   function getSumEvenRowsArr(arr) {
  //     let sum = 0;
  //     for (let rowInd = 0; rowInd < arr.length; rowInd++) {
  //       if (rowInd % 2 === 0) {
  //         sum += arr[rowInd].reduce((acc, num) => acc + num);
  //       }
  //     }
  //     return sum;
  //   }
  //------2
  function getSumEvenRowsArr(arr) {
   return arr.reduce(
      (sum, row, ind) =>
        ind % 2 === 0 ? sum + row.reduce((acc, num) => acc + num) : sum,
      0
    );
  }
  const sumEvenRows = getSumEvenRowsArr(myArr);
  document.write(`<p>5) Сумa парних рядків: ${sumEvenRows}</p>`);
  //=======================================================================================
  // 6) Суму непарних стовпців
  //-------1
  //   function getSumOddColumnsArr(arr) {
  //     let sum = 0;
  //     for (let rowInd = 0; rowInd < arr.length; rowInd++) {
  //       for (let columnsInd = 0; columnsInd < arr[rowInd].length; columnsInd++) {
  //         if (columnsInd % 2 !== 0) sum += arr[rowInd][columnsInd];
  //       }
  //     }
  //     return sum;
  //   }
  //-------2
  function getSumOddColumnsArr(arr) {
    let sum = 0;
    for (let rowInd = 0; rowInd < arr.length; rowInd++) {
      sum += arr[rowInd].reduce(
        (acc, num, ind) => (ind % 2 !== 0 ? acc + num : acc),
        0
      );
    }
    return sum;
  }
  const sumOddColumns = getSumOddColumnsArr(myArr);
  document.write(`<p>6) Сума непарних стовпців: ${sumOddColumns}</p>`);
  //=======================================================================================
  // 7) У парних рядках – непарні стовпці, у непарних – парні.
  //---------1
  //   function getSumArrEvenRowsOddColumnsOddRowsEvenColumns(arr) {
  //     let sum = 0;
  //     for (let rowInd = 0; rowInd < arr.length; rowInd++) {
  //       for (let columnsInd = 0; columnsInd < arr[rowInd].length; columnsInd++) {
  //         if (rowInd % 2 === 0 && columnsInd % 2 !== 0)
  //           sum += arr[rowInd][columnsInd];
  //         else if (rowInd % 2 !== 0 && columnsInd % 2 === 0)
  //           sum += arr[rowInd][columnsInd];
  //       }
  //     }
  //     return sum;
  //   }
  //---------2
  function getSumArrEvenRowsOddColumnsOddRowsEvenColumns(arr) {
    let sum = 0;
    for (let rowInd = 0; rowInd < arr.length; rowInd++) {
      sum += arr[rowInd].reduce(
        (acc, num, colInd) =>
          (rowInd % 2 === 0 && colInd % 2 !== 0) ||
          (rowInd % 2 !== 0 && colInd % 2 === 0)
            ? acc + num
            : acc,
        0
      );
    }
    return sum;
  }
  const sum = getSumArrEvenRowsOddColumnsOddRowsEvenColumns(myArr);
  document.write(
    `<p>7) Сума у парних рядках – непарних стовпців, у непарних – парних: ${sum}</p>`
  );
}
