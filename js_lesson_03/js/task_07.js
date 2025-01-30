"use strict";

//Задача 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

//Крок 0. Позначення
// номер місяця - monthNumber


//Крок 1. Вводимо необхідні данні
const monthNumber = parseInt(prompt("Введіть номер місяця", ""));

//Крок 2. Обчислення результату. Ввиведення результатів
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
   document.write("Зима");
    break;
  case 3:
  case 4:
  case 5:
    document.write("Весна");
    break;
  case 6:
  case 7:
  case 8:
    document.write("Літо");
    break;
  case 9:
  case 10:
  case 11:
    document.write("Осінь");
    break;
  default:
    document.write("Введенні некоректні дані");
    break;
}

