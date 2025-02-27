"use strict";

//Задача 2. Користувач вводить кількість елементів. Створити масив, у якому перша
//половина заповнена 1-цями, а друга заповнена 7-ками.
if (confirm("Почати тестування?")) {
  function createArr(lengthArr, firstHalfEl = 1, secondHalfEl = 7) {
	const arr = new Array(lengthArr)
	const half = Math.floor(lengthArr / 2);
	arr.fill(firstHalfEl, 0, half)
	arr.fill(secondHalfEl, half);
	return arr
  }
   const userLengthArr = parseInt(prompt("Ввeдіть кількість елементів"));
   const useArr = createArr(userLengthArr);
   document.write(useArr);
}
