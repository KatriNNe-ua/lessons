"use strict";

//Задача 3.  Створити генератор, який би випадковим чином поступово генерував
//  вказану кількість парних чисел.

function getRandomEvenNum(min, max) {
  if (max < min) {
    [max, min] = [min, max];
  }
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  let res;
  if (randomNum % 2 === 0) res = randomNum;
  else if ((randomNum > min && randomNum < max) || randomNum === min)
    res = randomNum + 1;
  else if (randomNum === max) res = randomNum - 1;

  //   while (randomNum % 2 !== 0) {
  //     randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  
  return res;
}

function* generatorEvenNumbers(count, min = 0, max = 100) {
  for (let index = 0; index < count; index++) {
    yield getRandomEvenNum(min, max);
  }
}

const evenNumbers = generatorEvenNumbers(10);

for (const num of evenNumbers) {
  document.write(`${num}<br>`);
}
