"use strict";

//Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук
// визначити, чи є у масиві ім’я «Olga» і під яким індексом.
if (confirm("Почати тестування?")) {
  function createArrName(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const userInputName = prompt(`Введіть ім'я #${i + 1}`);
      arr.push(userInputName);
    }
    return arr;
  }
  function getSortАscendingArr(arr) {
    for (let i = 1; i < arr.length; i++) {
      let k = i - 1;
      let key = arr[i];
      while (k >= 0 && arr[k] > key) {
        arr[k + 1] = arr[k];
        k--;
      }
      arr[k + 1] = key;
    }
    return arr;
  }

  function getIndexNameFromArr(arrSort, nameSearch) {
    let start = 0;
    let end = arrSort.length - 1;
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (arrSort[middle] === nameSearch) return middle;
      else if (arrSort[middle] < nameSearch) start = middle + 1;
      else if (arrSort[middle] > nameSearch) end = middle - 1;
    }
    return -1;
  }
  //const namesList = createArrName(8)
  const namesList = ["Olga", "Katya", "Petro", "Andrew", "Inna", "Tanya"];
  document.write(`<p>Початковий масив: ${namesList}</p>`);
  const namesListCopy = [...namesList];
  const namesListSort = getSortАscendingArr(namesListCopy);
  document.write(`<p>Відсортований масив в алфавітному порядку: ${namesListSort}</p>`);
  const nameSearch = "Olga";
  const resInd = getIndexNameFromArr(namesListSort, nameSearch);
  if (resInd >= 0)
    document.write(
      `<p>Ім'я ${nameSearch} розташоване під індексом: ${resInd}</p>`
    );
  else document.write(`<p>Ім'я ${nameSearch} у списку відсутнє</p>`);
}
