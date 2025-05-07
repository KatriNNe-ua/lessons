"use strict";

//Задача 3.  Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
//Зберігати цей колір і відновлювати при наступному відкритті.
//Також зберігати і відображати кількість змін протягом одного сеансу.

function saveColorAndNumberchanges(selectorIdInput, selectorIdRes) {
  const body = document.body;
  let userBackgroundColor = localStorage.getItem("userBackgroundColor");
  if (userBackgroundColor) body.style.backgroundColor = userBackgroundColor;
  const inputDiv = document.getElementById(selectorIdInput);

  if (!sessionStorage.getItem("count")) {
    sessionStorage.setItem("count", "0");
  }
  const count = parseInt(sessionStorage.getItem("count")) || 0;
  sessionStorage.setItem("count", count);
  const resDiv = document.getElementById(selectorIdRes);
  if (resDiv) resDiv.innerText = count;

  if (inputDiv) {
    inputDiv.addEventListener("change", (e) => {
      userBackgroundColor = e.target.value;
      if (userBackgroundColor) {
        body.style.backgroundColor = userBackgroundColor;
        localStorage.setItem("userBackgroundColor", userBackgroundColor);
        const count = (parseInt(sessionStorage.getItem("count")) || 0) + 1;
        sessionStorage.setItem("count", count);
        if (resDiv) resDiv.innerText = count;
      }
    });
  }
}

saveColorAndNumberchanges("color", "test");
