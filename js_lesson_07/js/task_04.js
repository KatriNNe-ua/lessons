"use strict";

//Задача 3. Створити окремі функції, які для 4 чисел знаходять:<br>
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm("Почати тестування?")) {
  function getSum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return num1 + num2 + num3 + num4;
  }
  function getProduct(num1 = 1, num2 = 1, num3 = 1, num4 = 1) {
    return num1 * num2 * num3 * num4;
  }

  function getAverage(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return (num1 + num2 + num3 + num4) / 4;
  }

  function getMinNum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return Math.min(num1, num2, num3, num4);
  }

//   function getMinNum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
//     let min = num1;
//     if (num2 < min) min = num2;
//     if (num3 < min) min = num3;
//     if (num4 < min) min = num4;
//     return min;
//   }

  const num1User = parseFloat(prompt("Введіть перше число"));
  const num2User = parseFloat(prompt("Введіть друге число"));
  const num3User = parseFloat(prompt("Введіть третє число"));
  const num4User = parseFloat(prompt("Введіть четверте число"));

  document.write(
    `Вами було введено числа: ${num1User}, ${num2User}, ${num3User}, ${num4User}<br>Сума чисел: ${getSum(
      num1User,
      num2User,
      num3User,
      num4User
    )}<br>Добуток чисел: ${getProduct(
      num1User,
      num2User,
      num3User,
      num4User
    )}<br>Середнє арифметичне чиселo: ${getAverage(
      num1User,
      num2User,
      num3User,
      num4User
    )}<br>Мінімальне значення чисел: ${getMinNum(
      num1User,
      num2User,
      num3User,
      num4User
    )}`
  );
}
