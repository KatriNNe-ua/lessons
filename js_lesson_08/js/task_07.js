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
  const listPayments = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

  // за весь рік;
  let sumYear = 0;
  for (let i = 0; i < listPayments.length; i++) {
    sumYear += listPayments[i];
  }
  document.write(`сумарнa кількість грошей за весь рік: ${sumYear}<br>`);

  // у першій половині року;
  let sumYearFirstHalf = 0;
  const halfList = listPayments.length / 2;
  for (let i = 0; i < halfList; i++) {
    sumYearFirstHalf += listPayments[i];
  }
  document.write(
    `сумарнa кількість грошей у першій половині року: ${sumYearFirstHalf}<br>`
  );

  // у другій половині року;
  let sumYearSecondHalf = 0;
  const halfListSecond = Math.floor(listPayments.length / 2);
  for (let i = halfListSecond; i < listPayments.length; i++) {
    sumYearSecondHalf += listPayments[i];
  }
  document.write(
    `сумарнa кількість грошей у другій половині року: ${sumYearSecondHalf}<br>`
  );

  // за літо;
  let sumSummer = 0;
  for (let i = 5; i < 8; i++) {
    sumSummer += listPayments[i];
  }
  document.write(`сумарнa кількість грошей за літо: ${sumSummer}<br>`);

  // за ІІ квартал;
  let sumSecondQuarter = 0;
  for (let i = 3; i < 6; i++) {
    sumSecondQuarter += listPayments[i];
  }
  document.write(
    `сумарнa кількість грошей за ІІ квартал: ${sumSecondQuarter}<br>`
  );

  // за парні місяці (з парними номерами);
  let sumEvenMonth = 0;
  for (let i = 1; i < listPayments.length; i += 2) {
    sumEvenMonth += listPayments[i];
  }
  document.write(
    `сумарнa кількість грошей  за парні місяці: ${sumEvenMonth}<br>`
  );
  // за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
   let sumBeginningSeason = 0;
   for (let i = 2; i < listPayments.length; i += 3) {
     sumBeginningSeason += listPayments[i];
   }
   document.write(
     `сумарнa кількість грошей за місяці, які є початковими у сезоні : ${sumBeginningSeason}<br>`
   );
}