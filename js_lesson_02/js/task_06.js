"use strict";

//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити 
//вартість кожного товару окремо та загальну вартість. 
//Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

//Крок 0. Позначення
//вартість товару #1 - costProduct1
//кількість одиниць товару #1 - numberUnitsProduct1
//вартість товарів #1 - totalCostProducts1
//вартість товару #2 - costProduct2
//кількість одиниць товару #2 - numberUnitsProduct2
//вартість товарів #2 -totalCostProducts2
//вартість товару #3 - costProduct2
//кількість одиниць товару #3 - numberUnitsProduct3
//вартість товарів #3 - totalCostProducts3
//загальну вартість товарів - totalCostProducts

//Крок 1. Вводимо необхідні данні
const numberUnitsProduct1 = parseInt(
  prompt("Введіть кількість одиниць товару #1", "")
);
const costProduct1 = parseFloat(prompt("Введіть вартість товару #1", ""));


const numberUnitsProduct2 = parseInt(
  prompt("Введіть кількість одиниць товару #2", "")
);
const costProduct2 = parseFloat(prompt("Введіть вартість товару #2", ""));


const numberUnitsProduct3 = parseInt(
  prompt("Введіть кількість одиниць товару #3", "")
);
const costProduct3 = parseFloat(prompt("Введіть вартість товару #3", ""));

//Крок 2. Обчислення результату
const totalCostProducts1 = +(numberUnitsProduct1 * costProduct1).toFixed(2);
const totalCostProducts2 = +(numberUnitsProduct2 * costProduct2).toFixed(2);
const totalCostProducts3 = +(numberUnitsProduct3 * costProduct3).toFixed(2);
const totalCostProducts = totalCostProducts1 + totalCostProducts2 + totalCostProducts3;


//КРОК 3. Ввиведення результатів
document.write(
  `Товар #1:   ${numberUnitsProduct1}шт.............${totalCostProducts1}грн <br> 
   Товар #2:   ${numberUnitsProduct2}шт.............${totalCostProducts2}грн <br> 
   Товар #3:   ${numberUnitsProduct3}шт.............${totalCostProducts3}грн <br> <br> 
   Усього.................................${totalCostProducts}грн`
);
