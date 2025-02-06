"use strict";

//Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:

const numberUser = parseInt(prompt("Введіть кількість абзаців", ""));
for (let num = 1; num <= numberUser; num++) {
  document.write(`<h2>Заголовок ${num}</h2>`);
  for (let paragraph = 1; paragraph <= num; paragraph++) {
    document.write(`<p>Розділ ${num}, параграф ${paragraph}</p>`);
  }
}
