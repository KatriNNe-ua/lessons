"use strict";

//Задача 7. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//      7)Визначати, чи усі ціни більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function isAllPriceGreaterNum(listPrices, numCompare) {
    return listPrices.every((price) => price > numCompare);
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  let res;
  if (isAllPriceGreaterNum(userListPrices, 1000)) res = "Так, всі більші";
  else res = "Ні, не всі";
  //========================================================================
  document.write(
    `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Чи усі ціни більше за 1000: ${res}`
  );
}
