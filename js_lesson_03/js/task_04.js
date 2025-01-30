"use strict"

//Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).


//Крок 0. Позначення
//вік людини - personAge


//Крок 1. Вводимо необхідні данні
const personAge = parseInt(prompt("Введіть вік людини", ""));

//Крок 2. Обчислення результату. виведення результатів
if (isNaN(personAge) || personAge < 0)
  document.write("Введенні некоректні дані");
else if (personAge < 7) document.write("Дитинa у садочку");
else if (personAge < 17) document.write("Школяр");
else if (personAge < 23) document.write("Студент");
else if (personAge < 65) document.write("Працівник");
else document.write("Пенсіонер");


