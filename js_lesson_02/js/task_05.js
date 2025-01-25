"use strict"

//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

//Крок 0. Позначення
//кількість секунд - numberOfSeconds
//пройшло годин  - hoursPassed
//пройшло хвилин - minutesPassed
//кількість секунд в годині - secondsInHour
//кількість секунд в хвилині - secondsInMinute 

//Крок 1. Вводимо необхідні данні
const secondsInHour = 3600;
const secondsInMinute = 60;
const numberOfSeconds = parseInt(
  prompt("Введіть кількість секунд, що пройшла від початку доби", "")
);

//Крок 2. Обчислення результату
const hoursPassed = Math.trunc(numberOfSeconds / secondsInHour);
const minutesPassed = Math.floor(
  (numberOfSeconds % secondsInHour) / secondsInMinute
);

//КРОК 3. Ввиведення результатів
document.write(`Від початку доби пройшло ${hoursPassed} год. ${minutesPassed }хв.`);