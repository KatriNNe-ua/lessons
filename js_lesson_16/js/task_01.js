"use strict";

//Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
//  Дата представляється структурою із трьома полями.
//  Реалізувати методи збільшення/зменшення дати на певну кількість днів,
//  місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.
if (confirm("Почати тестування?")) {
  class TDate {
    constructor(day, month, year) {
      this.Year = year;
      this.Month = month;
      this.Day = day;
    }
    //--------------------------------
    #year;
    #month;
    #day;
    //------------------------------------
    get Year() {
      return this.#year;
    }
    set Year(numYear) {
      if (numYear < 1) throw new Error("Рік не може бути меншим за 1");
      this.#year = numYear;
    }
    //---------------------------------
    get Month() {
      return this.#month;
    }
    set Month(numMonth) {
      if (numMonth < 1 || numMonth > 12)
        throw new Error("Некоректне значення місяця");
      this.#month = numMonth;
    }
    //---------------------------------
    get Day() {
      return this.#day;
    }
    set Day(numDay) {
      const maxDay = this.getNumDayInMonth();
      if (numDay < 1 || numDay > maxDay)
        throw new Error(
          `Некоректне значення дня: у місяці №${this.Month} -  ${maxDay} днів`
        );
      this.#day = numDay;
    }
    //---------------------------------------
    increasingDay(num) {
      const maxDay = this.getNumDayInMonth();
      if (num < 0) throw new Error(`Не можна збільшувати на від'ємне число`);
      this.Day = ((this.Day + num - 1) % maxDay) + 1;
      //this.Day = Math.min(this.Day + num, maxDay);
    }
    decreasingDay(num) {
      const maxDay = this.getNumDayInMonth();
      if (num < 0) throw new Error(`Не можна зменшувати на від'ємне число`);
      if (this.Day > num) this.Day -= num;
      else this.Day = maxDay - (((num - this.Day - 1) % maxDay) + 1);
      // this.Day = Math.max(this.Day - num, 1);
    }
    //------------------------------------
    increasingMonth(num) {
      if (num < 0) throw new Error(`Не можна збільшувати на від'ємне число`);
      this.Month = ((this.Month + num - 1) % 12) + 1;
      // this.Month  = Math.min( this.Month  + num, 12);
    }
    decreasingMonth(num) {
      if (num < 0) throw new Error(`Не можна зменшувати на від'ємне число`);
      if (this.Month > num) this.Month -= num;
      else {
        this.Month = 12 - (((num - this.Month - 1) % 12) + 1);
        // this.Month  = Math.max(this.Month  - num, 1);
      }
    }
    //------------------------------------
    increasingYear(num) {
      if (num < 0) throw new Error(`Не можна збільшувати на від'ємне число`);
      this.Year += num;
    }
    decreasingYear(num) {
      if (num < 0) throw new Error(`Не можна зменшувати на від'ємне число`);
      this.Year -= num;
    }
    //------------------------------------
    toString() {
      return `${this.Day}.${this.Month}.${this.Year}`;
    }
    //---------------------------------------
    getNumDayInMonth() {
      if (this.Month === 2) {
        return (this.Year % 4 === 0 && this.Year % 100 !== 0) ||
          this.Year % 400 === 0
          ? 29
          : 28;
      } else if (
        this.Month === 4 ||
        this.Month === 6 ||
        this.Month === 9 ||
        this.Month === 11
      ) {
        return 30;
      } else {
        return 31;
      }
    }
  }
  //==================================================================================
  try {
    const myData = new TDate(27, 2, 2025);
    myData.increasingDay(2);
    //myData.decreasingDay(1);
    // myData.decreasingMonth(4);
    // myData.increasingMonth(1);
    document.write(myData);
  } catch (error) {
    document.write(error.message);
  }
}
