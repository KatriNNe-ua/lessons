"use strict";

//Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)

function getConverter() {
  const rateDol = 40;
  const rateEuros = 45;
  const grnAmount = parseFloat(document.querySelector("#grn").value);
  if (!isNaN(grnAmount)) {
    const dolAmount = document.querySelector("#dollars");
    const eurosAmount = document.querySelector("#euros");
    if (eurosAmount) eurosAmount.innerText = (grnAmount / rateEuros).toFixed(2);
    if (dolAmount) dolAmount.innerText = (grnAmount / rateDol).toFixed(2);
  }
}
const btnConver = document.querySelector(".btn");
if (btnConver) {
  btnConver.onclick = getConverter;
}
