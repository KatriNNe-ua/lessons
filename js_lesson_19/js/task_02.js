"use strict";

//Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них
//  необхідно автоматично заповнювати інші
//  (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний),
//  усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)

const containerInputs = document.querySelector(".inputs");
if (containerInputs) {
  containerInputs.addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT") {
      changeValue(event.target);
    }
  });
}

function changeValue(el) {
  let nextEl = el.parentElement.nextElementSibling;

  while (nextEl) {
    nextEl.lastElementChild.value = parseFloat(el.value) + 1;
    el = nextEl.lastElementChild;
    nextEl = nextEl.nextElementSibling;
  }
  let prevEl = el.parentElement.previousElementSibling;
  while (prevEl) {
    prevEl.lastElementChild.value = parseFloat(el.value) - 1;
    el = prevEl.lastElementChild;
    prevEl = prevEl.previousElementSibling;
  }
}
