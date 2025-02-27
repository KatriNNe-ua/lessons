"use strict";

//Задача 7. Дано масив цін. Змінити цей масив так,
// що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
if (confirm("Почати тестування?")) {
  function getArrUserPrice(lengthArr) {
    const userArrPrice = [];
    for (let i = 0; i < lengthArr; i++) {
      const userNum = parseFloat(prompt(`Ввeдіть ${i + 1} ціну для масива`));
      userArrPrice.push(userNum);
    }
    return userArrPrice;
  }

  function getListPriceWithDiscount(
    arrPrice,
    numCompare = 1000,
    discount = 0.3
  ) {
    arrPrice.forEach((num, index, array) => {
      if (num > numCompare) array[index]  *= (1 - discount);
    });
    return arrPrice;
  }
  const userLengthArrPrice = parseInt(prompt("Ввeдіть кількість цін товарів"));
  const userPriceList = getArrUserPrice(userLengthArrPrice);

  const userPriceListWithDiscount = getListPriceWithDiscount(userPriceList);
  document.write(userPriceListWithDiscount);
}

