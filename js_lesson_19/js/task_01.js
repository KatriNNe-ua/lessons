"use strict";

//Задача 1. Дано 10 рядків тексту «Hello!» у окремих div.
//  При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const containerText = document.querySelector(".text");
if (containerText){
  containerText.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      changeColor(event.target);
    }
  });
}

function changeColor(el) {
  let nextEl = el.nextElementSibling;
  while (nextEl) {
    nextEl.style.color = "red";
	nextEl = nextEl.nextElementSibling;
  }
}
