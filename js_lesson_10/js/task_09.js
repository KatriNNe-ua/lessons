"use strict";

//Задача 9.Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//  9)Підрахувати суму цін, що більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getSumPricesGreaterThanNum(listPrices, numCompare) {
    const sumGreater = listPrices.reduce(
      (sum, price) => (price > numCompare ? sum + price : sum),
      0
    );
    return sumGreater;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const sumPricesGreaterThan1000 = getSumPricesGreaterThanNum(
    userListPrices,
    1000
  );
  //========================================================================
  document.write(
    `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Cумa цін, що більше за 1000: ${sumPricesGreaterThan1000}`
  );
}
