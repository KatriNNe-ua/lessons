"use strict";

//Задача 4. Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm("Почати тестування?")) {
  function getArrUser(lengthArr) {
    const userArr = [];
    for (let i = 0; i < lengthArr; i++) {
      const userNum = parseFloat(prompt(`Ввeдіть ${i+1} число для масива`));
      userArr.push(userNum);
    }
    return userArr;
  }

  function displayNumMoreCompare(arr, numCompare = 100) {
	let numMoreCompare = false
    for (let el of arr) {
      if (el > numCompare){
		document.write(`<p>${el}</p>`);
		numMoreCompare = true
	  } 
    }
	if(numMoreCompare === false) throw new Error(`Відсутні числа, що більше за ${numCompare}`)
  }

  const userLengthArr = parseInt(prompt("Ввeдіть кількість елементів"));
try{
  const userArr = getArrUser(userLengthArr);
  displayNumMoreCompare(userArr);
} catch(error){
	document.write(error.message)
}
}
