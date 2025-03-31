"use strict";

//Задача 5. Розробити клас «Керівник танців»
// Поля
// - Масив імен хлопців
// - Масив імен дівчат
// Методи
// - Метод випадкового вибору імені хлопця
// - Метод випадкового вибору імені дівчини
// - Метод виведення пари для танців
// - Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

if (confirm("Почати тестування?")) {
  class DanceManager {
    constructor(arrBoyName, arrGirlName) {
      this.arrGirlName = arrGirlName;
      this.arrBoyName = arrBoyName;
    }
    randSelectingBoyName() {
      const randIndex = Math.floor(Math.random() * this.arrBoyName.length);
      return this.arrBoyName[randIndex];
    }
    randSelectingGirlName() {
      const randIndex = Math.floor(Math.random() * this.arrGirlName.length);
      return this.arrGirlName[randIndex];
    }
    displayingDancePair() {
      document.write(
        `<p>${this.randSelectingBoyName()} - ${this.randSelectingGirlName()}</p>`
      );
    }
    run(time = 5000) {
      setInterval(() => {
        this.displayingDancePair();
      }, time);
    }
  }
  //====================================
  const arrBoyName = ["Олександр", "Дмитро", "Максим", "Іван", "Артем"];
  const arrGirlName = ["Софія", "Анна", "Марія", "Олена", "Вікторія"];
  //======================================
  const newDanceManager = new DanceManager(arrBoyName, arrGirlName);
  newDanceManager.run();
}
