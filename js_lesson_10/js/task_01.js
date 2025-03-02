"use strict";

//Задача 1.  Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//   1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getListPricesGreaterNum(listPrices, numCompare) {
    const listPricesGreaterNum = listPrices.filter(
      (price) => price > numCompare
    );
    return listPricesGreaterNum;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const userListPricesGreater1000 = getListPricesGreaterNum(userListPrices, 1000);
  //=======================================================================
  document.write(
    `Iсторiя цін на цінні папери за період: ${userListPrices} <br><br>Ціни, які  більші за 1000 грн: ${userListPricesGreater1000}`
  );
}
