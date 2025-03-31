"use strict";

//Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля:
// - Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// - Кількість правильних відповідей
// - Кількість неправильних відповідей
// Методи:
// - Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// - Перевірка правильності вказаної відповіді
// - render - виведення інформації про тестування на екран

if (confirm("Почати тестування?")) {
  class MultChecker {
    constructor(numberChecked) {
      this.numberChecked = numberChecked;
      this.numberCorrectAnswers = 0;
      this.numberIncorrectAnswers = 0;
    }

    exampleGeneration() {
      const numGen = 1 + Math.floor(Math.random() * 10);
      const example = `${this.numberChecked} * ${numGen} = ?`;
      return { example: example, numGen: numGen };
    }
    checkingCorrectness() {
      const { example, numGen } = this.exampleGeneration();
      const userRes = parseInt(prompt(example));
      if (userRes === numGen * this.numberChecked) {
        this.numberCorrectAnswers++;
        alert(
          `Правильно!\n${this.numberChecked} * ${numGen} = ${
            this.numberChecked * numGen
          }`
        );
      } else {
        this.numberIncorrectAnswers++;
        alert(
          `На жаль, ваша відповідь неправильна.\n${
            this.numberChecked
          } * ${numGen} = ${this.numberChecked * numGen}`
        );
      }
    }
    render() {
      document.write(
        `Кількість правильних відповідей: ${this.numberCorrectAnswers}<br>Кількість неправильних відповідей: ${this.numberIncorrectAnswers}<br>`
      );
    }
  }
  //================================================
  const myRes = new MultChecker(7);
  myRes.checkingCorrectness();
  myRes.checkingCorrectness();
  myRes.render();
}
