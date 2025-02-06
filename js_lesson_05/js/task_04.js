"use strict"

//Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.


const numberUser = parseInt(
  prompt("Введіть кількість випадкових чисел", "")
);
  document.write(`<ul>`);
for(let i = 1; i<=numberUser; i++){
let number = 1 + Math.floor(Math.random()*100)
  document.write(`<li>${number}</li>`);
}
  document.write(`</ul>`);