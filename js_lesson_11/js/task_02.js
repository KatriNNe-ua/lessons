"use strict";

//Задача 2.Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

if (confirm("Почати тестування?")) {
  // function getProfitStoresDuringWeek(totalNumStores){
  // 	const profit =[]
  // 	for (let numStores = 0; numStores < totalNumStores; numStores++) {
  // 		const profitStories =[]
  //     for (let dayWeek = 0; dayWeek < 7; dayWeek++) {

  //       const userProfitStores = parseFloat(
  //         prompt(
  //           `Введіть прибуток магазина №${numStores + 1} за день №${dayWeek + 1}`
  //         )
  //       );
  // 	  profitStories.push(userProfitStores);
  //     }
  // 	profit.push(profitStories);
  //   }
  //   return profit
  // }

  //const profitStoresDuringWeek = getProfitStoresDuringWeek(5)
  //===================================================================================
  const profitStoresDuringWeek = [
    [450, 72, 13, 89, 34, 67, 91], // Магазин 1
    [23, 56, 78, 12, 900, 41, 33], // Магазин 2
    [87, 19, 65, 43, 28, 94, 50], // Магазин 3
    [66, 31, 82, 170, 59, 73, 88], // Магазин 4
    [14, 96, 38, 75, 22, 47, 60], // Магазин 5
  ];

  document.write(profitStoresDuringWeek.join("<br>"));
  //====================================================================================
  // 1) загальний прибуток кожного масиву за тиждень;
  //----------1
  // function getSumTotalProfitWeek(arrProfit) {
  //   const resSum = [];
  //   for (const shop of arrProfit) {
  //     const sum = shop.reduce((acc, profit) => acc + profit, 0);
  //     resSum.push(sum);
  //   }
  //   return resSum;
  // }
  //-----------2
  function getSumTotalProfitWeek(arrProfit) {
    return arrProfit.map((shop) =>
      shop.reduce((sum, profit) => sum + profit, 0)
    );
  }
  const sumTotalProfitWeek = getSumTotalProfitWeek(profitStoresDuringWeek);
  document.write(
    `<p>1) Загальний прибуток кожного магазину за тиждень:<br>
	магазин №1: ${sumTotalProfitWeek[0]}<br>
	магазин №2: ${sumTotalProfitWeek[1]}<br>
	магазин №3: ${sumTotalProfitWeek[2]}<br>
	магазин №4: ${sumTotalProfitWeek[3]}<br>
	магазин №5: ${sumTotalProfitWeek[4]}<br>
	 </p>`
  );
  //====================================================================================
  // 2) загальний прибуток усіх магазинів по дням
  //(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
  function getSumTotalProfitAllStoresByDay(arrProfit) {
    const resSum = new Array(7).fill(0);
    for (let storesNum = 0; storesNum < arrProfit.length; storesNum++) {
      for (let dayNum = 0; dayNum < 7; dayNum++) {
        resSum[dayNum] += arrProfit[storesNum][dayNum];
      }
    }
    return resSum;
  }
  const sumTotalProfitAllStoresByDay = getSumTotalProfitAllStoresByDay(
    profitStoresDuringWeek
  );
  document.write(
    `<p>2) Загальний прибуток усіх магазинів по дням: <br>
	 понеділок - ${sumTotalProfitAllStoresByDay[0]}<br>
	 вівторок - ${sumTotalProfitAllStoresByDay[1]}<br>
	 середа - ${sumTotalProfitAllStoresByDay[2]}<br>
	 четвер - ${sumTotalProfitAllStoresByDay[3]}<br>
	 п'ятниця - ${sumTotalProfitAllStoresByDay[4]}<br>
	 субота - ${sumTotalProfitAllStoresByDay[5]}<br>
	 неділя - ${sumTotalProfitAllStoresByDay[6]}<br>
	 </p>`
  );
  //====================================================================================
  // 3) загальний прибуток за робочі дні
  //-----------1
  //   function getSumTotalProfitWorkingDays(arrProfit) {
  //     let sum = 0;
  //     for (const shop of arrProfit) {
  //       sum += shop.reduce((acc, el, ind) => (ind < 5 ? acc + el : acc), 0);
  //     }
  //     return sum;
  //   }
  //--------------2
  function getSumTotalProfitWorkingDays(arrProfit) {
    return arrProfit.reduce(
      (sum, shop) =>
        sum + shop.reduce((acc, el, ind) => (ind < 5 ? acc + el : acc), 0),
      0
    );
  }
  const sumTotalProfitWorkingDays = getSumTotalProfitWorkingDays(
    profitStoresDuringWeek
  );
  document.write(
    `<p>3) Загальний прибуток за робочі дні: ${sumTotalProfitWorkingDays}</p>`
  );
  //====================================================================================
  // 4) загальний прибуток за вихідні дні
  function getSumTotalProfitweekend(arrProfit) {
    return arrProfit.reduce(
      (sum, shop) =>
        sum + shop.reduce((acc, el, ind) => (ind >= 5 ? acc + el : acc), 0),
      0
    );
  }
  const sumTotalProfitweekend = getSumTotalProfitweekend(
    profitStoresDuringWeek
  );
  document.write(
    `<p>4) Загальний прибуток за вихідні дні: ${sumTotalProfitweekend}</p>`
  );
  //====================================================================================
  // 5) максимальний прибуток за середу
  function getMaxProfitDay(arrProfit, numDay) {
    let max = -Infinity;
    for (const shop of arrProfit) {
      if (shop[numDay - 1] > max) max = shop[numDay - 1];
    }
    return max;
  }
  const maxProfitWednesday = getMaxProfitDay(profitStoresDuringWeek, 3);
  document.write(
    `<p>5) Максимальний прибуток за середу: ${maxProfitWednesday}</p>`
  );
  //====================================================================================
  // 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
  function getListValuesGreaterThanNum(arrProfit, numCompare) {
    return arrProfit.flat().filter((num) => num > numCompare);
  }
  const listGreater200 = getListValuesGreaterThanNum(
    profitStoresDuringWeek,
    200
  );
  document.write(
    `<p>6) Загальний список (одновимірний масив) зі значенням, які що більші за 200:<br> ${listGreater200}</p>`
  );

  //====================================================================================
  // 7) відсортувати кожен тиждень за зростанням

  function getArrSortWeekAscending(arrProfit) {
    arrProfit.forEach((shop) => shop.sort((a, b) => a - b)); //якщо б потрібно створити новий масив, то використала метод map()
    return arrProfit;
  }

  const profitStoresDuringWeek2 = JSON.parse(
    JSON.stringify(profitStoresDuringWeek)
  );
  getArrSortWeekAscending(profitStoresDuringWeek2);
  document.write(
    `<p>7) Відсортувати кожен тиждень за зростанням:<br> ${profitStoresDuringWeek.join(
      "<br>"
    )}</p>`
  );
  //====================================================================================
  // 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
  // тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

  function getArrSortWeekDescendingMaxElement(arrProfit) {
    arrProfit.sort((shop1, shop2) => Math.max(...shop2) - Math.max(...shop1));
    return arrProfit;
  }

  const profitStoresDuringWeek3 = JSON.parse(
    JSON.stringify(profitStoresDuringWeek)
  );
  getArrSortWeekDescendingMaxElement(profitStoresDuringWeek3);
  document.write(
    `<p>8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
 тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків:<br> ${profitStoresDuringWeek2.join(
   "<br>"
 )}</p>`
  );

  //====================================================================================
  // 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку
  //(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми,
  // на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

  function getArrSortWeekDescendingSumElement(arrProfit) {
    arrProfit.sort(
      (shop1, shop2) =>
        shop2.reduce((acc, el) => acc + el) -
        shop1.reduce((acc, el) => acc + el)
    );
    return arrProfit;
  }

  const profitStoresDuringWeek4 = JSON.parse(
    JSON.stringify(profitStoresDuringWeek)
  );
  getArrSortWeekDescendingSumElement(profitStoresDuringWeek4);
  document.write(
    `<p>9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).:<br> ${profitStoresDuringWeek3.join(
      "<br>"
    )}</p>`
  );
}
