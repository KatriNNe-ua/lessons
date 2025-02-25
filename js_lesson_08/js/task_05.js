"use strict";

//Задача 5 Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
if (confirm("Почати тестування?")) {
  function getCountStudentGrades(arrGrades, grades) {
    let countGrades = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      if (arrGrades[i] === grades) countGrades++;
    }
    return countGrades;
  }
  function getAverageGrades(arrGrades) {
    let sum = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      sum += arrGrades[i];
    }
    return sum / arrGrades.length;
  }

  function getCountBelowAverage(arrGrades) {
    let countBelowAverage = 0;
	const averageGrades =  getAverageGrades(arrGrades)
    for (let i = 0; i < arrGrades.length; i++) {
      if (arrGrades[i] < averageGrades) countBelowAverage++;
    }
    return countBelowAverage;
  }

  const listStudentGrades = [2,3,5,4,3,2,5,3,2,5,5,5];

  // 1)	двійок
  let countTwo = getCountStudentGrades(listStudentGrades, 2);
  // 2)	кількість хороших оцінок (добре, відмінно);
  let countGood =
    getCountStudentGrades(listStudentGrades, 4) +
    getCountStudentGrades(listStudentGrades, 5);
  // 3)	кількість оцінок, які нижче середнього.
  let countBelowAverage = getCountBelowAverage(listStudentGrades);

  document.write(
    `Кількість двійок: ${countTwo}<br> кількість хороших оцінок (добре, відмінно): ${countGood}<br> кількість оцінок, які нижче середнього: ${countBelowAverage}`
  );
}
