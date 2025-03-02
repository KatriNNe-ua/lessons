"use strict";

//Задача 6. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//   6)Визначити, чи є ціна, що менше 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function isPriceLessNum(listPrices, numCompare) {
    return listPrices.some((price) => price < numCompare);
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  let res;
  if (isPriceLessNum(userListPrices, 1000)) res = "Так є";
  else res = "Немає";
  //========================================================================
  document.write(
    `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Чи є ціна, що менше 1000: ${res}`
  );
}
