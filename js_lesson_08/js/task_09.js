"use strict";

//Задача 9.  Морський бій. Користувач вводить кількість клітинок одновимірного масиву
// та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі
// у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста,
// якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки,
// куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
if (confirm("Почати тестування?")) {
  function getArrNavalBattle(countCell, countShip) {
    const newArr = [];
    for (let i = 0; i < countCell; i++) {
      newArr.push(0);
    }
    for (let k = 0; k < countShip; k++) {
      let idex = Math.floor(Math.random() * countCell);
      if (newArr[idex] === 0) newArr[idex] = 1;
      else k--;
    }
    return newArr;
  }

  function playGameNavalBattle(countCell, countShip) {
    const fieldNavalBattle = getArrNavalBattle(countCell, countShip);
	alert(fieldNavalBattle);
    let userNumCell;
    do {
      userNumCell = parseInt(
        prompt(`Введіть номер клітинки від 1 до ${countCell}`)
      );
      if (fieldNavalBattle[userNumCell - 1]) {
        countShip--;
        fieldNavalBattle[userNumCell - 1] = 0;
        alert(`Вітаю! Ви потопили корабель. Залишилось ${countShip} кораблів`);
      } else alert(`Промах. Залишилось ${countShip} кораблів`);
    } while (countShip);
    return "Гра закінчилась. Ви потопили усі кораблі.";
  }

  const userNumberCells = parseInt(
    prompt("Введіть кількість клітинок для морського бою")
  );
  const userCountShip = parseInt(prompt("Введіть кількість кораблів"));
  const gameNavalBattle = playGameNavalBattle(userNumberCells, userCountShip);
  document.write(gameNavalBattle);
}
