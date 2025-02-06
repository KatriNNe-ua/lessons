"use strict";

//Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.


  document.write(` <table>
    <tr>`);
	for(let num = 1; num<=7;num++){
		  document.write(`  <td>${num}</td>`);
	}
	  document.write(`  </tr>
  </table>`);