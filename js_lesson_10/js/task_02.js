"use strict";

//Задача 2. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//  2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getListIndexPricesGreaterNum(listPrices, numCompare) {
    const listIndexPricesGreaterNum = listPrices
      .map((price, ind) => (price > numCompare ? ind + 1 : 0))
      .filter((el) => el > 0);
    return listIndexPricesGreaterNum;
  }

  //===================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const userListIndexPricesGreater1000 = getListIndexPricesGreaterNum(
    userListPrices,
    1000
  );
  //=======================================================================
  document.write(
    `Iсторiя цін на цінні папери за період: ${userListPrices} <br><br>Номери цін, які  більші за 1000 грн: ${userListIndexPricesGreater1000}`
  );
}
