"use strict";

//Задача 8.Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.

function getCountNumberDifferentTemperature(temperatures) {
	const roundUpTemperatures = temperatures.map(t=>Math.ceil(t))
	const resSet = new Set(roundUpTemperatures);
	return resSet.size
}

function getCountEachReadingTemperature(temperatures){
	const resMap = new Map()
	for (const t of temperatures) {
		if (resMap.has(t)) resMap.set(t, resMap.get(t) + 1);
    else resMap.set(t, 1);
  } 
  return resMap
}

const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
const numTemp = getCountNumberDifferentTemperature(temperatures);
document.write(`Kількість різних показів: ${numTemp}`);
console.log(numTemp);

const countEachTemperature = getCountEachReadingTemperature(temperatures);
countEachTemperature.forEach((num, t) => {
  document.write(`<br>Kількість входжень ${t}: ${num} `);
});
console.log(countEachTemperature);