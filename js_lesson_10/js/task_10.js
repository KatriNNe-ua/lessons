"use strict";

//Задача 10.Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//   10)Знайти першу ціну, що більше за 1000
if (confirm("Почати тестування?")) {
  function getGenerateListPrices(length, min, max) {
    const listPrices = [];
    for (let i = 0; i < length; i++) {
      const price = min + Math.floor(Math.random() * (max - min + 1));
      listPrices.push(price);
    }
    return listPrices;
  }
 function getFirstPricesGreaterThanNum(listPrices, numCompare) {
   const firstNum = listPrices.find((price) => price > numCompare);
   return firstNum;
 }
 //========================================================================
 const userLength = parseInt(
   prompt("Введь кількість цін на цінні папери за період", "10")
 );
 const userListPrices = getGenerateListPrices(userLength, 1, 10000);
 const firstPricesGreaterThan1000 = getFirstPricesGreaterThanNum(
   userListPrices,
   1000
 );
 let res;
 if (firstPricesGreaterThan1000 === -1) res = "відсутні ціни, що більші за 1000";
 else res = firstPricesGreaterThan1000;
 //========================================================================
 document.write(
   `Iсторія цін на цінні папери за період: ${userListPrices}<br><br>Перша ціна, що більше за 1000: ${res}`
 );
}