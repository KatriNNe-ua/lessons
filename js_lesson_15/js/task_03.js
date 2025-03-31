"use strict";

//Задача 2. Створити об’єкт «Авто».
// Поля(властивості):
// - Марка
// - Розмір бака
// - Кількість наявних літрів
// - Кількість місць
// - Кількість пасажирів
// Методи (дії):
// - Заправка на вказану кількість літрів
// - Виведення кількості пасажирів
// - Додавання пасажирів
// - Висадка пасажирів

if (confirm("Почати тестування?")) {
  function Car(
    brand,
    tankSize,
    numberAvailableLiters,
    numberSeats,
    numberPassengers
  ) {
    this.brand = brand;
    this.tankSize = tankSize;
    this.numberAvailableLiters = numberAvailableLiters;
    this.numberSeats = numberSeats;
    this.numberPassengers = numberPassengers;
  }
  Car.prototype.refueling = function (numLiters) {
    if (numLiters < 0)
      throw new Error("Кількість літрів не може бути від'ємною");
    if (this.numberAvailableLiters + numLiters <= this.tankSize)
      this.numberAvailableLiters += numLiters;
    else
      throw new Error(
        "Розмір бака автомобіля і вже наявна кількість літрів не вмістить заправку на вказану кількість літрів"
      );
  };
  Car.prototype.outputtingNumberPassengers = function () {
    document.write(`Кількості пасажирів: ${this.numberPassengers}`);
  };
  Car.prototype.addingPassengers = function (numNewPassengers) {
    if (numNewPassengers < 0)
      throw new Error("Кількість нових пасажирів не може бути від'ємною");
    if (this.numberPassengers + numNewPassengers <= this.numberSeats)
      this.numberPassengers += numNewPassengers;
    else
      throw new Error(
        "Кількість пасажирів, яку ви намагаєтесь додати, не вміститься в автомобіль"
      );
  };
  Car.prototype.disembarkingPassengers = function (numDisembarkingPassengers) {
    if (numDisembarkingPassengers < 0)
      throw new Error(
        "Кількість висаджуваних пасажирів не може бути від'ємною"
      );
    if (this.numberPassengers - numDisembarkingPassengers >= 0)
      this.numberPassengers -= numDisembarkingPassengers;
    else
      throw new Error(
        "Кількість пaсажирів, яку ви намагаєтесь висадити, більша за кількість наявних пасажирів"
      );
  };
  //=======================
  try {
    const userCar = new Car("Mercedes", 80, 40, 7, 3);
    console.log(userCar);
    userCar.refueling(10);
    userCar.outputtingNumberPassengers();
    userCar.addingPassengers(4);
    userCar.disembarkingPassengers(2);
  } catch (error) {
    document.write(error.message);
  }
}
