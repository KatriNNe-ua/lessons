"use strict";

//Задача 7.  Дано масив студентів (піб, курс, факультет).
//  Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

function getNumberDifferentFaculties(studentsList) {
  const listFaculties = studentsList.map((el) => el.faculty);
  const resSet = new Set(listFaculties);
  return resSet.size;
}

function getNumberStudentsEachCourse(studentsList){
	const resMap = new Map()
	for (const student of studentsList) {
		if(resMap.has(student.course)) resMap.set(student.course, resMap.get(student.course) + 1);
		else resMap.set(student.course, 1)
  }
  return resMap
}

const studentsList = [
  { name: "Іванов Іван", course: 1, faculty: "ФІТ" },
  { name: "Петров Петро", course: 2, faculty: "ФІТ" },
  { name: "Сидорова Анна", course: 1, faculty: "ФЕМ" },
  { name: "Коваленко Марія", course: 3, faculty: "ФІТ" },
  { name: "Бондаренко Олег", course: 2, faculty: "ФЕМ" },
];

const countFaculties = getNumberDifferentFaculties(studentsList);
document.write(`Kількість різних факультетів: ${countFaculties} шт.`);
console.log(countFaculties);




const numberStudentsCourse = getNumberStudentsEachCourse(studentsList);
console.log(numberStudentsCourse );
numberStudentsCourse.forEach((num, course) => {
  document.write(`<br>на ${course} курсі - ${num} студент(и/ів)`);
});