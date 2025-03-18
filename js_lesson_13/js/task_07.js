"use strict";

//Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад
// з додавання двох цифр і робиться перевірка.

if (confirm("Почати тестування?")) {
  function getRandomNum(min, max) {
    if (max < min) {
      [max, min] = [min, max];
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  //===========================================================
  function getExampleForSimulatorAddition(min, max) {
    const num1 = getRandomNum(min, max);
    const num2 = getRandomNum(min, max);
    const userSolution = parseFloat(prompt(`${num1} + ${num2} = ?`));
    const exampleRes = num1 + num2;
    let res;
    if (exampleRes === userSolution) {
      alert("Вірно!");
      res = 1;
    } else {
      alert(`Ваше рішення неправильне.\n${num1} + ${num2} = ${exampleRes} `);
      res = 0;
    }
    return res;
  }
  //=====================================================================
  function playSimulatorAddition(min, max, countExample, time = 10000) {
    let countTrue = 0;
    let countAddition = 0;

    //========================================================
    // ----вкладений setTimeout
    // let timerId = setTimeout(function question() {
    //   countTrue += getExampleForSimulatorAddition(min, max);
    //   countAddition++;
    //   if (countExample > countAddition) timerId = setTimeout(question, time);
    //   else {
    //     clearTimeout(timerId);
    //     alert(
    //       `Ви правильно вирішили ${countTrue} приклад(ів) з ${countExample} заданих `
    //     );
    //   }
    // }, 0); //перше питання, задається одразу

//=====================================================================
//-----setInterval

    let intervalId = setInterval(() => {
      countTrue += getExampleForSimulatorAddition(min, max);
      countAddition++;
      if (countExample === countAddition) {
        clearInterval(intervalId);
        alert(
          `Ви правильно вирішили ${countTrue} приклад(ів) з ${countExample} заданих `
        );
      }
    }, time);
  }
  //================================================================

  const userCountExample = parseInt(
    prompt("Яку кількість прикладів на додавання вам надати?", "3")
  );
  const userMinNum = parseFloat(
    prompt("Ведіть мінімальне число для тренажера", "0")
  );
  const userMaxNum = parseFloat(
    prompt("Ведіть максимальне число для тренажера", "10")
  );
  //===========================================================
  playSimulatorAddition(userMinNum, userMaxNum, userCountExample);
}
