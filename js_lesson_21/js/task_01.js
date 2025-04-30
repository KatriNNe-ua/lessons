"use strict";

//Задача 0.  Розробити клас Person (поля:ім'я, вік, адреса; методи: toString,
//  визначення року народження). На основі класу Person  розробити клас Worker
//  (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування;
//  методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)

class Person {
  constructor(name, age, address, currentYear) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.currentYear = currentYear;
  }
  toString() {
    return `User: ${this.name}; вік: ${this.age} років; адреса: ${this.address}`;
  }
  determineYearBirth() {
    return this.currentYear - this.age;
  }
}

class Worker extends Person {
  constructor(
    name,
    age,
    address,
    currentYear,
    position,
    salary,
    taxPercentages
  ) {
    super(name, age, address, currentYear);
    this.position = position;
    this.salary = salary;
    this.taxPercentages = taxPercentages;
  }
  determineAmountMoneyPaid() {
    return 12 * this.salary;
  }
  determineAmountTaxes() {
    return (this.determineAmountMoneyPaid() * this.taxPercentages) / 100;
  }
  toString() {
    return `${super.toString()}; посада: ${this.position}; зарплата: ${
      this.salary
    } грн/міс; податок: ${
      this.taxPercentages
    }%; виплачено за рік: ${this.determineAmountMoneyPaid()} грн; податки: ${this.determineAmountTaxes()} грн`;
  }
}

// тестування виводу інформації
const user = new Worker("Роман", 30, "Київ", 2025, "Менеджер", 20000, 18);

const cnt = document.querySelector(".test");
const divEl = document.createElement("div");
divEl.innerText = user;

if (cnt) cnt.append(divEl);
