"use strict";
//Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
let evenNumbers = 0;
let oddNumbers = 0;
let resultComparisons;

for (let num = 1; num <= 100; num++) {
  const randomNumber = 1 + Math.floor(Math.random() * 1000);
  if (randomNumber % 2 === 0) evenNumbers++;
  else oddNumbers++;
}

if (evenNumbers > oddNumbers) resultComparisons = "Парних чисел більше";
else if (evenNumbers === oddNumbers)
  resultComparisons = "Однакова кількість парних та непарних чисел";
else resultComparisons = "Непарних чисел більше";

document.write(
  `${resultComparisons}. <br> Парних: ${evenNumbers}шт <br>Hепарних: ${oddNumbers}шт`
);
