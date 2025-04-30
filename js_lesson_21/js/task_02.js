"use strict";

//Задача 1. Створити клас Client. На основі цього класу створити клас GoldenClient
class Client {
  constructor(id, name, amountMoney) {
    this.id = id;
    this.name = name;
    this.AmountMoney = amountMoney;
  }
  #amountMoney;
  get AmountMoney() {
    return this.#amountMoney;
  }
  set AmountMoney(newAmountMoney) {
	if (newAmountMoney<0) throw new Error(`Сума на рахунку не може бути від'ємною.`);
 this.#amountMoney = newAmountMoney;
  }
  addingMoney(num) {
    this.AmountMoney += num;
  }
  withdrawingMoney(num) {
    this.AmountMoney -= num;
  }
  toString() {
    return `Client: ${this.name}; id: ${this.id}; Кількість грошей на рахунку: ${this.AmountMoney} `;
  }
}

class GoldenClient extends Client {
  constructor(id, name, amountMoney, creditlimit, interestRateCredit) {
    super(id, name, amountMoney);
    this.creditlimit = creditlimit;
    this.interestRateCredit = interestRateCredit;
    this.creditMoney = 0;
  }
  withdrawingMoney(num) {
    if (this.AmountMoney + this.creditlimit < num)
      throw new Error(
        `Не вистачає коштів. На рахунко доступно: ${this.AmountMoney} грн та ліміт кредитних коштів становить ${this.creditlimit} грн`
      );
    if (num <= this.AmountMoney) this.AmountMoney -= num;
    else {
      this.creditMoney = num - this.AmountMoney;
      this.AmountMoney = 0;
      this.creditlimit -= this.creditMoney;
    }
  }
  determiningPenaltiesUseCreditFunds() {
    return (this.creditMoney * this.interestRateCredit) / 100;
  }
  toString() {
    return `${super.toString()}; Загальний ліміт кредитних коштів: ${
      this.creditlimit + this.creditMoney
    } грн; Доступний ліміт кредитних коштів: ${
      this.creditlimit
    } грн; Відсоток за використання кредитних коштів: ${
      this.interestRateCredit
    }%; Нарахована пеня за використання кредитних коштів: ${this.determiningPenaltiesUseCreditFunds()} грн`;
  }
}

// тестування виводу інформації
try {
  const vipClient = new GoldenClient("G001", "Оксана", 5000, 3000, 10);
  vipClient.withdrawingMoney(6000);

  const cnt = document.querySelector(".test");
  const divEl = document.createElement("div");
  divEl.innerText = vipClient;

  if (cnt) cnt.append(divEl);
} catch (err) {
  console.log(err.message);
}
