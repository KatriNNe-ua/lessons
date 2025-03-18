"use strict";

//Задача 3.  Виведіть всі можливі наступні комбінації ходів користувачів
// у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації
// (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято,
// і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли).
// Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

if (confirm("Почати тестування?")) {
  function getCombinationUserMovesInGameTicTacToe(arr, missingX, missingZero) {
    if (missingX === 0 && missingZero === 0)
      return [JSON.parse(JSON.stringify(arr))];

    const resCombination = [];

    for (let rowIdx = 0; rowIdx < arr.length; rowIdx++) {
      for (let colInd = 0; colInd < arr[rowIdx].length; colInd++) {
        if (arr[rowIdx][colInd] === " ") {
          if (missingZero > 0) {
            const arrCopy = JSON.parse(JSON.stringify(arr));
            arrCopy[rowIdx][colInd] = "0";
            const subCombination = getCombinationUserMovesInGameTicTacToe(
              arrCopy,
              missingX,
              missingZero - 1
            );
            resCombination.push(...subCombination);
          }
          if (missingX > 0) {
            const arrCopy2 = JSON.parse(JSON.stringify(arr));
            arrCopy2[rowIdx][colInd] = "x";
            const subCombination2 = getCombinationUserMovesInGameTicTacToe(
              arrCopy2,
              missingX - 1,
              missingZero
            );

            resCombination.push(...subCombination2);
          }
          return resCombination;
        }
      }
    }
    return resCombination;
  }
  //=========================================================
  const game = [
    [" ", " ", " "],
    ["0", " ", "x"],
    ["x", "x", "0"],
  ];
  //===========================================================
  const missingZero =4- game.reduce(
    (count, row) =>
      count + row.reduce((acc, el) => (el === "0" ? acc + 1 : acc), 0),
    0
  );
  const missingX =5- game.reduce(
    (count, row) =>
      count + row.reduce((acc, el) => (el === "x" ? acc + 1 : acc), 0),
    0
  );
 
  //=========================================================
  const resCombination = getCombinationUserMovesInGameTicTacToe(
    game,
    missingX,
    missingZero
  );
  document.write(
    `${game.join(
      "<br>"
    )}<br><br>Kомбінації ходів користувачів:<br><br> ${resCombination
      .map((row) => row.join("<br>"))
      .join("<br><br>")}`
  );
  // console.log(countSpaces);
  // console.log(getCombinationUserMovesInGameTicTacToe(game, countSpaces));
}
