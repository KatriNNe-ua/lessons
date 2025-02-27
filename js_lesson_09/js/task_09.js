"use strict";

//Задача 9. Дано масив імен. Сформувати масив з перших літер цих імен.
if (confirm("Почати тестування?")) {
  function createArrName(lengthArr) {
    const arrName = [];
    for (let i = 0; i < lengthArr; i++) {
      const nameForArr = prompt(`Ввeдіть ім'я №${i + 1}`);
      arrName.push(nameForArr);
    }
    return arrName;
  }
  function createListWiThFirstLettername(arr) {
    const arrFirstLetter = arr.map((el) => el[0] );
    return arrFirstLetter;
  }
    const userLengthListName = parseInt(
    prompt("Ввeдіть кількість імен")
  );
  const listNames = createArrName(userLengthListName);
  const listFirstLetter = createListWiThFirstLettername(listNames);

  document.write(listFirstLetter);
}
