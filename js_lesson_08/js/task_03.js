"use strict";

//Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
if (confirm("Почати тестування?")) {
  function getCountName(arrName, name) {
    let count = 0;
    for (let i = 0; i < arrName.length; i++) {
      if (arrName[i] === name) count++;
    }
    return count;
  }
  const listNumeStudent = ["Максим", "Іван", "Іван", "Евген", "Іван"];
  const countName = getCountName(listNumeStudent, "Іван");

  document.write(`${countName} раз(ів) зустрічається ім’я «Іван»`);
}
