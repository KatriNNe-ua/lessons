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
  function playGame(countEl, min, max) {
    const winArr = getArr(countEl, min, max);
    let winTotal = 0;
    let userChoose;
    do {
      userChoose = parseInt(
        prompt(`Ви бажаєте вибирати номер від 1 до ${countEl}`)
      );
      if (userChoose > 0 && userChoose <= countEl) {
        winTotal += winArr[userChoose - 1];
        alert(
          `Ви одержали: ${
            winArr[userChoose - 1]
          }. Ваш сумарний виграш: ${winTotal}`
        );
      }
    } while (userChoose);
    return winTotal;
  }

  const userCountArr = parseInt(prompt("Яка кількість елементів?"));
  const userSumWinTotal = playGame(userCountArr, -500, 500);
  document.write(`Ваш сумарний виграш: ${userSumWinTotal}`);
}
