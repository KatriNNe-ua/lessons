"use strict";

//Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). 
// Визначити, який буде рік через N місяців.
if (confirm("Почати тестування?")) {
	function getYearWillBeInSomeMonths({month, year}, numMonth){
	return year + Math.floor((month - 1 + numMonth)/12)
	}
 const data={
	day: 20,
	month: 12,
	year: 2025
 }
 const numMonth = 4
 const yearAfterNumMonth = getYearWillBeInSomeMonths(data, numMonth);
 document.write(yearAfterNumMonth)
}
