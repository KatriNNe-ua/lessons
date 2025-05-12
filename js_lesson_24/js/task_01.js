"use strict";

//Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
  constructor(numberPhone) {
    this.numberPhone = numberPhone;
  }
  getNameOperator() {
    const num = this.numberPhone.replace(/\s|-/g, "");
    let res;
    if (/^\+?3?8?\(?(?:050|066|095|099|075)\)?\d{7}$/.test(num))
      res = "Vodafone";
    else if (/^\+?3?8?\(?(?:067|068|096|097|098)\)?\d{7}$/.test(num))
      res = "Kyivstar";
    else if (/^\+?3?8?\(?(?:063|073|093|077)\)?\d{7}$/.test(num)) res = "lifecell";
    else if (/^\+?3?8?\(?(?:094|089)\)?\d{7}$/.test(num)) res = "Інтертелеком";
    else res = "Оператор невідомий";
    return res;
  }

  [Symbol.toPrimitive](hint) {
    return hint === "string" ? this.getNameOperator() : this.numberPhone;
  }
}
const numberPhone = new PhoneNumber(" +38(050)00-00-000 ");
document.write(numberPhone);

