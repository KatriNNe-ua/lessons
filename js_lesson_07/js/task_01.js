"use strict";
//Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm("Почати тестування?")) {
function getNameSeason(num) {
  let res;
  switch (num) {
    case 12:
    case 1:
    case 2:
      res = "зима";
      break;
    case 3:
    case 4:
    case 5:
      res = "весна";
      break;
    case 6:
    case 7:
    case 8:
      res = "літо";
      break;
    case 9:
    case 10:
    case 11:
      res = "осінь";
      break;
    default:
      res = "Невірний номер місяця";
  }
  return res;
}

const numUser = parseInt(prompt('Введіть номер місяця (1-12).'))

document.write(
  `Місяць #${numUser} належить до пори року: ${getNameSeason(numUser)}.`
);
}



