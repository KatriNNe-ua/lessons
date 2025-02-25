"use strict";

//Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
if (confirm("Почати тестування?")) {
  function getTotalSumPayments(arrPayments, firstMonth, lastMonth, step = 1) {
    let sum = 0;
    firstMonth--;
    lastMonth--;
    for (let i = firstMonth; i <= lastMonth; i += step) {
      sum += arrPayments[i];
    }
    return sum;
  }
  
  const listPayments = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

  // за весь рік;
  const sumYear = getTotalSumPayments(listPayments, 1, 12);
  document.write(`сумарнa кількість грошей за весь рік: ${sumYear}<br>`);

  // у першій половині року;
  const sumYearFirstHalf = getTotalSumPayments(listPayments, 1, 6);
  document.write(
    `сумарнa кількість грошей у першій половині року: ${sumYearFirstHalf}<br>`
  );

  // у другій половині року;
  const sumYearSecondHalf = getTotalSumPayments(listPayments, 7, 12);
  document.write(
    `сумарнa кількість грошей у другій половині року: ${sumYearSecondHalf}<br>`
  );

  // за літо;
  const sumSummer = getTotalSumPayments(listPayments, 6, 8);
  document.write(`сумарнa кількість грошей за літо: ${sumSummer}<br>`);

  // за ІІ квартал;
  const sumSecondQuarter = getTotalSumPayments(listPayments, 4, 6);
  document.write(
    `сумарнa кількість грошей за ІІ квартал: ${sumSecondQuarter}<br>`
  );

  // за парні місяці (з парними номерами);
  const sumEvenMonth = getTotalSumPayments(listPayments, 2, 12, 2);
  document.write(
    `сумарнa кількість грошей  за парні місяці: ${sumEvenMonth}<br>`
  );
  // за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
  const sumBeginningSeason = getTotalSumPayments(listPayments, 3, 12, 3);
  document.write(
    `сумарнa кількість грошей за місяці, які є початковими у сезоні : ${sumBeginningSeason}<br>`
  );
}
