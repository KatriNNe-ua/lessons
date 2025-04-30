"use strict";

//Задача 4. Користувач задає місяць навчання учня (перевіряти чи є числом,
//  чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100).
//  Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі).
//  Обробку усіх помилок зробити з використанням відповідних класів.

//--------------1------------------------------------------------------------------
class IsNotNumberError extends Error {
  constructor() {
    super("Введені значення мають бути числами");
    this.name = "IsNotNumberError";
  }
}

class IsHoliday extends Error {
  constructor() {
    super("У ці місяці — канікули");
    this.name = "IsHoliday";
  }
}

class IsNotSelector extends Error {
  constructor() {
    super("Не вказано селектор, у який слід виводити результат");
    this.name = "IsNotSelector";
  }
}

class CorrectRating {
  constructor(idInputMonth, idInputRating, idBtn, levelBadGrade = 50) {
    this.levelBadGrade = levelBadGrade;
    this.idInputMonth = idInputMonth;
    this.idInputRating = idInputRating;
    this.idBtn = idBtn;
  }

  takeValue() {
    const inputMonthValue = parseInt(
      document.getElementById(this.idInputMonth).value
    );
    this.inputMonthValue = inputMonthValue;
    if (isNaN(this.inputMonthValue)) throw new IsNotNumberError();
    if (this.inputMonthValue <= 0 || this.inputMonthValue > 12)
      throw new RangeError("Номер місяця має бути від 1 до 12");
    if (
      (this.inputMonthValue >= 6 && this.inputMonthValue <= 8) ||
      this.inputMonthValue === 1
    )
      throw new IsHoliday();

    const inputRatingValue = parseInt(
      document.getElementById(this.idInputRating).value
    );
    this.inputRatingValue = inputRatingValue;
    if (isNaN(this.inputRatingValue)) throw new IsNotNumberError();
    if (this.inputRatingValue <= 0 || this.inputRatingValue > 100)
      throw new RangeError("Оцінка має бути від 1 до 100");
  }

  isCorrectRating() {
    let res;
    if (this.inputRatingValue > this.levelBadGrade)
      res = "Вам не потрібно виправляти оцінку";
    else if (this.inputMonthValue !== 5 && this.inputMonthValue !== 12) {
      res = "Так, ви ще можете виправити оцінку";
    } else res = "На жаль, ви вже не можете виправити оцінку";
    return res;
  }
  showResult() {
    try {
      this.takeValue();
      this.divEl.innerText = this.isCorrectRating();
      this.divEl.style.color = "white";
    } catch (err) {
      let resError;
      if (err instanceof RangeError) {
        console.log(err.name);
        console.log(err.message);
        resError = err.message;
      } else if (err instanceof IsNotNumberError) {
        console.log(err.name);
        console.log(err.message);
        resError = err.message;
      } else if (err instanceof IsHoliday) {
        console.log(err.name);
        console.log(err.message);
        resError = err.message;
      } else {
        console.log(err.name);
        console.log(err.message);
      }
      this.divEl.innerText = resError;
      this.divEl.style.color = "red";
    }
  }

  displayCanCorrectRating(selector) {
    const divEl = document.createElement("p");
    this.divEl = divEl;
    const btnEl = document.getElementById(this.idBtn);
    btnEl.addEventListener("click", this.showResult.bind(this));

    if (selector) {
      selector.append(this.divEl);
    } else throw new IsNotSelector();

	 return divEl; 
  }
 
}

try {
  const cnt = document.querySelector(".answer");

  const correctRating = new CorrectRating("numMonth", "rating", "btn");
  correctRating.displayCanCorrectRating(cnt);
} catch (err) {
  if (err instanceof IsNotSelector) {
    console.log(err.message);
  } else {
    console.log(err.name);
    console.log(err.message);
  }
}

//--------------2-------------------------------------------------------------------

// class IsNotNumberError extends Error {
//   constructor() {
//     super("Введене значення має бути числом");
//     this.name = "IsNotNumberError";
//   }
// }

// class IsHoliday extends Error {
//   constructor() {
//     super("У ці місяці — канікули");
//     this.name = "IsHoliday";
//   }
// }

// function displayCanCorrectGrade(levelBadGrade = 50) {
//   const userMonth = parseInt(prompt("Введіть місяь навчання."));
//   if (isNaN(userMonth)) throw new IsNotNumberError();
//   if (userMonth <= 0 || userMonth > 12)
//     throw new RangeError("Номер місяця має бути від 1 до 12");
//   if ((userMonth >= 6 && userMonth <= 8) || userMonth === 1)
//     throw new IsHoliday();

//   const userGrade = parseInt(prompt("Введіть оцінку"));
//   if (isNaN(userGrade)) throw new IsNotNumberError();
//   if (userGrade <= 0 || userGrade > 100)
//     throw new RangeError("Оцінка має бути від 1 до 100");

//   if (userGrade > levelBadGrade)
//     document.write("Вам не потрібно виправляти оцінку");
//   else if (userMonth !== 5 && userMonth !== 12) {
//     document.write("Так, ви ще можете виправити оцінку");
//   } else document.write("На жаль, ви вже не можете виправити оцінку");
// }

// try {
//   displayCanCorrectGrade();
// } catch (err) {
//   if (err instanceof RangeError) {
//     console.log(err.name);
//     document.write(err.message);
//   } else if (err instanceof IsNotNumberError) {
//     console.log(err.name);
//     document.write(err.message);
//   } else if (err instanceof IsHoliday) {
//     console.log(err.name);
//     document.write(err.message);
//   } else {
//     console.log(err.message);
//   }
// }
