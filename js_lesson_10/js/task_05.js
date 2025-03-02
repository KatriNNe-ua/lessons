"use strict";

//Задача 5. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//      5)Підрахувати кількість змін цін
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getCountNumberPriceChanges(listPrices) {
    const countChanges = listPrices.reduce(
      (count, price, ind, arr) =>
        ind > 0 && arr[ind] !== arr[ind - 1] ? count + 1 : count,
      0
    );
    return countChanges;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const userCountNumberPriceChanges =
    getCountNumberPriceChanges(userListPrices);
  //========================================================================
  document.write(
    `Iсторiя цін на цінні папери за період: ${userListPrices}<br><br>Kількість змін цін: ${userCountNumberPriceChanges}`
  );
}
