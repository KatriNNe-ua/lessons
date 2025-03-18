"use strict";

//Задача 1.  Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі
// можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3]
//можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
if (confirm("Почати тестування?")) {
  function getGeneratingAllSubsetsArr(arr) {
    if (arr.length === 0) return [[]];
    const resSubsets = [];
    const selectNum = arr[0];
    const changeArr = arr.slice(1);
    const newSubsets = getGeneratingAllSubsetsArr(changeArr);
    for (const subsets of newSubsets) {
      resSubsets.push([...subsets]);
      resSubsets.push([selectNum, ...subsets]);
    }
    return resSubsets;
  }
  const numArr = [1, 2, 3];
  const resSubsets = getGeneratingAllSubsetsArr(numArr);
  document.write(
    `${numArr}<br>Підмножини масиву:<br><br>[${resSubsets.map((el)=>`[${el}]`)}]`
  );
  //console.log(getGeneratingAllSubsetsArr([1, 2, 3]));
}
