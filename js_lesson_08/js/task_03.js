"use strict";

//Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
if (confirm("Почати тестування?")) {
  const listNumeStudent = ["Максим", "Іван", "Іван", "Евген", "Іван"];
  let count = 0;
  for (let i = 0; i < listNumeStudent.length; i++) {
    if (listNumeStudent[i] === "Іван") count++;
  }
  document.write(`${count} раз(ів) зустрічається ім’я «Іван»`);
}
