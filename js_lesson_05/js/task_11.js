"use strict";

//Задача 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

if (confirm('Почати тестування?')) {

const numberUser = parseInt(prompt("Введіть загадане число (від 1 до 10)", ""));
let result = 'не вгадав'
for (let i = 1; i <= 3; i++) {
  const numberComputer = 1 + Math.floor(Math.random() * 10);
  if (numberComputer === numberUser) {
    alert(
      `Спроба #${i}: число ${numberComputer}\nКомп'ютер вгада ваше число!!!`
    );
result = "вгадав";
    break;

  }
      alert(`Спроба #${i}: число ${numberComputer}\nКомп'ютер не вгадав `);
}
document.write(`Комп’ютер ${result} число користувача`);

}