"use strict";

//Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm("Почати тестування?")) {
  function createArrCarLicensePlates(lengthArr) {
    const arrCarLicensePlates = [];
    for (let i = 0; i < lengthArr; i++) {
      const carLicensePlates = prompt(`Ввeдіть номерний знак автомобіля`);
      arrCarLicensePlates.push(carLicensePlates);
    }
    return arrCarLicensePlates;
  }

  function createListCarLicensePlatesStartSomeLetter(arr, letter = "A") {
    const newList = [];
    for (let el of arr) {
      if (el[0] === letter) newList.push(el);
    }
    return newList;
  }
  const userLengthArrCarLicensePlates = parseInt(
    prompt("Ввeдіть кількість номерниx знаків автомобілів")
  );
  const listCarLicensePlates = createArrCarLicensePlates(
    userLengthArrCarLicensePlates
  );
  const listCarLicensePlatesStartA =
    createListCarLicensePlatesStartSomeLetter(listCarLicensePlates);
  document.write(listCarLicensePlatesStartA);
}
// const listCarLicensePlates = ['DFDJ', 'AKFJFK', 'AJFJD', 'JFDIO', 'AIJFJ'];
