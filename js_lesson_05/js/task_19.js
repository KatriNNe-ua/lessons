"use strict";

//Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

if (confirm("Почати тестування?")) {
  const numberWeeks = parseInt(prompt(`Введіть кількість тижнів`,''));
  let totalProfit = 0;
  for (let week = 1; week <= numberWeeks; week++) {
	  let weekProfit = 0;
    for (let day = 1; day <= 7; day++) {
      const profitDay = parseInt(
        prompt(`Введіть прибуток магазину за ${day} день ${week} тижня`,'')
      );
      weekProfit += profitDay;
    }

    totalProfit += weekProfit;
    document.write(`Величина прибутку за ${week} тиждень= ${weekProfit} <br>`);
  }
  document.write(`Загальна величина прибутку= ${totalProfit}`);
}
