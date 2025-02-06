"use strict";

//Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

let numberCounter = 1;
for (let table = 1; table <= 3; table++) {
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
}
