"use strict";

//Задача 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
if (confirm("Почати тестування?")) {
const sizeN = 4;
const sizeM = 4;
const locationShipN = 1 + Math.floor(Math.random() * sizeN);
const locationShipM = 1 + Math.floor(Math.random() * sizeM);
let numberShells = parseInt(prompt("Введіть кількість снарядів", ""));
let counter = numberShells;
let result;

for (let i = 1; i <= numberShells; i++) {
  const locationUserN = parseInt(prompt(`Введіть число від 1 до ${sizeN}`, ""));
  const locationUserM = parseInt(prompt(`Введіть число від 1 до ${sizeM}`, ""));
  if (locationShipN === locationUserN && locationShipM === locationUserM) {
    alert("Вітаю!!! Ви потопили корабель");
    result = "Корабель потоплен!";
    break;
  } else {
    --counter;
    alert(`Промах. У вас залишилось ще ${counter} снарядів`);
  }
  result = "Корабель залишився на воді";
}
document.write(`${result}`);
}