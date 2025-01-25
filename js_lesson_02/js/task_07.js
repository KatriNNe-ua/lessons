"use strict";

//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

//Крок 0. Позначення
//Min номер місяця - minMonthNumber
//Max номер місяця - maxMonthNumber
//Min номер дня - minDayNumber
//Max номер дня - maxDayNumber
//випадковий номер місяця - randomMonthNumber
//випадковий номер дня - randomDayNumber
//сума випадкового номера місяця та випадкового номера дня - randomSum

//Крок 1. Вводимо необхідні данні
const minMonthNumber = 1;
const maxMonthNumber = 12;
const minDayNumber = 0;
const maxDayNumber = 6;

//Крок 2. Обчислення результату
const randomMonthNumber =
  Math.floor(Math.random() * (maxMonthNumber - minMonthNumber + 1)) +
  minMonthNumber;
const randomDayNumber =
  Math.floor(Math.random() * (maxDayNumber - minDayNumber + 1)) + minDayNumber;
const randomSum = randomMonthNumber + randomDayNumber;

//КРОК 3. Ввиведення результатів
document.write(
  `Cума випадкового номера місяця та випадкового номера дня: ${randomSum}`
);


