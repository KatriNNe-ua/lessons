"use strict";

//Задача 5.  Відобразити таблицю 3*4 з випадковими числами
//  (її треба динамічно створити і вставити на сторінку)
function getRandomNum(min, max) {
  if (min > max) [min, max] = [max, min];
  return min + Math.floor(Math.random() * (max - min + 1));
}
function getTable(rowNum, colomnNum, min=0, max=10){
	const table = document.createElement("table")
	table.className = "table"
	  const el = document.querySelector(".task");
	  if(el){
			for (let indTr = 0; indTr < rowNum; indTr++) {
        const row = document.createElement("tr");
        table.append(row);
        for (let indTd = 0; indTd  < colomnNum; indTd++) {
          const colomn = document.createElement("td");
          row.append(colomn);
          colomn.innerText = getRandomNum(min, max);
        }
      }
el.after(table);
	  }
}
getTable(3,4);