"use strict";

//Задача 1. Дано 10 рядків тексту «Hello!» у окремих div.
//  При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const containerText = document.querySelector(".test");
if (containerText){
  containerText.addEventListener("click", (event) => {
	const el = event.target.closest(".text")
    if (el) {
      changeColor(el);
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
