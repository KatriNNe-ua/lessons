"use strict";

//Задача 6. Дано інформацію про відвідувачів деякого сайту
//  (для кожного відвідувача зберігається логін).
//  Підрахувати для кожного клієнта кількість відвідувань.

function countNumberVisitsEachClient(loginList){
	const resMap = new Map()
	for (const client of loginList) {
		if(resMap.has(client)){
			resMap.set(client, resMap.get(client) +1)
		} else resMap.set(client, 1)
  }
  return resMap
}

const loginList = [
  "user1",
  "user2",
  "user1",
  "user3",
  "user2",
  "user1",
  "user4",
];

const countNumberVisits = countNumberVisitsEachClient(loginList);
console.log(countNumberVisits);

countNumberVisits.forEach((num, login) => {
  document.write(`<br>${login} - ${num}`);
});

