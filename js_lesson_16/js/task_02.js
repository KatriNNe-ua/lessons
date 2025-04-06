"use strict";

//Задача 2. Створити клас TMoney для роботи з грошовими сумами.
// Сума повинна зберігатися у вигляді доларового еквіваленту.
// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях,
//  та визначення курсу долара, при якому сума у гривнях збільшиться на 100.
//  Курс долара зберігати в окремому полі.

if (confirm("Почати тестування?")) {
  class TMoney {
    constructor(amountHryvnias, rateDollar) {
      this.RateDollar = rateDollar;
      this.MoneyBalance = amountHryvnias;
    }
    //---------------------------------------
    #rateDollar;
    #moneyBalance;
    //---------------------------------------
    get RateDollar() {
      return this.#rateDollar;
    }
    set RateDollar(newRate) {
      if (newRate <= 0)
        throw new Error("Курс долара не може бути 0 або від'ємним числом ");
      this.#rateDollar = newRate;
    }
    //---------------------------------------
    get MoneyBalance() {
      return this.#moneyBalance * this.RateDollar;
    }
    set MoneyBalance(newAmount) {
      if (newAmount < 0)
        throw new Error("Сума на рахунку не може бути меншою за 0");
      this.#moneyBalance = newAmount / this.RateDollar;
    }
    //---------------------------------------
    addingMoneyInHryvnias(numHryvnias) {
      if (numHryvnias < 0)
        throw new Error("Сума, яку потрібно додати, не може бути меншою за 0");
      this.MoneyBalance += numHryvnias;
    }

    subtractingMoneyInHryvnias(numHryvnias) {
      if (numHryvnias < 0)
        throw new Error(
          "Сума, яку потрібно вилучити, не може бути меншою за 0"
        );
      if (this.MoneyBalance < numHryvnias)
        throw new Error("Недостатньо коштів на рахунку");
      this.MoneyBalance -= numHryvnias;
    }
    //---------------------------------------
    getDollarExchangeRateAmountInHryvniasIncreaseByNum(num) {
      if (this.MoneyBalance === 0) throw new Error("На рахунку відсутні кошти");
      return (this.RateDollar * (this.MoneyBalance + num)) / this.MoneyBalance;
    }
    //---------------------------------------
    toString() {
      return `<p>Сума на рахунку: ${this.MoneyBalance}грн / $${
        this.MoneyBalance / this.RateDollar
      }</p>`;
    }
  }
  //--------------------------------------------
  try {
    const userMoney = new TMoney(2000, 40);
    document.write(userMoney);
    userMoney.addingMoneyInHryvnias(500);
    document.write(userMoney);
    userMoney.subtractingMoneyInHryvnias(1000);
    document.write(userMoney);
    const resNewRate =
      userMoney.getDollarExchangeRateAmountInHryvniasIncreaseByNum(100);
    document.write(
      `Kурс долара, при якому сума у гривнях збільшиться на 100: ${resNewRate.toFixed(
        2
      )}`
    );
  } catch (error) {
    document.write(error.message);
  }
}
