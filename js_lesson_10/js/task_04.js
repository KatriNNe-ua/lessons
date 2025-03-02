"use strict";

//Задача 4. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getMaxPrice(listPrices) {
    const maxNum = listPrices.reduce((acc, price) =>
      price > acc ? price : acc
    );
    return maxNum;
  }
  function getListPricesPercentagesOfMax(listPrices) {
    const maxNum = getMaxPrice(listPrices);
    const listPricesPercentagesOfMax = listPrices.map((price) =>
      ((price * 100) / maxNum).toFixed(2)
    );
    return listPricesPercentagesOfMax;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);

  const userListPricesPercentagesOfMax =
    getListPricesPercentagesOfMax(userListPrices);
  //========================================================================
  document.write(
    `Iсторiя цін на цінні папери за період: ${userListPrices}<br><br>Cписок, що міститиме значення цін у відсотках стосовно максимального: ${userListPricesPercentagesOfMax}`
  );
}
