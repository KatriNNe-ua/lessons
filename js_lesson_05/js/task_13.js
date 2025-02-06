"use strict";

//Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm("Почати тестування?")) {
  let minNumberUser = parseInt(prompt("Введіть перше число", ""));
  let maxNumberUser = parseInt(prompt("Введіть друге число", ""));

  if (minNumberUser > maxNumberUser) {
    let num = minNumberUser;
    minNumberUser = maxNumberUser;
    maxNumberUser = num;
  }
  let resultSum = 0;
  for (let i = minNumberUser; i <= maxNumberUser; i++) {
    if (i % 2 !== 0) {
      resultSum += i;
    }
  }
  document.write(`Cумa всіх непарних чисел = ${resultSum}`);
}
