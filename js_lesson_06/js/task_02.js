"use strict";

//Задача 2. З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.

if (confirm("Почати тестування?")) {
  let counterEvenUser = parseInt(prompt('Введіть необхідну кількість парних чисел, для обчислення суми.'));
  let counterEven = 0
  let sum = 0;
  let num;
  do {
    num = parseFloat(prompt("Введіть число."));
    if (num % 2 === 0 && counterEven < counterEvenUser) {
      sum += num;
      counterEven++;
    }
  } while (num || num===0);

  if(counterEven<counterEvenUser && sum) document.write(`Ви не ввели достатню кількість парних чисел. Сума перших ${counterEven} парних чисел = ${sum}`);
  else if (sum) document.write(`Сума перших ${counterEvenUser} парних чисел = ${sum}`);
  else document.write("Відсутні парні чисела");
}
