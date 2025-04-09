"use strict";

//Задача 5. Дано два класи MultChecker (клас для перевірки таблиці множення -
// рандомно генеруються числа, які треба перемножати),
//  AddChecker (клас для перевірки додавання - рандомно генеруються числа
//  у заданому діапазоні, які треба додавати).
//  Обидва класи надсилають результати тестування об'єкту класу Hystory,
//  який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у
//  якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера
//  періодично генерує якісь N задач (рандомно вибираємо, що опитувати:
//  додавання чи множення) і проводить опитування. Результати тестування додаються
//  в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити
//  тільки один. Коли зроблено ці N задач вивести усю історію на екран.

if (confirm("Почати тестування?")) {
  class MultChecker {
    constructor(minNum, maxNum) {
      this.MinNum = minNum;
      this.MaxNum = maxNum;
      this.firstNum = this.getGenerNum();
      this.secondNum = this.getGenerNum();
      this.opration = "*";
      this.correctAnswer = this.firstNum * this.secondNum;
      this.userAnswer = this.getUserAnswer();
    }
    //-----------------------
    #minNum;
    #maxNum;
    //-----------------------
    get MinNum() {
      return this.#minNum;
    }
    set MinNum(min) {
      if (typeof min !== "number")
        throw new Error(`Мінімальне число не є числом`);
      this.#minNum = min;
    }
    get MaxNum() {
      return this.#maxNum;
    }
    set MaxNum(max) {
      if (typeof max !== "number")
        throw new Error(`Максимальне число не є числом`);
      this.#maxNum = max;
    }
    //-----------------------
    getGenerNum() {
      if (this.MinNum > this.MaxNum) {
        [this.MinNum, this.MaxNum] = [this.MaxNum, this.MinNum];
      }
      return (
        this.MinNum +
        Math.floor(Math.random() * (this.MaxNum - this.MinNum + 1))
      );
    }
    getUserAnswer() {
      return parseInt(prompt(`${this.firstNum} * ${this.secondNum} = ?`));
    }
    toString() {
      return `${this.firstNum} * ${this.secondNum} = ${this.correctAnswer}<br>User answer: ${this.userAnswer}`;
    }
  }
  //===========================================================
  class AddChecker {
    constructor(minNum, maxNum) {
      this.MinNum = minNum;
      this.MaxNum = maxNum;
      this.firstNum = this.getGenerNum();
      this.secondNum = this.getGenerNum();
      this.opration = "+";
      this.correctAnswer = this.firstNum + this.secondNum;
      this.userAnswer = this.getUserAnswer();
    }
    //-----------------------
    #minNum;
    #maxNum;
    //-----------------------
    get MinNum() {
      return this.#minNum;
    }
    set MinNum(min) {
      if (typeof min !== "number")
        throw new Error(`Мінімальне число не є числом`);
      this.#minNum = min;
    }
    get MaxNum() {
      return this.#maxNum;
    }
    set MaxNum(max) {
      if (typeof max !== "number")
        throw new Error(`Максимальне число не є числом`);
      this.#maxNum = max;
    }
    //-----------------------
    getGenerNum() {
      if (this.MinNum > this.MaxNum) {
        [this.MinNum, this.MaxNum] = [this.MaxNum, this.MinNum];
      }
      return (
        this.MinNum +
        Math.floor(Math.random() * (this.MaxNum - this.MinNum + 1))
      );
    }
    getUserAnswer() {
      return parseInt(prompt(`${this.firstNum} + ${this.secondNum} = ?`));
    }
    toString() {
      return `${this.firstNum} + ${this.secondNum} = ${this.correctAnswer}<br>User answer: ${this.userAnswer}`;
    }
  }
  //===========================================================
  class History {
    constructor(testsList = []) {
      this.TestsList = testsList;
    }
    //-----------------------------------------
    #testsList;
    //-----------------------------------------
    get TestsList() {
      return this.#testsList;
    }
    set TestsList(newTestsList) {
      if (!Array.isArray(newTestsList))
        throw new Error("Історія тестування повинна зберігатися в масиві");
      this.#testsList = newTestsList;
    }
    //-----------------------------------------
    getRes(res) {
      this.TestsList.push(res);
    }
    toString() {
      return `${this.TestsList.join("<br>")}`;
    }
  }
  //===========================================================
  class TestManager {
    static #singleton;
    constructor() {
      if (TestManager.#singleton) return TestManager.#singleton;
      this.testHistory = new History();
      this.multChecker = null;
      this.addChecker = null;
      TestManager.#singleton = this;
    }
    getRandTest(min, max) {
      const ranNum = Math.random();
      if (ranNum > 0.5) {
        this.multChecker = new MultChecker(min, max);
        this.testHistory.getRes(this.multChecker);
        return this.multChecker;
      } else {
        this.addChecker = new AddChecker(min, max);
        this.testHistory.getRes(this.addChecker);
        return this.addChecker;
      }
    }
    getTest(numberTasks, time, min, max) {
      if (numberTasks <= 0)
        throw new Error(
          `Кількість прикладів не може дорівнювати 0 або бути від’ємною`
        );
      if (time <= 0)
        throw new Error(
          `Час інтервалу не може дорівнювати 0 або бути від'емним`
        );
      let count = numberTasks;
      let timeTest = setInterval(() => {
        this.getRandTest(min, max);
        count--;
        if (count === 0) {
          clearInterval(timeTest);
          document.write(this.testHistory);
        }
      }, time);
    }
  }

  //=============================================================
  try {
    const myTest = new TestManager();
    myTest.getTest(4, 2000, 1, 5);
  } catch (error) {
    document.write(error.message);
  }
}
