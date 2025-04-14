"use strict";

//Задача 1.  Розробити калькулятор

function getSum() {
  const firstNum = parseFloat(document.querySelector("#first").value);
  const secondNum = parseFloat(document.querySelector("#second").value);
  let sum = "";
  if (!isNaN(firstNum) && !isNaN(secondNum)) {
    sum = firstNum + secondNum;
  }
  const result = document.querySelector("#result");
  if (result) {
    result.innerText = sum;
  }
}

const sumBtn = document.querySelector("#sum");
if (sumBtn) {
  sumBtn.onclick = getSum;
}
//-----------------------------------------------
function getSubtract() {
  const firstNum = parseFloat(document.querySelector("#first").value);
  const secondNum = parseFloat(document.querySelector("#second").value);
  let subtr = "";
  if (!isNaN(firstNum) && !isNaN(secondNum)) {
    subtr = firstNum - secondNum;
  }
  const result = document.querySelector("#result");
  if (result) {
    result.innerText = subtr;
  }
}

const subtrBtn = document.querySelector("#subtract");
if (subtrBtn) {
  subtrBtn.onclick = getSubtract;
}
//------------------------------------------------------
function getDivide() {
  const firstNum = parseFloat(document.querySelector("#first").value);
  const secondNum = parseFloat(document.querySelector("#second").value);
  let divide = "";
  if (!isNaN(firstNum) && !isNaN(secondNum) && secondNum !== 0) {
    divide = firstNum / secondNum;
  }
  const result = document.querySelector("#result");
  if (result) {
    result.innerText = divide;
  }
}

const divideBtn = document.querySelector("#divide");
if (divideBtn) {
  divideBtn.onclick = getDivide;
}
//---------------------------------------------------------
function getMultiply() {
  const firstNum = parseFloat(document.querySelector("#first").value);
  const secondNum = parseFloat(document.querySelector("#second").value);
  let multiply = "";
  if (!isNaN(firstNum) && !isNaN(secondNum)) {
    multiply = firstNum * secondNum;
  }
  const result = document.querySelector("#result");
  if (result) {
    result.innerText = multiply;
  }
}

const multiplyBtn = document.querySelector("#multiply");
if (multiplyBtn) {
  multiplyBtn.onclick = getMultiply;
}
