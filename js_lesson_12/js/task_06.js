"use strict";

//Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук
// визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
if (confirm("Почати тестування?")) {
  function createArrName(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const userInputName = prompt(`Введіть ім'я #${i + 1}`);
      arr.push(userInputName);
    }
    return arr;
  }

  function getSortАscendingArrByLength(arr) {
    for (let i = 1; i < arr.length; i++) {
      let k = i - 1;
      let key = arr[i];
      while (k >= 0 && arr[k].length > key.length) {
        arr[k + 1] = arr[k];
        k--;
      }
      arr[k + 1] = key;
    }
    return arr;
  }

  function getIndexNameLenghtFromArr(arrSort, nameLength) {
    let start = 0;
    let end = arrSort.length - 1;
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (arrSort[middle].length === nameLength) return middle;
      else if (arrSort[middle].length < nameLength) start = middle + 1;
      else if (arrSort[middle].length > nameLength) end = middle - 1;
    }
    return -1;
  }
  //const namesList = createArrName(8)
  const namesList = ["Olga", "Ilona", "Maksim", "Andrew", "Inna", "Oleksandr"];
  document.write(`<p>Початковий масив: ${namesList}</p>`);
   const namesListCopy = [...namesList];
   const namesListSort = getSortАscendingArrByLength(namesListCopy);
   document.write(`<p>Відсортований масив: ${namesListSort}</p>`);
  const nameLength = 5;
  const resInd = getIndexNameLenghtFromArr(namesListSort, nameLength);
  if (resInd >= 0)
    document.write(
      `<p>Ім'я довжиною ${nameLength} символів розташоване під індексом: ${resInd}</p>`
    );
  else document.write(
    `<p>Ім'я довжиною ${nameLength} символів у списку відсутнє</p>`
  );
}