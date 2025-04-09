"use strict";

//Задача 3.Створити клас Нагадувач. Кожні вказані кількості секунд
// (використати setInterval) програма нагадує про якусь подію (це просто текст)
//  і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так,
//  щоб неможна було зробити одночасно декілька об’єктів-нагадувачів.
//  Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

if (confirm("Почати тестування?")) {
  class Reminder {
    static singleton;
    static countReminder = 0;
    static intervalEvent;
    constructor(msg, time) {
      if (Reminder.singleton) return Reminder.singleton;
      //throw new Error(`неможливо створити одночасно декілька об’єктів-нагадувачів`);
      this.Event = msg;
      this.Time = time;
      Reminder.singleton = this;
    }
    //----------------
    #event;
    #time;
    //----------------
    get Event() {
      return this.#event;
    }
    set Event(newMsg) {
      if (newMsg.trim() === "") throw new Error(`Повідомлення відсутнє`);
      this.#event = newMsg;
    }
    get Time() {
      return this.#time;
    }
    set Time(newTime) {
      if (newTime <= 0)
        throw new Error(
          `Час нагадування не може бути від’ємним чи дорівнювати 0`
        );
      this.#time = newTime;
    }
    //------------------------
    displayEvent() {
      if (!Reminder.intervalEvent) {
        Reminder.intervalEvent = setInterval(() => {
          document.write(
            `Нагадування №${Reminder.countReminder + 1}: ${this.Event}<br>`
          );
          Reminder.countReminder++;
        }, this.Time);
      } else throw new Error(`Нагадування вже запущено`);
    }
    stopintervalEvent() {
      if (Reminder.intervalEvent) {
        clearInterval(Reminder.intervalEvent);
        Reminder.countReminder = 0;
        Reminder.intervalEvent = null;
      } else throw new Error(`Нагадування ще не запущено`);
    }
    changingMsg(newMsg) {
      this.Event = newMsg;
    }
    toString() {
      return `Кількість нагадувань: ${Reminder.countReminder}<br>${this.Event}`;
    }
  }
  try {
    const myReminder = new Reminder(
      "Перерва закінчилася! Повертайся до роботи",
      2000
    );
    myReminder.displayEvent();

    setTimeout(() => {
      myReminder.changingMsg("Час прийняти ліки! Не забудь.");
    }, 8000);
    setTimeout(() => {
      myReminder.stopintervalEvent();
    }, 12000);
  } catch (error) {
    document.write(error.message);
  }
}
