"use strict";

//Задача 5 Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
if (confirm("Почати тестування?")) {
  const listStudentGrades = [3, 8, 7, 10, 11, 7, 9, 3, 6, 9, 11];
  let countDouble = 0;
  let countGood = 0;
  let countBelowAverage = 0;
  for (let i = 0; i < listStudentGrades.length; i++) {
    if (listStudentGrades[i] <= 3) countDouble++;
    if (listStudentGrades[i] >= 7) countGood++;
    if (listStudentGrades[i] < 7) countBelowAverage++;
  }
  // let countBelowAverage = listStudentGrades.length - countGood;
  document.write(
    `Кількість двійок: ${countDouble}<br> кількість хороших оцінок (добре, відмінно): ${countGood}<br> кількість оцінок, які нижче середнього: ${countBelowAverage}`
  );
}
