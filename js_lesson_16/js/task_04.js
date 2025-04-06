"use strict";

//Задача 4. Створити клас TBankomat, який моделює роботу банкомата.
//Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
//Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат,
//та метод зняття деякої суми.

if (confirm("Почати тестування?")) {

  class TBankomat {
    constructor(
      banknotesDenomination5GRN = 0,
      banknotesDenomination10GRN = 0,
      banknotesDenomination20GRN = 0,
      banknotesDenomination50GRN = 0,
      banknotesDenomination100GRN = 0,
      banknotesDenomination200GRN = 0
    ) {
      this.BanknotesDenomination5GRN = banknotesDenomination5GRN;
      this.BanknotesDenomination10GRN = banknotesDenomination10GRN;
      this.BanknotesDenomination20GRN = banknotesDenomination20GRN;
      this.BanknotesDenomination50GRN = banknotesDenomination50GRN;
      this.BanknotesDenomination100GRN = banknotesDenomination100GRN;
      this.BanknotesDenomination200GRN = banknotesDenomination200GRN;
    }
    //-------------------------------
    #banknotesDenomination5GRN;
    #banknotesDenomination10GRN;
    #banknotesDenomination20GRN;
    #banknotesDenomination50GRN;
    #banknotesDenomination100GRN;
    #banknotesDenomination200GRN;
    //-------------------------------
    get BanknotesDenomination5GRN() {
      return this.#banknotesDenomination5GRN;
    }
    set BanknotesDenomination5GRN(numBanknotes5GRN) {
      if (numBanknotes5GRN < 0)
        throw new Error(
          "Кількість купюр номіналом 5 грн не може бути від'ємною"
        );
      this.#banknotesDenomination5GRN = numBanknotes5GRN;
    }
    //----------------------------------
    get BanknotesDenomination10GRN() {
      return this.#banknotesDenomination10GRN;
    }
    set BanknotesDenomination10GRN(numBanknotes10GRN) {
      if (numBanknotes10GRN < 0)
        throw new Error(
          "Кількість купюр номіналом 10 грн не може бути від'ємною"
        );
      this.#banknotesDenomination10GRN = numBanknotes10GRN;
    }
    //----------------------------------
    get BanknotesDenomination20GRN() {
      return this.#banknotesDenomination20GRN;
    }
    set BanknotesDenomination20GRN(numBanknotes20GRN) {
      if (numBanknotes20GRN < 0)
        throw new Error(
          "Кількість купюр номіналом 20 грн не може бути від'ємною"
        );
      this.#banknotesDenomination20GRN = numBanknotes20GRN;
    }
    //----------------------------------
    get BanknotesDenomination50GRN() {
      return this.#banknotesDenomination50GRN;
    }
    set BanknotesDenomination50GRN(numBanknotes50GRN) {
      if (numBanknotes50GRN < 0)
        throw new Error(
          "Кількість купюр номіналом 50 грн не може бути від'ємною"
        );
      this.#banknotesDenomination50GRN = numBanknotes50GRN;
    }
    //----------------------------------
    get BanknotesDenomination100GRN() {
      return this.#banknotesDenomination100GRN;
    }
    set BanknotesDenomination100GRN(numBanknotes100GRN) {
      if (numBanknotes100GRN < 0)
        throw new Error(
          "Кількість купюр номіналом 100 грн не може бути від'ємною"
        );
      this.#banknotesDenomination100GRN = numBanknotes100GRN;
    }
    //----------------------------------
    get BanknotesDenomination200GRN() {
      return this.#banknotesDenomination200GRN;
    }
    set BanknotesDenomination200GRN(numBanknotes200GRN) {
      if (numBanknotes200GRN < 0)
        throw new Error(
          "Кількість купюр номіналом 200 грн не може бути від'ємною"
        );
      this.#banknotesDenomination200GRN = numBanknotes200GRN;
    }
    //=======================================================

    //=======================================================
    getMinAmounts() {
      if (this.BanknotesDenomination5GRN > 0) return 5;
      else if (this.BanknotesDenomination10GRN > 0) return 10;
      else if (this.BanknotesDenomination20GRN > 0) return 20;
      else if (this.BanknotesDenomination50GRN > 0) return 50;
      else if (this.BanknotesDenomination100GRN > 0) return 100;
      else if (this.BanknotesDenomination200GRN > 0) return 200;
      return 0;
    }
    //=======================================================
    getMaxAmounts() {
      return (
        this.BanknotesDenomination5GRN * 5 +
        this.BanknotesDenomination10GRN * 10 +
        this.BanknotesDenomination20GRN * 20 +
        this.BanknotesDenomination50GRN * 50 +
        this.BanknotesDenomination100GRN * 100 +
        this.BanknotesDenomination200GRN * 200
      );
    }
    //=======================================================
    withdrawingCertainAmount(amount) {
      if (this.getMinAmounts() === 0) throw new Error("Банкомат порожній");
      if (
        amount <= 0 ||
        amount % this.getMinAmounts() !== 0 ||
        amount > this.getMaxAmounts()
      )
        throw new Error("Некоректно введена сума для зняття");
      let remaining = amount;
      const objCount = {
        count200: 0,
        count100: 0,
        count50: 0,
        count20: 0,
        count10: 0,
        count5: 0,
      };
      if (remaining >= 200) {
        objCount.count200 = Math.min(
          Math.floor(remaining / 200),
          this.BanknotesDenomination200GRN
        );
        remaining -= objCount.count200 * 200;
      }
      if (remaining >= 100) {
        objCount.count100 = Math.min(
          Math.floor(remaining / 100),
          this.BanknotesDenomination100GRN
        );
        remaining -= objCount.count100 * 100;
      }
      if (remaining >= 50) {
        objCount.count50 = Math.min(
          Math.floor(remaining / 50),
          this.BanknotesDenomination50GRN
        );
        remaining -= objCount.count50 * 50;
      }
      if (remaining >= 20) {
        objCount.count20 = Math.min(
          Math.floor(remaining / 20),
          this.BanknotesDenomination20GRN
        );
        remaining -= objCount.count20 * 20;
      }
      if (remaining >= 10) {
        objCount.count10 = Math.min(
          Math.floor(remaining / 10),
          this.BanknotesDenomination10GRN
        );
        remaining -= objCount.count10 * 10;
      }
      if (remaining >= 5) {
        objCount.count5 = Math.min(
          Math.floor(remaining / 5),
          this.BanknotesDenomination5GRN
        );
        remaining -= objCount.count5 * 5;
      }

      if (remaining !== 0) {
        throw new Error("Неможливо зняти потрібну суму з наявних купюр");
      }
      this.BanknotesDenomination5GRN -= objCount.count5;
      this.BanknotesDenomination10GRN -= objCount.count10;
      this.BanknotesDenomination20GRN -= objCount.count20;
      this.BanknotesDenomination50GRN -= objCount.count50;
      this.BanknotesDenomination100GRN -= objCount.count100;
      this.BanknotesDenomination200GRN -= objCount.count200;
	  return objCount
    }

    //=======================================================
    toString() {
      return `<p>5грн: ${this.BanknotesDenomination5GRN} шт</p><p>10грн: ${this.BanknotesDenomination10GRN} шт</p><p>20грн: ${this.BanknotesDenomination20GRN} шт</p><p>50грн: ${this.BanknotesDenomination50GRN} шт</p><p>100грн: ${this.BanknotesDenomination100GRN} шт</p><p>200грн: ${this.BanknotesDenomination200GRN} шт</p>`;
    }
  }
  //===================================================
  try {
    const newBankomat = new TBankomat(20, 20, 20, 20, 20, 20);
    document.write(newBankomat);
    const minAmounts = newBankomat.getMinAmounts();
    document.write(`<p>Мінімальна доступна сума: ${minAmounts}грн</p>`);
    const maxAmounts = newBankomat.getMaxAmounts();
    document.write(`<p>Максимальна доступна сума: ${maxAmounts}грн</p>`);
    const userAmount = parseInt(
      prompt(
        `Введіть суму, яку ви хочете зняти.\nМінімальна купюра в банкоматі: ${minAmounts}грн\nМаксимальна доступна сума, яку може видати банкомат: ${maxAmounts}грн`
      )
    );
    newBankomat.withdrawingCertainAmount(userAmount);
    document.write(`<p>Знято: ${userAmount} грн</p>`);
    document.write(newBankomat);
  } catch (error) {
    document.write(error.message);
  }
}


