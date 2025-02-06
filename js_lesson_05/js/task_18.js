"use strict";

//Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

if (confirm("Почати тестування?")) {
  let dayTemperature;
  let counter = 0;
  let allTemperature =0;
  do {
    dayTemperature = parseInt(prompt(`Введіть сьогоднішню температуру`));
    if (isFinite(dayTemperature)) {
      counter++;
      allTemperature += dayTemperature;
    }
  } while (isFinite(dayTemperature));
  const averageTemperature = (allTemperature / counter).toFixed(1);
  document.write(`Cередня температура за рік = ${averageTemperature}`);
}
