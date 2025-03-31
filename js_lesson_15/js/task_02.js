"use strict";

//Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті
//  є заєць і 0 в іншому випадку.

// Тир
// Поля(властивості):
//  - Масив, у якому зберігається поле з зайцями
// Методи (дії):
// - Метод пострілу (задається позиція пострілу)
// - Виведення ігрового поля

if (confirm("Почати тестування?")) {
  function ShootingRange(arrField) {
    this.arrField = arrField;
  }
  ShootingRange.prototype.shotMethod = function () {
    let userShootInd;
    do {
      userShootInd =
        parseInt(
          prompt(
            `Введіть номер ячейки для пострілу від 1 до ${this.arrField.length}`
          )
        ) - 1;
    } while (userShootInd < 0 || userShootInd >= this.arrField.length);

    if (this.arrField[userShootInd] === 0) {
      this.arrField[userShootInd] = "❌";
      alert("Промах");
    } else if (this.arrField[userShootInd] === 1) {
      this.arrField[userShootInd] = "🐰";
      alert("В ціль!");
    } else if (
      this.arrField[userShootInd] === "🐰" ||
      this.arrField[userShootInd] === "❌"
    )
      alert("Сюди ви вже стрiляли");
  };
  ShootingRange.prototype.outputField = function () {
    const playArr = this.arrField.map((el) =>
      el === 0 || el === 1 ? "❓" : el
    );
    document.write(`<p>${playArr.join("  |  ")}</p>`);
  };

  //=========================================

  function getPlayingField(lengthField = 10, countHare = 5) {
    const arr = new Array(lengthField).fill(0);
    for (let i = 0; i < countHare; i++) {
      const randInd = Math.floor(Math.random() * lengthField);
      if (arr[randInd] === 0) arr[randInd] = 1;
      else i--;
    }
    return arr;
  }

  //==============================================
  const arrField = getPlayingField();
  const myGame = new ShootingRange(arrField);
  console.log(myGame);
  myGame.shotMethod();
  myGame.outputField();
  myGame.shotMethod();
  myGame.outputField();
}
