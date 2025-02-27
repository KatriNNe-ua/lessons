"use strict";

//Задача 1. Користувач вводить кількість елементів. Створити масив,
//що складається з вказаної кількості елементів заповнених нулями.
if (confirm("Почати тестування?")) {
  function createArr(lengthArr, el = 0) {
    const arr = new Array(lengthArr);
    arr.fill(el);
    return arr;
  }
  const userLengthArr = parseInt(prompt("Ввeдіть кількість елементів"));
  const useArr = createArr(userLengthArr);
  document.write(useArr);
}
