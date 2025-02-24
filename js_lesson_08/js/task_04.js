"use strict";

//Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;
if (confirm("Почати тестування?")) {
  const listCarNumbers = [
    "А392Л",
    "В8173ТР",
    "Г20МН",
    "З7642ФЩ",
    "І1298ЮЯ",
    "П4507ЦП",
    "А62ЄА",
    "Р3015ШЩ",
    "Л842К",
    "Т5739БТ",
  ];

  let countBeginLetterA = 0;
  let countFirstLastLettersMatch = 0;
  let countMore5Characters = 0;
  for (let i = 0; i < listCarNumbers.length; i++) {
    // •	починаються на букву «А»;
    //if (listCarNumbers[i].slice(0, 1) === "А") countBeginLetterA++;
    if (listCarNumbers[i][0] === "А") countBeginLetterA++;
    // •	перша і остання літери співпадають;
    if (
      listCarNumbers[i][0] === listCarNumbers[i][listCarNumbers[i].length - 1]
    )
      countFirstLastLettersMatch++;
    // •	складаються з більше ніш 5 символів;
    if (listCarNumbers[i].length > 5) countMore5Characters++;
  }
  document.write(
    `Кількість номерів, які починаються на букву «А»: ${countBeginLetterA}.<br>Кількість номерів, у яких перша і остання літери співпадають: ${countFirstLastLettersMatch}.<br>Кількість номерів які складаються з більше ніш 5 символів: ${countMore5Characters}. `
  );
}
