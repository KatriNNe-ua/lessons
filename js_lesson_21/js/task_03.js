"use strict";

//Задача 2.  Створити клас Bank, у якому зберігається масив клієнтів. 
class Client {
  constructor(id, name, amountMoney) {
    this.id = id;
    this.name = name;
    this.amountMoney = amountMoney;
  }
  addingMoney(num) {
    this.amountMoney += num;
  }
  withdrawingMoney(num) {
    if (this.amountMoney < num)
      throw new Error(
        `Не вистачає коштів. На рахунку доступно: ${this.amountMoney} грн`
      );
    this.amountMoney -= num;
  }
  toString() {
    return `Client: ${this.name}; id: ${this.id}; Кількість грошей на рахунку: ${this.amountMoney} `;
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
    if (this.amountMoney + this.creditlimit < num)
      throw new Error(
        `Не вистачає коштів. На рахунко доступно: ${this.amountMoney} грн та ліміт кредитних коштів становить ${this.creditlimit} грн`
      );
    if (num <= this.amountMoney) this.amountMoney -= num;
    else {
      this.creditMoney = num - this.amountMoney;
      this.amountMoney = 0;
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

class Bank {
  constructor(clientsList) {
    this.clientsList = clientsList;
  }
  withdrawRegularClients() {
    return this.clientsList.filter((client) => !("creditlimit" in client));
  }
  withdrawGoldenClientClients() {
    return this.clientsList.filter((client) => "creditlimit" in client);
  }
  findTotalAmountMoney() {
    return this.clientsList.reduce(
      (sum, client) => sum + client.amountMoney,
      0
    );
  }
}

const clientsList = [
  new Client("C001", "Іван Іваненко", 8000),
  new Client("C002", "Олена Петрівна", 12000),
  new GoldenClient("G001", "Оксана Коваль", 5000, 3000, 10),
  new GoldenClient("G002", "Андрій Сидоренко", 10000, 5000, 8),
  new Client("C003", "Василь Жук", 7000),
  new GoldenClient("G003", "Марія Ільчук", 2000, 4000, 12),
];


const bank = new Bank(clientsList);

const regularClientsList = bank.withdrawRegularClients();
console.log(`Прості клієнти: ${regularClientsList}`);
const goldenClientClientsList = bank.withdrawGoldenClientClients();
console.log(`Клієнти GoldenClient: ${goldenClientClientsList}`);
const totalAmountMoney = bank.findTotalAmountMoney();
console.log(`Сумарна кількість грошей на рахунку: ${totalAmountMoney}`);




// const cnt = document.querySelector(".test");
// const divEl = document.createElement("div");
// divEl.innerText = `Прості клієнти: ${bank.withdrawRegularClients()}; Клієнти GoldenClient: ${bank.withdrawGoldenClientClients()};  Сумарна кількість грошей на рахунку: ${bank.findTotalAmountMoney()} `;

// if (cnt) cnt.append(divEl);