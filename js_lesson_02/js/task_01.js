"use strict";

//Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

//Крок 0. Позначення
//Число 1 - numberOne
//Число 2 - numberTwo
//Сума чисел - sum
//Добуток чисел - multiply
//Частка чисел - division

//Крок 1. Вводимо необхідні данні
const numberOne = parseFloat(prompt("Введіть перше число", ""));
const numberTwo = parseFloat(prompt("Введіть друге число", ""));

//Крок 2. Обчислення результатів
const sum = numberOne + numberTwo;
const division = (numberOne / numberTwo).toFixed(3);
const multiply = numberOne * numberTwo;

//КРОК 3. Ввиведення результатів 
document.write(`Сума = ${sum} <br> <br>`);
document.write(`Добуток = ${multiply} <br> <br>`);
document.write(`Частка = ${division}`);
