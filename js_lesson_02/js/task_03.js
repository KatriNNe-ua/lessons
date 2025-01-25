"use strict"

//Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

//Крок 0. Позначення
//вартість одиниці товару - unitPrice 
//загальну вартість - totalCost
//кількість - quantityOfGoods
//ПДВ (5% від загальної вартості) - tax
//сума податку - taxAmount

//Крок 1. Вводимо необхідні данні
const quantityOfGoods = parseInt(prompt("Введіть кількість товару", ""));
const unitPrice  = parseFloat(prompt("Введіть вартість одиниці товару", ""));
const tax = 5;

//Крок 2. Обчислення результату
const totalCost = unitPrice * quantityOfGoods;
const taxAmount = (totalCost * tax / 100).toFixed(2);

//КРОК 3. Ввиведення результатів
document.write(`Загальну вартість товару = ${totalCost} <br> <br>`);
document.write(`ПДВ = ${taxAmount}`);