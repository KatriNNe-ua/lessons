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
      let idex = Math.floor(Math.random() * countCell );
      if (newArr[idex] === 0) newArr[idex] = 1;
      else k--;
    }
    return newArr;
  }
  const userNumberCells = parseInt(
    prompt("Введіть кількість клітинок для морського бою")
  );
  let userCountShip = parseInt(prompt("Введіть кількість кораблів"));

  const fieldNavalBattle = getArrNavalBattle(userNumberCells, userCountShip)
alert(fieldNavalBattle);
let userNumCell
do {
  userNumCell = parseInt(
    prompt(`Введіть номер клітинки від 1 до ${userNumberCells}`)
  );
  if (fieldNavalBattle[userNumCell - 1]) {
    userCountShip--;
    alert(`Вітаю! Ви потопили корабель. Залишилось ${userCountShip} кораблів`);
  } else alert(`Промах. Залишилось ${userCountShip} кораблів`);
} while (userCountShip );

document.write('Гра закінчилась. Ви потопили усі кораблі.')
}
