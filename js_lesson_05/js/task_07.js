"use strict";

//Задача 4. Вивести таблицю з 3 рядків і 7 стовпців

document.write(` <table>`);
for (let tr = 1; tr <= 3; tr++) {
  document.write(` <tr>`);
  for (let td = 1; td <= 7; td++) {
    document.write(`  <td>${td}</td>`);
  }
  document.write(` </tr>`);
}
document.write(`
  </table>`);
