"use strict";

//Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде
// поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Прекладач». Виводимо для користувача опис
// цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати
// кількість вгаданих букв.

// apple – Червоний або зелений фрукт, росте на дереві.
// sun – Жовта зірка, яка дає світло та тепло.
// table – Меблі, на які можна ставити речі або їсти за ними.
// river – Вода, що тече в одному напрямку до моря або озера.
// book – Об'єкт із багатьма сторінками, у якому можна читати історії.

if (confirm("Почати тестування?")) {
  //================================================
  //функція з замиканням, яка видає по одній букві
  function getOneLetterOfWord(word) {
    let index = 0;
    function getLetter() {
      if (index < word.length) {
        return word[index++];
      } else return "";
    }
    return getLetter;
  }
  //=============================================================
  //функція для знаходження кількості вгаданих букв
  function getCountLettersGuessed(word, description) {
    let countLetter = 0;
    let trueLetter = getOneLetterOfWord(word);
    for (let i = 0; i < word.length; i++) {
      const questionLetter = prompt(
        `Опис: ${description}\n\nУ перекладі на англійську мову дане слово має ${
          word.length
        } букв(и)\n\nВведіть ${i + 1} букву перекладу цього слова.`
      );
      if (questionLetter === trueLetter()) {
        countLetter++;
      }
    }
    return countLetter;
  }
  //==============================================================
  //Функція для гри «Перекладач»
  function playGameTranslator(arrWord, arrDescription) {
    if (arrWord.length !== arrDescription.length)
      throw new Error(
        "Кількість слів не збігається з кількістю описів цих слів"
      );
    let totalCountLetter = 0;
    for (let i = 0; i < arrWord.length; i++) {
      totalCountLetter += getCountLettersGuessed(arrWord[i], arrDescription[i]);
    }
    return totalCountLetter;
  }
  //=====================================================================
  //Введення даних
  let arrDescription = [
    "Жовта зірка, яка дає світло та тепло.",
    "Об'єкт із багатьма сторінками, у якому можна читати історії.",
    "Червоний або зелений фрукт,що росте на дереві.",
  ];
  const arrWord = ["sun", "book", "apple"];
  const numLetter = arrWord.reduce((acc, word) => acc + word.length, 0);

  const resGuessLetter = playGameTranslator(arrWord, arrDescription);
  //=====================================================================
  //Виведення результатів
  try {
    document.write(
      `Було вгадано ${resGuessLetter} букв із ${numLetter}<br><br>Загадані слова:<br> ${arrWord.join(
        "<br>"
      )} `
    );
  } catch (error) {
    document.write(error.message);
  }
}
