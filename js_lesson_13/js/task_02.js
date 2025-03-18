"use strict";

//Задача 2.  Дано масив імен спортсменів. Розробити програму для виведення усіх можливих
//результатів змагань (списки імен у відповідності до місць, які вони займуть).

if (confirm("Почати тестування?")) {
  function outputAllPossibleCompetitionResultsOfAthlete(listAthlete) {
    if (listAthlete.length === 0) return [[]];
    const resCompetition = [];
    for (let athleteInd = 0; athleteInd < listAthlete.length; athleteInd++) {
      const selectAthlete = listAthlete[athleteInd];
      const changeListAthlete = [
        ...listAthlete.slice(0, athleteInd),
        ...listAthlete.slice(athleteInd + 1),
      ];
      const currentListAthlete =
        outputAllPossibleCompetitionResultsOfAthlete(changeListAthlete);
      for (const subArr of currentListAthlete) {
        resCompetition.push([selectAthlete, ...subArr]);
      }
    }
    return resCompetition;
  }
  const listAthlete = ["Mark", "Ivan", "Inna"];
  const resCompetition =
    outputAllPossibleCompetitionResultsOfAthlete(listAthlete);

  document.write(
    `Масив імен спортсменів: ${listAthlete}<br><br>Можливі результати змагань:<br> ${resCompetition.join(
      "<br>"
    )}`
  );

  //console.log(outputAllPossibleCompetitionResultsOfAthlete(listAthlete));
}