"use strict";

//Задача 2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

//Крок 0. Позначення
// ціна товару - priceProduct
// кількість грошей - amountMoney
// ціна лотереї - lotteryPrice

//Крок 1. Вводимо необхідні данні
const priceProduct = parseFloat(prompt("Введіть ціну товару", ""));
const amountMoney = parseFloat(prompt("Введіть кількість грошей ", ""));
const lotteryPrice = 4;

//Крок 2. Обчислення результату та Ввиведення результатів
if (
  isNaN(priceProduct) ||
  isNaN(amountMoney) ||
  priceProduct <= 0
)
  document.write("Введенні некоректні дані");
else if (priceProduct > amountMoney) document.write("У покупці відмовлено, не вистачає грошей");
else if (amountMoney - priceProduct >= lotteryPrice)
  document.write(
    "Покупка здійсненна. Пропонуємо Вам ще купити лотерею за 4грн"
  );
else document.write("Покупка здійсненна.");
