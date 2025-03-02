"use strict";

//Задача 8. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//8)Підрахувати кількість цін, що більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getCountNumberPricesGreaterThanNum(listPrices, numCompare) {
    const countGreater = listPrices.reduce(
      (count, price) => (price > numCompare ? count + 1 : count),
      0
    );
    return countGreater;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const countPricesGreaterThan1000 = getCountNumberPricesGreaterThanNum(
    userListPrices,
    1000
  );
  //========================================================================
  document.write(
    `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Kількість цін, що більше за 1000: ${countPricesGreaterThan1000}шт`
  );
}
