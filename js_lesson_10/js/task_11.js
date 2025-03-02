"use strict";

//Задача 11. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//11)Знайти індекс першої ціни, що більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getFirstIndexPricesGreaterThanNum(listPrices, numCompare) {
    const firstIndex = listPrices.findIndex((price) => price > numCompare);
    return firstIndex;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const firstIndexPricesGreaterThan1000 = getFirstIndexPricesGreaterThanNum(
    userListPrices,
    1000
  );
  let res
  if (firstIndexPricesGreaterThan1000 === -1) res = "відсутні ціни, що більші за 1000";
  else res = firstIndexPricesGreaterThan1000
    //========================================================================
    document.write(
      `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Iндекс першої ціни, що більше за 1000: ${res}`
    );
}
