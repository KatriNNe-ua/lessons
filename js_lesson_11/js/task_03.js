"use strict";

//Задача 3.Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується
// 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі
// кораблі або у користувача не закінчаться снаряди.

if (confirm("Почати тестування?")) {
  function createArrGameWith0(lengthRow, lengthColumn) {
    const newArr = [];
    for (let rowInd = 0; rowInd < lengthRow; rowInd++) {
      const row = new Array(lengthColumn).fill(0);
      newArr.push(row);
    }
    return newArr;
  }
  const gameArr = createArrGameWith0(6, 6);

  let userShells = parseInt(prompt("Яку кількість снарядів Вам надати?", "10"));
  let numShip = 5;
  let count = 0;
  while (count < numShip) {
    const rowInd = Math.floor(Math.random() * gameArr.length);
    const columnInd = Math.floor(Math.random() * gameArr[0].length);
    if (gameArr[rowInd][columnInd] === 0) {
      gameArr[rowInd][columnInd] = 1;
      count++;
    }
  }
  document.write(`<p>${gameArr.join("<br>")}</p>`);
  //=================================================================================
  while (numShip > 0 && userShells > 0) {
    let userRowInd;
    let userСolumnInd;
    do {
      userRowInd = parseInt(
        prompt(
          `Введіть координати пострілу в рядку: від 1 до ${gameArr.length}`
        )
      );
      userСolumnInd = parseInt(
        prompt(
          `Введіть координати пострілу у стовпці: від 1 до ${gameArr[0].length}`
        )
      );
    } while (
      userRowInd < 1 ||
      userRowInd > gameArr.length ||
      userСolumnInd < 1 ||
      userСolumnInd > gameArr[0].length
    );

    userShells--;
    if (gameArr[userRowInd - 1][userСolumnInd - 1] === 1) {
      numShip--;
      gameArr[userRowInd - 1][userСolumnInd - 1] = 0;
      alert(
        `Вітаю. Ви потопили корабель. Залишилось ${numShip} кораблів та ${userShells} снарядів. `
      );
    } else
      alert(
        `Нажаль, ви не попали. Залишилось ${numShip} кораблів та ${userShells} снарядів.`
      );
  }
  if (numShip === 0) document.write("Вітаю! Ви потопили усі кораблі");
  else if (userShells === 0 && numShip > 0)
    document.write(
      `Закінчилися снаряди. Ви програли, залишилось ${numShip} кораблів`
    );
}
