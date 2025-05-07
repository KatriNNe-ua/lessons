"use strict";

//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
function checkStringsContainNumbers(arrStr) {
  const res = [];
  for (const str of arrStr) {
    if (/\d/.test(str)) res.push(str);
  }
  return res;
}
function displayTest1(selectorIdInitial, selectorIdRes, arrStr) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = arrStr.join(", ");

  const res = checkStringsContainNumbers(arrStr);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res.length !== 0 ? res.join(", ") : "Відсутні рядки, у яких є цифри";
  }
}

const arrStr = ["hello", "world123", "test45", "no_digits", "1111"];
displayTest1("initial1", "test1", arrStr);

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
function checkStringsNotContainNumbers(arrStr) {
  const res = [];
  for (const str of arrStr) {
    if (!/\d/.test(str)) res.push(str);
    //if(!/[0-9]/.test(str)) res.push(str);
  }
  return res;
}
function displayTest2(selectorIdInitial, selectorIdRes, arrStr) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = arrStr.join(", ");

  const res = checkStringsNotContainNumbers(arrStr);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res.length !== 0 ? res.join(", ") : "Відсутні рядки, у яких немає цифр";
  }
}

const arrStr2 = ["hello", "world123", "test45", "no_digits", "1111"];
displayTest2("initial2", "test2", arrStr2);

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
function checkStringsContainVowels(arrStr) {
  const res = [];
  for (const str of arrStr) {
    if (/[aeiou]/i.test(str)) res.push(str);
  }
  return res;
}
function displayTest3(selectorIdInitial, selectorIdRes, arrStr) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = arrStr.join(", ");

  const res = checkStringsContainVowels(arrStr);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res.length !== 0
        ? res.join(", ")
        : "Відсутні рядки, у яких є голосні літери";
  }
}

const arrStr3 = ["sky", "hEllO", "rhythm", "apple"];
displayTest3("initial3", "test3", arrStr3);

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
function checkStringsNotContainVowels(arrStr) {
  const res = [];
  for (const str of arrStr) {
    if (!/[aeiou]/i.test(str)) res.push(str);
  }
  return res;
}
function displayTest4(selectorIdInitial, selectorIdRes, arrStr) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = arrStr.join(", ");

  const res = checkStringsNotContainVowels(arrStr);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res.length !== 0
        ? res.join(", ")
        : "Відсутні рядки, у яких немає голосних літер";
  }
}

const arrStr4 = ["sky", "hEllO", "rhythm", "apple"];
displayTest4("initial4", "test4", arrStr4);

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
function checkStringsContainSomeNum(arrStr, num1, num2) {
  const res = [];
  const regexp = new RegExp(`(${num1}|${num2})`);
  for (const str of arrStr) {
    if (regexp.test(str)) res.push(str);
  }
  return res;
}
function displayTest5(selectorIdInitial, selectorIdRes, arrStr, num1, num2) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = arrStr.join(", ");

  const res = checkStringsContainSomeNum(arrStr, num1, num2);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res.length !== 0
        ? res.join(", ")
        : `Рядки з цифрами ${num1} або ${num2} відсутні`;
  }
}

const arrStr5 = ["test1", "number23", "hello7", "digit13"];
displayTest5("initial5", "test5", arrStr5, 1, 3);

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
function checkAllNumInText(str) {
  return str.match(/\d+/g);
}
function displayTest6(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = checkAllNumInText(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res !== null ? res.join(", ") : "У рядку немає чисел";
  }
}

const someStr6 = "I have 2 cats and 15 dogs in 2023.";
displayTest6("initial6", "test6", someStr6);

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
function checkAllPunctuationMarks(str) {
  //const res = str.match(/[.,:;!?()"\[\]{}\-]/g);
  return str.match(/\p{P}/gu);
}
function displayTest7(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = checkAllPunctuationMarks(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res !== null ? res.join(" ") : "Знаків пунктуації не знайдено";
  }
}

const someStr7 = "Hello, world! How are you? It is nice. $";
displayTest7("initial7", "test7", someStr7);

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
function checkAllComponentsSeparatedPunctuationMarks(str) {
  return str.split(/[,.;!?:]\s+/);
}
function displayTest8(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = checkAllComponentsSeparatedPunctuationMarks(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res.length !== 0
        ? res.join("---")
        : "Немає складових, розділених розділовими знаками.";
  }
}

