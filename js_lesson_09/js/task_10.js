"use strict";

//Задача 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив,
// який буде містити величину сплаченого податку у грн.
if (confirm("Почати тестування?")) {
  function createArrPrice(lengthArr) {
    const arrPrice = [];
    for (let i = 0; i < lengthArr; i++) {
      const price = parseFloat(prompt(`Ввeдіть ціну №${i + 1}`));
      arrPrice.push(price);
    }
    return arrPrice;
  }

  function createArrTax(listPrice, tax = 0.2) {
    const arrTax = listPrice.map((price) => price * tax);
    return arrTax;
  }

  const userLengthListPrice = parseInt(prompt("Ввeдіть кількість цін"));
  const userListPrice = createArrPrice(userLengthListPrice);
  const listTax = createArrTax(userListPrice);
  document.write(listTax);
}

