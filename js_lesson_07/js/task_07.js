"use strict";

//Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і
//стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function CreateTable(row, col) {
  document.write(`<table>`);
  let num = 1;
  for (let tr = 1; tr <= row; tr++) {
    document.write(`<tr>`);
    for (let td = 1; td <= col; td++) {
      document.write(`<td>повідомлення</td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
CreateTable(8, 3);
