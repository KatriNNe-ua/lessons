"use strict";

// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті

function displayMinutesUserOnSite(selectorID) {
  const start = new Date();
  const el = document.getElementById(selectorID);
  if (el) {
    setInterval(() => {
      const end = new Date();
      const res = (end - start) / 60000;
      el.innerText = `${Math.floor(res)} хв`;
    }, 60000);
  }
}

displayMinutesUserOnSite("test1");

// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.
function checkProcedureStillOngoing(e, duringProcedureMinutes, selectorIdRes) {
  const nowTime = new Date();
  const now = nowTime.getHours() * 60 + nowTime.getMinutes();
  const startTime = e.target.value;
  let res;
  if (startTime) {
    const hour = parseInt(startTime.slice(0, 2));
    const minute = parseInt(startTime.slice(3));
    const minuteInput = hour * 60 + minute;

    if (now < minuteInput) res = "Процедура ще не розпочалася";
    else if (now - minuteInput > duringProcedureMinutes)
      res = "Процедура вже закінчилась";
    else res = "Процедура ще триває";
  }
  const resDiv = document.getElementById(selectorIdRes);
  if (resDiv) resDiv.innerText = res;
}

function isProcedureStillOngoing(
  duringProcedureMinutes,
  selectorIdInput,
  selectorIdRes
) {
  const inputDiv = document.getElementById(selectorIdInput);

  if (inputDiv) {
    inputDiv.addEventListener("change", (e) => {
      checkProcedureStillOngoing(e, duringProcedureMinutes, selectorIdRes);
    });
  }
}

isProcedureStillOngoing(30, "time", "test2");

// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)

function getLeftTimeWorkingDay(
  endHourWorkingDay,
  endMinuteWorkingDay,
  selectorID
) {
  const el = document.getElementById(selectorID);
  if (el) {
    const nowTime = new Date();
    let res;
    if (endHourWorkingDay < nowTime.getHours()) res = "Робочий день закінчився";
    else {
      let hourLeft = endHourWorkingDay - nowTime.getHours();
      let minutesLeft = endMinuteWorkingDay - nowTime.getMinutes();
      if (minutesLeft < 0) {
        hourLeft -= 1;
        minutesLeft = 60 + minutesLeft;
      }
      res = `До кінця робочого дня залишилося: ${hourLeft
        .toString()
        .padStart(2, "0")} год ${minutesLeft.toString().padStart(2, "0")} хв`;
    }
    el.innerText = res;
  }
}

getLeftTimeWorkingDay(17, 0, "test3");

// Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і
// час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)

function checkDateInCurrentWeek(e, selectorIdRes) {
  const userDate = e.target.value;
  if (userDate) {
    const userTimestamp = Date.parse(userDate);

    const now = new Date();

    let day = now.getDay();
    if (day === 0) day = 7;

    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(now.getDate() - (day - 1));

    const end = new Date();
    end.setHours(23, 59, 59, 999);
    end.setDate(end.getDate() + 7 - day);

    let res;
    if (userTimestamp < start.getTime())
      res = "Вказана дата менша за початок поточного тижня";
    else if (userTimestamp >= start.getTime() && userTimestamp <= end.getTime())
      res = "Вказана дата і час знаходиться у межах поточного тижня";
    else res = "Вказана дата більша за кінець поточного тижня";

    const resDiv = document.getElementById(selectorIdRes);
    if (resDiv) resDiv.innerText = res;
  }
}

function isDateInCurrentWeek(selectorIdRes, selectorIdInput) {
  const inputDiv = document.getElementById(selectorIdInput);

  if (inputDiv) {
    inputDiv.addEventListener("change", (e) => {
      checkDateInCurrentWeek(e, selectorIdRes);
    });
  }
}

isDateInCurrentWeek("test4", "date-time");

// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,
//   скільки хвилин залишилось до початку робочого дня (початок о 8.00).

function getLeftMinutesStartWorkingDay(
  startHourWorkingDay,
  startMinuteWorkingDay,
  selectorID
) {
  const el = document.getElementById(selectorID);
  if (el) {
    const nowTime = new Date();
    let res;
    if (startHourWorkingDay < nowTime.getHours()) res = "Вітаємо!!!";
    else {
      let hourLeft = startHourWorkingDay - nowTime.getHours();
      let minutesLeft = startMinuteWorkingDay - nowTime.getMinutes();
      const leftMinute = hourLeft * 60 + minutesLeft;
      res = `${leftMinute} хвилин залишилось до початку робочого дня`;
    }
    el.innerText = res;
  }
}

getLeftMinutesStartWorkingDay(8, 0, "test5");

// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
function getTimeInCity(selectorID, timeZone) {
  const el = document.getElementById(selectorID);
  if (el) {
    setInterval(() => {
      const time = new Date();
      time.setTime(time.getTime() + timeZone * 3600000);
      el.innerText = `${time.getUTCHours().toString().padStart(2, "0")}:${time
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}:${time.getUTCSeconds().toString().padStart(2, "0")}`;
    }, 1000);
  }
}

getTimeInCity("london", 1);
getTimeInCity("paris", 2);
getTimeInCity("sydney", 11);

// Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік).
//  Знайти найстаршого студента

function getCorrectStringFormat(str) {
  let res = "";
  const year = str.slice(6);
  const month = str.slice(3, 5);
  const day = str.slice(0, 2);
  res = year + "-" + month + "-" + day;
  return res;
}

function findOldestStudent(selectorID, listStudents) {
  const el = document.getElementById(selectorID);
  if (el) {
    let maxOld = Infinity;
    let res;
    for (let i = 0; i < listStudents.length; i++) {
      const birthDate = getCorrectStringFormat(listStudents[i].birthDate);
      const birthTime = Date.parse(birthDate);
      if (birthTime < maxOld) {
        maxOld = birthTime;
        res = listStudents[i].name;
      }
    }
    el.innerText = res;
  }
}

