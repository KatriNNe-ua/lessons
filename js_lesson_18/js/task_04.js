"use strict";

//Задача 4.  Наперед задано у скрипті масив зі списком бажань. 
// Після завантаження сторінки випадковим чином вибираються 3 і 
// відображаються у окремих div (їх треба створити і додати на сторінку)
function getRandomNum(min, max){
	if(min>max) [min, max] = [max, min]
	return min+Math.floor(Math.random()*(max-min+1))
}
function getWish(wishList, count = 3) {
  const el = document.querySelector(".task")
  if(el){
  for (let i = 0; i < count; i++) {
    const randInd = getRandomNum(0, wishList.length - 1);
    const divWish = document.createElement("div");
    divWish.className = "wish";
	divWish.innerText = wishList[randInd]
	el.after(divWish)
  }
  }
}
	const wishList = [
    "Подорожувати в Японію",
    "Навчитися грати на гітарі",
    "Прочитати 30 книжок за рік",
    "Купити велосипед",
    "Зробити ремонт у кімнаті",
    "Запустити власний блог",
    "Вивчити англійську на рівні B2",
    "Піти на курс з малювання",
    "Кожного дня займатися спортом",
    "Стати волонтером в організації",
    "Накопичити на ноутбук",
    "Навчитися готувати нові страви",
    "Відвідати концерт улюбленого гурту",
    "Проводити менше часу в телефоні",
    "Створити свою настільну гру",
  ];
window.onload= function(){
getWish(wishList)
}



