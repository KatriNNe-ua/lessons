"use strict";

//Задача 3. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// 3)Сформувати список з тих цін, які більші за попереднє значення
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
  function getListPricesGreaterThanPrevious(listPrices) {
    const listPricesGreaterThanPrevious = listPrices.filter(
      (price, ind, arr) => ind > 0 && arr[ind] > arr[ind - 1]
    );
    return listPricesGreaterThanPrevious;
  }
  //========================================================================
  const userLength = parseInt(
    prompt("Введь кількість цін на цінні папери за період", "10")
  );
  const userListPrices = getGenerateListPrices(userLength, 1, 10000);
  const userListPricesGreaterThanPrevious =
    getListPricesGreaterThanPrevious(userListPrices);
  //========================================================================
  document.write(
    `Iсторiя цін на цінні папери за період: ${userListPrices}<br><br>Cписок цін, які більші за попереднє значення: ${userListPricesGreaterThanPrevious}`
  );
}
