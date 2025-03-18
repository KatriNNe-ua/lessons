"use strict";

//Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
if (confirm("Почати тестування?")) {
  function getCombinationsForDancing(arrListBoys, arrListGirls) {
    if (arrListBoys.length === 0 || arrListGirls.length === 0) return [[]];
    const resCombinations = [];
    const selectBoy = arrListBoys[0];
    const changeArrListBoys = arrListBoys.slice(1);
    for (let girlNum = 0; girlNum < arrListGirls.length; girlNum++) {
      const selectGirl = arrListGirls[girlNum];
      const changeArrListGirls = [
        ...arrListGirls.slice(0, girlNum),
        ...arrListGirls.slice(girlNum + 1),
      ];
      const currentArr = getCombinationsForDancing(
        changeArrListBoys,
        changeArrListGirls
      );
      for (const subCurrentArr of currentArr) {
        resCombinations.push([
          `${selectBoy} - ${selectGirl}`,
          ...subCurrentArr,
        ]);
      }
    }
    return resCombinations;
  }
  const listBoys = ["Mark", "Ivan"];
  const listGirls = ["Inna", "Tanya"];
  const combinations = getCombinationsForDancing(listBoys, listGirls);
  document.write(
    `Список хлопців: ${listBoys}<br>Список дівчат: ${listGirls}<br>Можливі комбінації для танців:<br><br>${combinations.join(
      "<br>"
    )}`
  );
}
