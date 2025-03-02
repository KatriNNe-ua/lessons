"use strict";

//Задача 12.Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//12)Знайти останню ціну, що більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
   function getLastPricesGreaterThanNum(listPrices, numCompare) {
     const lastNum = listPrices.findLast((price) => price > numCompare);
     return lastNum;
   }
   //========================================================================
   const userLength = parseInt(
     prompt("Введь кількість цін на цінні папери за період", "10")
   );
   const userListPrices = getGenerateListPrices(userLength, 1, 10000);
   const lastPricesGreaterThan1000 = getLastPricesGreaterThanNum(
     userListPrices,
     1000
   );
   let res;
   if (lastPricesGreaterThan1000 === -1)
     res = "відсутні ціни, що більші за 1000";
   else res = lastPricesGreaterThan1000;
   //========================================================================
   document.write(
     `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Остання ціна, що більше за 1000: ${res}`
   );
}

