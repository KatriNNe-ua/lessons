"use strict";

//Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table».
// В результаті формується таблиця з input, куди користувач вводить оцінки.
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.

function getListInput() {
  const countInput = parseInt(document.querySelector("#num-user").value);
  const el = document.querySelector(".finds-average__container");
  if (countInput > 0 && el) {
    for (let i = 0; i < countInput; i++) {
      const input = document.createElement("input");
      input.className = "input-rating";
      input.type = "number";
      input.placeholder = `Оцінка #${i + 1}`;
      el.append(input);
    }
    const btn = document.createElement("button");
    btn.className = "finds-average__button sum-btn";
    btn.innerText = "get sum";
    el.append(btn);
    btn.onclick = getAverageValue;
  }
}
function getAverageValue() {
  const listRating = document.querySelectorAll(".input-rating");
  if (listRating.length > 0) {
    let sum = 0;
    //якщо user не заповне всі поля вводжу зміну count
    let count = 0;
    for (const rating of listRating) {
      if (rating.value) {
        count++;
        sum += parseInt(rating.value);
      }
    }
    //без count:  const aver = sum / listRating.length
    const aver = sum / count;
    const el = document.querySelector(".finds-average__container ");
    if (el) {
      const p = document.createElement("p");
      p.innerText = `Cереднє значення: ${aver.toFixed(1)}`;
      el.append(p);
    }
  }
}
const userBtn = document.querySelector("#count-btn");
if (userBtn) {
  userBtn.onclick = getListInput;
}