const someStr8 = "apple, one banana; 2 orange. grape! kiwi";
displayTest8("initial8", "test8", someStr8);

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy
// (dd- день, mm- місяць, yyyy- рік).
function checkContainsDateSomeFormat(str) {
  return /\d{2}\.\d{2}\.\d{4}/.test(str);
}
function displayTest9(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = checkContainsDateSomeFormat(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res
      ? "Так, рядок тексту містить дату у форматі dd.mm.yyyy"
      : "Ні, рядок тексту не містить дату у форматі dd.mm.yyyy";
  }
}

const someStr9 = "Meeting on 15.03.2023 at 10:00.";
displayTest9("initial9", "test9", someStr9);

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
function countNumberInString(str, numDigit) {
  const regexp = new RegExp(`\\b\\d{${numDigit}}\\b`, "g");
  return str.match(regexp);
}
function displayTest10(selectorIdInitial, selectorIdRes, str, numDigit) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = countNumberInString(str, numDigit);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res !== null ? res.length : "Двоцифрові числа у рядку відсутні";
  }
}

const someStr10 = "I saw 12 birds, 5 cats, and 99 dogs in 2023.";
displayTest10("initial10", "test10", someStr10, 2);

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки
//  (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
function findBankCardNumber(str) {
  return str.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g);
}
function displayTest11(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = findBankCardNumber(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res !== null
        ? res.join(", ")
        : "Рядок тексту не є номером банківської картки";
  }
}

const someStr11 =
  "My card is 4142-3433-2323-3434, another is 1234-5678-9012-3456, invalid 123-456-789.";
displayTest11("initial11", "test11", someStr11);
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
function checkContainsDomainGov(str) {
  return /\.gov\b/.test(str);
}
function displayTest12(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = checkContainsDomainGov(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res ? "Так, сайт є урядовим" : "Ні, сайт не урядовий";
  }
}

const someStr12 = "https://www.nasa.gov/about";
displayTest12("initial12", "test12", someStr12);

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
function selectAllYearsAfter2021(str){
return str.match(/\b(20[3-9]\d|202[2-9]|2[1-9]\d\d|[3-9]\d\d\d)\b/g);
}
function displayTest13(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = selectAllYearsAfter2021(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText =
      res !== null ? res.join(", ") : "Відсутні роки після 2021 року";
  }
}

const someStr13 = "Events in 2020, 2022, 2023, and 2025. 3721";
displayTest13("initial13", "test13", someStr13);

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном
//  з України (починаєтсья на «+38»)
function checkPhoneNumberFromUkraine(str){
return /^\+38/.test(str)
}
function displayTest14(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = checkPhoneNumberFromUkraine(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res
      ? "Так, цей номер телефону з України"
      : "Ні, цей номер телефону не з України";
  }
}

const someStr14 = "+380501234567";
displayTest14("initial14", "test14", someStr14);

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.
//   Замінити пробіл на дефіс.
function replaceSpaceWithHyphen(str){
	return str.replace(/\s/g, "-")
}
function displayTest15(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = replaceSpaceWithHyphen(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res
  }
}

const someStr15 = "Іван Петренко";
displayTest15("initial15", "test15", someStr15);

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік».
//  Отримати рядкове представлення дати у форматі «день/місяць/рік»
function changeDateFormat(str) {
  return str.replace(/\./g, "/");
}
function displayTest16(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = changeDateFormat(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res;
  }
}

const someStr16 = "15.03.2023";
displayTest16("initial16", "test16", someStr16);

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»).
//  Визначити, чи  є це день вихідним

function isWeekend(str) {
  return /^(0|6|sun|sat)$/i.test(str)
}
function displayTest17(selectorIdInitial, selectorIdRes, str) {
  const spanInitial = document.getElementById(selectorIdInitial);
  if (spanInitial) spanInitial.innerText = str;

  const res = isWeekend(str);
  const resCnt = document.getElementById(selectorIdRes);
  if (resCnt) {
    resCnt.innerText = res
      ? "вихідний день"
      : "робочий день";
  }
}

const someStr17 = "sun";
displayTest17("initial17", "test17", someStr17);

