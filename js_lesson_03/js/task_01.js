"use strict";

//Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//Крок 0. Позначення
// ім'я першої дитини - firstChildName
// ім'я другої дитини - secondChildName
// кількість цукерок у першої дитини - numberCandiesFirstChild
// кількість цукерок у другої дитини - numberCandiesSecondChild

//Крок 1. Вводимо необхідні данні
const firstChildName = prompt("Введіть ім'я першої дитини", "");
const numberCandiesFirstChild = parseInt(
  prompt("Введіть кількість цукерок у першої дитини", "")
);

const secondChildName = prompt("Введіть ім'я другої дитини", "");
const numberCandiesSecondChild = parseInt(
  prompt("Введіть кількість цукерок у другої дитини", "")
);

//Крок 2. Обчислення результату та Ввиведення результатів

if (
  isNaN(numberCandiesFirstChild) ||
  isNaN(numberCandiesSecondChild) ||
  numberCandiesFirstChild < 0 ||
  numberCandiesSecondChild < 0 ||
  firstChildName === null ||
  firstChildName.trim() === "" ||
  secondChildName === null ||
  secondChildName.trim() === ""
)
  document.write("Введенні некоректні дані");
else if (numberCandiesFirstChild > numberCandiesSecondChild)
  document.write(`У ${firstChildName} більше цукерок`);
else if (numberCandiesFirstChild < numberCandiesSecondChild)
  document.write(`У ${secondChildName} більше цукерок`);
else document.write("Кількість цукерок однакова"); 
