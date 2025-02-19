"use strict";

//Задача 1. Створити функцію, яка за номером місяця повертає його назву.

if (confirm("Почати тестування?")) {
function getNameMonth(num) {
  let res;
  switch (num) {
    case 1:
      res = "Січень";
      break;
    case 2:
      res = "Лютий";
      break;
    case 3:
      res = "Березень";
      break;
    case 4:
      res = "Квітень";
      break;
    case 5:
      res = "Травень";
      break;
    case 6:
      res = "Червень";
      break;
    case 7:
      res = "Липень";
      break;
    case 8:
      res = "Серпень";
      break;
    case 9:
      res = "Вересень";
      break;
    case 10:
      res = "Жовтень";
      break;
    case 11:
      res = "Листопад";
      break;
    case 12:
      res = "Грудень";
      break;
    default:
      res = "Невірний номер місяця";
  }
  return res;
}

const numMonthUser = parseInt(prompt("Введіть номер місяця (1-12)."));

document.write(`Місяць під #${numMonthUser}: ${getNameMonth(numMonthUser)}.`);
}


