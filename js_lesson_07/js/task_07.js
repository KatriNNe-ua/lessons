"use strict";

//Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і
//стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function createTable(row, col) {
  document.write(`<table>`);
let message = "повідомлення";
  for (let tr = 1; tr <= row; tr++) {
    document.write(`<tr>`);
    for (let td = 1; td <= col; td++) {
      document.write(`<td>${message}</td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
createTable(8, 3);
