"use strict";

//Задача 5. Вивести таблицю

let numberCounter = 1;
document.write(`<table>`);
for (let tr = 1; tr <= 3; tr++) {
  document.write(`<tr>`);
  for (let td = 1; td <= 3; td++) {
    document.write(`<td>${numberCounter}</td>`);
    ++numberCounter;
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
