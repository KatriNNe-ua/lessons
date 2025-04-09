"use strict";

//Задача 2. Створити службове авто (водій, марка, номер). Створити клас таким чином,
//  щоб можна було створити тільки один екземпляр цього класу.

if (confirm("Почати тестування?")) {
  class CompanyCar {
    static singleton;
    constructor(driver, carBrand, carNum) {
      if (CompanyCar.singleton) return CompanyCar.singleton;
      this.Driver = driver;
      this.CarBrand = carBrand;
      this.CarNum = carNum;
      CompanyCar.singleton = this;
    }
    //-------------------------------------
    #driver;
    #carBrand;
    #carNum;
    //--------------------------------------

    get Driver() {
      return this.#driver;
    }
    get CarBrand() {
      return this.#carBrand;
    }
    get CarNum() {
      return this.#carNum;
    }
    //---------------------------------------
    set Driver(nameDriver) {
      if (nameDriver.trim() === "") throw new Error(`Не вказано ім'я водія`);
      this.#driver = nameDriver;
    }
    set CarBrand(newBrandCar) {
      if (newBrandCar.trim() === "")
        throw new Error(`Не вказано марку автомобіля`);
      this.#carBrand = newBrandCar;
    }
    set CarNum(newCarNum) {
      if (newCarNum.trim() === "")
        throw new Error(`Не вказано номер автомобіля`);
      this.#carNum = newCarNum;
    }
    //-------------------------------------
    toString() {
      return `<p>${this.Driver}</p><p>${this.CarBrand},${this.CarNum}</p>`;
    }
  }
  try {
    const car1 = new CompanyCar("Віталій Андрущенко", "Mercedes", "AA1234BB");
    document.write(car1);
    const car2 = new CompanyCar("Сергій Сидоренко", "BMW", "BB5678CC");
    document.write(car2);
  } catch (error) {
    document.write(error.message);
  }
}
