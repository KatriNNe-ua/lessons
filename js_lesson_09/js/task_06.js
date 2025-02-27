"use strict";

//Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
if (confirm("Почати тестування?")) {
  function getArrUser(lengthArr) {
    const userArr = [];
    for (let i = 0; i < lengthArr; i++) {
      const userNum = parseFloat(prompt(`Ввeдіть ${i + 1} число для масива`));
      userArr.push(userNum);
    }
    return userArr;
  }
  function getArrayMoreThanFirstElementMultiply(arrElement, numMultiply = 2) {
    arrElement.forEach((num, index, array) => {
      if (num > array[0]) array[index] = num * numMultiply;
    });
    return arrElement;
  }

  const userLengthArr = parseInt(prompt("Ввeдіть кількість елементів"));
  const userArr = getArrUser(userLengthArr);

  const arrMultiply = getArrayMoreThanFirstElementMultiply(userArr);
  document.write(arrMultiply);
}
