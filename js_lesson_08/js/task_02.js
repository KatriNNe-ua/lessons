"use strict";

//Задача 2.  Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.
//Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm("Почати тестування?")) {
  const numberVisitorsWeek = [40, 10, 47, 10, 90, 14, 90];
  const dayLess20 = [];
  // номери днів, протягом яких кількість відвідувачів була меншою за 20;
  for (let i = 0; i < numberVisitorsWeek.length; i++) {
    if (numberVisitorsWeek[i] < 20) dayLess20.push(i + 1);
  }
  document.write(
    `Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${dayLess20}<br>`
  );

  // номери днів, коли кількість відвідувачів була мінімальною;
  const minVisitors = [];
  let min = numberVisitorsWeek[0];
  for (let i = 0; i < numberVisitorsWeek.length; i++) {
    if (numberVisitorsWeek[i] < min) min = numberVisitorsWeek[i];
  }
  for (let i = 0; i < numberVisitorsWeek.length; i++) {
    if (numberVisitorsWeek[i] === min) minVisitors.push(i + 1);
  }
  document.write(
    `Номери днів, коли кількість відвідувачів була мінімальною: ${minVisitors}<br>`
  );

  // номери днів, коли кількість відвідувачів була мaксимальною;
  const maxVisitors = [];
  let max = numberVisitorsWeek[0];
  for (let i = 0; i < numberVisitorsWeek.length; i++) {
    if (numberVisitorsWeek[i] > max) max = numberVisitorsWeek[i];
  }
  for (let i = 0; i < numberVisitorsWeek.length; i++) {
    if (numberVisitorsWeek[i] === max) maxVisitors.push(i + 1);
  }
  document.write(
    `Номери днів, коли кількість відвідувачів була мaксимальною: ${maxVisitors}<br>`
  );

  // загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
  let sumVisitorsWorksDay = 0;
  let sumVisitorsWeekends = 0;
  for (let i = 0; i < numberVisitorsWeek.length; i++) {
    if (i < 5) sumVisitorsWorksDay += numberVisitorsWeek[i];
    else sumVisitorsWeekends += numberVisitorsWeek[i];
  }

  document.write(
    `Загальна кількість клієнтів у робочі днi: ${sumVisitorsWorksDay}<br>Загальна кількість клієнтів на вихідних: ${sumVisitorsWeekends}`
  );
}
