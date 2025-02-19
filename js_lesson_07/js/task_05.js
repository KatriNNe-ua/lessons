"use strict";

//Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно 
//декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm("Почати тестування?")) {
  function getFindCounterNum(num1, num2, num3) {
    let evenCounter = 0;
    if (num1 % 2 === 0) evenCounter++;
    if (num2 % 2 === 0) evenCounter++;
    if (num3 % 2 === 0) evenCounter++;
    let positiveCounter = 0;
    if (num1 > 0) positiveCounter++;
    if (num2 > 0) positiveCounter++;
    if (num3 > 0) positiveCounter++;
    let greater100Counter = 0;
    if (num1 > 100) greater100Counter++;
    if (num2 > 100) greater100Counter++;
    if (num3 > 100) greater100Counter++;
    return `Kiлькiсть парних чисел: ${evenCounter}<br>Kiлькiсть додатних чисел: ${positiveCounter}<br>Kiлькiсть чисел більших за 100: ${greater100Counter}`;
  }



  const num1User = parseFloat(prompt("Введіть перше число"));
  const num2User = parseFloat(prompt("Введіть друге число"));
  const num3User = parseFloat(prompt("Введіть третє число"));

  document.write(
    `Вами було введено числа: ${num1User}, ${num2User}, ${num3User}<br> ${getFindCounterNum(
      num1User,
      num2User,
      num3User
    )}`
  );
}

