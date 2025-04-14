"use strict";

//Задача 7.Подорож складається з 3 етапів. На кожному етапі
//  користувач може вибрати один з видів транспорту
// (авто, автобус, літак - випадаючий список), харчування
// (сніданок, обід, вечеря – checkbоx)
//  та одного з 3-х гідів(використати  - radio buttons).
//  Ціни визначте самі. Підрахувати загальну вартість.
function getTotalSum() {
  const transList = document.querySelectorAll(".trip__transport");
  let sum = 0;
  if (transList.length > 0) {
    for (const transport of transList) {
      sum += parseFloat(transport.value);
    }
  }
  const foodList = document.querySelectorAll(".meals__food");
  if (foodList.length > 0) {
    for (const food of foodList) {
      if (food.checked) {
        const value = parseFloat(food.value);
        if (!isNaN(value)) sum += value;
      }
    }
  }
  const guidesList = document.querySelectorAll(".guides__input");
  if (guidesList.length > 0) {
    for (const guide of guidesList) {
      if (guide.checked) {
        const value = parseFloat(guide.value);
        if (!isNaN(value)) sum += value;
      }
    }
  }
  const result = document.querySelector("#result");
  if (result) {
    result.innerText = `${sum} грн.`;
  }
}

const btn = document.querySelector("#cost");
if (btn) {
  btn.onclick = getTotalSum;
}
