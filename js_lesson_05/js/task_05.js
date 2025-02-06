"use strict";

//Задача 2. Створити 10 елементів для введення цін продуктів

for (let num = 1; num <= 10; num++) {
  document.write(
    `Product#${num}<input class="form__input" autocomplete="off" placeholder="Введіть ціну продукта" name="form[]" type="number"><br>`
  );
}
