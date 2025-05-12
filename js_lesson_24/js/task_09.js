"use strict";

//Задача 9.Дано два списки прізвищ студентів,
//  що відвідують гуртки з математики і історії.
//  Підрахувати скільки студентів з гуртка з історії також
// відвідують гурток з математики. Також підрахувати скільки всього студентів
// відвідують хоча б один гурток.

function getNumStudentsleastOneClub(list1, list2) {
  const resSet = new Set([...list1, ...list2]);
  return resSet.size;
}

function getNumStudentsFromSomeClubAlsoAttendOtherClub(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  return set1.intersection(set2).size;
}

const studentsListHist = [
  "Петров Петро",
  "Сидорова Анна",
  "Бондаренко Олег",
  "Мельник Сергій",
  "Ткаченко Юлія",
  "Романенко Ігор",
  "Захарченко Оксана",
  "Павленко Дмитро",
  "Кузьменко Олена",
  "Григоренко Тарас",
];
const studentsListMath = [
  "Іванов Іван",
  "Петров Петро",
  "Сидорова Анна",
  "Коваленко Марія",
  "Бондаренко Олег",
  "Мельник Сергій",
  "Кравченко Олена",
  "Шевченко Андрій",
  "Лисенко Наталія",
  "Гончаренко Віктор",
];

const numStudentsleastOneClub = getNumStudentsleastOneClub(
  studentsListHist,
  studentsListMath
);
document.write(
  `Kількість студентів, які відвідують хоча б один гурток: ${numStudentsleastOneClub} <br>`
);
console.log(numStudentsleastOneClub);

const numStudentsFromHistClubAlsoAttendMathClub =
  getNumStudentsFromSomeClubAlsoAttendOtherClub(
    studentsListHist,
    studentsListMath
  );

document.write(
  `Кількість студентів з гуртка з історії, які також відвідують гурток з математики: ${numStudentsFromHistClubAlsoAttendMathClub} <br>`
);

console.log(numStudentsFromHistClubAlsoAttendMathClub);
