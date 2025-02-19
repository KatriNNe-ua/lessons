"use strict";

//Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання,
// куди переходимо при кліку на зображення 
//(тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
if (confirm("Почати тестування?")) {
  function showBanner(img, title, link) {
	document.write(`<a href="${link}"><img src="${img}"><h2>${title}</h2></a>`);
  }


showBanner('https://cdn.pixabay.com/photo/2020/07/29/08/33/coffee-5447420_1280.jpg', 'Coffee', '#')
}

