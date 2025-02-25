"use strict";

//Задача 2.  Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.
//Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm("Почати тестування?")) {
  const numberVisitorsWeek = [40, 10, 47, 10, 90, 14, 90];

  // номери днів, протягом яких кількість відвідувачів була меншою за 20;
  function getDayVisitorLessThanNum(arrNum, num) {
    const newArrDay = [];
    for (let i = 0; i < arrNum.length; i++) {
      if (arrNum[i] < num) newArrDay.push(i + 1);
    }
    return newArrDay;
  }

  const dayLess20 = getDayVisitorLessThanNum(numberVisitorsWeek, 20);

  document.write(
    `Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${dayLess20}<br>`
  );

  // номери днів, коли кількість відвідувачів була мінімальною;

  function getMinVisitorsDay(arrNum) {
    const minVisitorsDay = [];
    let min = Infinity;
    for (let i = 0; i < arrNum.length; i++) {
      if (arrNum[i] < min) min = arrNum[i];
    }
    for (let i = 0; i < arrNum.length; i++) {
      if (arrNum[i] === min) minVisitorsDay.push(i + 1);
    }
    return minVisitorsDay;
  }

  const minVisitorsDay = getMinVisitorsDay(numberVisitorsWeek);
  document.write(
    `Номери днів, коли кількість відвідувачів була мінімальною: ${minVisitorsDay}<br>`
  );

  // номери днів, коли кількість відвідувачів була мaксимальною;

  function getMaxVisitorsDay(arrNum) {
    const maxVisitorsDay = [];
    let max = -Infinity;
    for (let i = 0; i < arrNum.length; i++) {
      if (arrNum[i] > max) max = arrNum[i];
    }
    for (let i = 0; i < arrNum.length; i++) {
      if (arrNum[i] === max) maxVisitorsDay.push(i + 1);
    }
    return maxVisitorsDay;
  }

  const maxVisitorsDay = getMaxVisitorsDay(numberVisitorsWeek);
  document.write(
    `Номери днів, коли кількість відвідувачів була мaксимальною: ${maxVisitorsDay}<br>`
  );

  // загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

  function getTotalVisitorsDays(arrNum, firstDay, lastDay) {
    let sum = 0;
    firstDay--;
    lastDay--;
    for (let i = firstDay; i <= lastDay; i++) {
      sum += arrNum[i];
    }
    return sum;
  }
  const sumVisitorsWorksDay = getTotalVisitorsDays(
    numberVisitorsWeek,
    1,
    5
  );
  const sumVisitorsWeekends = getTotalVisitorsDays(
    numberVisitorsWeek,
    6,
    7
  );

  document.write(
    `Загальна кількість клієнтів у робочі днi: ${sumVisitorsWorksDay}<br>Загальна кількість клієнтів на вихідних: ${sumVisitorsWeekends}`
  );
}
