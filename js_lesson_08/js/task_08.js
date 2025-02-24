"use strict";

//Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума
// (елементи заповнюються випадковим чином значеннями від -500 до 500).
//Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться).
//Знаходити сумарний виграш.
if (confirm("Почати тестування?")) {
  function getArr(countEl, min, max) {
    const newArr = [];
    for (let i = 0; i < countEl; i++) {
      const num = min + Math.floor(Math.random() * (max - min + 1));
      newArr.push(num);
    }
    return newArr;
  }

  const userCountArr = parseInt(prompt("Яка кількість номерів елементів?"));
  const winArr = getArr(userCountArr, -500, 500);
  let winTotal = 0;
  let userChoose;
  do {
    userChoose = parseInt(prompt(`Ви бажаете вибирати номер від 1 до ${userCountArr}`));
    if (userChoose > 0 && userChoose <= userCountArr) {
      winTotal += winArr[userChoose - 1];
      alert(
        `Ви одержали: ${
          winArr[userChoose - 1]
        }. Ваш сумарний виграш: ${winTotal}`
      );
    }
  } while (userChoose);

document.write(`Ваш сумарний вийграш: ${winTotal}`);
}