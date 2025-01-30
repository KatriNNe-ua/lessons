"use strict";

//Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

//Крок 0. Позначення
// згенероване число - generatedNumber
// min згенероване число - minGeneratedNumber
// max згенероване число - maxGeneratedNumber
// перше число від користувача  - firstNumberUser
// друге число від користувача   - secondNumberUser

//Крок 1. Вводимо необхідні данні
const firstNumberUser = parseInt(
  prompt(
    "Згенероване число від 1 до 5. Спробуйте вгадати за 2 спроби. Спроба №1:",
    ""
  )
);
const secondNumberUser = parseInt(
  prompt(
    "Згенероване число від 1 до 5. Спробуйте вгадати за 2 спроби. Спроба №2:",
    ""
  )
);
const minGeneratedNumber = 1;
const maxGeneratedNumber = 5;

//Крок 2. Обчислення результату та  Ввиведення результатів
const generatedNumber =
  Math.floor(Math.random() * (maxGeneratedNumber - minGeneratedNumber + 1)) +
  minGeneratedNumber;

if (isNaN(firstNumberUser) && isNaN(secondNumberUser)) 
  document.write("Введенні некоректні дані");
else if (
  firstNumberUser === generatedNumber ||
  secondNumberUser === generatedNumber
)
  document.write(`Ви вгадали!!! Було згенероване число ${generatedNumber}`)
  else  document.write(`Спробуйте ще. Було згенероване число ${generatedNumber}`);
