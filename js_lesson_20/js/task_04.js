"use strict";

//Задача 4. На сторінці міститься певна кількість кнопок і інпутів.
//  Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.

const cnt = document.querySelector(".test");
if (cnt) {
  cnt.addEventListener("click", (e) => countClick(e));
}

function countClick(e) {
  const targetEL = e.target;
  if (targetEL.closest("input")) {
    const countInputClick = document.querySelector("#resInput");
    const numInner = parseInt(countInputClick.innerText.trim()) || 0;
    countInputClick.innerText = numInner + 1;
  }
  if (targetEL.closest("button")) {
    const countBtnClick = document.querySelector("#resBtn");
    const numInner = parseInt(countBtnClick.innerText.trim()) || 0;
    countBtnClick.innerText = numInner + 1;
  }
}
