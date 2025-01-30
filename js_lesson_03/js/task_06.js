"use strict";

//Задача 6.З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.


//Крок 0. Позначення
// номер дня тижня - dayWeekNumber

//Крок 1. Вводимо необхідні данні
const dayWeekNumber = parseInt(prompt("Введіть номер дня тижня", ""));

//Крок 2. Обчислення результату. Ввиведення результатів

switch (dayWeekNumber) {
  case 1:
    document.write("Понеділок");
    break;
  case 2:
    document.write("Вівторок");
    break;
  case 3:
    document.write("Середа");
    break;
  case 4:
    document.write("Четвер");
    break;
  case 5:
    document.write("П'ятниця");
    break;
  case 6:
    document.write("Субота");
    break;
  case 7:
    document.write("Неділя");
    break;
  default:
    document.write("Введенні некоректні дані");
    break;
}