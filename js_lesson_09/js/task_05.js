"use strict";

//Задача 5. Дано масив елементів. Знайти добуток додатних елементів
if (confirm("Почати тестування?")) {
  function getArrUser(lengthArr) {
    const userArr = [];
    for (let i = 0; i < lengthArr; i++) {
      const userNum = parseFloat(prompt(`Ввeдіть ${i + 1} число для масива`));
      userArr.push(userNum);
    }
    return userArr;
  }
  function getProductPositiveNum(arr) {
    let prod = 1;
    let positiv = false;
    for (let el of arr) {
      if (el > 0) {
        prod *= el;
        positiv = true;
      }
    }
    if (positiv === false)
      throw new Error("У масиві відсутні додатні елементи");
    return prod;
  }
  const userLengthArr = parseInt(prompt("Ввeдіть кількість елементів"));
  const userArr = getArrUser(userLengthArr);
  try {
    const prodUserArr = getProductPositiveNum(userArr);
    document.write(`добуток додатних елементів: ${prodUserArr}`);
  } catch (error) {
    document.write(error.message);
  }
}
