"use strict";
//Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати
// до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку),
//хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm("Почати тестування?")) {
  function getAverageGrade(arrGrades) {
    let sum = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      sum += arrGrades[i];
    }
    const averageGrade = sum / arrGrades.length;

    return averageGrade;
  }

  function getCategory(arrGrades) {
    let res;
    let double = false;
    let good = false;
    let triple = false;

    for (let i = 0; i < arrGrades.length; i++) {
      if (arrGrades[i] <= 3) double = true;
      else if (arrGrades[i] <= 6) triple = true;
      else if (arrGrades[i] <= 9) good = true;
    }

    if (double) res = "двійочник";
    else if (triple) res = "трійочник";
    else if (good) res = "хорошист";
    else res = "відмінник";
    return res;
  }

  const gradesSubjects = [8, 6, 8, 8, 10, 11, 9, 7];
  const averageGradeSubjects = getAverageGrade(gradesSubjects).toFixed(2);
  const category = getCategory(gradesSubjects)
  document.write(`Середній бал: ${averageGradeSubjects}.<br> Учень відноситься до категорії: ${category}`);
}
