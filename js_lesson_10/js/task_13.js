"use strict";

//Задача 13. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//3)Знайти індекс останньої ціни, що більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
   function getLastIndexPricesGreaterThanNum(listPrices, numCompare) {
     const lastIndex = listPrices.findLastIndex((price) => price > numCompare);
     return lastIndex;
   }

  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const lastIndexPricesGreaterThan1000 = getLastIndexPricesGreaterThanNum(
    userListPrices,
    1000
  );
  let res;
  if (lastIndexPricesGreaterThan1000 === -1)
    res = "відсутні ціни, що більші за 1000";
  else res = lastIndexPricesGreaterThan1000;
  //========================================================================
  document.write(
    `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Iндекс  останньої ціни, що більше за 1000: ${res}`
  );
}