const listStudents = [
  { name: "Олег", birthDate: "15.03.2000" },
  { name: "Марія", birthDate: "22.07.1998" },
  { name: "Іван", birthDate: "10.11.2001" },
  { name: "Анна", birthDate: "05.04.1997" },
  { name: "Петро", birthDate: "30.09.1999" },
];
findOldestStudent("test7", listStudents);

// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач
//  зробив рух мишкою.

function displaySecondUserOnSite(selectorID) {
  const start = new Date();
  const el = document.getElementById(selectorID);
  if (el) {
    document.body.onmousemove = function () {
      const end = new Date();
      const res = end.getTime() - start.getTime();
      el.innerText = `${Math.floor(res / 1000)} сек`;
      document.body.onmousemove = null;
    };
  }
}

displaySecondUserOnSite("test8");

// Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів
// (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.

function checkDetermineLeave(e, selectorIdRes, durationVacationDay) {
  const startDate = e.target.value;
  if (startDate) {
    const start = Date.parse(startDate);
    const end = start + durationVacationDay * 3600000 * 24;

    const now = Date.now();

    let res;
    if (now < start) res = "Відпустка ще не почалася";
    else if (now >= start && now <= end) res = "Триває відпустка";
    else res = "Відпустка закінчилась";

    const resDiv = document.getElementById(selectorIdRes);
    if (resDiv) resDiv.innerText = res;
  }
}

function isDetermineLeave(selectorIdRes, selectorIdInput, durationVacationDay) {
  const inputDiv = document.getElementById(selectorIdInput);

  if (inputDiv) {
    inputDiv.addEventListener("change", (e) => {
      checkDetermineLeave(e, selectorIdRes, durationVacationDay);
    });
  }
}

isDetermineLeave("test9", "date", 200);

// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів
// придатності. Визначити чи є він придатним на даний момент.
function checkExpirationDate(selectorIdRes, selectorIdDate, selectorIdNum) {
  const inputDiv = document.getElementById(selectorIdDate);
  const inputDivNum = document.getElementById(selectorIdNum);

  if (!inputDiv || !inputDivNum) return;

  const infoDate = inputDiv.value;
  const num = parseInt(inputDivNum.value);

  if (isFinite(num) && num > 0 && infoDate) {
    const start = Date.parse(infoDate);
    const end = start + num * 3600000 * 24;
    const now = Date.now();
    let res;
    if (now > end) res = "Йогурт не придатний";
    else if (now >= start && now <= end) res = "Йогурт придатний";
    else res = "Йогурт ще не виготовили";

    const resDiv = document.getElementById(selectorIdRes);
    if (resDiv) resDiv.innerText = res;
  }
}

function isExpirationDate(
  selectorIdRes,
  selectorIdDate,
  selectorIdNum,
  selectorIdCnt
) {
  const cnt = document.getElementById(selectorIdCnt);
  if (cnt) {
    cnt.addEventListener("change", () => {
      checkExpirationDate(selectorIdRes, selectorIdDate, selectorIdNum);
    });
  }
}

isExpirationDate("test10", "date2", "num-day", "cnt");

// Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування
// бульбашкою і  вставкою

class ComparisonSort {
  constructor(length, min, max) {
    this.lengthArr = length;
    this.min = min;
    this.max = max;
  }
  createArr() {
    const arr = [];
    for (let i = 0; i < this.lengthArr; i++) {
      let num =
        this.min + Math.floor(Math.random() * (this.max - this.min + 1));
      arr.push(num);
    }
    this.arr = arr;
    return arr;
  }

  isDuringBubbleSortArr() {
    const arrCopy = this.arr.slice();
    const start = new Date();
    let endInd = arrCopy.length;
    let change;
    do {
      change = false;
      for (let i = 1; i < endInd; i++) {
        if (arrCopy[i - 1] > arrCopy[i]) {
          change = true;
          const tmp = arrCopy[i - 1];
          arrCopy[i - 1] = arrCopy[i];
          arrCopy[i] = tmp;
        }
      }
      endInd--;
    } while (change);
    const end = new Date();
    return end - start;
  }

  isDuringInsertionSortArr() {
    const arrCopy = this.arr.slice();
    const start = new Date();
    for (let i = 1; i < arrCopy.length; i++) {
      let k = i - 1;
      let key = arrCopy[i];
      while (k >= 0 && arrCopy[k] > key) {
        arrCopy[k + 1] = arrCopy[k];
        k--;
      }
      arrCopy[k + 1] = key;
    }
    const end = new Date();
    return end - start;
  }

  getResult(selector) {
    this.createArr();
    const timeBubbleSort = this.isDuringBubbleSortArr();
    const timeInsertionSort = this.isDuringInsertionSortArr();
    if (selector) {
      let res;
      if (timeBubbleSort > timeInsertionSort)
        res = "сортування вставками/включенням (Insertion Sort)";
      else if (timeBubbleSort < timeInsertionSort)
        res = "пузиркове сортування (Bubble Sort)";
      else res = "методи сортують з однаковою швидкістю";

      selector.innerText = `Час Insertion Sort: ${timeInsertionSort} мілісекунд. Час Bubble Sort: ${timeBubbleSort} мілісекунд. Швидше виконує сортування: ${res}`;
    }
  }
}

const comparisonSort = new ComparisonSort(1000, 1, 800);

const cnt = document.getElementById("test12");
if (cnt) {
  comparisonSort.getResult(cnt);
}
