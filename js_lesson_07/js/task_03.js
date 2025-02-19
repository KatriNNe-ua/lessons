"use strict";

//Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm("Почати тестування?")) {
  function getFindWorkingDay(numDay) {
    return numDay >= 1 && numDay <= 5 ? "робочий" : "не робочий";
  }

  const numUserDay = parseInt(prompt("Введіть номер дня (1-7)."));

  document.write(`День #${numUserDay}: ${getFindWorkingDay(numUserDay)}.`);
}
