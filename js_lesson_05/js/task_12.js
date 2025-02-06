"use strict";

//Задача 9. Користувач загадує число. Комп’ютер задає питання поки не
// вгадає число користувача (використати confirm).

if (confirm("Почати тестування?")) {
const numberUser = parseInt(prompt("Введіть загадане число (від 1 до 10)", ""));
let counter = 0;
let numberComputer;

do {
  counter++;
  numberComputer = 1 + Math.floor(Math.random() * 10);
  alert(`Спроба #${counter}: число ${numberComputer}?`);
} while (numberUser !== numberComputer);

document.write(`Комп’ютер вгадав число користувача з ${counter} спроби`);
}
