"use strict";

//Задача 3.  Користувач вводить кількість елементів. Створити масив, у якому перші
//5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
if (confirm("Почати тестування?")) {
  function createArr(lengthArr, firstEl = 1, secondEl = 7) {
    const arr = new Array(lengthArr);
    arr.fill(firstEl, 0, 5);
    arr.fill(secondEl, 5);
	return arr
  }
  const userLengthArr = parseInt(prompt("Ввeдіть кількість елементів (>5)"));
  const useArr = createArr(userLengthArr);
  document.write(useArr);
}
