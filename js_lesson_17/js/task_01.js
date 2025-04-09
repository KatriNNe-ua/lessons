"use strict";

//Задача 1. Створити клас, що дозволяє виконувати такі операції над масивами:
// знаходження кількості додатних, кількості від’ємних, кількість входжень деякого
//  числа (статичні методи)

if (confirm("Почати тестування?")) {
  class CalculationArr {
    static getNumPositive(arr) {
      if (arr.length === 0) throw new Error(`Масив порожній`);
      return arr.reduce((count, num) => (num > 0 ? count + 1 : count), 0);
    }
    static getNumNegative(arr) {
      if (arr.length === 0) throw new Error(`Масив порожній`);
      return arr.reduce((count, num) => (num < 0 ? count + 1 : count), 0);
    }
    static getOccurrencesNum(arr, numSearch) {
      if (arr.length === 0) throw new Error(`Масив порожній`);
      return arr.reduce(
        (count, num) => (num === numSearch ? count + 1 : count),
        0
      );
    }
  }

  function getArr(lengthArr, minNum, maxNum) {
    if (minNum > maxNum) {
      [minNum, maxNum] = [maxNum, minNum];
    }
    const arr = [];
    for (let i = 0; i < lengthArr; i++) {
      const num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
      arr.push(num);
    }
    return arr;
  }

  try {
    const myArr = getArr(10, -10, 10);
    document.write(`<p>Згенерований масив: ${myArr}</p>`);
    const countPosit = CalculationArr.getNumPositive(myArr);
    document.write(`<p>Kількості додатних чисел: ${countPosit}</p>`);
    const countNegat = CalculationArr.getNumNegative(myArr);
    document.write(`<p>Kількості від’ємних чисел: ${countNegat}</p>`);
    const myNum = 7;
    const countNum = CalculationArr.getOccurrencesNum(myArr, myNum);
    document.write(`<p>Kількості входжень числа ${myNum}: ${countNum}</p>`);
  } catch (error) {
    document.write(error.message);
  }
}
